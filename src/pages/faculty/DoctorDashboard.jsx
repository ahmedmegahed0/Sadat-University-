import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useThemeContext } from '../../context/ThemeContext';
import { useFacultyContext } from '../../context/FacultyContext';
import { useCollegeContext } from '../../context/CollegeContext';
import { useAuth } from '../../context/AuthContext';
import FileUploader from '../../components/common/FileUploader';

const LANGUAGE_OPTIONS = [
    'Arabic', 'English', 'French', 'German', 'Spanish',
    'Italian', 'Chinese', 'Japanese', 'Portuguese', 'Russian'
];

export default function DoctorDashboard() {
    const { isRtl } = useThemeContext();
    const { facultyList, updateOwnProfile, addFaculty } = useFacultyContext();
    const { colleges } = useCollegeContext();
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const collegesList = Object.values(colleges);

    // Find this doctor's existing faculty record (matched by id from auth session)
    const existingRecord = facultyList.find(f => f.id === user?.id);

    // Form state — pre-filled from existing record or from auth user data
    const [formData, setFormData] = useState({
        name: existingRecord?.name || user?.name || '',
        image: existingRecord?.image || '',
        specialization: existingRecord?.specialization || '',
        languages: existingRecord?.languages || [],
        cv: existingRecord?.cv || '',
        portfolio: existingRecord?.portfolio || '',
        colleges: existingRecord?.colleges || [],
        role: existingRecord?.role || 'doctor',
    });

    const [saved, setSaved] = useState(false);
    const [langInput, setLangInput] = useState('');

    // Keep form in sync if facultyList updates (e.g., another tab saves)
    useEffect(() => {
        if (existingRecord) {
            setFormData({
                name: existingRecord.name || '',
                image: existingRecord.image || '',
                specialization: existingRecord.specialization || '',
                languages: existingRecord.languages || [],
                cv: existingRecord.cv || '',
                portfolio: existingRecord.portfolio || '',
                colleges: existingRecord.colleges || [],
                role: existingRecord.role || 'doctor',
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user?.id]);

    const handleSave = (e) => {
        e.preventDefault();
        if (!user?.id) return;

        const payload = { ...formData, id: user.id, email: user.email };

        if (existingRecord) {
            updateOwnProfile(user.id, payload);
        } else {
            // First time — create the faculty record linked to this doctor account
            addFaculty({ ...payload, id: user.id });
        }

        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    const toggleCollege = (cId) => {
        setFormData(prev => ({
            ...prev,
            colleges: prev.colleges.includes(cId)
                ? prev.colleges.filter(id => id !== cId)
                : [...prev.colleges, cId]
        }));
    };

    const addLanguage = (lang) => {
        const trimmed = lang.trim();
        if (trimmed && !formData.languages.includes(trimmed)) {
            setFormData(prev => ({ ...prev, languages: [...prev.languages, trimmed] }));
        }
        setLangInput('');
    };

    const removeLanguage = (lang) => {
        setFormData(prev => ({ ...prev, languages: prev.languages.filter(l => l !== lang) }));
    };

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900">

            {/* Top Header Bar */}
            <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-10">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                            <span className="material-symbols-outlined text-primary text-xl">school</span>
                        </div>
                        <div>
                            <h1 className="text-base font-bold text-slate-900 dark:text-white leading-none">
                                {isRtl ? 'لوحة التحكم الشخصية' : 'Doctor Dashboard'}
                            </h1>
                            <p className="text-xs text-slate-500 mt-0.5">{user?.email}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        {existingRecord && (
                            <a
                                href={`/faculty/${user?.id}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                            >
                                <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                                {isRtl ? 'عرض الملف العام' : 'View Public Profile'}
                            </a>
                        )}
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-1.5 text-sm font-bold text-slate-500 hover:text-red-500 transition-colors"
                        >
                            <span className="material-symbols-outlined text-[18px]">logout</span>
                            {isRtl ? 'خروج' : 'Logout'}
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

                {/* Welcome Banner */}
                <div className="bg-gradient-to-r from-primary/10 to-blue-600/10 dark:from-primary/20 dark:to-blue-600/20 rounded-2xl p-6 mb-8 border border-primary/10 flex items-center gap-5">
                    <div className="w-14 h-14 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-700 shrink-0 ring-4 ring-white dark:ring-slate-800 shadow-md">
                        {formData.image
                            ? <img src={formData.image} alt={formData.name} className="w-full h-full object-cover" />
                            : <span className="material-symbols-outlined text-3xl text-slate-400 w-full h-full flex items-center justify-center">person</span>
                        }
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                            {isRtl ? `مرحباً، ${formData.name || user?.name}` : `Welcome, ${formData.name || user?.name}`}
                        </h2>
                        <p className="text-sm text-slate-500 mt-0.5">
                            {formData.specialization
                                ? formData.specialization
                                : (isRtl ? 'أكمل ملفك الشخصي ليظهر في صفحات الكليات' : 'Complete your profile to appear on college pages')}
                        </p>
                    </div>
                </div>

                {/* Save Success Toast */}
                {saved && (
                    <div className="mb-6 flex items-center gap-3 bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-700 text-emerald-700 dark:text-emerald-400 rounded-xl px-5 py-3 font-medium text-sm animate-in fade-in slide-in-from-top-2 duration-300">
                        <span className="material-symbols-outlined text-xl">check_circle</span>
                        {isRtl ? 'تم حفظ ملفك الشخصي بنجاح! سيظهر تلقائياً في صفحات الكليات.' : 'Profile saved successfully! It will now appear on all faculty pages.'}
                    </div>
                )}

                {/* Profile Form */}
                <form onSubmit={handleSave}>
                    <div className="space-y-6">

                        {/* Section: Basic Info */}
                        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
                            <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                                <h3 className="font-bold text-slate-800 dark:text-white flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-xl">badge</span>
                                    {isRtl ? 'المعلومات الأساسية' : 'Basic Information'}
                                </h3>
                            </div>
                            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">

                                {/* Name */}
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                                        {isRtl ? 'الاسم الكامل' : 'Full Name'} <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        placeholder={isRtl ? 'د. أحمد محمد' : 'Dr. Ahmed Mohammed'}
                                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition-all"
                                    />
                                </div>

                                {/* Specialization */}
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                                        {isRtl ? 'التخصص' : 'Specialization'} <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        value={formData.specialization}
                                        onChange={e => setFormData({ ...formData, specialization: e.target.value })}
                                        placeholder={isRtl ? 'الذكاء الاصطناعي وتعلم الآلة' : 'Artificial Intelligence & Machine Learning'}
                                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition-all"
                                    />
                                </div>

                                {/* Profile Image */}
                                <div className="space-y-2 md:col-span-2">
                                    <FileUploader 
                                        label={isRtl ? 'صورة الملف الشخصي' : 'Profile Image'}
                                        value={formData.image}
                                        onChange={(val) => setFormData({ ...formData, image: val })}
                                        type="image"
                                    />
                                </div>

                            </div>
                        </div>

                        {/* Section: Links */}
                        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
                            <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                                <h3 className="font-bold text-slate-800 dark:text-white flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-xl">link</span>
                                    {isRtl ? 'الروابط' : 'Links'}
                                </h3>
                            </div>
                            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">

                                {/* CV Document */}
                                <div className="space-y-2">
                                    <FileUploader 
                                        label={isRtl ? 'السيرة الذاتية (CV)' : 'CV Document'}
                                        value={formData.cv}
                                        onChange={(val) => setFormData({ ...formData, cv: val })}
                                        type="document"
                                        accept="application/pdf"
                                    />
                                </div>

                                {/* Portfolio URL */}
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                                        {isRtl ? 'رابط الموقع الشخصي (Portfolio)' : 'Portfolio URL'}
                                    </label>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute top-1/2 -translate-y-1/2 left-3 text-slate-400 text-[18px]">language</span>
                                        <input
                                            type="url"
                                            value={formData.portfolio}
                                            onChange={e => setFormData({ ...formData, portfolio: e.target.value })}
                                            placeholder="https://myportfolio.com"
                                            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition-all"
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Section: Languages */}
                        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
                            <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                                <h3 className="font-bold text-slate-800 dark:text-white flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-xl">translate</span>
                                    {isRtl ? 'اللغات' : 'Languages'}
                                </h3>
                            </div>
                            <div className="p-6 space-y-4">
                                {/* Quick-add preset buttons */}
                                <div className="flex flex-wrap gap-2">
                                    {LANGUAGE_OPTIONS.map(lang => (
                                        <button
                                            key={lang}
                                            type="button"
                                            onClick={() => addLanguage(lang)}
                                            disabled={formData.languages.includes(lang)}
                                            className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all ${
                                                formData.languages.includes(lang)
                                                    ? 'bg-primary/10 border-primary text-primary cursor-default'
                                                    : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-primary/50 hover:text-primary'
                                            }`}
                                        >
                                            {formData.languages.includes(lang) && (
                                                <span className="material-symbols-outlined text-[14px] mr-1 align-middle">check</span>
                                            )}
                                            {lang}
                                        </button>
                                    ))}
                                </div>

                                {/* Custom language input */}
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        value={langInput}
                                        onChange={e => setLangInput(e.target.value)}
                                        onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); addLanguage(langInput); } }}
                                        placeholder={isRtl ? 'لغة أخرى...' : 'Other language...'}
                                        className="flex-1 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition-all text-sm"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => addLanguage(langInput)}
                                        className="px-4 py-2 rounded-xl bg-primary/10 text-primary font-bold hover:bg-primary hover:text-white transition-colors text-sm"
                                    >
                                        {isRtl ? 'إضافة' : 'Add'}
                                    </button>
                                </div>

                                {/* Selected languages as removable chips */}
                                {formData.languages.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {formData.languages.map(lang => (
                                            <span
                                                key={lang}
                                                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                                            >
                                                {lang}
                                                <button
                                                    type="button"
                                                    onClick={() => removeLanguage(lang)}
                                                    className="hover:text-red-500 transition-colors"
                                                >
                                                    <span className="material-symbols-outlined text-[14px]">close</span>
                                                </button>
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Section: Colleges */}
                        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
                            <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                                <h3 className="font-bold text-slate-800 dark:text-white flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-xl">account_balance</span>
                                    {isRtl ? 'الكليات التابع لها' : 'Colleges'}
                                </h3>
                                <p className="text-xs text-slate-500 mt-0.5">
                                    {isRtl
                                        ? 'ستظهر في صفحة هيئة التدريس لكل كلية تختارها'
                                        : 'You will appear under Faculty Staff on each selected college page'}
                                </p>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                                    {collegesList.map(c => (
                                        <label
                                            key={c.id}
                                            className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                                                formData.colleges.includes(c.id)
                                                    ? 'bg-primary/10 border-primary text-primary'
                                                    : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-primary/50'
                                            }`}
                                        >
                                            <input
                                                type="checkbox"
                                                className="hidden"
                                                checked={formData.colleges.includes(c.id)}
                                                onChange={() => toggleCollege(c.id)}
                                            />
                                            <div className={`w-5 h-5 rounded-md flex justify-center items-center shrink-0 transition-colors ${
                                                formData.colleges.includes(c.id)
                                                    ? 'bg-primary text-white'
                                                    : 'border-2 border-slate-300 dark:border-slate-600'
                                            }`}>
                                                {formData.colleges.includes(c.id) && (
                                                    <span className="material-symbols-outlined text-[14px]">check</span>
                                                )}
                                            </div>
                                            <span className="text-sm font-bold truncate" title={isRtl ? c.nameAr : c.name}>
                                                {isRtl ? c.nameAr : c.name}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Save Button */}
                        <div className="flex justify-end gap-3 pt-2">
                            <a
                                href="/faculty"
                                className="px-6 py-2.5 rounded-xl font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 transition-colors flex items-center gap-2"
                            >
                                <span className="material-symbols-outlined text-xl">groups</span>
                                {isRtl ? 'عرض هيئة التدريس' : 'View All Faculty'}
                            </a>
                            <button
                                type="submit"
                                className="px-8 py-2.5 rounded-xl font-bold text-white bg-primary hover:brightness-105 active:scale-[0.99] transition-all flex items-center gap-2 shadow-sm shadow-primary/30"
                            >
                                <span className="material-symbols-outlined text-xl">save</span>
                                {isRtl ? 'حفظ الملف الشخصي' : 'Save Profile'}
                            </button>
                        </div>

                    </div>
                </form>

            </div>
        </div>
    );
}
