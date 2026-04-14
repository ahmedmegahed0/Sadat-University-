import React, { useState, useEffect } from 'react';
import { useThemeContext } from '../../context/ThemeContext';
import { useCollegeContext } from '../../context/CollegeContext';
import { useAuth } from '../../context/AuthContext';
import FileUploader from '../../components/common/FileUploader';

export default function AdminDean() {
    const { isRtl } = useThemeContext();
    const { currentCollegeId } = useAuth();
    const { colleges, updateDeanSection } = useCollegeContext();
    
    const college = colleges[currentCollegeId];
    const deanSection = college?.deanSection || { name: '', nameAr: '', message: '', messageAr: '', image: '' };

    const [formData, setFormData] = useState(deanSection);
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        setFormData(deanSection);
    }, [currentCollegeId]);

    const handleSave = (e) => {
        e.preventDefault();
        setIsSaving(true);
        updateDeanSection(currentCollegeId, formData);
        setTimeout(() => setIsSaving(false), 500);
    };

    return (
        <div className="flex-1 overflow-y-auto bg-slate-50/50 dark:bg-gray-900/50 p-4 md:p-8">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                            {isRtl ? 'قسم العميد' : 'Dean Section Management'}
                        </h2>
                        <p className="text-slate-500 mt-1 font-medium">
                            {isRtl ? 'تحديث بيانات رسالة العميد' : 'Update the Dean\'s welcome message and details'}
                        </p>
                    </div>
                </div>

                {/* Form */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-10 border border-slate-200 dark:border-gray-700 shadow-sm">
                    <form onSubmit={handleSave} className="space-y-6">
                        
                        <div className="mb-8">
                            <FileUploader 
                                label={isRtl ? 'صورة العميد' : 'Dean Image'}
                                value={formData.image}
                                onChange={val => setFormData({...formData, image: val})}
                                type="image"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{isRtl ? 'اسم العميد (EN)' : 'Dean Name (EN)'}</label>
                                <input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full border rounded-xl p-3 dark:bg-gray-900 dark:border-gray-700 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{isRtl ? 'اسم العميد (AR)' : 'Dean Name (AR)'}</label>
                                <input required value={formData.nameAr} onChange={e => setFormData({...formData, nameAr: e.target.value})} className="w-full border rounded-xl p-3 dark:bg-gray-900 dark:border-gray-700 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                            </div>
                        </div>
                        
                        <div>
                            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{isRtl ? 'رسالة الترحيب (EN)' : 'Welcome Message (EN)'}</label>
                            <textarea required rows="4" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full border rounded-xl p-3 dark:bg-gray-900 dark:border-gray-700 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"></textarea>
                        </div>
                        
                        <div>
                            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{isRtl ? 'رسالة الترحيب (AR)' : 'Welcome Message (AR)'}</label>
                            <textarea required rows="4" value={formData.messageAr} onChange={e => setFormData({...formData, messageAr: e.target.value})} className="w-full border rounded-xl p-3 dark:bg-gray-900 dark:border-gray-700 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"></textarea>
                        </div>

                        <div className="flex justify-end pt-4">
                            <button type="submit" disabled={isSaving} className="flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-bold text-white hover:bg-blue-700 transition-all shadow-lg shadow-primary/20 disabled:opacity-70">
                                <span className="material-symbols-outlined">{isSaving ? 'sync' : 'save'}</span>
                                <span>{isSaving ? (isRtl ? 'جاري الحفظ...' : 'Saving...') : (isRtl ? 'حفظ التغييرات' : 'Save Changes')}</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
