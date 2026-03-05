import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useThemeContext } from '../context/ThemeContext';

export default function Navbar() {
    const { isDarkMode, toggleDark, isRtl, toggleRtl } = useThemeContext();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    const navLinks = [
        { path: '/', labelEn: 'Home', labelAr: 'الرئيسية' },
        { path: '/about', labelEn: 'About', labelAr: 'عن الجامعة' },
        { path: '/colleges', labelEn: 'Colleges', labelAr: 'الكليات' },
        { path: '/admissions', labelEn: 'Admissions', labelAr: 'القبول' },
        { path: '/news', labelEn: 'News', labelAr: 'الأخبار' },
        { path: '/contact', labelEn: 'Contact', labelAr: 'اتصل بنا' },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b-2 border-primary bg-white/95 dark:bg-slate-900/95 backdrop-blur-md transition-colors duration-300 shadow-sm">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* Logo Section */}
                <Link to="/" className="flex items-center gap-2 md:gap-3 flex-shrink min-w-0">
                    <div className="text-primary flex items-center justify-center p-1.5 md:p-2 bg-primary/10 rounded-xl shrink-0">
                        <span className="material-symbols-outlined text-2xl md:text-4xl">school</span>
                    </div>
                    <div className="flex flex-col min-w-0">
                        <h1 className="text-base sm:text-lg md:text-xl font-black leading-none tracking-tight text-slate-900 dark:text-white uppercase truncate">
                            {isRtl ? 'جامعة السادات الذكية' : 'SADAT'} <span className="hidden xs:inline sm:inline">SMART</span>
                        </h1>
                        <p className="hidden xs:block text-[8px] md:text-[10px] font-bold tracking-[0.2em] text-primary uppercase mt-1 truncate">
                            {isRtl ? 'منصة الجامعة' : 'University Platform'}
                        </p>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`text-sm font-bold transition-all hover:text-primary relative py-2 ${isActive(link.path)
                                ? 'text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-t-full'
                                : 'text-slate-600 dark:text-slate-300'
                                }`}
                        >
                            {isRtl ? link.labelAr : link.labelEn}
                        </Link>
                    ))}
                </nav>

                {/* Actions & Toggles */}
                <div className="flex items-center gap-1 sm:gap-2 md:gap-4 shrink-0">
                    <button onClick={toggleDark} className="p-1.5 md:p-2 text-slate-500 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-all" title="Toggle Theme">
                        <span className="material-symbols-outlined text-xl md:text-[22px]">{isDarkMode ? 'light_mode' : 'dark_mode'}</span>
                    </button>

                    <button onClick={toggleRtl} className="p-1.5 md:p-2 text-slate-500 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-all font-black text-xs hidden sm:block" title="Translate">
                        {isRtl ? 'EN' : 'AR'}
                    </button>

                    <div className="hidden sm:flex items-center gap-3 border-l border-slate-200 dark:border-slate-800 pl-4 ml-2">
                        <Link to="/login" className="text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
                            {isRtl ? 'تسجيل الدخول' : 'Sign In'}
                        </Link>
                        <Link to="/register" className="rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-primary-600 hover:shadow-lg hover:shadow-primary/30 active:scale-95">
                            {isRtl ? 'قدم الان' : 'Apply Now'}
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 lg:hidden text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors ml-1"
                    >
                        <span className="material-symbols-outlined text-2xl">
                            {isMobileMenuOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden animate-in slide-in-from-top-2">
                    <nav className="flex flex-col px-4 py-6 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`px-4 py-3 rounded-xl text-sm font-bold transition-colors ${isActive(link.path)
                                    ? 'bg-primary/10 text-primary'
                                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                                    }`}
                            >
                                {isRtl ? link.labelAr : link.labelEn}
                            </Link>
                        ))}

                        <div className="h-px bg-slate-100 dark:bg-slate-800 my-4"></div>

                        <div className="flex flex-col gap-3 px-2 sm:hidden">
                            <Link
                                to="/login"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="w-full py-3 text-center rounded-xl border-2 border-slate-200 dark:border-slate-700 text-sm font-bold text-slate-700 dark:text-slate-200"
                            >
                                {isRtl ? 'تسجيل الدخول' : 'Sign In'}
                            </Link>
                            <Link
                                to="/register"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="w-full py-3 text-center rounded-xl bg-primary text-sm font-bold text-white shadow-lg shadow-primary/20"
                            >
                                {isRtl ? 'قدم الان' : 'Apply Now'}
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
