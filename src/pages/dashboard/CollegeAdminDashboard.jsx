import React from 'react';
import { useThemeContext } from '../../context/ThemeContext';
import { useNavigate, Outlet, useLocation, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCollegeContext } from '../../context/CollegeContext';

export default function CollegeAdminDashboard() {
    const { isRtl, toggleDark, isDarkMode } = useThemeContext();
    const navigate = useNavigate();
    const location = useLocation();
    const { user: adminUser, currentCollegeId, logout } = useAuth();
    const { colleges } = useCollegeContext();

    const college = colleges[currentCollegeId];
    // A mapping to find the title
    const routesMap = {
        '/dashboard/college-admin': isRtl ? 'لوحة القيادة' : 'Dashboard Overview',
        '/dashboard/college-admin/departments': isRtl ? 'إدارة الأقسام' : 'Manage Departments',
        '/dashboard/college-admin/programs': isRtl ? 'إدارة البرامج' : 'Manage Programs',
        '/dashboard/college-admin/staff': isRtl ? 'إدارة هيئة التدريس' : 'Manage Faculty',
        '/dashboard/college-admin/dean': isRtl ? 'قسم العميد' : 'Dean Section Management',
    };
    
    const currentTitle = routesMap[location.pathname] || (isRtl ? 'مدير الكلية' : 'College Admin');

    const navLinkClass = ({ isActive }) => 
        `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all group ${
            isActive 
                ? `bg-primary/10 text-primary border-${isRtl ? 'l' : 'r'}-4 border-primary font-semibold`
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-gray-700 hover:text-primary font-medium'
        }`;

    return (
        <div className={`flex h-screen overflow-hidden bg-slate-50 dark:bg-gray-900 font-display text-slate-900 dark:text-slate-100 antialiased ${isRtl ? 'rtl' : 'ltr'}`}>

            {/* Sidebar */}
            <aside className={`w-72 bg-white dark:bg-gray-800 border-${isRtl ? 'l' : 'r'} border-slate-200 dark:border-gray-700 flex flex-col shrink-0`}>
                <div className="p-6">
                    <div className="flex items-center gap-3 mb-10">
                        <div
                            className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30 cursor-pointer"
                            onClick={() => navigate('/')}
                            title="Go to Home"
                        >
                            <span className="material-symbols-outlined text-2xl">school</span>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-slate-900 dark:text-white text-lg font-extrabold leading-tight tracking-tight whitespace-pre-wrap">
                                {isRtl ? (college ? college.nameAr : 'جامعة السادات الذكية') : (college ? college.name : 'Sadat Smart')}
                            </h1>
                            <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest pl-0.5 rtl:pr-0.5">
                                {isRtl ? 'مدير الكلية' : 'College Admin'}
                            </p>
                        </div>
                    </div>

                    <div className="space-y-1">
                        <p className="px-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                            {isRtl ? 'القائمة الرئيسية' : 'Main Menu'}
                        </p>
                        <NavLink to="/dashboard/college-admin" end className={navLinkClass}>
                            <span className="material-symbols-outlined">dashboard</span>
                            <span className="text-sm">{isRtl ? 'لوحة القيادة' : 'Dashboard'}</span>
                        </NavLink>
                        <NavLink to="/dashboard/college-admin/departments" className={navLinkClass}>
                            <span className="material-symbols-outlined">corporate_fare</span>
                            <span className="text-sm">{isRtl ? 'إدارة الأقسام' : 'Manage Departments'}</span>
                        </NavLink>
                        <NavLink to="/dashboard/college-admin/programs" className={navLinkClass}>
                            <span className="material-symbols-outlined">menu_book</span>
                            <span className="text-sm">{isRtl ? 'إدارة البرامج' : 'Manage Programs'}</span>
                        </NavLink>
                        <NavLink to="/dashboard/college-admin/staff" className={navLinkClass}>
                            <span className="material-symbols-outlined">groups</span>
                            <span className="text-sm">{isRtl ? 'إدارة هيئة التدريس' : 'Manage Faculty'}</span>
                        </NavLink>
                        <NavLink to="/dashboard/college-admin/dean" className={navLinkClass}>
                            <span className="material-symbols-outlined">workspace_premium</span>
                            <span className="text-sm">{isRtl ? 'قسم العميد' : 'Dean Section'}</span>
                        </NavLink>
                    </div>

                    <div className="mt-8 space-y-1">
                        <p className="px-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                            {isRtl ? 'النظام' : 'System'}
                        </p>
                        <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-gray-700 transition-all" href="#">
                            <span className="material-symbols-outlined text-slate-400">settings</span>
                            <span className="text-sm font-medium">{isRtl ? 'الإعدادات' : 'Settings'}</span>
                        </a>
                        <button
                            onClick={() => {
                                logout();
                                navigate('/');
                            }}
                            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all"
                        >
                            <span className="material-symbols-outlined text-xl">logout</span>
                            <span className="text-sm font-medium">{isRtl ? 'تسجيل الخروج' : 'Logout'}</span>
                        </button>
                    </div>
                </div>

                <div className="mt-auto p-6 border-t border-slate-100 dark:border-gray-700">
                    <div className="bg-slate-50 dark:bg-gray-900 rounded-xl p-4 flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-slate-200 dark:bg-gray-700 overflow-hidden ring-2 ring-white dark:ring-gray-800 shrink-0">
                            <img alt="Admin Profile" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKsHPhMP6gQxiooHeEbRqcLqpY8JGPuMBnXNfNfSryaT4oTRVICl3BmqkSTJ1uG3uN-QBqki8PpefkCXcvPRuugCxjb23wIzdgRk4N9Ek1v184KTtoLgsKKfgOcMP6k7QUOld01w00iG8UymQp8gM9XvM6LFEJlb0uak9YhnsLu0ENLOD8DRvo576Lz6rbLAGObpE0kxRPp8QqHmVEwTFw3P82uJzaHRzrRiw0_y4Y9j59ABhzuBPZvhqMTbjzTCUPyTx4NBr_n02i" />
                        </div>
                        <div className="overflow-hidden">
                            <p className="text-xs font-bold text-slate-900 dark:text-white truncate">{adminUser?.name}</p>
                            <p className="text-[10px] text-slate-500 truncate">{isRtl ? 'مسؤول الكلية' : 'College Administrator'}</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="h-16 border-b border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex items-center justify-between px-8 shrink-0 relative z-10 w-full">
                    <div className="flex items-center gap-6">
                        <div className={`flex items-center gap-2 ${isRtl ? 'flex-row-reverse' : ''}`}>
                            <span className="text-slate-400 material-symbols-outlined cursor-pointer hover:text-primary transition-colors cursor-pointer" onClick={() => navigate('/')}>home</span>
                            <span className="text-slate-300 dark:text-gray-600">/</span>
                            <span className="text-slate-900 dark:text-white font-semibold text-sm">
                                {currentTitle}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="relative group hidden sm:block">
                            <span className={`material-symbols-outlined absolute ${isRtl ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 text-slate-400 text-lg transition-colors group-focus-within:text-primary`}>search</span>
                            <input
                                className={`w-64 bg-slate-50 dark:bg-gray-900 border border-slate-200 dark:border-gray-700 text-slate-900 dark:text-white rounded-full ${isRtl ? 'pr-10 pl-4' : 'pl-10 pr-4'} py-1.5 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white dark:focus:bg-gray-800 outline-none transition-all`}
                                placeholder={isRtl ? 'بحث...' : 'Search...'}
                                type="text"
                            />
                        </div>

                        {/* Dark mode toggle */}
                        <button
                            onClick={toggleDark}
                            className="h-9 w-9 flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-gray-700 rounded-full relative transition-colors"
                        >
                            <span className="material-symbols-outlined text-xl">
                                {isDarkMode ? 'light_mode' : 'dark_mode'}
                            </span>
                        </button>

                        <button className="h-9 w-9 flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-gray-700 rounded-full relative transition-colors">
                            <span className="material-symbols-outlined text-xl">notifications</span>
                            <span className={`absolute top-2 ${isRtl ? 'left-2' : 'right-2'} w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-gray-800`}></span>
                        </button>
                    </div>
                </header>

                <Outlet />
                
            </main>
        </div>
    );
}
