import React from 'react';
import { useThemeContext } from '../../context/ThemeContext';
import { useNavigate } from 'react-router-dom';

export default function CollegeAdminDashboard() {
    const { isRtl, toggleDark, isDarkMode } = useThemeContext();
    const navigate = useNavigate();

    return (
        <div className={`flex h-screen overflow-hidden bg-slate-50 dark:bg-gray-900 font-display text-slate-900 dark:text-slate-100 antialiased ${isRtl ? 'rtl' : 'ltr'}`}>

            {/* Sidebar */}
            <aside className={`w-72 bg-white dark:bg-gray-800 border-${isRtl ? 'l' : 'r'} border-slate-200 dark:border-gray-700 flex flex-col shrink-0`}>
                <div className="p-6">
                    <div className="flex items-center gap-3 mb-10">
                        <div
                            className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30 cursor-pointer"
                            onClick={() => navigate('/')}
                        >
                            <span className="material-symbols-outlined text-2xl">school</span>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-slate-900 dark:text-white text-lg font-extrabold leading-tight tracking-tight">
                                {isRtl ? 'جامعة السادات الذكية' : 'Sadat Smart'}
                            </h1>
                            <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest pl-0.5 rtl:pr-0.5">
                                {isRtl ? 'مدير الكلية' : 'University Admin'}
                            </p>
                        </div>
                    </div>

                    <div className="space-y-1">
                        <p className="px-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                            {isRtl ? 'القائمة الرئيسية' : 'Main Menu'}
                        </p>
                        <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-gray-700 hover:text-primary transition-all group" href="#">
                            <span className="material-symbols-outlined text-slate-400 group-hover:text-primary">dashboard</span>
                            <span className="text-sm font-medium">{isRtl ? 'لوحة القيادة' : 'Dashboard'}</span>
                        </a>
                        <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-gray-700 hover:text-primary transition-all group" href="#">
                            <span className="material-symbols-outlined text-slate-400 group-hover:text-primary">corporate_fare</span>
                            <span className="text-sm font-medium">{isRtl ? 'إدارة الأقسام' : 'Manage Departments'}</span>
                        </a>
                        <a className={`flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary transition-all border-${isRtl ? 'l' : 'r'}-4 border-primary`} href="#">
                            <span className="material-symbols-outlined">groups</span>
                            <span className="text-sm font-semibold">{isRtl ? 'إدارة هيئة التدريس' : 'Manage Faculty'}</span>
                        </a>
                        <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-gray-700 hover:text-primary transition-all group" href="#">
                            <span className="material-symbols-outlined text-slate-400 group-hover:text-primary">campaign</span>
                            <span className="text-sm font-medium">{isRtl ? 'الإعلانات' : 'Announcements'}</span>
                        </a>
                        <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-gray-700 hover:text-primary transition-all group" href="#">
                            <span className="material-symbols-outlined text-slate-400 group-hover:text-primary">person_search</span>
                            <span className="text-sm font-medium">{isRtl ? 'عرض الطلاب' : 'View Students'}</span>
                        </a>
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
                            onClick={() => navigate('/login')}
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
                            <p className="text-xs font-bold text-slate-900 dark:text-white truncate">{isRtl ? 'ألكسندر بيرس' : 'Alexander Pierce'}</p>
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
                                {isRtl ? 'إدارة هيئة التدريس' : 'Manage Faculty'}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="relative group hidden sm:block">
                            <span className={`material-symbols-outlined absolute ${isRtl ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 text-slate-400 text-lg transition-colors group-focus-within:text-primary`}>search</span>
                            <input
                                className={`w-64 bg-slate-50 dark:bg-gray-900 border border-slate-200 dark:border-gray-700 text-slate-900 dark:text-white rounded-full ${isRtl ? 'pr-10 pl-4' : 'pl-10 pr-4'} py-1.5 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white dark:focus:bg-gray-800 outline-none transition-all`}
                                placeholder={isRtl ? 'البحث عن عضو هيئة تدريس...' : 'Search faculty...'}
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

                {/* Scrolling Content */}
                <div className="flex-1 overflow-y-auto bg-slate-50/50 dark:bg-gray-900/50 p-4 md:p-8">
                    <div className="max-w-7xl mx-auto space-y-8">

                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div>
                                <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                                    {isRtl ? 'إدارة هيئة التدريس' : 'Manage Faculty'}
                                </h2>
                                <p className="text-slate-500 mt-1 font-medium">
                                    {isRtl ? 'دليل شامل لأعضاء هيئة التدريس ورؤساء الأقسام' : 'Comprehensive directory of academic staff and department heads'}
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="flex items-center gap-2 rounded-lg bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 px-4 py-2.5 text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-gray-700 transition-all shadow-sm">
                                    <span className="material-symbols-outlined text-lg">file_download</span>
                                    <span>{isRtl ? 'تصدير' : 'Export'}</span>
                                </button>
                                <button className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white hover:bg-blue-700 transition-all shadow-lg shadow-primary/20">
                                    <span className="material-symbols-outlined text-lg">person_add</span>
                                    <span>{isRtl ? 'إضافة عضو هيئة تدريس' : 'Add Faculty Member'}</span>
                                </button>
                            </div>
                        </div>

                        {/* Stats Overview */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-slate-100 dark:border-gray-700 shadow-sm flex items-center gap-4">
                                <div className="h-12 w-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-primary flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined">group</span>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{isRtl ? 'إجمالي الموظفين' : 'Total Staff'}</p>
                                    <p className="text-2xl font-extrabold text-slate-900 dark:text-white leading-none">124</p>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-slate-100 dark:border-gray-700 shadow-sm flex items-center gap-4">
                                <div className="h-12 w-12 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined">verified_user</span>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{isRtl ? 'نشط' : 'Active'}</p>
                                    <p className="text-2xl font-extrabold text-slate-900 dark:text-white leading-none">118</p>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-slate-100 dark:border-gray-700 shadow-sm flex items-center gap-4">
                                <div className="h-12 w-12 rounded-xl bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined">pending_actions</span>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{isRtl ? 'في إجازة' : 'On Leave'}</p>
                                    <p className="text-2xl font-extrabold text-slate-900 dark:text-white leading-none">06</p>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-slate-100 dark:border-gray-700 shadow-sm flex items-center gap-4">
                                <div className="h-12 w-12 rounded-xl bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined">school</span>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{isRtl ? 'الأقسام' : 'Departments'}</p>
                                    <p className="text-2xl font-extrabold text-slate-900 dark:text-white leading-none">09</p>
                                </div>
                            </div>
                        </div>

                        {/* Faculty Table */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-slate-200 dark:border-gray-700 shadow-sm overflow-hidden flex flex-col">

                            <div className="px-6 py-4 border-b border-slate-100 dark:border-gray-700 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-50/30 dark:bg-gray-800/50">
                                <div className="flex items-center gap-3">
                                    <span className="text-sm font-bold text-slate-900 dark:text-white">{isRtl ? 'عرض' : 'Show'}</span>
                                    <select className={`bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-600 rounded-lg text-sm px-3 py-1.5 focus:ring-primary focus:border-primary outline-none text-slate-900 dark:text-white bg-[none]`}>
                                        <option>10</option>
                                        <option>25</option>
                                        <option>50</option>
                                    </select>
                                    <span className="text-sm text-slate-500">{isRtl ? 'إدخالات' : 'entries'}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="relative w-full max-w-xs">
                                        <span className={`material-symbols-outlined absolute ${isRtl ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 text-slate-400 text-lg`}>filter_alt</span>
                                        <select className={`w-full bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-600 outline-none rounded-lg text-sm ${isRtl ? 'pr-10 pl-8' : 'pl-10 pr-8'} py-1.5 focus:ring-primary focus:border-primary appearance-none min-w-[160px] text-slate-900 dark:text-white bg-no-repeat bg-[right_0.5rem_center] rtl:bg-[left_0.5rem_center]  ${isDarkMode ? 'bg-[url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%208l5%205%205-5%22%20stroke%3D%22%23fff%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E")]' : 'bg-[url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%208l5%205%205-5%22%20stroke%3D%22%2364748b%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E")]'}`}>
                                            <option>{isRtl ? 'كل الأقسام' : 'All Departments'}</option>
                                            <option>{isRtl ? 'علوم الحاسب' : 'Computer Science'}</option>
                                            <option>{isRtl ? 'الهندسة' : 'Engineering'}</option>
                                            <option>{isRtl ? 'الرياضيات' : 'Mathematics'}</option>
                                            <option>{isRtl ? 'الفيزياء' : 'Physics'}</option>
                                            <option>{isRtl ? 'الكيمياء' : 'Chemistry'}</option>
                                            <option>{isRtl ? 'الأحياء' : 'Biology'}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="overflow-x-auto">
                                <table className={`w-full border-collapse ${isRtl ? 'text-right' : 'text-left'}`}>
                                    <thead>
                                        <tr className="bg-white dark:bg-gray-800 border-b border-slate-100 dark:border-gray-700">
                                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400 whitespace-nowrap">{isRtl ? 'عضو هيئة التدريس' : 'Faculty Member'}</th>
                                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400 whitespace-nowrap">{isRtl ? 'القسم' : 'Department'}</th>
                                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400 whitespace-nowrap">{isRtl ? 'التعيين' : 'Designation'}</th>
                                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400 whitespace-nowrap">{isRtl ? 'عنوان البريد الإلكتروني' : 'Email Address'}</th>
                                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400 whitespace-nowrap">{isRtl ? 'الحالة' : 'Status'}</th>
                                            <th className={`px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400 whitespace-nowrap ${isRtl ? 'text-left' : 'text-right'}`}>{isRtl ? 'الإجراءات' : 'Actions'}</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-50 dark:divide-gray-700">

                                        {/* Faculty Row 1 */}
                                        <tr className="hover:bg-slate-50/80 dark:hover:bg-gray-700/50 transition-colors group">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-9 w-9 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary font-bold text-xs shrink-0">AA</div>
                                                    <div>
                                                        <p className="text-sm font-bold text-slate-900 dark:text-white">{isRtl ? 'د. أحمد علي' : 'Dr. Ahmed Ali'}</p>
                                                        <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tight" dir="ltr">ID: #F-1029</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-600 dark:text-slate-300">{isRtl ? 'علوم الحاسب' : 'Computer Science'}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-300">{isRtl ? 'رئيس القسم' : 'Head of Dept.'}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 italic">ahmed.ali@ssu.edu</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                                    {isRtl ? 'موظف نشط' : 'Active Staff'}
                                                </span>
                                            </td>
                                            <td className={`px-6 py-4 whitespace-nowrap ${isRtl ? 'text-left' : 'text-right'}`}>
                                                <div className={`flex items-center ${isRtl ? 'justify-start' : 'justify-end'} gap-1`}>
                                                    <button className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-all" title={isRtl ? "تعديل الملف الشخصي" : "Edit Profile"}>
                                                        <span className="material-symbols-outlined text-[20px]">edit_square</span>
                                                    </button>
                                                    <button className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-all" title={isRtl ? "حذف العضو" : "Delete Member"}>
                                                        <span className="material-symbols-outlined text-[20px]">delete</span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>

                                        {/* Faculty Row 2 */}
                                        <tr className="hover:bg-slate-50/80 dark:hover:bg-gray-700/50 transition-colors group">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-9 w-9 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold text-xs shrink-0">SJ</div>
                                                    <div>
                                                        <p className="text-sm font-bold text-slate-900 dark:text-white">{isRtl ? 'د. سارة جونسون' : 'Dr. Sarah Johnson'}</p>
                                                        <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tight" dir="ltr">ID: #F-1044</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-600 dark:text-slate-300">{isRtl ? 'الرياضيات' : 'Mathematics'}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-300">{isRtl ? 'أستاذ أول' : 'Senior Professor'}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 italic">sarah.j@ssu.edu</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                                    {isRtl ? 'موظف نشط' : 'Active Staff'}
                                                </span>
                                            </td>
                                            <td className={`px-6 py-4 whitespace-nowrap ${isRtl ? 'text-left' : 'text-right'}`}>
                                                <div className={`flex items-center ${isRtl ? 'justify-start' : 'justify-end'} gap-1`}>
                                                    <button className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-all">
                                                        <span className="material-symbols-outlined text-[20px]">edit_square</span>
                                                    </button>
                                                    <button className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-all">
                                                        <span className="material-symbols-outlined text-[20px]">delete</span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>

                                        {/* Faculty Row 3 */}
                                        <tr className="hover:bg-slate-50/80 dark:hover:bg-gray-700/50 transition-colors group">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-9 w-9 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400 font-bold text-xs shrink-0">MC</div>
                                                    <div>
                                                        <p className="text-sm font-bold text-slate-900 dark:text-white">{isRtl ? 'د. مايكل تشن' : 'Dr. Michael Chen'}</p>
                                                        <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tight" dir="ltr">ID: #F-1056</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-600 dark:text-slate-300">{isRtl ? 'الفيزياء' : 'Physics'}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-300">{isRtl ? 'باحث' : 'Researcher'}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 italic">m.chen@ssu.edu</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                                                    {isRtl ? 'في إجازة علمية' : 'On Sabbatical'}
                                                </span>
                                            </td>
                                            <td className={`px-6 py-4 whitespace-nowrap ${isRtl ? 'text-left' : 'text-right'}`}>
                                                <div className={`flex items-center ${isRtl ? 'justify-start' : 'justify-end'} gap-1`}>
                                                    <button className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-all">
                                                        <span className="material-symbols-outlined text-[20px]">edit_square</span>
                                                    </button>
                                                    <button className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-all">
                                                        <span className="material-symbols-outlined text-[20px]">delete</span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>

                                        {/* Faculty Row 4 */}
                                        <tr className="hover:bg-slate-50/80 dark:hover:bg-gray-700/50 transition-colors group">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-9 w-9 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center text-rose-600 dark:text-rose-400 font-bold text-xs shrink-0">ER</div>
                                                    <div>
                                                        <p className="text-sm font-bold text-slate-900 dark:text-white">{isRtl ? 'د. إيلينا روسي' : 'Dr. Elena Rossi'}</p>
                                                        <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tight" dir="ltr">ID: #F-1081</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-600 dark:text-slate-300">{isRtl ? 'الكيمياء' : 'Chemistry'}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-300">{isRtl ? 'محاضر' : 'Lecturer'}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 italic">e.rossi@ssu.edu</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                                    {isRtl ? 'موظف نشط' : 'Active Staff'}
                                                </span>
                                            </td>
                                            <td className={`px-6 py-4 whitespace-nowrap ${isRtl ? 'text-left' : 'text-right'}`}>
                                                <div className={`flex items-center ${isRtl ? 'justify-start' : 'justify-end'} gap-1`}>
                                                    <button className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-all">
                                                        <span className="material-symbols-outlined text-[20px]">edit_square</span>
                                                    </button>
                                                    <button className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-all">
                                                        <span className="material-symbols-outlined text-[20px]">delete</span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>

                                        {/* Faculty Row 5 */}
                                        <tr className="hover:bg-slate-50/80 dark:hover:bg-gray-700/50 transition-colors group">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-9 w-9 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-xs shrink-0">JW</div>
                                                    <div>
                                                        <p className="text-sm font-bold text-slate-900 dark:text-white">{isRtl ? 'د. جيمس ويلسون' : 'Dr. James Wilson'}</p>
                                                        <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tight" dir="ltr">ID: #F-1102</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-600 dark:text-slate-300">{isRtl ? 'الأحياء' : 'Biology'}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-300">{isRtl ? 'أستاذ زائر' : 'Guest Faculty'}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 italic">j.wilson@ssu.edu</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-slate-100 dark:bg-gray-700 text-slate-600 dark:text-gray-300">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-gray-400"></span>
                                                    {isRtl ? 'غير نشط' : 'Inactive'}
                                                </span>
                                            </td>
                                            <td className={`px-6 py-4 whitespace-nowrap ${isRtl ? 'text-left' : 'text-right'}`}>
                                                <div className={`flex items-center ${isRtl ? 'justify-start' : 'justify-end'} gap-1`}>
                                                    <button className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-all">
                                                        <span className="material-symbols-outlined text-[20px]">edit_square</span>
                                                    </button>
                                                    <button className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-all">
                                                        <span className="material-symbols-outlined text-[20px]">delete</span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="px-6 py-4 bg-white dark:bg-gray-800 border-t border-slate-100 dark:border-gray-700 flex flex-col md:flex-row items-center justify-between gap-4">
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center md:text-start">
                                    {isRtl ? 'عرض 1 إلى 5 من 124 نتيجة' : 'Showing 1 to 5 of 124 Results'}
                                </p>
                                <div className="flex items-center gap-1">
                                    <button className={`h-8 w-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-gray-600 text-slate-400 hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors`}>
                                        <span className={`material-symbols-outlined text-base`}>chevron_{isRtl ? 'right' : 'left'}</span>
                                    </button>
                                    <button className="h-8 w-8 flex items-center justify-center rounded-lg bg-primary text-white text-xs font-bold">1</button>
                                    <button className="h-8 w-8 flex items-center justify-center rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-gray-700 dark:text-white text-xs font-bold transition-colors">2</button>
                                    <button className="h-8 w-8 flex items-center justify-center rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-gray-700 dark:text-white text-xs font-bold transition-colors">3</button>
                                    <span className="px-1 text-slate-400">...</span>
                                    <button className="h-8 w-8 flex items-center justify-center rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-gray-700 dark:text-white text-xs font-bold transition-colors">25</button>
                                    <button className={`h-8 w-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-gray-600 text-slate-400 hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors`}>
                                        <span className={`material-symbols-outlined text-base`}>chevron_{isRtl ? 'left' : 'right'}</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Widgets */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
                            <div className="bg-gradient-to-r from-primary to-blue-600 p-6 rounded-2xl text-white shadow-lg shadow-primary/20 relative overflow-hidden group">
                                <div className="relative z-10 w-full h-full flex flex-col justify-between">
                                    <h4 className="text-lg font-bold mb-2">{isRtl ? 'بوابة الإعلانات' : 'Announcement Portal'}</h4>
                                    <p className="text-blue-100 text-sm mb-4 max-w-xs">{isRtl ? 'بث التحديثات المهمة لجميع أعضاء هيئة التدريس أو لأقسام معينة.' : 'Broadcast important updates to all faculty members or specific departments.'}</p>
                                    <button className="bg-white max-w-[200px] text-primary px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-50 transition-colors w-fit rtl:self-end self-start">
                                        {isRtl ? 'إنشاء إعلان' : 'Create Announcement'}
                                    </button>
                                </div>
                                <span className="material-symbols-outlined absolute -right-4 -bottom-4 rtl:left-[-1rem] rtl:right-auto text-9xl text-white/10 group-hover:rotate-12 transition-transform duration-500">campaign</span>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-slate-200 dark:border-gray-700 flex flex-col justify-between group shadow-sm hover:shadow-md transition-shadow">
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{isRtl ? 'هيكل القسم' : 'Department Structure'}</h4>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">{isRtl ? 'عرض وتنظيم التسلسل الهرمي للأقسام الأكاديمية داخل الكلية.' : 'View and organize the hierarchy of academic departments within the college.'}</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className={`flex ${isRtl ? 'space-x-reverse -space-x-2' : '-space-x-2'} rtl:flex-row-reverse`}>
                                        <div className="h-8 w-8 rounded-full bg-blue-100 border-2 border-white dark:border-gray-800 flex items-center justify-center text-[10px] font-bold text-primary z-[4]">CS</div>
                                        <div className="h-8 w-8 rounded-full bg-emerald-100 border-2 border-white dark:border-gray-800 flex items-center justify-center text-[10px] font-bold text-emerald-600 z-[3]">EN</div>
                                        <div className="h-8 w-8 rounded-full bg-purple-100 border-2 border-white dark:border-gray-800 flex items-center justify-center text-[10px] font-bold text-purple-600 z-[2]">MA</div>
                                        <div className="h-8 w-8 rounded-full bg-slate-100 border-2 border-white dark:border-gray-800 flex items-center justify-center text-[10px] font-bold text-slate-500 z-[1]">+6</div>
                                    </div>
                                    <button className="text-primary hover:text-blue-700 text-sm font-bold flex items-center gap-1 group/btn hover:gap-2 transition-all bg-transparent outline-none">
                                        {isRtl ? 'إدارة الأقسام' : 'Manage Depts'} <span className={`material-symbols-outlined text-base ${isRtl ? 'rotate-180' : ''}`}>arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
