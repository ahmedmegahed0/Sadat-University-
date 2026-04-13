import React from 'react';
import { useThemeContext } from '../context/ThemeContext';
import { useCollegeContext } from '../context/CollegeContext';
import { useNavigate } from 'react-router-dom';
import fcai from '../assets/fcai.webp';
import medicine from '../assets/medicine.webp';
import tourest from '../assets/tourest.png';

const collegeImages = {
    'computer-science': { img: fcai, labelEn: 'Tech & AI', labelAr: 'تكنولوجيا وذكاء اصطناعي', icon: 'verified', descEn: 'Accredited by International AI Council', descAr: 'معتمدة من المجلس الدولي للذكاء الاصطناعي' },
    'pharmacy': { img: medicine, labelEn: 'Health Sciences', labelAr: 'علوم صحية', icon: 'biotech', descEn: 'World-class Research Facilities', descAr: 'مرافق بحثية ذات مستوى عالمي' },
    'tourism': { img: tourest, labelEn: 'Hospitality', labelAr: 'الضيافة', icon: 'public', descEn: 'International Placement Partners', descAr: 'شركاء توظيف دوليون' },
};

export default function CollegesList() {
    const { isRtl } = useThemeContext();
    const { colleges } = useCollegeContext();
    const navigate = useNavigate();

    const collegeList = Object.values(colleges || {});

    return (
        <div className="flex flex-col w-full min-h-screen">
            <main className="flex-1 w-full">
                {/* Hero Banner */}
                <div className="w-full relative min-h-[50vh] flex items-center justify-center overflow-hidden mb-12">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        alt="Modern university campus architecture with golden hour lighting"
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDvkmJxd-snpv6hTjeaE8gG6kqK1iL2OWUuGICIHTUNF-tFio8gKjG9yOK8oztTEXcXEMPM0pYo_9Hu0bm6ErK1nIvgxHP0jf9pmYu3HXZz2eTfa3Mi8FIXdwhyh5aWC_GSiLC1POaH3fXQx6PoZTzRTwcYbmUdpYqviaug7LFjUw--t7Uxbsu-g5JrF7GNs5y0COdIsssjJS8BAr-l-p-yDO02Vi2GD74NgvEe_VMd4g3mAytY9SLFjnEmFHempS_xkDnDiLvE9OUj")' }}
                    >
                        <div className="absolute inset-0 bg-slate-900/80 dark:bg-slate-900/90 mix-blend-multiply"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                    </div>

                    <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 flex flex-col items-center text-center mt-12">
                        <span className="inline-block py-2 px-6 rounded-full bg-primary/20 border border-primary/30 text-primary font-bold text-sm tracking-widest uppercase mb-8 backdrop-blur-md">
                            {isRtl ? 'التميز الأكاديمي' : 'Academic Excellence'}
                        </span>
                        <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tight mb-8">
                            {isRtl ? 'كلياتنا' : 'Our Faculties'}
                        </h1>
                        <p className="text-slate-300 text-lg md:text-xl font-medium max-w-2xl mb-12 leading-relaxed">
                            {isRtl
                                ? 'شكل مستقبلك في واحدة من كلياتنا ذات المستوى العالمي. نحن نقدم تعليماً مبتكراً مدعوماً بالتكنولوجيا الذكية والتوجيه الخبير.'
                                : 'Shape your future at one of our world-class colleges. We provide innovative education powered by smart technology and expert mentorship.'}
                        </p>
                    </div>
                </div>

                {/* Filters & Stats */}
                <div className="px-6 py-8 flex flex-wrap justify-between items-center gap-6 border-b border-slate-100 dark:border-slate-800 max-w-7xl mx-auto">
                    <div className="flex gap-4 flex-wrap">
                        <button className="px-6 py-2.5 rounded-full bg-primary/10 text-primary text-sm font-bold border border-primary/20 hover:bg-primary/20 transition-colors">
                            {isRtl ? 'جميع البرامج' : 'All Programs'}
                        </button>
                        <button className="px-6 py-2.5 rounded-full bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 text-sm font-bold border border-slate-100 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-200 dark:hover:border-slate-700 transition-all">
                            {isRtl ? 'البكالوريوس' : 'Undergraduate'}
                        </button>
                        <button className="px-6 py-2.5 rounded-full bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 text-sm font-bold border border-slate-100 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-200 dark:hover:border-slate-700 transition-all">
                            {isRtl ? 'الدراسات العليا' : 'Postgraduate'}
                        </button>
                    </div>
                    <div className="text-slate-500 font-medium text-sm px-4">
                        {isRtl ? 'عرض ' : 'Showing '}
                        <span className="font-black text-slate-900 dark:text-white text-lg">{collegeList.length}</span>
                        {isRtl ? ' كليات' : ' Colleges Found'}
                    </div>
                </div>

                {/* Colleges Grid */}
                <div className="px-6 py-16 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {collegeList.map(college => {
                            const info = collegeImages[college.id] || { 
                                img: 'https://images.unsplash.com/photo-1541888081688-ea121a55b0a7?q=80&w=2070',
                                labelEn: 'University', labelAr: 'جامعة', icon: 'school', descEn: 'Excellence in Education', descAr: 'التميز في التعليم'
                            };

                            return (
                                <div key={college.id} className="group flex flex-col bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-none hover:shadow-2xl hover:shadow-slate-200/60 dark:hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-300 cursor-pointer" onClick={() => navigate(`/college/${college.id}`)}>
                                    <div className="h-64 w-full overflow-hidden relative flex items-center justify-center bg-slate-50 dark:bg-slate-900/50 hover:bg-transparent dark:hover:bg-slate-900/30 transition-colors">
                                        <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors z-10"></div>
                                        <img loading="lazy" className="h-full w-full p-8 object-contain transition-transform duration-700 ease-out group-hover:scale-110 relative z-0" src={info.img} alt={info.labelEn} />
                                        <div className={`absolute top-6 ${isRtl ? 'left-6' : 'right-6'} z-20 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-black text-primary border border-primary/20 uppercase tracking-widest`}>
                                            {isRtl ? info.labelAr : info.labelEn}
                                        </div>
                                    </div>
                                    <div className="p-8 flex flex-col flex-1">
                                        <h3 className="text-slate-900 dark:text-white text-2xl font-black mb-4 leading-tight group-hover:text-primary transition-colors">
                                            {isRtl ? college.nameAr : college.name}
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-8 flex-1 line-clamp-3">
                                            {isRtl ? college.deanSection?.messageAr : college.deanSection?.message}
                                        </p>
                                        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-4">
                                            <div className="flex items-center gap-3 text-sm font-semibold text-slate-500 dark:text-slate-400">
                                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                                    <span className="material-symbols-outlined text-sm">{info.icon}</span>
                                                </div>
                                                {isRtl ? info.descAr : info.descEn}
                                            </div>
                                            <button className="w-full mt-2 group/btn flex items-center justify-center gap-3 rounded-xl h-12 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white font-bold transition-all hover:bg-primary hover:text-white hover:border-primary">
                                                {isRtl ? 'زيارة موقع الكلية' : 'Visit Faculty Website'}
                                                <span className={`material-symbols-outlined text-lg transition-transform ${isRtl ? 'group-hover/btn:-translate-x-2 rotate-180' : 'group-hover/btn:translate-x-2'}`}>arrow_forward</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-12 mb-24 max-w-7xl mx-auto px-6">
                    <div className="bg-slate-900 dark:bg-slate-950 rounded-[2.5rem] p-12 md:p-20 text-center border-4 border-primary/10 dark:border-slate-800 shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                                {isRtl ? 'مستعد للانضمام إلى مجتمعنا؟' : 'Ready to join our community?'}
                            </h2>
                            <p className="text-slate-300 font-medium text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                                {isRtl
                                    ? 'الطلبات مفتوحة الآن للعام الدراسي القادم. احجز مكانك في جامعة السادات الذكية اليوم.'
                                    : 'Applications are now open for the upcoming academic year. Secure your place at Sadat Smart University today.'}
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-5">
                                <button
                                    className="flex min-w-[220px] cursor-pointer items-center justify-center gap-2 rounded-xl h-14 px-8 bg-primary hover:bg-primary-600 text-slate-900 text-lg font-black transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30 active:scale-95 group/btn"
                                    onClick={() => navigate('/register')}
                                >
                                    <span>{isRtl ? 'بدء التقديم' : 'Start Application'}</span>
                                    <span className={`material-symbols-outlined transition-transform duration-300 ${isRtl ? 'group-hover/btn:-translate-x-2 rotate-180' : 'group-hover/btn:translate-x-2'}`}>arrow_forward</span>
                                </button>
                                <button
                                    className="flex min-w-[220px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-white/10 border border-white/20 text-white text-lg font-bold transition-all hover:bg-white/20 backdrop-blur-md"
                                    onClick={() => navigate('/admissions')}
                                >
                                    {isRtl ? 'عرض المتطلبات' : 'View Requirements'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
