import React from 'react';
import { useThemeContext } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';

export default function News() {
    const { isRtl } = useThemeContext();
    const navigate = useNavigate();

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
                <section className="mb-16">
                    <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 aspect-[21/9] min-h-[450px] group cursor-pointer shadow-2xl shadow-slate-200/50 dark:shadow-none hover:shadow-primary/20 transition-all duration-500 border border-slate-100 dark:border-slate-800">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            alt="Modern university campus building with glass facade"
                            style={{ backgroundImage: 'linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.4) 50%, transparent 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDU3Kt2n6shW3Bqn08dCNPMwiv7Ulx0B0DpbjCxpKHbWh4W3ZvrrWn9YZTdXuhyB3AhvGR5xFtt2dFrgtBUZ9UJwXvNu4EyWY_l09NWQ7znkcxm4TwE7YeRPNNEGxCituQB--uwRIs-_J3VyZjAFp6NHbj9WSy4jcx0lIj4wkYB9d3chJef0YIZg0d_qHJLv8QtAu9fdH2l_-3LBe6476DleEXkDirHkQU4DcQN_Z7_Ko-WQQfXDLhmLfd-kweVnS0ifldBGVfhVl2c")' }}
                        ></div>
                        <div className={`absolute bottom-0 ${isRtl ? 'right-0' : 'left-0'} p-6 sm:p-10 md:p-16 flex flex-col items-start gap-4 sm:gap-5 z-10 w-full`}>
                            <span className="bg-primary/20 border border-primary/30 text-primary text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full backdrop-blur-md">
                                {isRtl ? 'تأثير عالمي' : 'Global Impact'}
                            </span>
                            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] max-w-4xl tracking-tight break-words">
                                {isRtl
                                    ? 'جامعة السادات الذكية تطلق مبادرة بحثية للطاقة المستدامة بقيمة 50 مليون دولار'
                                    : 'Sadat Smart University Launches $50M Sustainable Energy Research Initiative'}
                            </h1>
                            <p className="text-slate-300 text-lg md:text-xl font-medium max-w-3xl line-clamp-2 md:line-clamp-none">
                                {isRtl
                                    ? 'بالتعاون مع قادة التكنولوجيا الدوليين، تقود جامعتنا مشروعًا مدته عقد من الزمان لإحداث ثورة في حلول تخزين الطاقة الخضراء للمدن الذكية الحضرية.'
                                    : 'In collaboration with international tech leaders, our university is pioneering a decade-long project to revolutionize green energy storage solutions for urban smart cities.'}
                            </p>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mt-4 w-full sm:w-auto">
                                <span className="flex items-center gap-2 text-white/80 text-sm font-bold bg-slate-900/50 backdrop-blur-md px-4 py-2 rounded-xl w-fit">
                                    <span className="material-symbols-outlined text-[18px]">calendar_today</span> {isRtl ? '24 أكتوبر 2024' : 'October 24, 2024'}
                                </span>
                                <button className={`w-full sm:w-auto justify-center bg-primary hover:bg-primary-600 text-slate-900 font-black py-4 px-8 rounded-xl transition-all flex items-center gap-2 group/btn shadow-xl shadow-primary/20`}>
                                    {isRtl ? 'قراءة القصة كاملة' : 'Read Full Story'}
                                    <span className={`material-symbols-outlined transition-transform ${isRtl ? 'group-hover/btn:-translate-x-1 rotate-180' : 'group-hover/btn:translate-x-1'}`}>arrow_forward</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

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
                            {/* News Card 1 */}
                            <article className="bg-white dark:bg-slate-950 rounded-[2rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-primary/5 dark:hover:border-primary/30 transition-all group cursor-pointer flex flex-col hover:-translate-y-1">
                                <div
                                    className="aspect-video bg-cover bg-center overflow-hidden transition-transform duration-700 group-hover:scale-105"
                                    alt="Students collaborating in a high-tech university lab"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBxsHEjefKj9Y0NpJfap6P4U2THT-HvfxMgmKxYSEex1karPkYkqeiYYpNbseb1NgaN2aJJ-9d1pCDJLOihVpoaVppLXQSWyIVwuRpGE_hppHgrxy7CLs8fm20eAulD7zi6WT7D-elFe3q44SP_rwUotC3AK8kZ2zqbrifpd16x1CMzPpiitR-KlR1ZPnElyN3MhO4ArnMXIrjN03ghKcEHtV0yO-fZFka4KcQpAPKhuzpPT4Ny0dKNHEi8fv-z5i8pWqp8eTRLpn5B")' }}
                                ></div>
                                <div className="p-8 flex flex-col flex-1">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-primary bg-primary/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-primary/20">{isRtl ? 'أبحاث' : 'Research'}</span>
                                        <span className="text-slate-500 dark:text-slate-400 font-medium text-sm" dir="ltr">Oct 22, 2024</span>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors leading-[1.3] break-words">
                                        {isRtl ? 'كلية الذكاء الاصطناعي تفوز بجائزة الابتكار العالمية' : 'AI Faculty wins Top Global Innovation Award'}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-base font-medium leading-relaxed mb-6 line-clamp-3 flex-1">
                                        {isRtl
                                            ? 'تم تكريم قسم الذكاء الاصطناعي لدينا لعمله الرائد في معالجة اللغات الطبيعية للغات الأصلية...'
                                            : 'Our Artificial Intelligence department has been recognized for its groundbreaking work in natural language processing for indigenous languages...'}
                                    </p>
                                    <span className="bg-slate-50 dark:bg-slate-900 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold text-sm flex items-center gap-2 group-hover:bg-primary group-hover:text-slate-900 group-hover:border-primary transition-all w-fit">
                                        {isRtl ? 'قراءة المزيد' : 'Read More'} <span className={`material-symbols-outlined text-base ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'} transition-transform`}>arrow_forward</span>
                                    </span>
                                </div>
                            </article>

                            {/* News Card 2 */}
                            <article className="bg-white dark:bg-slate-950 rounded-[2rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-primary/5 dark:hover:border-primary/30 transition-all group cursor-pointer flex flex-col hover:-translate-y-1">
                                <div
                                    className="aspect-video bg-cover bg-center overflow-hidden transition-transform duration-700 group-hover:scale-105"
                                    alt="Graduation ceremony with students throwing caps"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDtMnZB5MKPfDUCQ3tVrXqaQumtMpAGv2cUzkLze7n1Pin54omcNTbtQq0qhbNt-Gdi6M9mecygD-te4E2VoBEW77zOYZmsHyOS5k61XPfYQ6TFdYEsqZ2Mdxb6lE75zrPp-pCR6Ly205BvixK2COxap7hUkNSKNBNdkBhvfi0TahhFAJDPKgr8dibFxCt0chZzuxiPhBfbCp2pUyOh9Dv-Nb6DMFZqndMVmqYM1Y89l9F3egDToAYYhOWhxOjCWk7DQ5k0ZvS_Wpme")' }}
                                ></div>
                                <div className="p-8 flex flex-col flex-1">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-primary bg-primary/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-primary/20">{isRtl ? 'الحياة الجامعية' : 'Campus Life'}</span>
                                        <span className="text-slate-500 dark:text-slate-400 font-medium text-sm" dir="ltr">Oct 18, 2024</span>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors leading-[1.3] break-words">
                                        {isRtl ? 'الاستعداد لحفل التخرج الشتوي 2024' : 'Preparation for Winter Convocation 2024'}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-base font-medium leading-relaxed mb-6 line-clamp-3 flex-1">
                                        {isRtl
                                            ? 'تم الإعلان عن المواعيد النهائية والتفاصيل اللوجستية لحفل التخرج القادم. ومن المتوقع أن يتسلم أكثر من 2000 طالب درجاتهم...'
                                            : 'Final dates and logistics have been announced for the upcoming graduation ceremony. Over 2,000 students are expected to receive their degrees...'}
                                    </p>
                                    <span className="bg-slate-50 dark:bg-slate-900 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold text-sm flex items-center gap-2 group-hover:bg-primary group-hover:text-slate-900 group-hover:border-primary transition-all w-fit">
                                        {isRtl ? 'قراءة المزيد' : 'Read More'} <span className={`material-symbols-outlined text-base ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'} transition-transform`}>arrow_forward</span>
                                    </span>
                                </div>
                            </article>

                            {/* News Card 3 */}
                            <article className="bg-white dark:bg-slate-950 rounded-[2rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-primary/5 dark:hover:border-primary/30 transition-all group cursor-pointer flex flex-col hover:-translate-y-1">
                                <div
                                    className="aspect-video bg-cover bg-center overflow-hidden transition-transform duration-700 group-hover:scale-105"
                                    alt="Business students having a workshop meeting"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB5fyJza6yLVLbBUG4BXeCpPM-D0aHjywpwAMSzh5eyQ12lMJLR23RlsJLe3Ir7l9e7d09JnhcxR976w_XveVBGm1FPDo50LNaTadiGSHeBoOefp_qimfuvYoqLGpssnL6fXFPbIWQeuwyzXYOQmX6dVlpTY4MxRTSClO6-PYjMAJ2e6PG1nsYtGHhaykJ-3iNLGpiSIvsuPTKh_2r4WWkpeSHyL1WSqViEGmJoWRmtESGhLMJaqo695qi8M4z8XXvUuaUzEP9XqoHX")' }}
                                ></div>
                                <div className="p-8 flex flex-col flex-1">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-primary bg-primary/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-primary/20">{isRtl ? 'أكاديميات' : 'Academics'}</span>
                                        <span className="text-slate-500 dark:text-slate-400 font-medium text-sm" dir="ltr">Oct 15, 2024</span>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors leading-[1.3] break-words">
                                        {isRtl ? 'تخصص ماجستير إدارة أعمال جديد في الحوكمة الرقمية' : 'New MBA Concentration in Digital Governance'}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-base font-medium leading-relaxed mb-6 line-clamp-3 flex-1">
                                        {isRtl
                                            ? 'بدءًا من الفصل الدراسي القادم، ستقدم كلية إدارة الأعمال مسارًا متخصصًا يركز على سياسة وإدارة التحول الرقمي...'
                                            : 'Starting next semester, the Business School will offer a specialized track focusing on the policy and management of digital transformation...'}
                                    </p>
                                    <span className="bg-slate-50 dark:bg-slate-900 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold text-sm flex items-center gap-2 group-hover:bg-primary group-hover:text-slate-900 group-hover:border-primary transition-all w-fit">
                                        {isRtl ? 'قراءة المزيد' : 'Read More'} <span className={`material-symbols-outlined text-base ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'} transition-transform`}>arrow_forward</span>
                                    </span>
                                </div>
                            </article>

                            {/* News Card 4 */}
                            <article className="bg-white dark:bg-slate-950 rounded-[2rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-primary/5 dark:hover:border-primary/30 transition-all group cursor-pointer flex flex-col hover:-translate-y-1">
                                <div
                                    className="aspect-video bg-cover bg-center overflow-hidden transition-transform duration-700 group-hover:scale-105"
                                    alt="People collaborating at a startup office space"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBr4oGgby_E1cdHya0NbwPNidKecLQTLDV3ChPbaTRFEQ1eiwRBAOoJiGfG24LM1U3U6LVMdwOFSYUMgS31-APkD2UEpnei0MLvqIMFJx666T9Wv0ribAaCsy3Xq2ma5UQpSsUBMDktEbCkoUdHRk9uj19z-6jYZ7VLF8e60CLUCb7-QfsvBoCesAuHJVURYm9664oKEFfteYRo-EtBQTfup6X99_bSG_GCAefan0DmzV_x9hrstote8mB0XhN-qdZo2nNTn5nMAgaa")' }}
                                ></div>
                                <div className="p-8 flex flex-col flex-1">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-primary bg-primary/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-primary/20">{isRtl ? 'الفعاليات' : 'Events'}</span>
                                        <span className="text-slate-500 dark:text-slate-400 font-medium text-sm" dir="ltr">Oct 12, 2024</span>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors leading-[1.3] break-words">
                                        {isRtl ? 'أبرز أحداث المعرض التقني السنوي 2024' : 'Annual Tech Expo 2024 Highlights'}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-base font-medium leading-relaxed mb-6 line-clamp-3 flex-1">
                                        {isRtl
                                            ? 'استرجع أفضل اللحظات من معرض التكنولوجيا لهذا العام والذي يقوده الطلاب ويعرض أكثر من 100 مشروع نموذج أولي لقادة الصناعة...'
                                            : 'Relive the best moments from this year\'s student-led technology exhibition showcasing over 100 prototype projects to industry leaders...'}
                                    </p>
                                    <span className="bg-slate-50 dark:bg-slate-900 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold text-sm flex items-center gap-2 group-hover:bg-primary group-hover:text-slate-900 group-hover:border-primary transition-all w-fit">
                                        {isRtl ? 'قراءة المزيد' : 'Read More'} <span className={`material-symbols-outlined text-base ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'} transition-transform`}>arrow_forward</span>
                                    </span>
                                </div>
                            </article>
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
