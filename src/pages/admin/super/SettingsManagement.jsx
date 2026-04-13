import React, { useState } from 'react';
import { useGlobalData } from '../../../context/GlobalDataContext';
import { useThemeContext } from '../../../context/ThemeContext';

export default function SettingsManagement() {
    const { settings, updateSettings } = useGlobalData();
    const { isRtl } = useThemeContext();

    const [formData, setFormData] = useState({
        universityNameEn: settings?.universityNameEn || '',
        universityNameAr: settings?.universityNameAr || '',
        contactEmail: settings?.contactEmail || '',
        contactPhone: settings?.contactPhone || '',
        logoLight: settings?.logoLight || '',
        logoDark: settings?.logoDark || ''
    });

    const [isSaving, setIsSaving] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        setIsSaving(true);
        updateSettings(formData);
        setTimeout(() => setIsSaving(false), 800);
    };

    const handleDiscard = () => {
        setFormData({
            universityNameEn: settings?.universityNameEn || '',
            universityNameAr: settings?.universityNameAr || '',
            contactEmail: settings?.contactEmail || '',
            contactPhone: settings?.contactPhone || '',
            logoLight: settings?.logoLight || '',
            logoDark: settings?.logoDark || ''
        });
    };

    return (
        <div className={`p-4 md:p-8 max-w-[1600px] w-full mx-auto space-y-8 fade-in ${isRtl ? 'rtl' : 'ltr'}`}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                        {isRtl ? 'الإعدادات العامة' : 'Global Settings'}
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">
                        {isRtl ? 'إدارة الهوية البصرية ومعلومات الاتصال الأساسية للجامعة.' : 'Manage the university\'s core identity and contact information.'}
                    </p>
                </div>
                <div className="flex space-x-4 rtl:space-x-reverse">
                    <button onClick={handleDiscard} className="bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 px-6 py-2.5 rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">
                        {isRtl ? 'إلغاء التغييرات' : 'Discard Changes'}
                    </button>
                    <button onClick={handleSave} className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg font-bold shadow-lg shadow-primary/30 transition-all flex items-center gap-2">
                        <span className="material-symbols-outlined text-[20px]">{isSaving ? 'sync' : 'save'}</span>
                        {isSaving ? (isRtl ? 'يتم الحفظ...' : 'Saving...') : (isRtl ? 'حفظ الإعدادات' : 'Save Settings')}
                    </button>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm space-y-8">
                <div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-6 border-b border-slate-100 dark:border-white/5 pb-4">
                        {isRtl ? 'المعلومات العامة' : 'General Information'}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-slate-500 mb-2">{isRtl ? 'اسم الجامعة (إنجليزي)' : 'University Name (EN)'}</label>
                            <input name="universityNameEn" value={formData.universityNameEn} onChange={handleChange} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-3 outline-none focus:border-primary dark:text-white" />
                        </div>
                        <div dir="rtl">
                            <label className="block text-sm font-bold text-slate-500 mb-2 text-right">{isRtl ? 'اسم الجامعة (عربي)' : 'University Name (AR)'}</label>
                            <input name="universityNameAr" value={formData.universityNameAr} onChange={handleChange} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-3 outline-none focus:border-primary dark:text-white" />
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-6 border-b border-slate-100 dark:border-white/5 pb-4">
                        {isRtl ? 'معلومات الاتصال' : 'Contact Information'}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-slate-500 mb-2">{isRtl ? 'البريد الإلكتروني' : 'Contact Email'}</label>
                            <input name="contactEmail" value={formData.contactEmail} onChange={handleChange} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-3 outline-none focus:border-primary dark:text-white" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-500 mb-2">{isRtl ? 'رقم الهاتف' : 'Contact Phone'}</label>
                            <input name="contactPhone" value={formData.contactPhone} onChange={handleChange} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-3 outline-none focus:border-primary dark:text-white" dir="ltr" />
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-6 border-b border-slate-100 dark:border-white/5 pb-4">
                        {isRtl ? 'العلامة التجارية' : 'Branding'}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-slate-500 mb-2">{isRtl ? 'رابط الشعار (الوضع الفاتح)' : 'Logo URL (Light Mode)'}</label>
                            <input name="logoLight" value={formData.logoLight} onChange={handleChange} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-3 outline-none focus:border-primary dark:text-white" />
                            {formData.logoLight && (
                                <div className="mt-4 p-4 bg-slate-100 rounded-xl inline-block">
                                    <img src={formData.logoLight} alt="Logo Light" className="h-12 w-auto" />
                                </div>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-500 mb-2">{isRtl ? 'رابط الشعار (الوضع المظلم)' : 'Logo URL (Dark Mode)'}</label>
                            <input name="logoDark" value={formData.logoDark} onChange={handleChange} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-3 outline-none focus:border-primary dark:text-white" />
                            {formData.logoDark && (
                                <div className="mt-4 p-4 bg-gray-900 rounded-xl inline-block">
                                    <img src={formData.logoDark} alt="Logo Dark" className="h-12 w-auto" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
