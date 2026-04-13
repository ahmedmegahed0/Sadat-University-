import React, { createContext, useContext, useState, useEffect } from 'react';
import { getAdminAuth, loginAdminMock, logoutAdminMock } from '../mock/admin';

const AdminAuthContext = createContext(null);

export const AdminAuthProvider = ({ children }) => {
    const [adminUser, setAdminUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const user = getAdminAuth();
        if (user) {
            setAdminUser(user);
        }
        setIsLoading(false);
    }, []);

    const login = (email, password) => {
        const result = loginAdminMock(email, password);
        if (result.success) {
            setAdminUser(result.user);
        }
        return result;
    };

    const logout = () => {
        logoutAdminMock();
        setAdminUser(null);
    };

    const currentCollegeId = adminUser ? adminUser.collegeId : null;
    const isSuperAdmin = adminUser ? adminUser.role === 'SUPER_ADMIN' : false;

    return (
        <AdminAuthContext.Provider value={{
            adminUser,
            currentCollegeId,
            isSuperAdmin,
            login,
            logout,
            isLoading
        }}>
            {children}
        </AdminAuthContext.Provider>
    );
};

export const useAdminAuth = () => {
    const context = useContext(AdminAuthContext);
    if (!context) {
        throw new Error('useAdminAuth must be used within an AdminAuthProvider');
    }
    return context;
};
