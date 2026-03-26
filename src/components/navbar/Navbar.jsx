import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useThemeContext } from '../../context/ThemeContext';
import NavDropdown from './NavDropdown';

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

    const rankingItems = [
        { path: '/rankings/qs-arab', labelEn: 'QS Arab Region', labelAr: 'تصنيف كيو إس للمنطقة العربية' },
        { path: '/rankings/webometrics', labelEn: 'Webometrics Ranking', labelAr: 'تصنيف ويبومتركس' },
        { path: '/rankings/scimago', labelEn: 'SCImago Ranking', labelAr: 'تصنيف سيماجو' },
        { path: '/rankings/shanghai', labelEn: 'Shanghai Ranking', labelAr: 'تصنيف شنغهاي' },
        { path: '/rankings/the', labelEn: 'THE Ranking', labelAr: 'تصنيف التايمز' },
    ];

    const universityItems = [
        { path: '/universities/egyptian', labelEn: 'Egyptian Universities', labelAr: 'الجامعات المصرية' },
        { path: '/universities/arab', labelEn: 'Arab Universities', labelAr: 'الجامعات العربية' },
        { path: '/universities/foreign', labelEn: 'Foreign Universities', labelAr: 'الجامعات الأجنبية' },
    ];

    return (
        <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md transition-colors duration-300">
            <div className="mx-auto flex h-14 sm:h-16 max-w-7xl items-center px-4 sm:px-6 lg:px-8">

                {/* Mobile Menu Toggle (Left side on mobile) */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-2 lg:hidden text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors -ml-2 mr-4"
                >
                    <span className="material-symbols-outlined text-2xl">
                        {isMobileMenuOpen ? 'close' : 'menu'}
                    </span>
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex flex-1 items-center gap-8 justify-start">
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
                    <NavDropdown titleEn="International Rankings" titleAr="التصنيفات الدولية" items={rankingItems} />
                    <NavDropdown titleEn="Universities" titleAr="الجامعات" items={universityItems} />
                </nav>

                {/* Actions & Toggles */}
                <div className="flex items-center gap-1 sm:gap-2 md:gap-4 shrink-0 lg:ml-auto ml-auto">
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
                    </div>
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
                        <NavDropdown isMobile={true} onCloseMenu={() => setIsMobileMenuOpen(false)} titleEn="International Rankings" titleAr="التصنيفات الدولية" items={rankingItems} />
                        <NavDropdown isMobile={true} onCloseMenu={() => setIsMobileMenuOpen(false)} titleEn="Universities" titleAr="الجامعات" items={universityItems} />

                        <div className="h-px bg-slate-100 dark:bg-slate-800 my-4"></div>

                        <div className="flex flex-col gap-3 px-2 sm:hidden">
                            <Link
                                to="/login"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="w-full py-3 text-center rounded-xl border-2 border-slate-200 dark:border-slate-700 text-sm font-bold text-slate-700 dark:text-slate-200"
                            >
                                {isRtl ? 'تسجيل الدخول' : 'Sign In'}
                            </Link>

                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
