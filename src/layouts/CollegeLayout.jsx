import React from 'react';
import { Link } from 'react-router-dom';
import { useThemeContext } from '../context/ThemeContext';

export default function CollegeLayout({ children, collegeName, collegeIcon, collegeNameAr, collegeIconAr }) {
    const { isDarkMode, toggleDark, isRtl, toggleRtl } = useThemeContext();

    return (
        <div className="relative flex min-h-screen flex-col font-sans transition-colors duration-300 overflow-x-hidden w-full max-w-[100vw]">
            {/* Sticky Top Bar */}
            <header className="sticky top-0 z-50 w-full border-b-2 border-primary bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm transition-colors duration-300">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                    <div className="flex items-center gap-8">
                        <Link to="/" className="flex items-center gap-3">
                            <div className="text-primary">
                                <span className="material-symbols-outlined text-4xl">{collegeIcon}</span>
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-slate-900 dark:text-slate-100">
                                    {isRtl ? collegeNameAr : collegeName}
                                </h1>
                                <span className="text-xs font-medium text-primary uppercase">
                                    {isRtl ? 'جامعة السادات الذكية' : 'Sadat Smart University'}
                                </span>
                            </div>
                        </Link>
                        <nav className="hidden items-center gap-6 lg:flex">
                            <Link className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-primary transition-colors" to="/">
                                {isRtl ? 'الرئيسية' : 'Home'}
                            </Link>
                            <a className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-primary transition-colors" href="#departments">
                                {isRtl ? 'الأقسام' : 'Departments'}
                            </a>
                            <a className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-primary transition-colors" href="#faculty">
                                {isRtl ? 'الهيئة التدريسية' : 'Faculty'}
                            </a>
                            <a className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-primary transition-colors" href="#dean">
                                {isRtl ? 'كلمة العميد' : 'Dean\'s Message'}
                            </a>
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <button onClick={toggleDark} className="p-2 text-slate-600 dark:text-gray-400 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined">{isDarkMode ? 'light_mode' : 'dark_mode'}</span>
                        </button>
                        <button onClick={toggleRtl} className="p-2 text-slate-600 dark:text-gray-400 hover:text-primary transition-colors font-bold text-sm">
                            {isRtl ? 'EN' : 'AR'}
                        </button>
                        <div className="relative hidden sm:block">
                            <span className={`material-symbols-outlined absolute top-1/2 -translate-y-1/2 text-slate-400 ${isRtl ? 'right-3' : 'left-3'}`}>search</span>
                            <input
                                className={`h-10 w-48 rounded-lg border-none bg-slate-100 dark:bg-gray-800 text-sm focus:ring-2 focus:ring-primary dark:text-white transition-all ${isRtl ? 'pr-10 pl-4' : 'pl-10 pr-4'}`}
                                placeholder={isRtl ? 'بحث...' : 'Search...'}
                                type="text"
                            />
                        </div>
                        <Link to="/login" className="flex h-10 items-center justify-center rounded-lg bg-primary px-5 text-sm font-bold text-white transition-colors hover:brightness-110 shadow-md">
                            {isRtl ? 'بوابة الطالب' : 'Student Portal'}
                        </Link>
                    </div>
                </div>
            </header>

            <main className="flex-1">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-white dark:bg-gray-900 border-t-2 border-primary/10 py-12 transition-colors duration-300">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid gap-12 lg:grid-cols-4">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-3xl">
                                    {isRtl ? (collegeIconAr || collegeIcon) : collegeIcon}
                                </span>
                                <span className="text-xl font-black text-slate-900 dark:text-slate-100">
                                    {isRtl ? 'جامعة السادات الذكية' : 'Sadat Smart Univ.'}
                                </span>
                            </div>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                {isRtl ? `التميز في تعليم ${collegeNameAr}. تمكين قادة المستقبل منذ عام 1998.` : `Excellence in ${collegeName} Education. Empowering future leaders since 1998.`}
                            </p>
                        </div>
                        <div>
                            <h5 className="mb-4 text-sm font-bold uppercase tracking-widest text-primary">{isRtl ? 'اتصل بنا' : 'Contact Us'}</h5>
                            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                                <li className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-base">location_on</span>
                                    {isRtl ? 'مدينة السادات، مصر' : 'Sadat City, Egypt'}
                                </li>
                                <li className="flex items-center gap-2" dir="ltr">
                                    <span className="material-symbols-outlined text-base">call</span>
                                    +20 (02) 1234 5678
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-base">mail</span>
                                    info@college.sadat.edu
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="mb-4 text-sm font-bold uppercase tracking-widest text-primary">{isRtl ? 'روابط سريعة' : 'Quick Links'}</h5>
                            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                                <li><a className="hover:text-primary transition-colors" href="#">{isRtl ? 'التقويم الأكاديمي' : 'Academic Calendar'}</a></li>
                                <li><a className="hover:text-primary transition-colors" href="#">{isRtl ? 'بوابة التعلم الإلكتروني' : 'E-Learning Portal'}</a></li>
                                <li><a className="hover:text-primary transition-colors" href="#">{isRtl ? 'مركز البحوث' : 'Research Center'}</a></li>
                                <li><a className="hover:text-primary transition-colors" href="#">{isRtl ? 'الخدمات المهنية' : 'Career Services'}</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="mb-4 text-sm font-bold uppercase tracking-widest text-primary">{isRtl ? 'خريطة الموقع' : 'Location Map'}</h5>
                            <div
                                className="h-32 w-full rounded-lg bg-slate-200 dark:bg-gray-800"
                                style={{ backgroundImage: 'linear-gradient(135deg, rgba(var(--color-primary-500), 0.1) 25%, transparent 25%), linear-gradient(225deg, rgba(var(--color-primary-500), 0.1) 25%, transparent 25%), linear-gradient(45deg, rgba(var(--color-primary-500), 0.1) 25%, transparent 25%), linear-gradient(315deg, rgba(var(--color-primary-500), 0.1) 25%, transparent 25%)', backgroundPosition: '10px 0, 10px 0, 0 0, 0 0', backgroundSize: '20px 20px', backgroundRepeat: 'repeat' }}
                            ></div>
                        </div>
                    </div>
                    <div className="mt-12 border-t border-slate-100 dark:border-gray-800 pt-8 text-center text-xs text-slate-500 dark:text-slate-400">
                        {isRtl ? `© 2024 جامعة السادات الذكية - ${collegeNameAr}. جميع الحقوق محفوظة.` : `© 2024 Sadat Smart University - ${collegeName}. All rights reserved.`}
                    </div>
                </div>
            </footer>
        </div>
    );
}
