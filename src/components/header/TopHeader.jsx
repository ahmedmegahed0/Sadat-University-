import React from 'react';
import { Link } from 'react-router-dom';
import { useThemeContext } from '../../context/ThemeContext';
import logo from '../../assets/logo.webp';

export default function TopHeader({
    universityName = 'SADAT University',
    universityNameAr = 'جامعة السادات الذكية',
    logoImage = "logo.webp"
}) {
    const { isRtl, isDarkMode } = useThemeContext();

    return (
        <div className={`w-full py-3 sm:py-4 px-4 sm:px-6 lg:px-8 border-b-2 border-primary/20 transition-colors duration-300 ${isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-200' : 'bg-slate-50/80 backdrop-blur-sm text-slate-800'} shadow-sm`}>
            <div className={`mx-auto max-w-7xl flex items-center justify-between`}>

                {/* Logo and University Name (Start side: Left in LTR, Right in RTL) */}
                <Link to="/" className="flex items-center gap-3 sm:gap-4 hover:opacity-90 transition-opacity">
                    {logoImage ? (
                        <img
                            src={logo}
                            alt={isRtl ? universityNameAr : universityName}
                            className="h-10 w-auto sm:h-12 object-contain"
                        />
                    ) : (
                        <div className="text-primary flex items-center justify-center p-2 sm:p-2.5 bg-primary/10 rounded-xl shrink-0">
                            <span className="material-symbols-outlined text-3xl sm:text-4xl">school</span>
                        </div>
                    )}
                    <div className="flex flex-col">
                        <h1 className="text-lg sm:text-xl font-black leading-none tracking-tight text-slate-900 dark:text-white uppercase">
                            {isRtl ? universityNameAr : universityName}
                        </h1>
                        <p className="hidden xs:block text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-primary uppercase mt-1">
                            {isRtl ? 'منصة الجامعة' : 'University Platform'}
                        </p>
                    </div>
                </Link>

                {/* Optional info (End side: Right in LTR, Left in RTL) */}
                <div className="hidden sm:flex items-center gap-6 text-sm font-semibold text-slate-600 dark:text-slate-300">
                    <span className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
                        <span className="material-symbols-outlined text-lg">mail</span>
                        info@sadat.edu
                    </span>
                    <span className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer" dir="ltr">
                        <span className="material-symbols-outlined text-lg">call</span>
                        +20 (02) 1234 5678
                    </span>
                </div>

            </div>
        </div>
    );
}
