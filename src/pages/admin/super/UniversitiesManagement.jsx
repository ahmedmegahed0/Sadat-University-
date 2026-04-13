import React, { useMemo } from 'react';
import { useGlobalData } from '../../../context/GlobalDataContext';
import { useThemeContext } from '../../../context/ThemeContext';

export default function UniversitiesManagement() {
    const { universities, addUniversity, deleteUniversity } = useGlobalData();
    const { isRtl } = useThemeContext();

    const handleAdd = () => {
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

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this university?")) {
            deleteUniversity(id);
        }
    };

    const renderedUniversities = useMemo(() => universities.map((uni) => (
        <tr key={uni.id} className="hover:bg-primary/5 transition-colors group">
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl overflow-hidden shrink-0 border border-slate-200 dark:border-white/10 p-1 bg-black/5 dark:bg-white/5">
                        <img alt={uni.nameEn} className="w-full h-full object-cover rounded-lg" loading="lazy" src={uni.image} />
                    </div>
                    <div>
                        <p className="font-bold text-sm text-slate-900 dark:text-white">
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
                <p className="text-sm font-medium text-slate-900 dark:text-white">{uni.students}</p>
            </td>
            <td className={`px-6 py-4 ${isRtl ? 'text-left' : 'text-right'}`}>
                <div className={`flex ${isRtl ? 'justify-start' : 'justify-end'} gap-1`}>
                    <button onClick={() => handleDelete(uni.id)} className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all" title={isRtl ? "حذف" : "Delete"}><span className="material-symbols-outlined text-lg">delete</span></button>
                </div>
            </td>
        </tr>
    )), [universities, isRtl]);

    return (
        <div className={`p-4 md:p-8 max-w-[1600px] w-full mx-auto space-y-8 fade-in ${isRtl ? 'rtl' : 'ltr'}`}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                        {isRtl ? 'إدارة الجامعات' : 'Universities Management'}
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">
                        {isRtl ? 'أضف الجامعات وعناصر التصنيف الخاصة بها.' : 'Add universities and their categorizations.'}
                    </p>
                </div>
                <button onClick={handleAdd} className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-primary/30 transition-all">
                    <span className="material-symbols-outlined">add</span>
                    {isRtl ? 'إضافة جامعة' : 'Add University'}
                </button>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-slate-200 dark:border-white/5 rounded-2xl overflow-hidden shadow-xl overflow-x-auto">
                <table className={`w-full ${isRtl ? 'text-right' : 'text-left'}`}>
                    <thead className="bg-slate-50 dark:bg-white/5 border-b border-slate-200 dark:border-white/5">
                        <tr>
                            <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">{isRtl ? 'الجامعة' : 'University'}</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center">{isRtl ? 'الفئة' : 'Category'}</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">{isRtl ? 'الطلاب' : 'Students'}</th>
                            <th className={`px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest ${isRtl ? 'text-left' : 'text-right'}`}>{isRtl ? 'إجراءات' : 'Actions'}</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-slate-900 dark:text-white">
                        {renderedUniversities}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
