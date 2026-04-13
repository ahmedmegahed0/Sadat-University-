import React, { useMemo } from 'react';
import { useGlobalData } from '../../../context/GlobalDataContext';
import { useThemeContext } from '../../../context/ThemeContext';

export default function RankingsManagement() {
    const { rankings, addRanking, deleteRanking } = useGlobalData();
    const { isRtl } = useThemeContext();

    const handleAdd = () => {
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

    const handleDelete = (slug) => {
        if (window.confirm("Are you sure you want to delete this ranking?")) {
            deleteRanking(slug);
        }
    };

    const renderedRankings = useMemo(() => rankings.map((ranking) => (
        <tr key={ranking.slug} className="hover:bg-primary/5 transition-colors group">
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl overflow-hidden shrink-0 border border-slate-200 dark:border-white/10 p-1 bg-black/5 dark:bg-white/5 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary">emoji_events</span>
                    </div>
                    <div>
                        <p className="font-bold text-sm text-slate-900 dark:text-white">
                            {isRtl ? ranking.title : ranking.breadcrumb}
                        </p>
                        <p className="text-[10px] font-bold text-primary uppercase" dir="ltr">Slug: {ranking.slug}</p>
                    </div>
                </div>
            </td>
            <td className={`px-6 py-4 ${isRtl ? 'text-left' : 'text-right'}`}>
                <div className={`flex ${isRtl ? 'justify-start' : 'justify-end'} gap-1`}>
                    <button onClick={() => handleDelete(ranking.slug)} className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all" title={isRtl ? "حذف" : "Delete"}><span className="material-symbols-outlined text-lg">delete</span></button>
                </div>
            </td>
        </tr>
    )), [rankings, isRtl]);

    return (
        <div className={`p-4 md:p-8 max-w-[1600px] w-full mx-auto space-y-8 fade-in ${isRtl ? 'rtl' : 'ltr'}`}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                        {isRtl ? 'إدارة التصنيفات' : 'Rankings Management'}
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">
                        {isRtl ? 'أضف التصنيفات والاعتمادات العالمية والمحلية للجامعة.' : 'Add and manage rankings.'}
                    </p>
                </div>
                <button onClick={handleAdd} className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-primary/30 transition-all">
                    <span className="material-symbols-outlined">add</span>
                    {isRtl ? 'إضافة تصنيف' : 'Add Ranking'}
                </button>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-slate-200 dark:border-white/5 rounded-2xl overflow-hidden shadow-xl overflow-x-auto">
                <table className={`w-full ${isRtl ? 'text-right' : 'text-left'}`}>
                    <thead className="bg-slate-50 dark:bg-white/5 border-b border-slate-200 dark:border-white/5">
                        <tr>
                            <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">{isRtl ? 'التصنيف' : 'Ranking'}</th>
                            <th className={`px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest ${isRtl ? 'text-left' : 'text-right'}`}>{isRtl ? 'إجراءات' : 'Actions'}</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-slate-900 dark:text-white">
                        {renderedRankings}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
