import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { getStudentAuth, loginMock as loginStudentMock, logoutMock as logoutStudentMock } from '../mock/student';
import { getAdminAuth, loginAdminMock, logoutAdminMock } from '../mock/admin';
import { getDoctorAuth, loginDoctorMock, logoutDoctorMock } from '../mock/doctor';

const AuthContext = createContext(null);

/**
 * Unified AuthContext that manages ALL user sessions (student, admin, super admin, doctor).
 * Persists across navigation and page refresh via localStorage.
 */
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userRole, setUserRole] = useState(null); // 'student' | 'admin' | 'SUPER_ADMIN' | 'doctor'
    const [isLoading, setIsLoading] = useState(true);

    // Restore session from localStorage on mount
    useEffect(() => {
        const adminUser = getAdminAuth();
        if (adminUser) {
            setUser(adminUser);
            setUserRole(adminUser.role === 'SUPER_ADMIN' ? 'SUPER_ADMIN' : 'admin');
            setIsLoading(false);
            return;
        }

        const doctorUser = getDoctorAuth();
        if (doctorUser) {
            setUser(doctorUser);
            setUserRole('doctor');
            setIsLoading(false);
            return;
        }

        const studentUser = getStudentAuth();
        if (studentUser) {
            setUser(studentUser);
            setUserRole('student');
            setIsLoading(false);
            return;
        }

        setIsLoading(false);
    }, []);

    const loginStudent = useCallback((email, password) => {
        const result = loginStudentMock(email, password);
        if (result.success) {
            setUser(result.user);
            setUserRole('student');
        }
        return result;
    }, []);

    const loginAdmin = useCallback((email, password) => {
        const result = loginAdminMock(email, password);
        if (result.success) {
            setUser(result.user);
            setUserRole(result.user.role === 'SUPER_ADMIN' ? 'SUPER_ADMIN' : 'admin');
        }
        return result;
    }, []);

    const loginDoctor = useCallback((email, password) => {
        const result = loginDoctorMock(email, password);
        if (result.success) {
            setUser(result.user);
            setUserRole('doctor');
        }
        return result;
    }, []);

    const logout = useCallback(() => {
        logoutAdminMock();
        logoutStudentMock();
        logoutDoctorMock();
        setUser(null);
        setUserRole(null);
    }, []);

    const isAuthenticated = !!user;
    const isStudent = userRole === 'student';
    const isAdmin = userRole === 'admin';
    const isSuperAdmin = userRole === 'SUPER_ADMIN';
    const isDoctor = userRole === 'doctor';

    // Derive display name
    const displayName = user
        ? (user.nameEn || user.name || user.email?.split('@')[0] || 'User')
        : null;

    // Derive avatar
    const avatar = user?.avatar || null;

    const currentCollegeId = user?.collegeId || null;

    return (
        <AuthContext.Provider value={{
            user,
            userRole,
            isLoading,
            isAuthenticated,
            isStudent,
            isAdmin,
            isSuperAdmin,
            isDoctor,
            displayName,
            avatar,
            currentCollegeId,
            loginStudent,
            loginAdmin,
            loginDoctor,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
