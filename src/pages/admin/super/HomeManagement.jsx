import React, { useState } from 'react';
import { useGlobalData } from '../../../context/GlobalDataContext';
import { useThemeContext } from '../../../context/ThemeContext';

export default function HomeManagement() {
    const { homeContent, updateHomeContent } = useGlobalData();
    const { isRtl } = useThemeContext();

    // Local state to track form edits
    const [formData, setFormData] = useState({
        heroTitleEn: homeContent.heroTitleEn || '',
        heroTitleAr: homeContent.heroTitleAr || '',
        heroSubtitleEn: homeContent.heroSubtitleEn || '',
        heroSubtitleAr: homeContent.heroSubtitleAr || '',
    });

    const [isSaving, setIsSaving] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handlePublish = () => {
        setIsSaving(true);
        updateHomeContent((prev) => ({
            ...prev,
            ...formData
        }));
        setTimeout(() => setIsSaving(false), 800); // Simulate network delay
    };

    const handleDiscard = () => {
        setFormData({
            heroTitleEn: homeContent.heroTitleEn || '',
            heroTitleAr: homeContent.heroTitleAr || '',
            heroSubtitleEn: homeContent.heroSubtitleEn || '',
            heroSubtitleAr: homeContent.heroSubtitleAr || '',
        });
    };

    return (
        <div className={`p-4 md:p-8 max-w-[1600px] w-full mx-auto space-y-8 fade-in ${isRtl ? 'rtl' : 'ltr'}`}>
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <nav className="flex space-x-2 rtl:space-x-reverse text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                        <span>{isRtl ? 'الإدارة' : 'Management'}</span>
                        <span>/</span>
                        <span className="text-primary">{isRtl ? 'الصفحة الرئيسية' : 'Home Page'}</span>
                    </nav>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                        {isRtl ? 'تعديل الصفحة الرئيسية' : 'Home Page Editorial'}
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">
                        {isRtl ? 'إدارة محتوى الواجهة الرئيسية للبوابة الجامعية.' : 'Curate the front-facing hero experience for the University portal.'}
                    </p>
                </div>
                <div className="flex space-x-4 rtl:space-x-reverse">
                    <button onClick={handleDiscard} className="bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 px-6 py-2.5 rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">
                        {isRtl ? 'إلغاء التغييرات' : 'Discard Changes'}
                    </button>
                    <button onClick={handlePublish} className="bg-gradient-to-r from-primary to-blue-600 text-white px-6 py-2.5 rounded-lg font-bold shadow-lg shadow-primary/30 hover:brightness-110 transition-all flex items-center gap-2">
                        <span className="material-symbols-outlined text-[20px]">{isSaving ? 'sync' : 'publish'}</span>
                        {isSaving ? (isRtl ? 'يتم الحفظ...' : 'Publishing...') : (isRtl ? 'نشر التحديث' : 'Publish Update')}
                    </button>
                </div>
            </div>

            {/* Layout Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Form Section */}
                <div className="col-span-1 lg:col-span-12 space-y-8">
                    
                    {/* Content Card container - English side by side with Arabic */}
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm space-y-6">
                        <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
                            <span className="w-8 h-8 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] flex items-center justify-center">
                                <span className="material-symbols-outlined text-white text-[18px]">edit_note</span>
                            </span>
                            <h3 className="font-bold text-lg text-slate-900 dark:text-white">{isRtl ? 'محتوى الواجهة (البطل)' : 'Hero Content'}</h3>
                        </div>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* English Column */}
                            <div className="space-y-4 border-slate-200 rtl:border-l ltr:border-r dark:border-white/10 rtl:pl-8 ltr:pr-8" dir="ltr">
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">English Version</h4>
                                <div className="group">
                                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 transition-colors group-focus-within:text-primary">Hero Title</label>
                                    <input 
                                        name="heroTitleEn"
                                        value={formData.heroTitleEn}
                                        onChange={handleChange}
                                        className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-primary/20 rounded-xl p-4 font-medium text-slate-900 dark:text-white transition-all outline-none" 
                                        type="text" 
                                    />
                                </div>
                                <div className="group">
                                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 transition-colors group-focus-within:text-primary">Hero Description</label>
                                    <textarea 
                                        name="heroSubtitleEn"
                                        value={formData.heroSubtitleEn}
                                        onChange={handleChange}
                                        className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-primary/20 rounded-xl p-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300 transition-all outline-none resize-none" 
                                        rows="4"
                                    ></textarea>
                                </div>
                            </div>
                            
                            {/* Arabic Column */}
                            <div className="space-y-4" dir="rtl">
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">النسخة العربية</h4>
                                <div className="group">
                                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 transition-colors group-focus-within:text-primary">العنوان الرئيسي</label>
                                    <input 
                                        name="heroTitleAr"
                                        value={formData.heroTitleAr}
                                        onChange={handleChange}
                                        className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-primary/20 rounded-xl p-4 font-medium text-slate-900 dark:text-white transition-all outline-none" 
                                        type="text" 
                                    />
                                </div>
                                <div className="group">
                                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 transition-colors group-focus-within:text-primary">الوصف</label>
                                    <textarea 
                                        name="heroSubtitleAr"
                                        value={formData.heroSubtitleAr}
                                        onChange={handleChange}
                                        className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-primary/20 rounded-xl p-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300 transition-all outline-none resize-none" 
                                        rows="4"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
            {/* Live Preview context */}
            <div className="border border-slate-200 dark:border-white/5 rounded-2xl p-6 bg-slate-50 dark:bg-gray-800/50">
                <div className="flex items-center space-x-3 rtl:space-x-reverse text-blue-600 dark:text-blue-400">
                    <span className="material-symbols-outlined">visibility</span>
                    <p className="text-sm font-bold">{isRtl ? 'معاينة التحديثات :' : 'Live Preview Context:'}</p>
                    <p className="text-sm">{isRtl ? 'انتقل إلى الصفحة الرئيسية خارج لوحة التحكم لرؤية التغييرات المباشرة باللغتين.' : 'Navigate to the global Home page outside the dashboard to see your published changes instantly reflected in both languages.'}</p>
                </div>
            </div>

        </div>
    );
}
