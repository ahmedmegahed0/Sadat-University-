import React, { useState, useMemo, useCallback } from 'react';
import { useThemeContext } from '../../../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { useGlobalData } from '../../../context/GlobalDataContext';

export default function SuperAdminOverview() {
    const { isRtl, isDarkMode } = useThemeContext();
    const navigate = useNavigate();
    const { universities, addUniversity, deleteUniversity, rankings, addRanking, deleteRanking } = useGlobalData();

    const [activeTab, setActiveTab] = useState('universities');

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
            }
        }
    };

    const handleDeleteUniversity = (id) => {
        if (window.confirm("Are you sure you want to delete this university?")) {
            deleteUniversity(id);
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
            }
        }
    };

    const handleDeleteRanking = useCallback((slug) => {
        if (window.confirm("Are you sure you want to delete this ranking?")) {
            deleteRanking(slug);
        }
    }, [deleteRanking]);

    const renderedUniversities = useMemo(() => universities.map((uni) => (
        <tr key={uni.id} className="hover:bg-primary/5 transition-colors group">
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl overflow-hidden shrink-0 border border-slate-200 dark:border-white/10 p-1 bg-black/5 dark:bg-white/5">
                        <img alt={uni.nameEn} className="w-full h-full object-cover rounded-lg" loading="lazy" src={uni.image} />
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
    )), [universities, isRtl, navigate, handleDeleteUniversity]);

    const renderedRankings = useMemo(() => rankings.map((ranking) => (
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
    )), [rankings, isRtl, navigate, handleDeleteRanking]);

    return (
        <div className="p-4 md:p-8 max-w-[1600px] w-full mx-auto space-y-8 fade-in">
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
                                    {isRtl ? 'الجامعات' : 'Universities'}
                                </button>
                                <button onClick={() => setActiveTab('rankings')} className={`text-base font-bold uppercase tracking-widest ${activeTab === 'rankings' ? 'text-primary' : 'text-slate-500 dark:text-slate-400'} transition-colors`}>
                                    {isRtl ? 'التصنيفات' : 'Rankings'}
                                </button>
                            </div>
                        </div>
                        <button onClick={activeTab === 'universities' ? handleAddUniversity : handleAddRanking} className={`bg-primary hover:bg-primary/90 text-slate-900 dark:text-white px-3 md:px-5 py-2 md:py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all shadow-lg shadow-primary/20 ${isRtl ? 'flex-row-reverse' : ''}`}>
                            <span className="material-symbols-outlined text-sm">add</span> {isRtl ? 'إضافة' : 'ADD NEW'}
                        </button>
                    </div>

                    <div className="bg-white dark:bg-gray-800 border border-slate-200 dark:border-white/5 rounded-2xl overflow-hidden shadow-xl overflow-x-auto">
                        <table className={`w-full ${isRtl ? 'text-right' : 'text-left'}`}>
                            <thead className="bg-slate-50 dark:bg-white/5 border-b border-slate-200 dark:border-white/5">
                                <tr>
                                    <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">{isRtl ? 'الكيان' : 'Entity'}</th>
                                    <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center">{activeTab === 'universities' ? (isRtl ? 'الفئة' : 'Category') : ''}</th>
                                    <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">{activeTab === 'universities' ? (isRtl ? 'الطلاب' : 'Students') : ''}</th>
                                    <th className={`px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest ${isRtl ? 'text-left' : 'text-right'}`}>{isRtl ? 'إجراءات' : 'Actions'}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-slate-900 dark:text-white">
                                {activeTab === 'universities' ? renderedUniversities : renderedRankings}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Broadcast Widget */}
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
                                    {isRtl ? 'عنوان البث' : 'Subject Heading'}
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
                            <button className="w-full bg-primary hover:bg-primary/90 text-slate-900 border border-primary font-bold py-3.5 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-widest">
                                <span className="material-symbols-outlined text-lg">send</span> {isRtl ? 'بث' : 'Execute Broadcast'}
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
