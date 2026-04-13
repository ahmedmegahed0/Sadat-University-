import React from 'react';
import { useThemeContext } from '../context/ThemeContext';
import { useGlobalData } from '../context/GlobalDataContext';

export default function Contact() {
    const { isRtl } = useThemeContext();
    const { settings } = useGlobalData();

    return (
        <div className="flex flex-col w-full min-h-screen text-slate-900 dark:text-slate-100">
            <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-24">
                {/* Hero Header */}
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <h1 className="text-5xl lg:text-6xl font-black tracking-tight mb-6 text-slate-900 dark:text-white">
                        {isRtl ? 'ابقى على تواصل' : 'Get in Touch'}
                    </h1>
                    <div className="mx-auto mt-4 mb-8 h-1.5 w-24 bg-primary rounded-full"></div>
                    <p className="text-lg md:text-xl font-medium text-slate-600 dark:text-slate-400 leading-relaxed">
                        {isRtl
                            ? 'سواء كنت طالبًا محتملًا، أو طالبًا حاليًا، أو زائرًا، فإن فريقنا هنا لدعمك في أي استفسارات حول برامجنا والحياة الجامعية.'
                            : "Whether you're a prospective student, current student, or visitor, our team is here to support you with any inquiries about our programs and campus life."}
                    </p>
                </div>

                {/* Split Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left: Contact Form */}
                    <div className="bg-white dark:bg-slate-950 p-10 lg:p-14 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800">
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex flex-col gap-3">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                                        {isRtl ? 'الاسم الكامل' : 'Full Name'}
                                    </label>
                                    <input
                                        className="w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:border-primary focus:ring-4 focus:ring-primary/10 h-14 px-5 transition-all outline-none font-medium text-slate-900 dark:text-white"
                                        placeholder={isRtl ? 'أحمد محمد' : 'John Doe'}
                                        type="text"
                                    />
                                </div>
                                <div className="flex flex-col gap-3">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                                        {isRtl ? 'البريد الإلكتروني' : 'Email Address'}
                                    </label>
                                    <input
                                        className="w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:border-primary focus:ring-4 focus:ring-primary/10 h-14 px-5 transition-all outline-none font-medium text-slate-900 dark:text-white"
                                        placeholder="john@example.com"
                                        type="email"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                                    {isRtl ? 'الموضوع' : 'Subject'}
                                </label>
                                <input
                                    className="w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:border-primary focus:ring-4 focus:ring-primary/10 h-14 px-5 transition-all outline-none font-medium text-slate-900 dark:text-white"
                                    placeholder={isRtl ? 'استفسار عن القبول' : 'Admissions Inquiry'}
                                    type="text"
                                />
                            </div>
                            <div className="flex flex-col gap-3">
                                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                                    {isRtl ? 'الرسالة' : 'Message'}
                                </label>
                                <textarea
                                    className="w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:border-primary focus:ring-4 focus:ring-primary/10 p-5 resize-none transition-all outline-none font-medium text-slate-900 dark:text-white"
                                    placeholder={isRtl ? 'كيف يمكننا مساعدتك اليوم؟' : 'How can we help you today?'}
                                    rows="6"
                                ></textarea>
                            </div>
                            <button
                                className="w-full bg-primary hover:bg-primary-600 text-slate-900 font-black py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 group shadow-xl shadow-primary/20 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/30 active:scale-[0.98]"
                                type="button"
                            >
                                <span className="text-lg">{isRtl ? 'إرسال التخاطب' : 'Send Message'}</span>
                                <span className={`material-symbols-outlined transition-transform duration-300 group-hover:${isRtl ? '-translate-x-2' : 'translate-x-2'} ${isRtl ? 'rotate-180' : ''}`}>send</span>
                            </button>
                        </form>
                    </div>

                    {/* Right: Contact Details & Map */}
                    <div className="flex flex-col gap-12 lg:py-8">
                        <div className="space-y-10">
                            <div className="flex items-start gap-6 group">
                                <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                    <span className="material-symbols-outlined text-3xl">location_on</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{isRtl ? 'موقعنا' : 'Our Location'}</h3>
                                    <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                                        {isRtl ? '123 الشارع الأكاديمي، المنطقة الجامعية' : '123 Academic Avenue, University District'}<br />
                                        {isRtl ? 'مدينة السادات، مصر' : 'Sadat City, Egypt'}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-6 group">
                                <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                    <span className="material-symbols-outlined text-3xl">call</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{isRtl ? 'أرقام الهواتف' : 'Phone Numbers'}</h3>
                                    <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed" dir="ltr">
                                        <span className="text-slate-900 dark:text-white">{isRtl ? 'القبول:' : 'Admissions:'}</span> {settings?.contactPhone || '+20 2 123 4567'}<br />
                                        <span className="text-slate-900 dark:text-white">{isRtl ? 'المكتب العام:' : 'General Office:'}</span> +20 2 987 6543
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-6 group">
                                <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                    <span className="material-symbols-outlined text-3xl">mail</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{isRtl ? 'البريد الإلكتروني' : 'Email Addresses'}</h3>
                                    <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                                        {settings?.contactEmail || 'info@sadat-smart.edu.eg'}<br />
                                        admissions@sadat.edu.eg
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="relative w-full h-[400px] rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-2xl shadow-slate-200/50 dark:shadow-none bg-slate-50 dark:bg-slate-900 group">
                            <div
                                className="absolute inset-0 bg-cover bg-center grayscale opacity-60 transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                                alt="Stylized map showing the university campus area"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCmrAudjSXl3ykraZJxlTVyp5SsXUi11F_p2NF-7UehO2XxG3WLTgfOgknjDKNn61Q3zQ5Fj8ScCYBXekglNT6BLd5E9VN0j8QO_OJUcSXSP2tic_B0fEQruJqtU3dPtTXGctYVAHQTR1ZfxTgZ1IhPKBxehbFMF1VNLlnhP3w-AkRzqtUMZW6mszeBMXKUxIZiK918XhfeGONbqKGUZ2ybbSu6Q_sPLBXhzQMQvdl_74dF-pjj5_ZX2JgCrTNIHrE4q2k7chv9md01")' }}
                            ></div>
                            <div className="absolute inset-0 flex items-center justify-center bg-slate-900/10 group-hover:bg-transparent transition-colors">
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 bg-primary rounded-[1.25rem] flex items-center justify-center shadow-xl shadow-primary/40 animate-bounce cursor-pointer group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-slate-900 text-3xl">location_on</span>
                                    </div>
                                    <div className="mt-5 bg-white dark:bg-slate-900 px-6 py-3 rounded-xl text-sm font-bold border border-slate-200 dark:border-slate-800 shadow-xl text-slate-900 dark:text-white tracking-wider">
                                        {isRtl ? 'حرم السادات الذكي' : 'Sadat Smart Campus'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
