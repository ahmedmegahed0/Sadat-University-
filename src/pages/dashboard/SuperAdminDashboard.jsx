import React, { useState, useEffect } from 'react';
import { useThemeContext } from '../../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { getUniversities, addUniversity, deleteUniversity, getRankings, addRanking, deleteRanking } from '../../services/mockData';

export default function SuperAdminDashboard() {
    const { isRtl, toggleDark, isDarkMode } = useThemeContext();
    const navigate = useNavigate();

    const [universities, setUniversities] = useState([]);
    const [rankings, setRankings] = useState([]);
    const [activeTab, setActiveTab] = useState('universities');

    useEffect(() => {
        setUniversities(getUniversities());
        setRankings(getRankings());
    }, []);

    const handleAddUniversity = () => {
        const input = window.prompt("Enter data separated by comma: Name(EN), Name(AR), Category(egyptian/arab/foreign), Students");
        if (input) {
            const parts = input.split(',').map(s => s.trim());
            if (parts.length >= 3) {
                addUniversity({
                    category: parts[2], nameEn: parts[0], nameAr: parts[1],
                    overviewEn: "New University added from dashboard.", overviewAr: "جامعة جديدة تمت إضافتها من لوحة التحكم.",
                    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070",
                    icon: "school", students: parts[3] || "0",
                    accreditationEn: "Pending", accreditationAr: "قيد المراجعة"
                });
                setUniversities(getUniversities());
            }
        }
    };

    const handleDeleteUniversity = (id) => {
        if (window.confirm("Are you sure you want to delete this university?")) {
            deleteUniversity(id);
            setUniversities(getUniversities());
        }
    };

    const handleAddRanking = () => {
        const input = window.prompt("Enter ranking data separated by comma: Slug, Title(AR), Title(EN)");
        if (input) {
            const parts = input.split(',').map(s => s.trim());
            if (parts.length >= 2) {
                addRanking({
                    slug: parts[0], title: parts[1], breadcrumb: parts[1],
                    subtitle: parts[2] || "New Ranking", bgImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070",
                    logoImage: "", aboutText: [], achievements: [], stats: [], reportUrl: "#", methodologyUrl: "#"
                });
                setRankings(getRankings());
            }
        }
    };

    const handleDeleteRanking = (slug) => {
        if (window.confirm("Are you sure you want to delete this ranking?")) {
            deleteRanking(slug);
            setRankings(getRankings());
        }
    };

    return (
        <div className={`flex h-screen overflow-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased ${isRtl ? 'rtl' : 'ltr'}`}>

            {/* Sidebar */}
            <aside className={`w-72 bg-slate-100 dark:bg-gray-900 border-${isRtl ? 'l' : 'r'} border-slate-200 dark:border-white/5 flex flex-col shrink-0`}>
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
                    <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary font-bold border border-primary/20" href="#">
                        <span className="material-symbols-outlined">dashboard</span>
                        <span className="text-sm">{isRtl ? 'نظرة عامة' : 'Global Overview'}</span>
                    </a>
                    <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-black/5 dark:hover:bg-white/5 hover:text-primary transition-all group" href="#">
                        <span className="material-symbols-outlined group-hover:scale-110 transition-transform">domain</span>
                        <span className="text-sm font-medium">{isRtl ? 'إدارة الكليات' : 'Manage Colleges'}</span>
                    </a>
                    <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-black/5 dark:hover:bg-white/5 hover:text-primary transition-all group" href="#">
                        <span className="material-symbols-outlined group-hover:scale-110 transition-transform">group</span>
                        <span className="text-sm font-medium">{isRtl ? 'إدارة المستخدمين' : 'Manage Users'}</span>
                    </a>

                    <p className="px-3 text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 mt-8 mb-2 tracking-widest">
                        {isRtl ? 'البث' : 'Broadcast'}
                    </p>
                    <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-black/5 dark:hover:bg-white/5 hover:text-primary transition-all group" href="#">
                        <span className="material-symbols-outlined group-hover:scale-110 transition-transform">campaign</span>
                        <span className="text-sm font-medium">{isRtl ? 'الإعلانات' : 'Announcements'}</span>
                    </a>

                    <p className="px-3 text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 mt-8 mb-2 tracking-widest">
                        {isRtl ? 'التكوين' : 'Configuration'}
                    </p>
                    <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-black/5 dark:hover:bg-white/5 hover:text-primary transition-all group" href="#">
                        <span className="material-symbols-outlined group-hover:scale-110 transition-transform">settings</span>
                        <span className="text-sm font-medium">{isRtl ? 'إعدادات النظام' : 'System Settings'}</span>
                    </a>
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
                        onClick={() => navigate('/login')}
                        className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-red-500 hover:bg-red-500/10 transition-colors"
                    >
                        <span className="material-symbols-outlined text-xl">logout</span>
                        <span className="text-sm font-medium">{isRtl ? 'تسجيل الخروج' : 'Logout'}</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto flex flex-col bg-background-light dark:bg-background-dark">
                {/* Header */}
                <header className="h-20 border-b border-slate-200 dark:border-white/5 flex items-center justify-between px-8 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-20">
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
                        <div className="relative w-64 md:w-80 hidden sm:block">
                            <span className={`material-symbols-outlined absolute ${isRtl ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 text-slate-400 text-lg`}>search</span>
                            <input
                                className={`w-full bg-slate-100 dark:bg-white/5 border border-transparent focus:border-primary/50 text-slate-900 dark:text-white rounded-xl ${isRtl ? 'pr-10 pl-4' : 'pl-10 pr-4'} py-2.5 text-sm focus:ring-0 transition-all outline-none`}
                                placeholder={isRtl ? 'البحث في جميع الكليات والمستخدمين...' : 'Search across all colleges & users...'}
                                type="text"
                            />
                        </div>

                        <div className="flex items-center gap-3">
                            {/* Dark mode toggle */}
                            <button
                                onClick={toggleDark}
                                className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-500 hover:text-primary transition-colors"
                            >
                                <span className="material-symbols-outlined">
                                    {isDarkMode ? 'light_mode' : 'dark_mode'}
                                </span>
                            </button>

                            <button className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-500 hover:text-primary transition-colors relative">
                                <span className="material-symbols-outlined">notifications</span>
                                <span className={`absolute top-2.5 ${isRtl ? 'left-2.5' : 'right-2.5'} w-2 h-2 bg-primary rounded-full ring-2 ring-background-light dark:ring-background-dark`}></span>
                            </button>

                            <div className="h-10 w-10 rounded-full border-2 border-primary/50 p-0.5 shrink-0 hidden md:block">
                                <div
                                    className="w-full h-full rounded-full bg-cover bg-center"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAcylM1GmdTjSCBYkxhzRJsT__1rM-CUAJRG30iwOm0Zxs1OY4DExAqyT-L3HVn0pthGG2YxLw7KqJhvwNJlWbFy5Lt0lE4wOM9kNynwYz54F0qhv_gwpVZvmBhP_I9U_cyeYQPIe8-Eeo9bW1Hs8_ykM1E2P0CsQE6glHeppxVOAy33ruC4Hz6uHOUILihmDBBIc1opogs7RU5eKtVA9Q0E3h9qwTgZf9Cp6OGsrMsofB9Cs2aQs9H_VAlko-eqzyQWjMO8CrMXWBM")' }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Dashboard Content */}
                <div className="p-4 md:p-8 max-w-[1600px] w-full mx-auto space-y-8">

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm hover:border-primary/30 transition-colors group">
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{isRtl ? 'إجمالي التسجيل' : 'Total Enrollment'}</p>
                                    <p className="text-3xl font-bold mt-2 tracking-tight group-hover:text-primary transition-colors text-slate-900 dark:text-white">12,450</p>
                                    <div className="flex items-center gap-1 mt-3 text-emerald-500 font-bold text-[10px] uppercase">
                                        <span className="material-symbols-outlined text-sm">trending_up</span>
                                        <span>{isRtl ? 'نمو +5.2%' : '+5.2% Growth'}</span>
                                    </div>
                                </div>
                                <div className="h-12 w-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined">groups</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm hover:border-primary/30 transition-colors group">
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{isRtl ? 'الكليات النشطة' : 'Active Colleges'}</p>
                                    <p className="text-3xl font-bold mt-2 tracking-tight group-hover:text-primary transition-colors text-slate-900 dark:text-white">14</p>
                                    <p className="text-[10px] text-slate-500 mt-3 font-bold uppercase tracking-wider">{isRtl ? 'عبر 3 أحرم جامعية' : 'Across 3 Campuses'}</p>
                                </div>
                                <div className="h-12 w-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined">domain</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm hover:border-primary/30 transition-colors group">
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{isRtl ? 'الإيرادات السنوية' : 'Annual Revenue'}</p>
                                    <p className="text-3xl font-bold mt-2 tracking-tight group-hover:text-primary transition-colors text-slate-900 dark:text-white" dir="ltr">$4.2M</p>
                                    <div className="flex items-center gap-1 mt-3 text-emerald-500 font-bold text-[10px] uppercase">
                                        <span className="material-symbols-outlined text-sm">payments</span>
                                        <span>{isRtl ? '102% من التوقعات' : '102% of Projection'}</span>
                                    </div>
                                </div>
                                <div className="h-12 w-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined">account_balance_wallet</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm hover:border-primary/30 transition-colors group">
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{isRtl ? 'عدد أعضاء هيئة التدريس' : 'Faculty Count'}</p>
                                    <p className="text-3xl font-bold mt-2 tracking-tight group-hover:text-primary transition-colors text-slate-900 dark:text-white">842</p>
                                    <p className="text-[10px] text-slate-500 mt-3 font-bold uppercase tracking-wider">{isRtl ? 'موظفون بدوام كامل' : 'Full-time Staff'}</p>
                                </div>
                                <div className="h-12 w-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined">school</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Colleges Table */}
                        <div className="lg:col-span-2 space-y-4">
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-3">
                                    <div className="w-1 h-6 bg-primary rounded-full"></div>
                                    <div className="flex gap-4">
                                        <button onClick={() => setActiveTab('universities')} className={`text-base font-bold uppercase tracking-widest ${activeTab === 'universities' ? 'text-primary' : 'text-slate-500 dark:text-slate-400'} transition-colors`}>
                                            {isRtl ? 'إدارة الجامعات' : 'Universities'}
                                        </button>
                                        <button onClick={() => setActiveTab('rankings')} className={`text-base font-bold uppercase tracking-widest ${activeTab === 'rankings' ? 'text-primary' : 'text-slate-500 dark:text-slate-400'} transition-colors`}>
                                            {isRtl ? 'إدارة التصنيفات' : 'Rankings'}
                                        </button>
                                    </div>
                                </div>
                                <button onClick={activeTab === 'universities' ? handleAddUniversity : handleAddRanking} className={`bg-primary hover:bg-primary/90 text-slate-900 dark:text-white px-3 md:px-5 py-2 md:py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all shadow-lg shadow-primary/20 ${isRtl ? 'flex-row-reverse' : ''}`}>
                                    <span className="material-symbols-outlined text-sm">add</span> {isRtl ? 'تسجيل جديد' : 'ADD NEW'}
                                </button>
                            </div>

                            <div className="bg-white dark:bg-gray-800 border border-slate-200 dark:border-white/5 rounded-2xl overflow-hidden shadow-xl overflow-x-auto">
                                <table className={`w-full ${isRtl ? 'text-right' : 'text-left'}`}>
                                    <thead className="bg-slate-50 dark:bg-white/5 border-b border-slate-200 dark:border-white/5">
                                        <tr>
                                            <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">{isRtl ? 'التفاصيل' : 'Details'}</th>
                                            <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center">{activeTab === 'universities' ? (isRtl ? 'الفئة' : 'Category') : ''}</th>
                                            <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">{activeTab === 'universities' ? (isRtl ? 'الطلاب' : 'Students') : ''}</th>
                                            <th className={`px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest ${isRtl ? 'text-left' : 'text-right'}`}>{isRtl ? 'عناصر التحكم' : 'Controls'}</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-slate-900 dark:text-white">
                                        {activeTab === 'universities' ? universities.map((uni) => (
                                            <tr key={uni.id} className="hover:bg-primary/5 transition-colors group">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center gap-4">
                                                        <div className="h-12 w-12 rounded-xl overflow-hidden shrink-0 border border-slate-200 dark:border-white/10 p-1 bg-black/5 dark:bg-white/5">
                                                            <img alt={uni.nameEn} className="w-full h-full object-cover rounded-lg" src={uni.image} />
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-sm cursor-pointer hover:underline" onClick={() => navigate(`/universities/${uni.category}`)}>
                                                                {isRtl ? uni.nameAr : uni.nameEn}
                                                            </p>
                                                            <p className="text-[10px] font-bold text-primary uppercase" dir="ltr">{uni.category}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 text-xs font-bold text-slate-900 dark:text-white">{uni.category}</span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <p className="text-sm font-medium">{uni.students}</p>
                                                </td>
                                                <td className={`px-6 py-4 ${isRtl ? 'text-left' : 'text-right'}`}>
                                                    <div className={`flex ${isRtl ? 'justify-start' : 'justify-end'} gap-1`}>
                                                        <button
                                                            className="p-2 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-all"
                                                            title={isRtl ? "عرض" : "View"}
                                                            onClick={() => navigate(`/universities/${uni.category}`)}
                                                        ><span className="material-symbols-outlined text-lg">open_in_new</span></button>
                                                        <button onClick={() => handleDeleteUniversity(uni.id)} className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all" title={isRtl ? "حذف" : "Delete"}><span className="material-symbols-outlined text-lg">delete</span></button>
                                                    </div>
                                                </td>
                                            </tr>
                                        )) : rankings.map((ranking) => (
                                            <tr key={ranking.slug} className="hover:bg-primary/5 transition-colors group">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center gap-4">
                                                        <div className="h-12 w-12 rounded-xl overflow-hidden shrink-0 border border-slate-200 dark:border-white/10 p-1 bg-black/5 dark:bg-white/5 flex items-center justify-center">
                                                            <span className="material-symbols-outlined text-primary">emoji_events</span>
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-sm cursor-pointer hover:underline" onClick={() => navigate(`/rankings/${ranking.slug}`)}>
                                                                {isRtl ? ranking.title : ranking.breadcrumb}
                                                            </p>
                                                            <p className="text-[10px] font-bold text-primary uppercase" dir="ltr">Slug: {ranking.slug}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-center"></td>
                                                <td className="px-6 py-4 whitespace-nowrap"></td>
                                                <td className={`px-6 py-4 ${isRtl ? 'text-left' : 'text-right'}`}>
                                                    <div className={`flex ${isRtl ? 'justify-start' : 'justify-end'} gap-1`}>
                                                        <button
                                                            className="p-2 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-all"
                                                            title={isRtl ? "عرض" : "View"}
                                                            onClick={() => navigate(`/rankings/${ranking.slug}`)}
                                                        ><span className="material-symbols-outlined text-lg">open_in_new</span></button>
                                                        <button onClick={() => handleDeleteRanking(ranking.slug)} className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all" title={isRtl ? "حذف" : "Delete"}><span className="material-symbols-outlined text-lg">delete</span></button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div className="p-4 bg-slate-50 dark:bg-white/5 border-t border-slate-200 dark:border-white/5 flex items-center justify-between">
                                    <p className="text-xs text-slate-500 dark:text-slate-400">{isRtl ? 'عرض 3 من أصل 14 مؤسسة نشطة' : 'Showing 3 of 14 active institutions'}</p>
                                    <button className="text-xs font-bold text-primary hover:underline uppercase tracking-widest bg-transparent">
                                        {isRtl ? 'عرض جميع السجلات' : 'View All Records'}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Broadcast & Logs Widget */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-1 h-6 bg-primary rounded-full"></div>
                                <h3 className="text-base font-bold uppercase tracking-widest text-slate-900 dark:text-white">
                                    {isRtl ? 'بث النظام' : 'System Broadcast'}
                                </h3>
                            </div>

                            <div className="bg-white dark:bg-gray-800 border border-slate-200 dark:border-white/5 rounded-2xl p-6 shadow-xl">
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">
                                            {isRtl ? 'نطاق البث' : 'Broadcast Scope'}
                                        </label>
                                        <select className={`w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-1 focus:ring-primary focus:border-primary appearance-none text-slate-900 dark:text-white bg-no-repeat bg-[right_1rem_center] rtl:bg-[left_1rem_center] ${isDarkMode ? 'bg-[url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%208l5%205%205-5%22%20stroke%3D%22%23fff%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E")]' : 'bg-[url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%208l5%205%205-5%22%20stroke%3D%22%2364748b%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E")]'}`}>
                                            <option>{isRtl ? 'عالمي (جميع المستخدمين)' : 'Global (All Users)'}</option>
                                            <option>{isRtl ? 'الموظفون الإداريون فقط' : 'Administrative Staff Only'}</option>
                                            <option>{isRtl ? 'جميع الكليات والعمداء' : 'All Faculty & Deans'}</option>
                                            <option>{isRtl ? 'جميع الطلاب المسجلين' : 'All Registered Students'}</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">
                                            {isRtl ? 'عنوان الموضوع' : 'Subject Heading'}
                                        </label>
                                        <input
                                            className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-1 focus:ring-primary focus:border-primary text-slate-900 dark:text-white"
                                            placeholder={isRtl ? 'أدخل عنوان الإشعار...' : 'Enter notification title...'}
                                            type="text"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">
                                            {isRtl ? 'محتوى الرسالة' : 'Message Content'}
                                        </label>
                                        <textarea
                                            className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-1 focus:ring-primary focus:border-primary min-h-[120px] text-slate-900 dark:text-white resize-none"
                                            placeholder={isRtl ? 'رسالة بث مفصلة...' : 'Detailed broadcast message...'}
                                        ></textarea>
                                    </div>
                                    <div className="flex items-center gap-2 py-2">
                                        <input className="w-4 h-4 rounded border-slate-300 dark:border-white/10 text-primary focus:ring-primary bg-transparent" id="urgent" type="checkbox" />
                                        <label className="text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider cursor-pointer" htmlFor="urgent">
                                            {isRtl ? 'علامة الأولوية (عاجل)' : 'Priority Flag (Urgent)'}
                                        </label>
                                    </div>
                                    <button className="w-full bg-primary hover:bg-primary/90 text-slate-900 border border-primary font-bold py-3.5 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-widest">
                                        <span className="material-symbols-outlined text-lg">send</span> {isRtl ? 'تنفيذ البث' : 'Execute Broadcast'}
                                    </button>
                                </div>
                            </div>

                            {/* System Logs */}
                            <div className="space-y-3">
                                <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest px-1">
                                    {isRtl ? 'سجلات النظام العالمية' : 'Global System Logs'}
                                </p>
                                <div className="bg-white dark:bg-gray-800 border border-slate-100 dark:border-white/5 shadow-sm rounded-2xl p-4">
                                    <div className="flex gap-3">
                                        <div className="w-1 bg-primary/40 rounded-full h-auto"></div>
                                        <div>
                                            <p className="text-xs font-bold text-slate-900 dark:text-white">{isRtl ? 'تمت إضافة كلية جديدة' : 'New College Added'}</p>
                                            <p className="text-[10px] text-slate-500 mt-1">{isRtl ? 'كلية الهندسة • قبل ساعة' : 'Faculty of Engineering • 1h ago'}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-gray-800 border border-slate-100 dark:border-white/5 shadow-sm rounded-2xl p-4">
                                    <div className="flex gap-3">
                                        <div className="w-1 bg-emerald-500/40 rounded-full h-auto"></div>
                                        <div>
                                            <p className="text-xs font-bold text-slate-900 dark:text-white">{isRtl ? 'اكتمل التدقيق الأمني' : 'Security Audit Complete'}</p>
                                            <p className="text-[10px] text-slate-500 mt-1">{isRtl ? 'صحة النظام 100% • قبل 3 ساعات' : 'System Health 100% • 3h ago'}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
