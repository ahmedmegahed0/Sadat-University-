import React, { useState, useMemo } from 'react';
import { useGlobalData } from '../../../context/GlobalDataContext';
import { useThemeContext } from '../../../context/ThemeContext';
import FileUploader from '../../../components/common/FileUploader';

export default function RankingsManagement() {
    const { rankings, addRanking, updateRanking, deleteRanking } = useGlobalData();
    const { isRtl } = useThemeContext();

    const [isAdding, setIsAdding] = useState(false);
    const [editingSlug, setEditingSlug] = useState(null);
    const [formData, setFormData] = useState({
        slug: '',
        title: '',
        breadcrumb: '',
        subtitle: '',
        link: '',
        bgImage: '',
        logoImage: '',
        aboutText: ''
    });

    const handleSave = (e) => {
        e.preventDefault();
        const rankData = {
            ...formData,
            breadcrumb: formData.breadcrumb || formData.title,
            aboutText: formData.aboutText ? formData.aboutText.split('\n').filter(p => p.trim()) : [],
            achievements: formData.achievements || [], stats: formData.stats || [], reportUrl: formData.link || formData.reportUrl || "#", methodologyUrl: formData.methodologyUrl || "#"
        };
        
        if (editingSlug) {
            updateRanking(editingSlug, rankData);
        } else {
            addRanking(rankData);
        }
        
        setIsAdding(false);
        setEditingSlug(null);
        setFormData({
            slug: '', title: '', breadcrumb: '', subtitle: '', link: '', bgImage: '', logoImage: '', aboutText: ''
        });
    };

    const handleEdit = (ranking) => {
        setFormData({
            ...ranking,
            link: ranking.link || ranking.reportUrl || '',
            aboutText: ranking.aboutText ? ranking.aboutText.join('\n') : ''
        });
        setEditingSlug(ranking.slug);
        setIsAdding(true);
    };

    const handleCancel = () => {
        setIsAdding(false);
        setEditingSlug(null);
        setFormData({
            slug: '', title: '', breadcrumb: '', subtitle: '', link: '', bgImage: '', logoImage: '', aboutText: ''
        });
    };

    const handleDelete = (slug) => {
        if (window.confirm(isRtl ? "هل أنت متأكد من حذف هذا التصنيف؟" : "Are you sure you want to delete this ranking?")) {
            deleteRanking(slug);
        }
    };

    const renderedRankings = useMemo(() => rankings.map((ranking) => (
        <tr key={ranking.slug} className="hover:bg-primary/5 transition-colors group">
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl overflow-hidden shrink-0 border border-slate-200 dark:border-white/10 p-1 bg-black/5 dark:bg-white/5 flex items-center justify-center">
                        {ranking.logoImage ? (
                            <img alt={ranking.title} className="w-full h-full object-contain" src={ranking.logoImage} />
                        ) : (
                            <span className="material-symbols-outlined text-primary">emoji_events</span>
                        )}
                    </div>
                    <div>
                        <p className="font-bold text-sm text-slate-900 dark:text-white">
                            {isRtl ? ranking.title : ranking.breadcrumb}
                        </p>
                        <p className="text-[10px] font-bold text-primary uppercase" dir="ltr">Slug: {ranking.slug}</p>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-center">
                {ranking.link ? (
                    <a href={ranking.link} target="_blank" rel="noreferrer" className="text-primary hover:underline text-sm font-medium inline-flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">link</span>
                        {isRtl ? 'فتح' : 'Open'}
                    </a>
                ) : (
                    <span className="text-slate-400 text-sm">-</span>
                )}
            </td>
            <td className={`px-6 py-4 ${isRtl ? 'text-left' : 'text-right'}`}>
                <div className={`flex ${isRtl ? 'justify-start' : 'justify-end'} gap-1`}>
                    <button onClick={() => handleEdit(ranking)} className="p-2 text-slate-400 hover:text-blue-500 hover:bg-blue-500/10 rounded-lg transition-all" title={isRtl ? "تعديل" : "Edit"}>
                        <span className="material-symbols-outlined text-lg">edit</span>
                    </button>
                    <button onClick={() => handleDelete(ranking.slug)} className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all" title={isRtl ? "حذف" : "Delete"}>
                        <span className="material-symbols-outlined text-lg">delete</span>
                    </button>
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
                {!isAdding && (
                    <button onClick={() => {
                        setEditingSlug(null);
                        setFormData({
                            slug: '', title: '', breadcrumb: '', subtitle: '', link: '', bgImage: '', logoImage: '', aboutText: ''
                        });
                        setIsAdding(true);
                    }} className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-primary/30 transition-all">
                        <span className="material-symbols-outlined">add</span>
                        {isRtl ? 'إضافة تصنيف' : 'Add Ranking'}
                    </button>
                )}
            </div>

            {isAdding ? (
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-white/5 shadow-xl">
                    <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100 dark:border-white/5">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                            {editingSlug ? (isRtl ? 'تعديل التصنيف' : 'Edit Ranking') : (isRtl ? 'إضافة تصنيف جديد' : 'Add New Ranking')}
                        </h3>
                        <button onClick={handleCancel} className="p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 rounded-full transition-colors">
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </div>

                    <form onSubmit={handleSave} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <FileUploader 
                                label={isRtl ? 'شعار التصنيف' : 'Ranking Logo'}
                                value={formData.logoImage}
                                onChange={val => setFormData({...formData, logoImage: val})}
                                type="image"
                            />
                            <FileUploader 
                                label={isRtl ? 'صورة الغلاف' : 'Cover Background Image'}
                                value={formData.bgImage}
                                onChange={val => setFormData({...formData, bgImage: val})}
                                type="image"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{isRtl ? 'الاسم المختصر الفريد (Slug)' : 'Unique Slug (e.g. qs-ranking)'}</label>
                                <input required value={formData.slug} onChange={e => setFormData({...formData, slug: e.target.value.toLowerCase().replace(/\s+/g, '-')})} className="w-full border rounded-xl p-3 dark:bg-gray-900 dark:border-gray-700 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{isRtl ? 'العنوان اللطيف (AR)' : 'Title (AR)'}</label>
                                <input required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full border rounded-xl p-3 dark:bg-gray-900 dark:border-gray-700 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{isRtl ? 'العنوان المختصر (EN Name)' : 'Breadcrumb (EN)'}</label>
                                <input required value={formData.breadcrumb} onChange={e => setFormData({...formData, breadcrumb: e.target.value})} className="w-full border rounded-xl p-3 dark:bg-gray-900 dark:border-gray-700 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{isRtl ? 'عنوان فرعي' : 'Subtitle'}</label>
                                <input placeholder="Global ranking indicator..." value={formData.subtitle} onChange={e => setFormData({...formData, subtitle: e.target.value})} className="w-full border rounded-xl p-3 dark:bg-gray-900 dark:border-gray-700 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{isRtl ? 'الرابط المرجعي (URL)' : 'Reference Link (URL)'}</label>
                                <input type="url" placeholder="https://" value={formData.link} onChange={e => setFormData({...formData, link: e.target.value})} className="w-full border rounded-xl p-3 dark:bg-gray-900 dark:border-gray-700 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{isRtl ? 'نبذة عن التصنيف' : 'About Ranking'}</label>
                                <textarea rows="4" placeholder={isRtl ? 'تفاصيل ومعلومات حول هذا التصنيف...' : 'Details and information about this ranking...'} value={formData.aboutText} onChange={e => setFormData({...formData, aboutText: e.target.value})} className="w-full border rounded-xl p-3 dark:bg-gray-900 dark:border-gray-700 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"></textarea>
                            </div>
                        </div>

                        <div className="flex justify-end pt-6 border-t border-slate-100 dark:border-white/5 space-x-3 rtl:space-x-reverse">
                            <button type="button" onClick={handleCancel} className="px-6 py-2.5 rounded-xl font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors">
                                {isRtl ? 'إلغاء' : 'Cancel'}
                            </button>
                            <button type="submit" className="px-6 py-2.5 rounded-xl font-bold bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/30 transition-all">
                                {editingSlug ? (isRtl ? 'حفظ التعديلات' : 'Save Changes') : (isRtl ? 'حفظ التصنيف' : 'Save Ranking')}
                            </button>
                        </div>
                    </form>
                </div>
            ) : (
                <div className="bg-white dark:bg-gray-800 border border-slate-200 dark:border-white/5 rounded-2xl overflow-hidden shadow-xl overflow-x-auto">
                    <table className={`w-full ${isRtl ? 'text-right' : 'text-left'}`}>
                        <thead className="bg-slate-50 dark:bg-white/5 border-b border-slate-200 dark:border-white/5">
                            <tr>
                                <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">{isRtl ? 'التصنيف' : 'Ranking'}</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center">{isRtl ? 'الرابط' : 'Link'}</th>
                                <th className={`px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest ${isRtl ? 'text-left' : 'text-right'}`}>{isRtl ? 'إجراءات' : 'Actions'}</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-slate-900 dark:text-white">
                            {rankings.length === 0 ? (
                                <tr>
                                    <td colSpan="3" className="px-6 py-8 text-center text-slate-500">
                                        {isRtl ? 'لا توجد تصنيفات حالياً' : 'No rankings currently.'}
                                    </td>
                                </tr>
                            ) : renderedRankings}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
