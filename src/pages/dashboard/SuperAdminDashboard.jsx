import React from 'react';
import { useThemeContext } from '../../context/ThemeContext';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';

export default function SuperAdminDashboard() {
    const { isRtl, toggleDark, isDarkMode } = useThemeContext();
    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const sidebarLinks = [
        { path: '', icon: 'dashboard', labelEn: 'Global Overview', labelAr: 'نظرة عامة', exact: true },
        { path: 'home', icon: 'home', labelEn: 'Home Page', labelAr: 'الصفحة الرئيسية' },
        { path: 'colleges', icon: 'domain', labelEn: 'Manage Colleges', labelAr: 'إدارة الكليات' },
        { path: 'universities', icon: 'school', labelEn: 'Universities', labelAr: 'الجامعات' },
        { path: 'rankings', icon: 'emoji_events', labelEn: 'Rankings', labelAr: 'التصنيفات' },
        { path: 'president', icon: 'person', labelEn: 'President section', labelAr: 'قسم رئيس الجامعة' },
        { path: 'news', icon: 'campaign', labelEn: 'News & Announcements', labelAr: 'الأخبار والإعلانات' },
        { path: 'media', icon: 'perm_media', labelEn: 'Media Management', labelAr: 'إدارة الميديا' },
        { path: 'admins', icon: 'group', labelEn: 'Manage Admins', labelAr: 'إدارة المديرين' },
        { path: 'settings', icon: 'settings', labelEn: 'System Settings', labelAr: 'إعدادات النظام' },
    ];

    return (
        <div className={`flex h-screen overflow-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased ${isRtl ? 'rtl' : 'ltr'}`}>

            {/* Sidebar */}
            <aside className={`w-64 md:w-72 bg-slate-100 dark:bg-gray-900 border-${isRtl ? 'l' : 'r'} border-slate-200 dark:border-white/5 flex flex-col shrink-0`}>
                <div className="p-6 flex items-center gap-3">
                    <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/30 cursor-pointer" onClick={() => navigate('/')}>
                        <span className="material-symbols-outlined text-2xl font-bold">account_balance</span>
                    </div>
                    <div>
                        <h1 className="text-sm font-bold leading-tight tracking-tight uppercase">
                            {isRtl ? 'جامعة السادات الذكية' : 'Sadat Smart'}
                        </h1>
                        <p className="text-[10px] text-primary font-bold uppercase tracking-widest">
                            {isRtl ? 'مدير النظام' : 'Super Admin'}
                        </p>
                    </div>
                </div>

                <nav className="flex-1 px-4 space-y-1 mt-4 custom-scrollbar overflow-y-auto">
                    <p className="px-3 text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 mb-2 tracking-widest">
                        {isRtl ? 'مركز القيادة' : 'Command Center'}
                    </p>
                    
                    {sidebarLinks.map(link => (
                        <NavLink
                            key={link.path}
                            to={`/dashboard/super-admin${link.path ? '/' + link.path : ''}`}
                            end={link.exact}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-sm font-medium ${
                                    isActive
                                        ? 'bg-primary/10 text-primary border border-primary/20'
                                        : 'text-slate-600 dark:text-slate-400 hover:bg-black/5 dark:hover:bg-white/5 hover:text-primary'
                                }`
                            }
                        >
                            <span className="material-symbols-outlined">{link.icon}</span>
                            <span>{isRtl ? link.labelAr : link.labelEn}</span>
                        </NavLink>
                    ))}
                </nav>

                <div className="p-4 mt-auto border-t border-slate-200 dark:border-white/5">
                    <div className="bg-black/5 dark:bg-white/5 rounded-xl p-3 mb-4">
                        <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                                <span className="material-symbols-outlined text-lg">admin_panel_settings</span>
                            </div>
                            <div className="overflow-hidden">
                                <p className="text-xs font-bold truncate text-slate-900 dark:text-white">{isRtl ? 'المدير الجذري' : 'Root Administrator'}</p>
                                <p className="text-[10px] text-slate-500">{isRtl ? 'مستوى النظام' : 'System Level'}</p>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-red-500 hover:bg-red-500/10 transition-colors"
                    >
                        <span className="material-symbols-outlined text-xl">logout</span>
                        <span className="text-sm font-medium">{isRtl ? 'تسجيل الخروج' : 'Logout'}</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto flex flex-col bg-background-light dark:bg-background-dark relative">
                {/* Header */}
                <header className="h-20 border-b border-slate-200 dark:border-white/5 flex items-center justify-between px-8 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-20 shrink-0">
                    <div className="flex flex-col">
                        <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white uppercase text-sm">
                            {isRtl ? 'لوحة تحكم مدير النظام' : 'Super Admin Dashboard'}
                        </h2>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium whitespace-nowrap">
                                {isRtl ? 'مراقبة النظام العالمي نشطة' : 'Global System Monitoring Active'}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-3">
                            <button
                                onClick={toggleDark}
                                className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-500 hover:text-primary transition-colors"
                            >
                                <span className="material-symbols-outlined">
                                    {isDarkMode ? 'light_mode' : 'dark_mode'}
                                </span>
                            </button>
                        </div>
                    </div>
                </header>

                {/* Sub-views rendered here */}
                <Outlet />
            </main>
        </div>
    );
}
