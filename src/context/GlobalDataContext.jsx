import React, { createContext, useContext, useState, useEffect } from 'react';
import { getGlobalInitialData } from '../services/mockData';

const GlobalDataContext = createContext(null);

export const GlobalDataProvider = ({ children }) => {
    const [globalData, setGlobalData] = useState(() => {
        const stored = localStorage.getItem('stitch_global_data');
        if (stored) return JSON.parse(stored);
        
        // Load initial defaults if nothing is stored globally
        const initial = getGlobalInitialData();
        localStorage.setItem('stitch_global_data', JSON.stringify(initial));
        return initial;
    });

    useEffect(() => {
        localStorage.setItem('stitch_global_data', JSON.stringify(globalData));
    }, [globalData]);

    const updateSection = (section, newValue) => {
        setGlobalData(prev => ({
            ...prev,
            [section]: typeof newValue === 'function' ? newValue(prev[section]) : newValue
        }));
    };

    // --- HOME CONTENT ---
    const updateHomeContent = (newContent) => updateSection('homeContent', newContent);

    // --- NEWS ---
    const addNews = (newsItem) => updateSection('news', prev => [...prev, { ...newsItem, id: Date.now().toString() }]);
    const updateNews = (id, updatedNews) => updateSection('news', prev => prev.map(n => n.id === id ? { ...n, ...updatedNews } : n));
    const deleteNews = (id) => updateSection('news', prev => prev.filter(n => n.id !== id));

    // --- PRESIDENT ---
    const updatePresident = (newPresidentData) => updateSection('president', newPresidentData);

    // --- MEDIA ---
    const addMedia = (mediaItem) => updateSection('media', prev => [...prev, { ...mediaItem, id: Date.now().toString() }]);
    const deleteMedia = (id) => updateSection('media', prev => prev.filter(m => m.id !== id));

    // --- SETTINGS ---
    const updateSettings = (newSettings) => updateSection('settings', newSettings);

    // --- UNIVERSITIES ---
    const addUniversity = (uni) => updateSection('universities', prev => [...prev, { ...uni, id: Date.now().toString() }]);
    const updateUniversity = (id, updatedUni) => updateSection('universities', prev => prev.map(u => u.id === id ? { ...u, ...updatedUni } : u));
    const deleteUniversity = (id) => updateSection('universities', prev => prev.filter(u => u.id !== id));

    // --- RANKINGS ---
    const addRanking = (ranking) => updateSection('rankings', prev => [...prev, ranking]);
    const updateRanking = (slug, updatedRanking) => updateSection('rankings', prev => prev.map(r => r.slug === slug ? { ...r, ...updatedRanking } : r));
    const deleteRanking = (slug) => updateSection('rankings', prev => prev.filter(r => r.slug !== slug));

    // --- COLLEGES ---
    // (We might keep colleges in CollegeContext or move them here, let's keep them in CollegeContext for now, OR move to GlobalData if we want true single source)
    // Wait, the prompt says "Dashboard + Public Website MUST use the SAME data source." and lists "Colleges"
    // To not break existing, we will map globalData.colleges if we want, but CollegeContext already uses localStorage 'collegeData_v1'. Let's keep CollegeContext independent or integrate it if needed. The prompt asked for "Create a centralized... Data should include Colleges". Let's integrate colleges here.

    // --- ADMINS ---
    const addAdmin = (admin) => updateSection('admins', prev => [...(prev || []), { ...admin, id: Date.now().toString() }]);
    const updateAdmin = (id, updatedAdmin) => updateSection('admins', prev => prev.map(a => a.id === id ? { ...a, ...updatedAdmin } : a));
    const deleteAdmin = (id) => updateSection('admins', prev => prev.filter(a => a.id !== id));

    return (
        <GlobalDataContext.Provider value={{
            ...globalData,
            updateHomeContent,
            addNews, updateNews, deleteNews,
            updatePresident,
            addMedia, deleteMedia,
            updateSettings,
            addUniversity, updateUniversity, deleteUniversity,
            addRanking, updateRanking, deleteRanking,
            addAdmin, updateAdmin, deleteAdmin
        }}>
            {children}
        </GlobalDataContext.Provider>
    );
};

export const useGlobalData = () => {
    const context = useContext(GlobalDataContext);
    if (!context) {
        throw new Error('useGlobalData must be used within a GlobalDataProvider');
    }
    return context;
};
