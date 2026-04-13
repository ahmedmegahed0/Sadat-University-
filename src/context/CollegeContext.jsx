import React, { createContext, useContext, useState, useEffect } from 'react';
import { getInitialCollegeData, saveCollegeData } from '../mock/collegeData';

const CollegeContext = createContext(null);

export const CollegeProvider = ({ children }) => {
    const [colleges, setColleges] = useState(getInitialCollegeData());

    useEffect(() => {
        saveCollegeData(colleges);
    }, [colleges]);

    // Internal helper to update a specific college's slice
    const updateCollegeSection = (collegeId, sectionName, updater) => {
        setColleges(prev => {
            const college = prev[collegeId];
            if (!college) return prev;
            return {
                ...prev,
                [collegeId]: {
                    ...college,
                    [sectionName]: updater(college[sectionName])
                }
            };
        });
    };

    // Colleges
    const addCollege = (college) => {
        setColleges(prev => ({
            ...prev,
            [college.id]: {
                ...college,
                departments: [],
                programs: [],
                staff: [],
                deanSection: {}
            }
        }));
    };

    const updateCollege = (id, updatedData) => {
        setColleges(prev => {
            if (!prev[id]) return prev;
            return {
                ...prev,
                [id]: { ...prev[id], ...updatedData }
            };
        });
    };

    const deleteCollege = (id) => {
        setColleges(prev => {
            const newState = { ...prev };
            delete newState[id];
            return newState;
        });
    };

    // Departments
    const addDepartment = (collegeId, newDept) => {
        updateCollegeSection(collegeId, 'departments', (depts) => [...depts, { ...newDept, id: Date.now().toString() }]);
    };
    const updateDepartment = (collegeId, deptId, updatedData) => {
        updateCollegeSection(collegeId, 'departments', (depts) => 
            depts.map(d => d.id === deptId ? { ...d, ...updatedData } : d)
        );
    };
    const deleteDepartment = (collegeId, deptId) => {
        updateCollegeSection(collegeId, 'departments', (depts) => depts.filter(d => d.id !== deptId));
    };

    // Programs
    const addProgram = (collegeId, newProg) => {
        updateCollegeSection(collegeId, 'programs', (progs) => [...progs, { ...newProg, id: Date.now().toString() }]);
    };
    const updateProgram = (collegeId, progId, updatedData) => {
        updateCollegeSection(collegeId, 'programs', (progs) => 
            progs.map(p => p.id === progId ? { ...p, ...updatedData } : p)
        );
    };
    const deleteProgram = (collegeId, progId) => {
        updateCollegeSection(collegeId, 'programs', (progs) => progs.filter(p => p.id !== progId));
    };

    // Staff
    const addStaff = (collegeId, newStaff) => {
        updateCollegeSection(collegeId, 'staff', (staff) => [...staff, { ...newStaff, id: Date.now().toString() }]);
    };
    const updateStaff = (collegeId, staffId, updatedData) => {
        updateCollegeSection(collegeId, 'staff', (staff) => 
            staff.map(s => s.id === staffId ? { ...s, ...updatedData } : s)
        );
    };
    const deleteStaff = (collegeId, staffId) => {
        updateCollegeSection(collegeId, 'staff', (staff) => staff.filter(s => s.id !== staffId));
    };

    // Dean Section
    const updateDeanSection = (collegeId, updatedData) => {
        setColleges(prev => {
            const college = prev[collegeId];
            if (!college) return prev;
            return {
                ...prev,
                [collegeId]: {
                    ...college,
                    deanSection: { ...college.deanSection, ...updatedData }
                }
            };
        });
    };

    return (
        <CollegeContext.Provider value={{
            colleges,
            addCollege,
            updateCollege,
            deleteCollege,
            addDepartment,
            updateDepartment,
            deleteDepartment,
            addProgram,
            updateProgram,
            deleteProgram,
            addStaff,
            updateStaff,
            deleteStaff,
            updateDeanSection
        }}>
            {children}
        </CollegeContext.Provider>
    );
};

export const useCollegeContext = () => {
    const context = useContext(CollegeContext);
    if (!context) {
        throw new Error('useCollegeContext must be used within a CollegeProvider');
    }
    return context;
};
