import React, { useState } from 'react';
import { useGlobalData } from '../../../context/GlobalDataContext';
import { useThemeContext } from '../../../context/ThemeContext';
import FileUploader from '../../../components/common/FileUploader';

export default function PresidentManagement() {
    const { president, updatePresident } = useGlobalData();
    const { isRtl } = useThemeContext();

    const [formData, setFormData] = useState({
        nameEn: president?.nameEn || '',
        nameAr: president?.nameAr || '',
        titleEn: president?.titleEn || '',
        titleAr: president?.titleAr || '',
        messageEn: president?.messageEn || '',
        messageAr: president?.messageAr || '',
        image: president?.image || ''
    });

    const [isSaving, setIsSaving] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handlePublish = () => {
        setIsSaving(true);
        updatePresident(formData);
        setTimeout(() => setIsSaving(false), 800);
    };

    const handleDiscard = () => {
        setFormData({
            nameEn: president?.nameEn || '',
            nameAr: president?.nameAr || '',
            titleEn: president?.titleEn || '',
            titleAr: president?.titleAr || '',
            messageEn: president?.messageEn || '',
            messageAr: president?.messageAr || '',
            image: president?.image || ''
        });
    };

    return (
        <div className={`p-4 md:p-8 max-w-[1600px] w-full mx-auto space-y-8 fade-in ${isRtl ? 'rtl' : 'ltr'}`}>
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                        {isRtl ? 'قسم رئيس الجامعة' : 'President Section Management'}
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">
                        {isRtl ? 'تحديث كلمة وبيانات رئيس الجامعة.' : 'Update the university president\'s message and details.'}
                    </p>
                </div>
                <div className="flex space-x-4 rtl:space-x-reverse">
                    <button onClick={handleDiscard} className="bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 px-6 py-2.5 rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">
                        {isRtl ? 'إلغاء التغييرات' : 'Discard Changes'}
                    </button>
                    <button onClick={handlePublish} className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg font-bold shadow-lg shadow-primary/30 transition-all flex items-center gap-2">
                        <span className="material-symbols-outlined text-[20px]">{isSaving ? 'sync' : 'publish'}</span>
                        {isSaving ? (isRtl ? 'يتم الحفظ...' : 'Publishing...') : (isRtl ? 'نشر التحديث' : 'Publish Update')}
                    </button>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* English Column */}
                    <div className="space-y-4 border-slate-200 rtl:border-l ltr:border-r dark:border-white/10 rtl:pl-8 ltr:pr-8" dir="ltr">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">English Version</h4>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Name</label>
                            <input name="nameEn" value={formData.nameEn} onChange={handleChange} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-3 outline-none focus:border-primary dark:text-white" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Title</label>
                            <input name="titleEn" value={formData.titleEn} onChange={handleChange} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-3 outline-none focus:border-primary dark:text-white" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Message</label>
                            <textarea name="messageEn" value={formData.messageEn} onChange={handleChange} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-3 outline-none focus:border-primary min-h-[150px] dark:text-white" />
                        </div>
                    </div>

                    {/* Arabic Column */}
                    <div className="space-y-4" dir="rtl">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">النسخة العربية</h4>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 text-right">الاسم</label>
                            <input name="nameAr" value={formData.nameAr} onChange={handleChange} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-3 outline-none focus:border-primary dark:text-white" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 text-right">المسمى الوظيفي</label>
                            <input name="titleAr" value={formData.titleAr} onChange={handleChange} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-3 outline-none focus:border-primary dark:text-white" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 text-right">رسالة الرئيس</label>
                            <textarea name="messageAr" value={formData.messageAr} onChange={handleChange} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-3 outline-none focus:border-primary min-h-[150px] dark:text-white" />
                        </div>
                    </div>

                    <div className="lg:col-span-2 space-y-4">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-4">Media</h4>
                        <div>
                            <FileUploader 
                                label={isRtl ? 'الصورة الشخصية' : 'Portrait Image'}
                                value={formData.image}
                                onChange={val => setFormData({...formData, image: val})}
                                type="image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
