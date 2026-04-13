import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useThemeContext } from '../../context/ThemeContext';
import { useGlobalData } from '../../context/GlobalDataContext';

export default function UniversitiesPage() {
    const { category } = useParams();
    const { isRtl } = useThemeContext();
    const { universities: globalUniversities } = useGlobalData();

    const [universities, setUniversities] = useState([]);

    useEffect(() => {
        const data = (globalUniversities || []).filter(u => u.category === category);
        setUniversities(data);
    }, [category, globalUniversities]);

    const getCategoryTitle = () => {
        switch (category) {
            case 'egyptian': return isRtl ? 'الجامعات المصرية' : 'Egyptian Universities';
            case 'arab': return isRtl ? 'الجامعات العربية' : 'Arab Universities';
            case 'foreign': return isRtl ? 'الجامعات الأجنبية' : 'Foreign Universities';
            default: return isRtl ? 'الجامعات' : 'Universities';
        }
    };

    return (
        <div className="flex flex-col w-full min-h-screen">
            <main className="flex-1 w-full">
                {/* Hero Banner */}
                <div className="w-full relative min-h-[40vh] flex items-center justify-center overflow-hidden mb-12">
                     <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDvkmJxd-snpv6hTjeaE8gG6kqK1iL2OWUuGICIHTUNF-tFio8gKjG9yOK8oztTEXcXEMPM0pYo_9Hu0bm6ErK1nIvgxHP0jf9pmYu3HXZz2eTfa3Mi8FIXdwhyh5aWC_GSiLC1POaH3fXQx6PoZTzRTwcYbmUdpYqviaug7LFjUw--t7Uxbsu-g5JrF7GNs5y0COdIsssjJS8BAr-l-p-yDO02Vi2GD74NgvEe_VMd4g3mAytY9SLFjnEmFHempS_xkDnDiLvE9OUj")' }}
                    >
                        <div className="absolute inset-0 bg-slate-900/80 dark:bg-slate-900/90 mix-blend-multiply"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                    </div>

                    <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 flex flex-col items-center text-center mt-12">
                        <span className="inline-block py-2 px-6 rounded-full bg-primary/20 border border-primary/30 text-primary font-bold text-sm tracking-widest uppercase mb-6 backdrop-blur-md">
                            {isRtl ? 'الجامعات الشريكة' : 'Partner Universities'}
                        </span>
                        <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6">
                            {getCategoryTitle()}
                        </h1>
                    </div>
                </div>

                {/* Universities List */}
                <div className="px-6 py-8 max-w-4xl mx-auto mb-20">
                    <div className="flex flex-col gap-4">
                        {universities.map((uni) => {
                            const destination = uni.website || uni.link;
                            const isExternal = !!destination;
                            const targetPath = destination || `/university/${uni.id}`;
                            const CardContent = (
                                <>
                                    <div className="flex items-center gap-5 text-left rtl:text-right w-full">
                                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                            <span className="material-symbols-outlined text-3xl">{uni.icon || 'account_balance'}</span>
                                        </div>
                                        <div className="flex flex-col overflow-hidden">
                                            <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors truncate">
                                                {isRtl ? uni.nameAr : uni.nameEn}
                                            </h3>
                                            <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1 truncate">
                                                {isRtl ? uni.accreditationAr : uni.accreditationEn}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-400 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 flex-shrink-0 ml-4 rtl:ml-0 rtl:mr-4">
                                        <span className="material-symbols-outlined rtl:-scale-x-100">
                                            {isExternal ? 'open_in_new' : 'arrow_forward'}
                                        </span>
                                    </div>
                                </>
                            );

                            const cardClasses = "group flex items-center justify-between bg-white dark:bg-slate-900 p-5 md:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 w-full";

                            return isExternal ? (
                                <a key={uni.id} href={targetPath} target="_blank" rel="noopener noreferrer" className={cardClasses}>
                                    {CardContent}
                                </a>
                            ) : (
                                <Link key={uni.id} to={targetPath} className={cardClasses}>
                                    {CardContent}
                                </Link>
                            );
                        })}
                    </div>
                    {universities.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-slate-500 font-bold text-xl">{isRtl ? 'لا توجد جامعات متاحة في هذا التصنيف حالياً.' : 'No universities available in this category yet.'}</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
