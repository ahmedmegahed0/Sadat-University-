import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useThemeContext } from '../../context/ThemeContext';

export default function RankingDropdown({ isMobile, onCloseMenu }) {
    const [isOpen, setIsOpen] = useState(false);
    const { isRtl } = useThemeContext();
    const dropdownRef = useRef(null);
    const location = useLocation();

    const titleEn = "International Rankings";
    const titleAr = "التصنيفات الدولية";

    const rankings = [
        { path: '/rankings/qs-arab', labelEn: 'QS Arab Region', labelAr: 'تصنيف كيو إس للمنطقة العربية' },
        { path: '/rankings/webometrics', labelEn: 'Webometrics Ranking', labelAr: 'تصنيف ويبومتركس' },
        { path: '/rankings/scimago', labelEn: 'SCImago Ranking', labelAr: 'تصنيف سيماجو' },
        { path: '/rankings/shanghai', labelEn: 'Shanghai Ranking', labelAr: 'تصنيف شنغهاي' },
        { path: '/rankings/the', labelEn: 'THE Ranking', labelAr: 'تصنيف التايمز' },
    ];

    const isActive = rankings.some(r => location.pathname === r.path);

    useEffect(() => {
        function handleClickOutside(event) {
            if (!isMobile && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isMobile]);

    useEffect(() => {
        if (!isMobile) setIsOpen(false);
    }, [location.pathname, isMobile]);

    if (isMobile) {
        return (
            <div className="flex flex-col">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-colors outline-none focus:outline-none ${isActive || isOpen
                        ? 'bg-primary/10 text-primary'
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                        }`}
                >
                    {isRtl ? titleAr : titleEn}
                    <span className={`material-symbols-outlined text-lg transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                        expand_more
                    </span>
                </button>
                {isOpen && (
                    <div className={`flex flex-col mt-1 space-y-1 ${isRtl ? 'pr-4 border-r-2 border-primary/20 mr-2' : 'pl-4 border-l-2 border-primary/20 ml-2'}`}>
                        {rankings.map(ranking => (
                            <Link
                                key={ranking.path}
                                to={ranking.path}
                                onClick={() => {
                                    if (onCloseMenu) onCloseMenu();
                                }}
                                className={`px-4 py-2.5 rounded-lg text-sm transition-colors ${location.pathname === ranking.path
                                    ? 'text-primary font-bold bg-primary/5'
                                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary'
                                    }`}
                            >
                                {isRtl ? ranking.labelAr : ranking.labelEn}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="relative z-50" ref={dropdownRef} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center gap-1 text-sm font-bold transition-all hover:text-primary relative py-2 outline-none focus:outline-none ${isActive || isOpen
                    ? 'text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-t-full'
                    : 'text-slate-600 dark:text-slate-300'
                    }`}
            >
                {isRtl ? titleAr : titleEn}
                <span className={`material-symbols-outlined text-[16px] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    expand_more
                </span>
            </button>

            {/* Dropdown Menu */}
            <div
                className={`absolute ${isRtl ? 'right-0' : 'left-0'} top-[100%] mt-2 w-64 rounded-xl bg-white dark:bg-slate-900 shadow-xl shadow-black/5 dark:shadow-black/20 border border-slate-100 dark:border-slate-800/50 transition-all duration-200 origin-top overflow-hidden ${isOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                    }`}
            >
                <div className="py-2 flex flex-col">
                    {rankings.map(ranking => (
                        <Link
                            key={ranking.path}
                            to={ranking.path}
                            className={`px-4 py-2.5 text-sm transition-colors hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary ${location.pathname === ranking.path
                                ? 'text-primary font-bold bg-primary/5'
                                : 'text-slate-700 dark:text-slate-300 font-medium'
                                }`}
                        >
                            {isRtl ? ranking.labelAr : ranking.labelEn}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
