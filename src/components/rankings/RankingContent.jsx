import React from 'react';
import { Link } from 'react-router-dom';
import { useThemeContext } from '../../context/ThemeContext';

export default function RankingContent({
    breadcrumb,
    title,
    subtitle,
    bgImage,
    logoImage,
    aboutText,
    achievements,
    stats,
    reportUrl = "#",
    methodologyUrl = "#"
}) {
    const { isRtl } = useThemeContext();

    return (
        <>
            <nav className="flex flex-wrap items-center gap-2 text-sm md:text-base">
                <Link className="text-slate-500 hover:text-primary transition-colors" to="/">
                    {isRtl ? 'الرئيسية' : 'Home'}
                </Link>
                <span className={`material-symbols-outlined text-slate-400 text-xs ${isRtl ? 'rotate-180' : ''}`}>
                    chevron_right
                </span>
                <span className="text-slate-500">
                    {isRtl ? 'التصنيفات الدولية' : 'International Rankings'}
                </span>
                <span className={`material-symbols-outlined text-slate-400 text-xs ${isRtl ? 'rotate-180' : ''}`}>
                    chevron_right
                </span>
                <span className="text-primary font-semibold">{breadcrumb}</span>
            </nav>

            <div className="relative overflow-hidden rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-primary/10">
                <div
                    className="h-64 w-full bg-cover bg-center opacity-90"
                    style={{ backgroundImage: `url("${bgImage}")` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 right-0 p-8 flex flex-col md:flex-row items-end md:items-center gap-6 w-full">
                    {logoImage && (
                        <div className="bg-white p-4 rounded-lg shadow-xl shrink-0 border border-primary/20">
                            <div
                                className="w-24 h-24 bg-contain bg-center bg-no-repeat"
                                style={{ backgroundImage: `url("${logoImage}")` }}
                            ></div>
                        </div>
                    )}
                    <div className="text-white">
                        <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-tight mb-2">{title}</h1>
                        <p className="text-lg text-primary font-medium">{subtitle}</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 flex flex-col gap-6">
                    <section className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-primary/5">
                        <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100 flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary">info</span>
                            {isRtl ? 'حول التصنيف' : 'About Ranking'}
                        </h3>
                        <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                            {aboutText.map((paragraph, idx) => (
                                <p key={idx} className="whitespace-pre-line">{paragraph}</p>
                            ))}
                        </div>
                    </section>

                    {achievements && achievements.length > 0 && (
                    <section className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-primary/5">
                        <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100 flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary">emoji_events</span>
                            {isRtl ? 'أبرز الإنجازات' : 'Key Achievements'}
                        </h3>
                        <ul className="space-y-4">
                            {achievements.map((item, idx) => (
                                <li key={idx} className="flex gap-4 items-start">
                                    <div className="mt-1 bg-primary/20 p-1 rounded-full text-primary shrink-0">
                                        <span className="material-symbols-outlined text-sm font-bold">check</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-slate-100">{item.title}</p>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>
                    )}
                </div>

                <div className="flex flex-col gap-6">
                    <section className="bg-primary p-8 rounded-xl text-white shadow-lg">
                        <h3 className="text-xl font-bold mb-8 border-b border-white/20 pb-4">
                            {isRtl ? 'أرقام مميزة' : 'Key Figures'}
                        </h3>
                        <div className="space-y-8">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="text-center">
                                    <p className={`text-5xl font-black mb-1 ${!isRtl && 'font-sans'}`} style={{ direction: 'ltr' }}>{stat.value}</p>
                                    <p className="text-white/80 text-sm">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-primary/5">
                        <h4 className="font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
                            <span className="material-symbols-outlined text-primary">download</span>
                            {isRtl ? 'روابط هامة' : 'Important Links'}
                        </h4>
                        <div className="flex flex-col gap-3">
                            <a className="flex items-center justify-between p-3 rounded bg-primary/5 hover:bg-primary/10 transition-colors group text-slate-900 dark:text-slate-100" href={reportUrl} target="_blank" rel="noopener noreferrer">
                                <span className="text-sm font-medium">{isRtl ? 'التقرير الكامل' : 'Full Report'}</span>
                                <span className={`material-symbols-outlined text-primary transition-transform ${isRtl ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}>picture_as_pdf</span>
                            </a>
                            <a className="flex items-center justify-between p-3 rounded bg-primary/5 hover:bg-primary/10 transition-colors group text-slate-900 dark:text-slate-100" href={methodologyUrl} target="_blank" rel="noopener noreferrer">
                                <span className="text-sm font-medium">{isRtl ? 'منهجية التصنيف' : 'Methodology'}</span>
                                <span className={`material-symbols-outlined text-primary transition-transform ${isRtl ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}>article</span>
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
