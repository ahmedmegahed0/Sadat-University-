import React from 'react';
import { Link } from 'react-router-dom';
import { useThemeContext } from '../../context/ThemeContext';
import { useGlobalData } from '../../context/GlobalDataContext';
import fcai from '../../assets/fcai.webp';
import medicine from '../../assets/medicine.webp';
import tourest from '../../assets/tourest.png';

export default function Home() {
    const { isRtl } = useThemeContext();
    const { homeContent, news } = useGlobalData();

    // Use latest 4 news items
    const latestNews = news ? [...news].reverse().slice(0, 4) : [];

    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-slate-950">
                <div className="absolute inset-0 z-0">
                    <div
                        className="h-full w-full bg-cover bg-center bg-no-repeat opacity-50 mix-blend-luminosity"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA8dvWa9lBgWUVEOML6aEXp6QY1X52QfnlNXgm43kwDhQ8rRSIPf214c6e2cV5Ri5Sghe83LIo1AEMRMCZEVqZgjof8Br1xVpppFHIxn4RLY00iNvhvPYbY9AqkxMRbdpEMJyARvQ5wLN6R-nC2Zzd1nCJScu18wPVF5qpvC75wG0YNUJckBLlixlH-xq3Ihflg1ILKW5SHNqkScujIkITGnE4SS840zQL5hPdTpKRXru6HAAwsUKSaOzAc1dBP1EnUBOfKZ_GErP2l')" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"></div>
                </div>

                <div className="relative z-10 w-full px-6 lg:px-20 max-w-7xl mx-auto py-24 md:py-32">
                    <div className="max-w-3xl">
                        <div className="mb-6 md:mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 md:px-5 py-1.5 md:py-2 text-[10px] md:text-sm font-bold uppercase tracking-widest text-primary backdrop-blur-sm whitespace-nowrap">
                            <span className="relative flex h-1.5 md:h-2 w-1.5 md:w-2 shrink-0">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 md:h-2 w-1.5 md:w-2 bg-primary"></span>
                            </span>
                            {isRtl ? 'مرحبًا بك في المستقبل' : 'Welcome to the Future'}
                        </div>

                        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tight break-words">
                            {isRtl ? homeContent?.heroTitleAr : homeContent?.heroTitleEn}
                        </h2>

                        <p className="mt-6 md:mt-8 text-lg md:text-xl text-slate-300 font-medium max-w-2xl leading-relaxed">
                            {isRtl ? homeContent?.heroSubtitleAr : homeContent?.heroSubtitleEn}
                        </p>

                        <div className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 md:gap-5 w-full">
                            <Link to="/colleges" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base md:text-lg font-black text-white transition-all hover:bg-primary-600 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/40 active:scale-95 shrink-0">
                                {isRtl ? 'استكشف الكليات' : 'Explore Colleges'}
                                <span className="material-symbols-outlined rtl:-scale-x-100">arrow_forward</span>
                            </Link>
                            {/* <button className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border-2 border-slate-700 bg-slate-900/50 px-8 py-4 text-base md:text-lg font-bold text-white transition-all hover:border-slate-500 hover:bg-slate-800 backdrop-blur-sm active:scale-95 shrink-0">
                                <span className="material-symbols-outlined">play_circle</span>
                                {isRtl ? 'جولة افتراضية' : 'Virtual Tour'}
                            </button> */}
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 opacity-60 hover:opacity-100 cursor-pointer transition-opacity">
                    <span className="text-xs font-bold tracking-[0.2em] uppercase">Scroll</span>
                    <span className="material-symbols-outlined animate-bounce">south</span>
                </div>
            </section>

            {/* Foundation Section */}
            <section className="bg-white dark:bg-slate-950 py-24 px-6 lg:px-8 transition-colors">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-20 text-center">
                        <h3 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                            {isRtl ? 'بناء للمستقبل' : 'Built for the Future'}
                        </h3>
                        <div className="mx-auto mt-6 h-1 w-24 bg-primary rounded-full"></div>
                        <p className="mt-8 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
                            {isRtl ? 'بيئة أكاديمية متطورة تدمج التقاليد مع التكنولوجيا الحديثة.' : 'A cutting-edge academic environment integrating rich traditions with modern technology.'}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                        <div className="group rounded-3xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30">
                            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <span className="material-symbols-outlined text-3xl">visibility</span>
                            </div>
                            <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                                {isRtl ? 'الرؤية العالمية' : 'Global Vision'}
                            </h4>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                {isRtl ? 'أن نكون رائداً عالمياً في التعليم العالي الذكي، وتعزيز الابتكار المستدام عالمياً.' : 'To be a global vanguard in smart higher education, fostering sustainable innovation worldwide.'}
                            </p>
                        </div>
                        <div className="group rounded-3xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30">
                            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <span className="material-symbols-outlined text-3xl">rocket_launch</span>
                            </div>
                            <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                                {isRtl ? 'المهمة المشتركة' : 'Driven Mission'}
                            </h4>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                {isRtl ? 'توفير برامج بحثية رائدة تعالج تحديات الغد وتعد الطلاب بقوة.' : 'Providing pioneering research programs that tackle tomorrow\'s challenges and robustly prepare students.'}
                            </p>
                        </div>
                        <div className="group rounded-3xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30">
                            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <span className="material-symbols-outlined text-3xl">military_tech</span>
                            </div>
                            <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                                {isRtl ? 'التميز المطلق' : 'Absolute Excellence'}
                            </h4>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                {isRtl ? 'الالتزام الثابت بأعلى معايير الجودة الدولية في تصميم المناهج وهيئة التدريس.' : 'An unwavering commitment to the highest international quality standards in curriculum formulation and faculty.'}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Colleges Preview */}
            <section className="bg-slate-50 dark:bg-slate-900 py-24 px-6 lg:px-8 transition-colors">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-4">
                        <div>
                            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight break-words">
                                {isRtl ? 'كلياتنا المتميزة' : 'Elite Colleges'}
                            </h3>
                            <p className="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-400 font-medium">
                                {isRtl ? 'اكتشف المعرفة المتخصصة عبر كلياتنا المنفصلة بعناية.' : 'Discover specialized knowledge across our meticulously separated higher faculties.'}
                            </p>
                        </div>
                        <Link to="/colleges" className="inline-flex items-center gap-2 text-primary font-bold text-base md:text-lg hover:text-primary-600 transition-colors shrink-0">
                            {isRtl ? 'عرض كل البرامج' : 'View All Programs'} <span className="material-symbols-outlined rtl:-scale-x-100 block transition-transform group-hover:translate-x-1">arrow_forward</span>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                        {/* College Cards */}
                        <Link to="/college/computer-science" className="group flex flex-col overflow-hidden rounded-3xl bg-white dark:bg-slate-950 shadow-sm border border-slate-100 dark:border-slate-800 transition-all hover:shadow-2xl hover:shadow-primary/5">
                            <div className="h-64 w-full overflow-hidden relative flex items-center justify-center bg-slate-50 dark:bg-slate-900/50">
                                <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors z-10"></div>
                                <img loading="lazy" className="h-full w-full p-8 object-contain transition-transform duration-700 ease-out group-hover:scale-110" src={fcai} alt="CS & AI" />
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <h5 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{isRtl ? 'الحاسبات والذكاء الاصطناعي' : 'Computer Science & AI'}</h5>
                                <p className="mt-3 text-slate-500 dark:text-slate-400 line-clamp-2">{isRtl ? 'تصميم خوارزميات المستقبل وأنظمة الذكاء المتقدمة.' : 'Designing tomorrow\'s algorithms and advanced intelligence systems.'}</p>
                                <div className="mt-auto pt-6 flex items-center justify-between text-primary font-bold">
                                    <span className="text-sm uppercase tracking-wider">{isRtl ? 'اكتشف الكلية' : 'Explore Faculty'}</span>
                                    <span className="material-symbols-outlined rounded-full bg-primary/10 p-2 group-hover:bg-primary group-hover:text-white transition-colors rtl:-scale-x-100">arrow_forward</span>
                                </div>
                            </div>
                        </Link>

                        <Link to="/college/pharmacy" className="group flex flex-col overflow-hidden rounded-3xl bg-white dark:bg-slate-950 shadow-sm border border-slate-100 dark:border-slate-800 transition-all hover:shadow-2xl hover:shadow-primary/5">
                            <div className="h-64 w-full overflow-hidden relative flex items-center justify-center bg-slate-50 dark:bg-slate-900/50">
                                <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors z-10"></div>
                                <img loading="lazy" className="h-full w-full p-8 object-contain transition-transform duration-700 ease-out group-hover:scale-110" src={medicine} alt="Pharmacy" />
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <h5 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{isRtl ? 'الصيدلة' : ' Pharmacy'}</h5>
                                <p className="mt-3 text-slate-500 dark:text-slate-400 line-clamp-2">{isRtl ? 'ريادة مجالات الطب وتركيب الأدوية وتحسين الرعاية.' : 'Pioneering medical sciences, drug formulation, and care improvement.'}</p>
                                <div className="mt-auto pt-6 flex items-center justify-between text-primary font-bold">
                                    <span className="text-sm uppercase tracking-wider">{isRtl ? 'اكتشف الكلية' : 'Explore Faculty'}</span>
                                    <span className="material-symbols-outlined rounded-full bg-primary/10 p-2 group-hover:bg-primary group-hover:text-white transition-colors rtl:-scale-x-100">arrow_forward</span>
                                </div>
                            </div>
                        </Link>

                        <Link to="/college/tourism" className="group flex flex-col overflow-hidden rounded-3xl bg-white dark:bg-slate-950 shadow-sm border border-slate-100 dark:border-slate-800 transition-all hover:shadow-2xl hover:shadow-primary/5">
                            <div className="h-64 w-full overflow-hidden relative flex items-center justify-center bg-slate-50 dark:bg-slate-900/50">
                                <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors z-10"></div>
                                <img loading="lazy" className="h-full w-full p-8 object-contain transition-transform duration-700 ease-out group-hover:scale-110" src={tourest} alt="Tourism" />
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <h5 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{isRtl ? 'السياحة والفنادق' : 'Tourism & Hotels'}</h5>
                                <p className="mt-3 text-slate-500 dark:text-slate-400 line-clamp-2">{isRtl ? 'فن إدارة الضيافة العالمية والسياحة التراثية.' : 'The art of global hospitality management and heritage tourism.'}</p>
                                <div className="mt-auto pt-6 flex items-center justify-between text-primary font-bold">
                                    <span className="text-sm uppercase tracking-wider">{isRtl ? 'اكتشف الكلية' : 'Explore Faculty'}</span>
                                    <span className="material-symbols-outlined rounded-full bg-primary/10 p-2 group-hover:bg-primary group-hover:text-white transition-colors rtl:-scale-x-100">arrow_forward</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Latest News */}
            <section className="bg-white dark:bg-slate-950 py-24 px-6 lg:px-8 transition-colors">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-4">
                        <div>
                            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight break-words">
                                {isRtl ? 'المركز الصحفي' : 'Press & News'}
                            </h3>
                            <div className="mt-4 md:mt-6 h-1 w-24 bg-primary rounded-full"></div>
                        </div>
                        <Link to="/news" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary font-bold transition-colors shrink-0">
                            {isRtl ? 'اقرأ جميع الأخبار' : 'Read All Updates'} <span className="material-symbols-outlined rtl:-scale-x-100">arrow_forward</span>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* News Items */}
                        {latestNews.map((n) => (
                            <Link to="/news" key={n.id} className="group flex flex-col gap-5">
                                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800">
                                    <img loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src={n.image || "https://images.unsplash.com/photo-1541888081688-ea121a55b0a7?q=80&w=2070"} alt={n.titleEn} />
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="rounded-md bg-primary/10 px-2 py-1 text-[10px] font-bold text-primary uppercase tracking-widest">{isRtl ? 'أخبار' : 'News'}</span>
                                        <span className="text-[11px] font-semibold text-slate-400">{n.date}</span>
                                    </div>
                                    <h6 className="text-lg font-bold text-slate-900 dark:text-white leading-snug group-hover:text-primary transition-colors">
                                        {isRtl ? n.titleAr : n.titleEn}
                                    </h6>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
