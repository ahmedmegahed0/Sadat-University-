import React, { createContext, useContext, useState, useEffect } from 'react';
import { getInitialFacultyData, saveFacultyData } from '../services/facultyData';

const FacultyContext = createContext(null);

export const FacultyProvider = ({ children }) => {
    const [facultyList, setFacultyList] = useState(getInitialFacultyData);

    useEffect(() => {
        saveFacultyData(facultyList);
    }, [facultyList]);

    const updateFaculty = (id, updatedData) => {
        setFacultyList(prev => prev.map(f => f.id === id ? { ...f, ...updatedData } : f));
    };

    const addFaculty = (newFaculty) => {
        setFacultyList(prev => [...prev, { ...newFaculty, id: `fac-${Date.now()}` }]);
    };

    const deleteFaculty = (id) => {
        setFacultyList(prev => prev.filter(f => f.id !== id));
    };

    /**
     * Used exclusively by the doctor dashboard to update only their own profile.
     * Identical to updateFaculty but semantically scoped to self-edits.
     */
    const updateOwnProfile = (id, updatedData) => {
        setFacultyList(prev => prev.map(f => f.id === id ? { ...f, ...updatedData } : f));
    };

    return (
        <FacultyContext.Provider value={{ facultyList, updateFaculty, updateOwnProfile, addFaculty, deleteFaculty }}>
            {children}
        </FacultyContext.Provider>
    );
};

export const useFacultyContext = () => {
    const context = useContext(FacultyContext);
    if (!context) {
        throw new Error('useFacultyContext must be used within a FacultyProvider');
    }
    return context;
};
