import React, { useState } from 'react';
import { useGlobalData } from '../../../context/GlobalDataContext';
import { useThemeContext } from '../../../context/ThemeContext';

export default function NewsManagement() {
    const { news, addNews, updateNews, deleteNews } = useGlobalData();
    const { isRtl } = useThemeContext();

    const [isEditing, setIsEditing] = useState(false);
    const [currentNewsId, setCurrentNewsId] = useState(null);
    const [formData, setFormData] = useState({
        titleEn: '', titleAr: '', summaryEn: '', summaryAr: '', date: '', image: ''
    });

    const handleOpenForm = (newsItem = null) => {
        if (newsItem) {
            setIsEditing(true);
            setCurrentNewsId(newsItem.id);
            setFormData(newsItem);
        } else {
            setIsEditing(true);
            setCurrentNewsId(null);
            setFormData({ titleEn: '', titleAr: '', summaryEn: '', summaryAr: '', date: new Date().toISOString().split('T')[0], image: '' });
        }
    };

    const handleCloseForm = () => {
        setIsEditing(false);
        setCurrentNewsId(null);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        if (currentNewsId) {
            updateNews(currentNewsId, formData);
        } else {
            addNews(formData);
        }
        handleCloseForm();
    };

    const handleDelete = (id) => {
        if (window.confirm(isRtl ? 'هل أنت متأكد من حذف هذا الخبر؟' : 'Are you sure you want to delete this news item?')) {
            deleteNews(id);
        }
    };

    return (
        <div className={`p-4 md:p-8 max-w-[1600px] w-full mx-auto space-y-8 fade-in ${isRtl ? 'rtl' : 'ltr'}`}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                        {isRtl ? 'إدارة الأخبار' : 'News Management'}
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">
                        {isRtl ? 'نشر وإدارة جميع الأخبار الجامعية.' : 'Publish and manage all university news.'}
                    </p>
                </div>
                {!isEditing && (
                    <button onClick={() => handleOpenForm()} className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-primary/30 transition-all">
                        <span className="material-symbols-outlined">add</span>
                        {isRtl ? 'إضافة خبر' : 'Add News'}
                    </button>
                )}
            </div>

            {isEditing ? (
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-slate-200 dark:border-white/5 shadow-xl fade-in">
                    <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">
                        {currentNewsId ? (isRtl ? 'تعديل الخبر' : 'Edit News') : (isRtl ? 'إضافة خبر جديد' : 'Create New News')}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-slate-500 mb-2">{isRtl ? 'العنوان (إنجليزي)' : 'Title (EN)'}</label>
                                <input name="titleEn" value={formData.titleEn} onChange={handleChange} className="w-full border rounded-xl p-3 bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 dark:text-white outline-none focus:border-primary" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-500 mb-2">{isRtl ? 'الوصف (إنجليزي)' : 'Summary (EN)'}</label>
                                <textarea name="summaryEn" value={formData.summaryEn} onChange={handleChange} className="w-full border rounded-xl p-3 bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 dark:text-white outline-none focus:border-primary" rows="3"></textarea>
                            </div>
                        </div>
                        <div className="space-y-4" dir="rtl">
                            <div>
                                <label className="block text-sm font-bold text-slate-500 mb-2 text-right">{isRtl ? 'العنوان (عربي)' : 'Title (AR)'}</label>
                                <input name="titleAr" value={formData.titleAr} onChange={handleChange} className="w-full border rounded-xl p-3 bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 dark:text-white outline-none focus:border-primary" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-500 mb-2 text-right">{isRtl ? 'الوصف (عربي)' : 'Summary (AR)'}</label>
                                <textarea name="summaryAr" value={formData.summaryAr} onChange={handleChange} className="w-full border rounded-xl p-3 bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 dark:text-white outline-none focus:border-primary" rows="3"></textarea>
                            </div>
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-bold text-slate-500 mb-2">{isRtl ? 'رابط الصورة' : 'Image URL'}</label>
                            <input name="image" value={formData.image} onChange={handleChange} className="w-full border rounded-xl p-3 bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 dark:text-white outline-none focus:border-primary" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-bold text-slate-500 mb-2">{isRtl ? 'التاريخ' : 'Date'}</label>
                            <input name="date" type="date" value={formData.date} onChange={handleChange} className="w-full max-w-xs border rounded-xl p-3 bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 dark:text-white outline-none focus:border-primary" />
                        </div>
                    </div>
                    
                    {formData.image && (
                         <div className="mt-4">
                             <img src={formData.image} className="h-40 w-auto rounded-lg object-cover" alt="Preview" />
                         </div>
                    )}

                    <div className="mt-8 flex gap-4">
                        <button onClick={handleSave} className="bg-primary text-white px-6 py-2.5 rounded-lg font-bold hover:bg-primary/90 transition">
                            {isRtl ? 'حفظ الخبر' : 'Save News'}
                        </button>
                        <button onClick={handleCloseForm} className="bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-white px-6 py-2.5 rounded-lg font-bold hover:bg-slate-300 dark:hover:bg-white/20 transition">
                            {isRtl ? 'إلغاء' : 'Cancel'}
                        </button>
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {news.map(item => (
                        <div key={item.id} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-white/5 shadow-sm group">
                            <div className="h-48 relative">
                                <img src={item.image} alt={item.titleEn} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-md text-white px-3 py-1 text-xs font-bold rounded-full">
                                    {item.date}
                                </div>
                            </div>
                            <div className="p-5">
                                <h4 className="font-bold text-lg text-slate-900 dark:text-white line-clamp-1 mb-2">
                                    {isRtl ? item.titleAr : item.titleEn}
                                </h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-4">
                                    {isRtl ? item.summaryAr : item.summaryEn}
                                </p>
                                <div className="flex gap-2 justify-end">
                                    <button onClick={() => handleOpenForm(item)} className="p-2 text-slate-400 hover:text-primary bg-slate-100 hover:bg-primary/10 dark:bg-white/5 rounded-lg transition-colors">
                                        <span className="material-symbols-outlined text-[18px]">edit</span>
                                    </button>
                                    <button onClick={() => handleDelete(item.id)} className="p-2 text-slate-400 hover:text-red-500 bg-slate-100 hover:bg-red-500/10 dark:bg-white/5 rounded-lg transition-colors">
                                        <span className="material-symbols-outlined text-[18px]">delete</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    {news.length === 0 && (
                        <div className="col-span-full py-12 text-center text-slate-500">
                            {isRtl ? 'لا توجد أخبار.' : 'No news found.'}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
