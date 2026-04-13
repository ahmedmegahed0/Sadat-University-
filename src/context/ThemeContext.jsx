import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
     
    const [themeMode, setThemeMode] = useState('gold'); // 'gold' | 'blue'
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isRtl, setIsRtl] = useState(false);

    useEffect(() => {
        // Apply dataset for blue/gold
        if (themeMode === 'blue') {
            document.documentElement.setAttribute('data-theme', 'blue');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
    }, [themeMode]);

    useEffect(() => {
        // Apply dark class
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    useEffect(() => {
        // Apply RTL
        document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    }, [isRtl]);

    const toggleThemeMode = (mode) => setThemeMode(mode);
    const toggleDark = () => setIsDarkMode(!isDarkMode);
    const toggleRtl = () => setIsRtl(!isRtl);

    return (
        <ThemeContext.Provider value={{ themeMode, toggleThemeMode, isDarkMode, toggleDark, isRtl, toggleRtl }}>
            {children}
        </ThemeContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useThemeContext = () => useContext(ThemeContext);
