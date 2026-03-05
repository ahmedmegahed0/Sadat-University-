import React from 'react';
import { useThemeContext } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';

export default function CollegesList() {
    const { isRtl } = useThemeContext();
    const navigate = useNavigate();

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
                        <span className="font-black text-slate-900 dark:text-white text-lg">3</span>
                        {isRtl ? ' كليات' : ' Colleges Found'}
                    </div>
                </div>

                {/* Colleges Grid */}
                <div className="px-6 py-16 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Faculty 1 */}
                        <div className="group flex flex-col bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-none hover:shadow-2xl hover:shadow-slate-200/60 dark:hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-300 cursor-pointer" onClick={() => navigate('/college/computer-science')}>
                            <div className="relative h-64 overflow-hidden">
                                <div
                                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    alt="Digital circuit lines and glowing artificial intelligence brain icon"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAD13ooi2_wBDuNYusRSO1S_IPaSTS0okYs7BSvnbb9jcdmL8pFwLqXebtQLA_KONCuMlHTrjTp7Tm76DshuTU9vTN8yFHJdSlpS8bSlDHJL1lCisz2ZHlzrBaTb7zDQJ6gQ1Wey928yNIaRoxoOopM8Lp3uI-HXjWdN3B02CzTlVOnIb46khvFpyN05B0PoC-ypPKaq7zybEfGDmRjToltsqCAfHFqNYNCawAlHDDN8KBH0Aj3KQwvIpGYPMyEVHz45j-LPfYpyLjN")' }}
                                ></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                                <div className={`absolute top-6 ${isRtl ? 'left-6' : 'right-6'} bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-black text-primary border border-primary/20 uppercase tracking-widest`}>
                                    {isRtl ? 'تكنولوجيا وذكاء اصطناعي' : 'Tech & AI'}
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <h3 className="text-slate-900 dark:text-white text-2xl font-black mb-4 leading-tight group-hover:text-primary transition-colors">
                                    {isRtl ? 'كلية الحاسبات والذكاء الاصطناعي' : 'Faculty of Computer Science & AI'}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-8 flex-1">
                                    {isRtl
                                        ? 'قيادة الثورة الرقمية من خلال الأبحاث المبتكرة وتقنيات الذكاء الاصطناعي المتقدمة. إتقان البرمجة وعلوم البيانات والروبوتات في مختبراتنا المتطورة.'
                                        : 'Leading the digital revolution through innovative research and advanced AI technologies. Master coding, data science, and robotics in our state-of-the-art labs.'}
                                </p>
                                <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-4">
                                    <div className="flex items-center gap-3 text-sm font-semibold text-slate-500 dark:text-slate-400">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                            <span className="material-symbols-outlined text-sm">verified</span>
                                        </div>
                                        {isRtl ? 'معتمدة من المجلس الدولي للذكاء الاصطناعي' : 'Accredited by International AI Council'}
                                    </div>
                                    <button className="w-full mt-2 group/btn flex items-center justify-center gap-3 rounded-xl h-12 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white font-bold transition-all hover:bg-primary hover:text-white hover:border-primary">
                                        {isRtl ? 'زيارة موقع الكلية' : 'Visit Faculty Website'}
                                        <span className={`material-symbols-outlined text-lg transition-transform ${isRtl ? 'group-hover/btn:-translate-x-2 rotate-180' : 'group-hover/btn:translate-x-2'}`}>arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Faculty 2 */}
                        <div className="group flex flex-col bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-none hover:shadow-2xl hover:shadow-slate-200/60 dark:hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-300 cursor-pointer" onClick={() => navigate('/college/pharmacy')}>
                            <div className="relative h-64 overflow-hidden">
                                <div
                                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    alt="Close up of laboratory equipment and medicine bottles on a clean white background"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDQgGTA7U0j56dJDh-77lcS1g7PpjLEUGwIz85-wJ7ZpW1hWOBwhl1YXUuDJSv9--tWmjTADCB2AWssn5qYssZAl1YpQZwOrIQq1EA2TKKmcDppqdKYB1zZIjKvSD9QHfOniB0Sdc2v2vBpFkbmeZ9km-HX-PCCVXNaTlFtqkG1hUPZ3sxkQ6pjEx95BH1tyMbYkuDVv9JyOX6DGY8hueNePk7P2ZkE-26vTymyw4A0fp_sM1mdP46xrOIDP2nFlDK_X825Ar9CSdJu")' }}
                                ></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                                <div className={`absolute top-6 ${isRtl ? 'left-6' : 'right-6'} bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-black text-primary border border-primary/20 uppercase tracking-widest`}>
                                    {isRtl ? 'علوم صحية' : 'Health Sciences'}
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <h3 className="text-slate-900 dark:text-white text-2xl font-black mb-4 leading-tight group-hover:text-primary transition-colors">
                                    {isRtl ? 'كلية الصيدلة' : 'Faculty of Pharmacy'}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-8 flex-1">
                                    {isRtl
                                        ? 'مكرسة للتميز في العلوم الصيدلانية والابتكار في الرعاية الصحية. استعد لمهنة في الصيدلة السريرية واكتشاف الأدوية والأبحاث الطبية.'
                                        : 'Dedicated to excellence in pharmaceutical sciences and healthcare innovation. Prepare for a career in clinical pharmacy, drug discovery, and medical research.'}
                                </p>
                                <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-4">
                                    <div className="flex items-center gap-3 text-sm font-semibold text-slate-500 dark:text-slate-400">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                            <span className="material-symbols-outlined text-sm">biotech</span>
                                        </div>
                                        {isRtl ? 'مرافق بحثية ذات مستوى عالمي' : 'World-class Research Facilities'}
                                    </div>
                                    <button className="w-full mt-2 group/btn flex items-center justify-center gap-3 rounded-xl h-12 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white font-bold transition-all hover:bg-primary hover:text-white hover:border-primary">
                                        {isRtl ? 'زيارة موقع الكلية' : 'Visit Faculty Website'}
                                        <span className={`material-symbols-outlined text-lg transition-transform ${isRtl ? 'group-hover/btn:-translate-x-2 rotate-180' : 'group-hover/btn:translate-x-2'}`}>arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Faculty 3 */}
                        <div className="group flex flex-col bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-none hover:shadow-2xl hover:shadow-slate-200/60 dark:hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-300 cursor-pointer" onClick={() => navigate('/college/tourism')}>
                            <div className="relative h-64 overflow-hidden">
                                <div
                                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    alt="Luxury hotel lobby with elegant gold decorations and high ceilings"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuADRf1anvEHNHb4E6TFwWC9nbKC06rwXEGnud8eFqTshe2myXFXsJUy_NEzsRpMLfK02h6WugiLw_f4NaVTw7rEr-En2U20RSSPwCqoP3iE9j2RUmRJ0BSoMxE-JEG3Tyn3U8HXbWGWKFrB-vnXNOLgt6VqBdrXWmb1MirNIzPmYF_ZXBOZAzDrxXnCUfWeOnb1k7xnS5pqaf7iB0T5wzFL__Ess1RjKL4vve0CwUgqitzWXSPN8rjUQPD6jYG1GoIcSuIzeJ91z614")' }}
                                ></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                                <div className={`absolute top-6 ${isRtl ? 'left-6' : 'right-6'} bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-black text-primary border border-primary/20 uppercase tracking-widest`}>
                                    {isRtl ? 'الضيافة' : 'Hospitality'}
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <h3 className="text-slate-900 dark:text-white text-2xl font-black mb-4 leading-tight group-hover:text-primary transition-colors">
                                    {isRtl ? 'كلية السياحة والفنادق' : 'Faculty of Tourism & Hotels'}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-8 flex-1">
                                    {isRtl
                                        ? 'تشكيل مستقبل الضيافة العالمية وإدارة السياحة المستدامة. اكتسب خبرة عملية في إدارة الفنادق الدولية وتخطيط السفر.'
                                        : 'Shaping the future of global hospitality and sustainable tourism management. Gain practical experience in international hotel management and travel planning.'}
                                </p>
                                <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-4">
                                    <div className="flex items-center gap-3 text-sm font-semibold text-slate-500 dark:text-slate-400">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                            <span className="material-symbols-outlined text-sm">public</span>
                                        </div>
                                        {isRtl ? 'شركاء توظيف دوليون' : 'International Placement Partners'}
                                    </div>
                                    <button className="w-full mt-2 group/btn flex items-center justify-center gap-3 rounded-xl h-12 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white font-bold transition-all hover:bg-primary hover:text-white hover:border-primary">
                                        {isRtl ? 'زيارة موقع الكلية' : 'Visit Faculty Website'}
                                        <span className={`material-symbols-outlined text-lg transition-transform ${isRtl ? 'group-hover/btn:-translate-x-2 rotate-180' : 'group-hover/btn:translate-x-2'}`}>arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                        </div>
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
