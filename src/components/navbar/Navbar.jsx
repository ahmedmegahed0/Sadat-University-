import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useThemeContext } from '../../context/ThemeContext';
import { useCollegeContext } from '../../context/CollegeContext';
import { useAuth } from '../../context/AuthContext';
import { useGlobalData } from '../../context/GlobalDataContext';
import NavDropdown from './NavDropdown';

export default function Navbar() {
    const { isDarkMode, toggleDark, isRtl, toggleRtl } = useThemeContext();
    const { isAuthenticated, isStudent, isAdmin, isSuperAdmin, user, displayName, avatar, logout } = useAuth();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const userMenuRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();

    const isActive = (path) => location.pathname === path;
    const { colleges } = useCollegeContext();
    const collegesList = Object.values(colleges || {});

    // Close user menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
                setIsUserMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Close menus on route change
    useEffect(() => {
        setIsUserMenuOpen(false);
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    const handleLogout = () => {
        logout();
        setIsUserMenuOpen(false);
        setIsMobileMenuOpen(false);
        navigate('/');
    };

    const navLinks = [
        { path: '/', labelEn: 'Home', labelAr: 'الرئيسية' },
        { path: '/about', labelEn: 'About', labelAr: 'عن الجامعة' },
        { path: '/admissions', labelEn: 'Admissions', labelAr: 'القبول' },
        { path: '/faculty', labelEn: 'Faculty Staff', labelAr: 'هيئة التدريس' },
        { path: '/news', labelEn: 'News', labelAr: 'الأخبار' },
        { path: '/contact', labelEn: 'Contact', labelAr: 'اتصل بنا' },
    ];

    // Dynamically fetch rankings from Global Data
    const { rankings } = useGlobalData();
    const rankingItems = rankings.map(ranking => ({
        path: `/rankings/${ranking.slug}`,
        labelEn: ranking.breadcrumb || ranking.title,
        labelAr: ranking.title
    }));

    const universityItems = [
        { path: '/universities/egyptian', labelEn: 'Egyptian Universities', labelAr: 'الجامعات المصرية' },
        { path: '/universities/arab', labelEn: 'Arab Universities', labelAr: 'الجامعات العربية' },
        { path: '/universities/foreign', labelEn: 'Foreign Universities', labelAr: 'الجامعات الأجنبية' },
    ];

    const collegesDropdownItems = collegesList.map(col => ({
        path: `/college/${col.id}`,
        labelEn: col.name,
        labelAr: col.nameAr
    }));
    collegesDropdownItems.unshift({ path: '/colleges', labelEn: 'All Colleges', labelAr: 'جميع الكليات' });

    // Build user dropdown items based on role
    const getUserMenuItems = () => {
        let items = [];
        if (isStudent) {
            items.push(
                { path: '/student/dashboard', labelEn: 'Dashboard', labelAr: 'لوحة التحكم', icon: 'dashboard' },
                { path: '/student/profile', labelEn: 'Profile', labelAr: 'الملف الشخصي', icon: 'person' }
            );
        } else if (isSuperAdmin) {
            items.push(
                { path: '/dashboard/super-admin', labelEn: 'Dashboard', labelAr: 'لوحة التحكم', icon: 'admin_panel_settings' }
            );
        } else if (isAdmin) {
            items.push(
                { path: '/dashboard/college-admin', labelEn: 'Dashboard', labelAr: 'لوحة التحكم', icon: 'dashboard' }
            );
        }
        
        // Add Doctor Dashboard to all authenticated users for now so it's accessible
        items.push({ path: '/doctor/dashboard', labelEn: 'Faculty Dashboard', labelAr: 'لوحة هيئة التدريس', icon: 'badge' });

        return items;
    };

    const getRoleBadge = () => {
        if (isSuperAdmin) return { text: isRtl ? 'مدير النظام' : 'Super Admin', color: 'bg-red-500/10 text-red-600 dark:text-red-400' };
        if (isAdmin) return { text: isRtl ? 'مسؤول كلية' : 'College Admin', color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400' };
        if (isStudent) return { text: isRtl ? 'طالب' : 'Student', color: 'bg-green-500/10 text-green-600 dark:text-green-400' };
        return null;
    };

    const userMenuItems = getUserMenuItems();
    const roleBadge = getRoleBadge();

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
                    <NavDropdown titleEn="Colleges" titleAr="الكليات" items={collegesDropdownItems} />
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
                        {isAuthenticated ? (
                            /* Logged-in user menu */
                            <div className="relative" ref={userMenuRef}>
                                <button
                                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                                    className="flex items-center gap-2.5 py-1.5 px-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
                                    id="user-menu-button"
                                >
                                    {avatar ? (
                                        <img src={avatar} alt={displayName} className="w-8 h-8 rounded-full object-cover ring-2 ring-primary/20" />
                                    ) : (
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary ring-2 ring-primary/20">
                                            <span className="material-symbols-outlined text-lg">person</span>
                                        </div>
                                    )}
                                    <span className="text-sm font-bold text-slate-700 dark:text-slate-200 max-w-[100px] truncate hidden md:block">
                                        {displayName}
                                    </span>
                                    <span className={`material-symbols-outlined text-sm text-slate-400 transition-transform duration-200 ${isUserMenuOpen ? 'rotate-180' : ''}`}>
                                        expand_more
                                    </span>
                                </button>

                                {/* User Dropdown Menu */}
                                {isUserMenuOpen && (
                                    <div className="absolute right-0 top-full mt-2 w-64 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xl shadow-slate-200/50 dark:shadow-black/30 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                                        {/* User info header */}
                                        <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-800">
                                            <p className="text-sm font-bold text-slate-900 dark:text-white truncate">{displayName}</p>
                                            <p className="text-xs text-slate-500 truncate mt-0.5">{user?.email}</p>
                                            {roleBadge && (
                                                <span className={`inline-block mt-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${roleBadge.color}`}>
                                                    {roleBadge.text}
                                                </span>
                                            )}
                                        </div>

                                        {/* Menu items */}
                                        <div className="py-1">
                                            {userMenuItems.map((item) => (
                                                <Link
                                                    key={item.path}
                                                    to={item.path}
                                                    onClick={() => setIsUserMenuOpen(false)}
                                                    className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors"
                                                >
                                                    <span className="material-symbols-outlined text-lg">{item.icon}</span>
                                                    {isRtl ? item.labelAr : item.labelEn}
                                                </Link>
                                            ))}
                                        </div>

                                        {/* Logout */}
                                        <div className="border-t border-slate-100 dark:border-slate-800 py-1">
                                            <button
                                                onClick={handleLogout}
                                                className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors w-full"
                                            >
                                                <span className="material-symbols-outlined text-lg">logout</span>
                                                {isRtl ? 'تسجيل الخروج' : 'Sign Out'}
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            /* Sign In button for guests */
                            <Link to="/login" className="text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
                                {isRtl ? 'تسجيل الدخول' : 'Sign In'}
                            </Link>
                        )}
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
                        <NavDropdown isMobile={true} onCloseMenu={() => setIsMobileMenuOpen(false)} titleEn="Colleges" titleAr="الكليات" items={collegesDropdownItems} />
                        <NavDropdown isMobile={true} onCloseMenu={() => setIsMobileMenuOpen(false)} titleEn="International Rankings" titleAr="التصنيفات الدولية" items={rankingItems} />
                        <NavDropdown isMobile={true} onCloseMenu={() => setIsMobileMenuOpen(false)} titleEn="Universities" titleAr="الجامعات" items={universityItems} />

                        <div className="h-px bg-slate-100 dark:bg-slate-800 my-4"></div>

                        {/* Mobile: Auth section */}
                        <div className="flex flex-col gap-3 px-2">
                            {isAuthenticated ? (
                                <>
                                    {/* User info */}
                                    <div className="flex items-center gap-3 px-2 py-2">
                                        {avatar ? (
                                            <img src={avatar} alt={displayName} className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/20" />
                                        ) : (
                                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                                <span className="material-symbols-outlined">person</span>
                                            </div>
                                        )}
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-slate-900 dark:text-white">{displayName}</span>
                                            {roleBadge && (
                                                <span className={`text-[10px] font-bold uppercase tracking-wider ${roleBadge.color.replace('bg-', '').split(' ').pop()}`}>
                                                    {roleBadge.text}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Menu items */}
                                    {userMenuItems.map((item) => (
                                        <Link
                                            key={item.path}
                                            to={item.path}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                                        >
                                            <span className="material-symbols-outlined text-primary">{item.icon}</span>
                                            {isRtl ? item.labelAr : item.labelEn}
                                        </Link>
                                    ))}

                                    {/* Logout */}
                                    <button
                                        onClick={handleLogout}
                                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors w-full"
                                    >
                                        <span className="material-symbols-outlined">logout</span>
                                        {isRtl ? 'تسجيل الخروج' : 'Sign Out'}
                                    </button>
                                </>
                            ) : (
                                <Link
                                    to="/login"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="w-full py-3 text-center rounded-xl border-2 border-slate-200 dark:border-slate-700 text-sm font-bold text-slate-700 dark:text-slate-200"
                                >
                                    {isRtl ? 'تسجيل الدخول' : 'Sign In'}
                                </Link>
                            )}
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
