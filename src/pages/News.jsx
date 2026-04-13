import React from 'react';
import { useThemeContext } from '../context/ThemeContext';
import { useGlobalData } from '../context/GlobalDataContext';
import { useNavigate } from 'react-router-dom';

export default function News() {
    const { isRtl } = useThemeContext();
    const { news } = useGlobalData();
    const navigate = useNavigate();

    const latestNews = news ? [...news].reverse() : [];
    const featuredNews = latestNews.length > 0 ? latestNews[0] : null;
    const gridNews = latestNews.slice(1);

    return (
        <div className="flex flex-col w-full min-h-screen">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
                {/* Breadcrumbs */}
                <nav aria-label="Breadcrumb" className="flex mb-6 text-sm text-slate-500">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3 rtl:space-x-reverse">
                        <li className="inline-flex items-center">
                            <button onClick={() => navigate('/')} className="hover:text-primary transition-colors">
                                {isRtl ? 'الرئيسية' : 'Home'}
                            </button>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <span className={`material-symbols-outlined text-sm mx-1 ${isRtl ? 'rotate-180' : ''}`}>chevron_right</span>
                                <span className="font-medium text-slate-900 dark:text-slate-200">
                                    {isRtl ? 'الأخبار والفعاليات' : 'News & Events'}
                                </span>
                            </div>
                        </li>
                    </ol>
                </nav>

                {/* Featured Story Section */}
                {featuredNews && (
                    <section className="mb-16">
                        <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 aspect-[21/9] min-h-[450px] group cursor-pointer shadow-2xl shadow-slate-200/50 dark:shadow-none hover:shadow-primary/20 transition-all duration-500 border border-slate-100 dark:border-slate-800">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: `linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.4) 50%, transparent 100%), url("${featuredNews.image || 'https://images.unsplash.com/photo-1541888081688-ea121a55b0a7?q=80&w=2070'}")` }}
                            ></div>
                            <div className={`absolute bottom-0 ${isRtl ? 'right-0' : 'left-0'} p-6 sm:p-10 md:p-16 flex flex-col items-start gap-4 sm:gap-5 z-10 w-full`}>
                                <span className="bg-primary/20 border border-primary/30 text-primary text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full backdrop-blur-md">
                                    {isRtl ? 'أبرز الأخبار' : 'Featured Story'}
                                </span>
                                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] max-w-4xl tracking-tight break-words">
                                    {isRtl ? featuredNews.titleAr : featuredNews.titleEn}
                                </h1>
                                <p className="text-slate-300 text-lg md:text-xl font-medium max-w-3xl line-clamp-2 md:line-clamp-none">
                                    {isRtl ? featuredNews.summaryAr : featuredNews.summaryEn}
                                </p>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mt-4 w-full sm:w-auto">
                                    <span className="flex items-center gap-2 text-white/80 text-sm font-bold bg-slate-900/50 backdrop-blur-md px-4 py-2 rounded-xl w-fit">
                                        <span className="material-symbols-outlined text-[18px]">calendar_today</span> {featuredNews.date}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Latest News Grid */}
                    <div className="flex-1 w-full max-w-full min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 border-b border-slate-100 dark:border-slate-800 pb-6 gap-4">
                            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white flex items-center gap-3 break-words">
                                {isRtl ? 'أحدث الأخبار' : 'Latest News'} <span className="w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50 shrink-0"></span>
                            </h2>
                            <div className="flex gap-2 shrink-0">
                                <button className="p-3 border-2 border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 rounded-xl hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-all flex items-center justify-center">
                                    <span className="material-symbols-outlined">filter_list</span>
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {gridNews.map(n => (
                                <article key={n.id} className="bg-white dark:bg-slate-950 rounded-[2rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-primary/5 dark:hover:border-primary/30 transition-all group cursor-pointer flex flex-col hover:-translate-y-1">
                                    <div
                                        className="aspect-video bg-cover bg-center overflow-hidden transition-transform duration-700 group-hover:scale-105"
                                        style={{ backgroundImage: `url("${n.image || 'https://images.unsplash.com/photo-1541888081688-ea121a55b0a7?q=80&w=2070'}")` }}
                                    ></div>
                                    <div className="p-8 flex flex-col flex-1">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-primary bg-primary/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-primary/20">{isRtl ? 'أخبار' : 'News'}</span>
                                            <span className="text-slate-500 dark:text-slate-400 font-medium text-sm" dir="ltr">{n.date}</span>
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors leading-[1.3] break-words">
                                            {isRtl ? n.titleAr : n.titleEn}
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-base font-medium leading-relaxed mb-6 line-clamp-3 flex-1">
                                            {isRtl ? n.summaryAr : n.summaryEn}
                                        </p>
                                        <span className="bg-slate-50 dark:bg-slate-900 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold text-sm flex items-center gap-2 group-hover:bg-primary group-hover:text-slate-900 group-hover:border-primary transition-all w-fit">
                                            {isRtl ? 'قراءة المزيد' : 'Read More'} <span className={`material-symbols-outlined text-base ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'} transition-transform`}>arrow_forward</span>
                                        </span>
                                    </div>
                                </article>
                            ))}
                        </div>

                        <div className="mt-12 flex justify-center">
                            <button className="border-2 border-primary text-slate-900 dark:text-primary font-bold py-3 px-10 rounded-lg bg-primary hover:bg-primary/90 dark:bg-transparent dark:hover:bg-primary dark:hover:text-slate-900 transition-all shadow-md">
                                {isRtl ? 'تحميل المزيد من الأخبار' : 'Load More News'}
                            </button>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="w-full lg:w-80 space-y-8 flex-shrink-0">
                        {/* Academic Calendar Widget */}
                        <div className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-[2rem] p-8 shadow-xl shadow-slate-200/40 dark:shadow-none">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-xl font-black text-slate-900 dark:text-white">{isRtl ? 'الأحداث القادمة' : 'Upcoming Events'}</h3>
                                <span className="bg-slate-100 dark:bg-slate-900 px-3 py-1 rounded-full text-xs text-slate-600 dark:text-slate-400 font-bold">{isRtl ? 'أكتوبر 2024' : 'October 2024'}</span>
                            </div>

                            <div className="mt-4 space-y-6">
                                <div className="flex gap-5 group cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900 p-3 -mx-3 rounded-2xl transition-colors">
                                    <div className="flex flex-col items-center justify-center bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 shadow-sm rounded-xl w-14 h-14 flex-shrink-0 group-hover:border-primary/50 group-hover:shadow-primary/20 transition-all">
                                        <span className="text-[10px] font-black text-primary uppercase leading-none mb-1">{isRtl ? 'أكتوبر' : 'Oct'}</span>
                                        <span className="text-xl font-black text-slate-900 dark:text-white leading-none">26</span>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                                            {isRtl ? 'ورشة عمل المكتبة الرقمية' : 'Digital Library Workshop'}
                                        </h4>
                                        <p className="text-sm font-medium text-slate-500 flex items-center gap-1 mt-1" dir="ltr">
                                            <span className="material-symbols-outlined text-[14px]">schedule</span> 10:00 AM - 12:00 PM
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-5 group cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900 p-3 -mx-3 rounded-2xl transition-colors">
                                    <div className="flex flex-col items-center justify-center bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 shadow-sm rounded-xl w-14 h-14 flex-shrink-0 group-hover:border-primary/50 group-hover:shadow-primary/20 transition-all">
                                        <span className="text-[10px] font-black text-primary uppercase leading-none mb-1">{isRtl ? 'نوفمبر' : 'Nov'}</span>
                                        <span className="text-xl font-black text-slate-900 dark:text-white leading-none">02</span>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                                            {isRtl ? 'لقاء شبكة الخريجين' : 'Alumni Network Meetup'}
                                        </h4>
                                        <p className="text-sm font-medium text-slate-500 flex items-center gap-1 mt-1">
                                            <span className="material-symbols-outlined text-[14px]">location_on</span> {isRtl ? 'القاعة الرئيسية ب' : 'Main Hall B'}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-5 group cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900 p-3 -mx-3 rounded-2xl transition-colors">
                                    <div className="flex flex-col items-center justify-center bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 shadow-sm rounded-xl w-14 h-14 flex-shrink-0 group-hover:border-primary/50 group-hover:shadow-primary/20 transition-all">
                                        <span className="text-[10px] font-black text-primary uppercase leading-none mb-1">{isRtl ? 'نوفمبر' : 'Nov'}</span>
                                        <span className="text-xl font-black text-slate-900 dark:text-white leading-none">05</span>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                                            {isRtl ? 'ندوة العمل المناخي' : 'Climate Action Seminar'}
                                        </h4>
                                        <p className="text-sm font-medium text-slate-500 flex items-center gap-1 mt-1" dir="ltr">
                                            <span className="material-symbols-outlined text-[14px]">schedule</span> 2:00 PM
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <button className="block w-full text-center mt-8 text-sm font-bold text-primary bg-primary/10 hover:bg-primary hover:text-slate-900 py-3 rounded-xl transition-colors">
                                {isRtl ? 'عرض التقويم الكامل' : 'View Full Calendar'}
                            </button>
                        </div>

                        {/* Newsletter Widget */}
                        <div className="bg-slate-900 dark:bg-slate-950 border border-slate-800 rounded-[2rem] p-8 shadow-2xl relative overflow-hidden">
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
                            <h3 className="text-xl font-black text-white mb-3 relative z-10">{isRtl ? 'اشترك الآن' : 'Subscribe'}</h3>
                            <p className="text-base text-slate-400 mb-6 font-medium relative z-10">
                                {isRtl ? 'احصل على أحدث أخبار الحرم الجامعي وتنبيهات الأحداث مباشرة في صندوق الوارد الخاص بك.' : 'Get the latest campus news and event alerts directly in your inbox.'}
                            </p>
                            <div className="space-y-4 relative z-10">
                                <input
                                    className="w-full px-5 py-3.5 bg-slate-800 dark:bg-slate-900 border border-slate-700 rounded-xl text-base focus:ring-2 focus:ring-primary focus:border-primary text-white font-medium outline-none placeholder:text-slate-500 transition-all"
                                    placeholder={isRtl ? 'البريد الإلكتروني' : 'Email Address'}
                                    type="email"
                                />
                                <button className="w-full bg-primary text-slate-900 font-black py-3.5 rounded-xl hover:bg-primary-600 transition-colors shadow-xl shadow-primary/20 text-base">
                                    {isRtl ? 'الانضمام للقائمة البريدية' : 'Join Mailing List'}
                                </button>
                            </div>
                        </div>

                        {/* Media Gallery Preview */}
                        <div className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-[2rem] p-8 mt-8 shadow-xl shadow-slate-200/40 dark:shadow-none">
                            <h3 className="text-xl font-black text-slate-900 dark:text-white flex justify-between items-center mb-6">
                                {isRtl ? 'معرض الوسائط' : 'Media Gallery'}
                                <button className="text-sm text-primary font-bold hover:underline bg-transparent">
                                    {isRtl ? 'عرض الكل' : 'View All'}
                                </button>
                            </h3>
                            <div className="grid grid-cols-2 gap-3">
                                <div
                                    className="aspect-square bg-cover bg-center rounded-2xl cursor-pointer hover:opacity-80 transition-opacity border border-slate-100 dark:border-slate-800"
                                    alt="University graduation photo thumbnail"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAlJRBNC8atwwr1-6FLr_28WkuqCJFzDCge0qna9x5eVdtjPARBNzh-WI-I_53l_ApwrWx2kcYpGwcY0UM2YHsIVo7-sjQFBDZ4wpN69jFnQ4lI7-mCdSFQBadAYYQRqpi2h37w6mGf5ZiWRelQcH393MyBjwxWbAH-9hMg34nHgdE3IJF00_broxUU7wSseNa0bglreP2UdOtKTLihEt7r7rOExu9NGUguL-1RxFHcDOzrZEgBuFm0r67bg9g9YAxZF7MahTthaWSt")' }}
                                ></div>
                                <div
                                    className="aspect-square bg-cover bg-center rounded-2xl cursor-pointer hover:opacity-80 transition-opacity border border-slate-100 dark:border-slate-800"
                                    alt="Library study area thumbnail"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBf3pMloAvr13mm2VK7HB7EHDMlZ5UGwLKZ-LaKYPwFmxYZoOqrBYyG4bhT4XHZ0j9YXl2-91MciCezjnjPyIQJQk1BjQuFuR9qJ5o1z1zf-1_h4HdrdkZh8qV9TZ_BFQMfUwvF5JiJuPRMiIU_cBn-CVLEw0RH9owUbabxyHD-4VE3W1MNEHFBsS92MblTalCShhMVGbwjo_qQaDf6kYI8eTZkxDzXLE_wMqS2zJluDI3xlYOaJ8qP82uAldHT2gH4_ewYTsRw7k55")' }}
                                ></div>
                                <div
                                    className="aspect-square bg-cover bg-center rounded-2xl cursor-pointer hover:opacity-80 transition-opacity border border-slate-100 dark:border-slate-800"
                                    alt="Laboratory equipment thumbnail"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDNnUWs8JH1EO_3n1HLRBOsbmvXGuRZRtEygLfjcJ5TAXacB-GiWXFY4VfkPe4YCrZMU95-6wh9Kpd_nhfzaqUp8oV2Q7hDwx8AHK64YHuBEzfEZUnhCzwpTV6QBxaykDAuZhjvSPWFOVgDYv7NWxI9AARex5MSy6HP2H96Tj2HbnPLvT4DCx_CcmOr0_XxsOZPZk8UROziMJDYymmna0AGg5xLMMt_CtztyBiDncxxY9NV8xVobgImQw4uZ8Inx_kC5x3xpVDMCZpj")' }}
                                ></div>
                                <div
                                    className="aspect-square bg-cover bg-center rounded-2xl cursor-pointer hover:opacity-80 transition-opacity border border-slate-100 dark:border-slate-800"
                                    alt="Students meeting thumbnail"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB8bT5x-X-aq5a7SVVR7iQsdyMYTshhrcZDwlbjpRQ2QDqzPyXtEBfOS5T-55sg7j_dHZeab5LujPC9VUlVvStnJpFkJfPd6OibF57qr4JalqpUbIkgBZ8IzpPGIhvNWKjWKYBayzNbV7RvClttKs-h7lBT1XaIwbrh1mFXkcBtakktKQT1--G2KXduAMW2aPidbFNPrlwJo9xpgIA8c23UXcBnAKhP5RnS2XhDMlvkeXjAL-9JUNN-GdoVpl_dQscpbVSw4-lLdUFO")' }}
                                ></div>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
}
