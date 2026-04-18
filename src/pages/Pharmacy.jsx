import React from 'react';
import { useThemeContext } from '../context/ThemeContext';
import { useFacultyContext } from '../context/FacultyContext';
import { useCollegeContext } from '../context/CollegeContext';
import FacultyCard from '../components/faculty/FacultyCard';
import headPharmacyImage from '../assets/head_MEDICINE.jpeg';

export default function Pharmacy() {
    const { isRtl } = useThemeContext();
    const { facultyList } = useFacultyContext();
    const { colleges } = useCollegeContext();
    const college = colleges['pharmacy'];
    
    const filteredFaculty = facultyList.filter(f => f.colleges && f.colleges.includes('pharmacy'))
        .sort((a, b) => {
            if (a.role === 'doctor' && b.role !== 'doctor') return -1;
            if (a.role !== 'doctor' && b.role === 'doctor') return 1;
            return 0;
        })
        .slice(0, 4);

    return (
        <>
            <section className="relative bg-white dark:bg-slate-900 overflow-hidden transition-colors py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/10 border border-primary/20">
                            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                            <span className="text-sm font-black text-primary uppercase tracking-widest">
                                {isRtl ? 'نقبل الطلبات لعام 2024' : 'Now Accepting Applications 2024'}
                            </span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight">
                            {isRtl ? 'ابتكار التميز ' : 'Innovating '}
                            <span className="text-primary block mt-2">{isRtl ? 'الصيدلاني' : 'Pharmaceutical'}</span>
                            {!isRtl && <span className="block mt-2">Excellence</span>}
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed font-medium">
                            {isRtl
                                ? 'إعداد الجيل القادم من الصيادلة من خلال التدريب السريري العالمي الطراز والمرافق البحثية المتقدمة والالتزام بالرعاية الصحية العالمية.'
                                : 'Preparing the next generation of pharmacists through world-class clinical training, advanced research facilities, and a commitment to global healthcare.'}
                        </p>
                        <div className="flex flex-wrap gap-5 mt-4">
                            <button className="flex h-14 items-center justify-center gap-2 rounded-xl bg-primary px-8 text-lg font-black text-slate-900 shadow-xl shadow-primary/30 hover:bg-primary-600 active:scale-95 transition-all group/btn">
                                {isRtl ? 'اكتشف برامجنا' : 'Discover Our Programs'}
                                <span className={`material-symbols-outlined transition-transform duration-300 ${isRtl ? 'group-hover/btn:-translate-x-1 rotate-180' : 'group-hover/btn:translate-x-1'}`}>arrow_forward</span>
                            </button>
                            <button className="flex h-14 items-center justify-center rounded-xl border-2 border-slate-200 dark:border-slate-800 bg-transparent px-8 text-lg font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all">
                                {isRtl ? 'جولة افتراضية' : 'Virtual Tour'}
                            </button>
                        </div>
                    </div>
                    <div className="relative">
                        <div className={`absolute -top-10 ${isRtl ? '-right-10' : '-left-10'} w-40 h-40 bg-primary/20 rounded-full blur-[80px]`}></div>
                        <div className={`absolute -bottom-10 ${isRtl ? '-left-10' : '-right-10'} w-60 h-60 bg-primary/20 rounded-full blur-[100px]`}></div>
                        <div className={`aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800 transform ${isRtl ? '-rotate-3' : 'rotate-3'} hover:rotate-0 transition-transform duration-700`}>
                            <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-900/40 mix-blend-multiply z-10 transition-colors duration-500"></div>
                            <img
                                className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700 relative z-0"
                                alt={isRtl ? "مختبر صيدلية حديث" : "Modern pharmacy laboratory"}
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIitwnNB7k0j70AdGVlo5N8XDHzg9ZjxTInsGZZibIJyoXF3VU8IMiCJTVbSnVsqXW1b1Lc0InlJAdlAcGm-5HczhvcIVySd2NlOGFUbaCDw-lnjNUuoUID7O-egqD3-6wI2APMH5jy209QDWVLbjwKfpBakurKeRDAc6O81iA_eSIjqmrk11RH3nSyMB8gVOCvCyagE90MDeia2_gGx6ejlPyMhULLQO_oNKBQuGBEjbMrEpHbic7KMGpirD6xAT_I4YPs5Zl34j6"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Dean's Message */}
            {/* Dean's Message */}
            <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors" id="dean">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 lg:p-16 shadow-xl shadow-slate-200/40 dark:shadow-none border border-slate-100 dark:border-slate-800 flex flex-col lg:flex-row gap-16 items-center">
                        <div className="w-full lg:w-1/3">
                            <div className="aspect-[4/5] rounded-3xl overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl relative group">
                                <img
                                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                                    alt="Dean Portrait"
                                    src={college?.deanSection?.image || headPharmacyImage}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-80"></div>
                            </div>
                        </div>
                        <div className="w-full lg:w-2/3 space-y-8">
                            <span className="text-primary font-black uppercase tracking-widest text-sm inline-block px-4 py-2 bg-primary/10 rounded-full">
                                {isRtl ? 'رسالة من العميد' : 'Message from the Dean'}
                            </span>
                            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                                {isRtl
                                    ? '"تمكين صيادلة المستقبل لقيادة تحول الرعاية الصحية من خلال العلم والتعاطف."'
                                    : '"Empowering future pharmacists to lead the transformation of healthcare through science and compassion."'}
                            </h2>
                            <div className="space-y-6">
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg font-medium">
                                    {isRtl ? college?.deanSection?.messageAr : college?.deanSection?.message}
                                </p>
                            </div>
                            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                                <p className="text-2xl font-black text-slate-900 dark:text-white mb-2">{isRtl ? college?.deanSection?.nameAr : college?.deanSection?.name}</p>
                                <p className="text-primary font-bold">{isRtl ? 'أستاذ الصيدلة السريرية والعميد' : 'Professor of Clinical Pharmacy & Dean'}</p>
                            </div>
                            <button className="inline-flex mt-4 items-center gap-2 text-slate-900 dark:text-white font-bold bg-slate-50 dark:bg-slate-800 px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-primary hover:text-slate-900 hover:border-primary transition-all group">
                                {isRtl ? 'اقرأ السيرة الذاتية الكاملة' : 'Read Full Biography'} <span className={`material-symbols-outlined transition-transform ${isRtl ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'}`}>arrow_right_alt</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Departments Section */}
            <section className="py-24 bg-white dark:bg-slate-900 transition-colors" id="departments">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-16 text-center max-w-2xl mx-auto">
                        <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6">
                            {isRtl ? 'الأقسام الأكاديمية' : 'Academic Departments'}
                        </h2>
                        <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
                        <p className="mt-8 text-lg font-medium text-slate-600 dark:text-slate-400">
                            {isRtl ? 'أقسام متخصصة مكرسة لإتقان العلوم الصيدلانية والممارسة المهنية.' : 'Specialized divisions dedicated to the mastery of pharmaceutical sciences and professional practice.'}
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Dept 1 */}
                        <div className="group bg-white dark:bg-slate-950/50 p-10 rounded-[2rem] border border-slate-100 dark:border-slate-800 transition-all hover:-translate-y-2 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 flex flex-col">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-slate-900 transition-colors">
                                <span className="material-symbols-outlined text-4xl">pill</span>
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4">{isRtl ? 'الصيدلة السريرية' : 'Clinical Pharmacy'}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-base font-medium leading-relaxed flex-1 mb-8">
                                {isRtl ? 'التركيز على رعاية المرضى والمراقبة العلاجية والاستخدام الآمن والفعال للأدوية في بيئات المستشفيات.' : 'Focusing on patient care, therapeutic monitoring, and the safe, effective use of medications in hospital settings.'}
                            </p>
                            <a className="inline-flex items-center w-fit gap-2 font-bold text-sm text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 group-hover:bg-primary group-hover:text-slate-900 group-hover:border-primary transition-all" href="#">
                                {isRtl ? 'اعرف المزيد' : 'Learn More'} <span className={`material-symbols-outlined text-lg transition-transform ${isRtl ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'}`}>chevron_right</span>
                            </a>
                        </div>

                        {/* Dept 2 */}
                        <div className="group bg-white dark:bg-slate-950/50 p-10 rounded-[2rem] border border-slate-100 dark:border-slate-800 transition-all hover:-translate-y-2 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 flex flex-col">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-slate-900 transition-colors">
                                <span className="material-symbols-outlined text-4xl">science</span>
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4">{isRtl ? 'العقاقير' : 'Pharmacognosy'}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-base font-medium leading-relaxed flex-1 mb-8">
                                {isRtl ? 'دراسة الأدوية الطبية المستمدة من النباتات والمصادر الطبيعية الأخرى من خلال الاستخراج والتحليل الدقيق.' : 'The study of medicinal drugs derived from plants and other natural sources through rigorous extraction and analysis.'}
                            </p>
                            <a className="inline-flex items-center w-fit gap-2 font-bold text-sm text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 group-hover:bg-primary group-hover:text-slate-900 group-hover:border-primary transition-all" href="#">
                                {isRtl ? 'اعرف المزيد' : 'Learn More'} <span className={`material-symbols-outlined text-lg transition-transform ${isRtl ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'}`}>chevron_right</span>
                            </a>
                        </div>

                        {/* Dept 3 */}
                        <div className="group bg-white dark:bg-slate-950/50 p-10 rounded-[2rem] border border-slate-100 dark:border-slate-800 transition-all hover:-translate-y-2 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 flex flex-col">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-slate-900 transition-colors">
                                <span className="material-symbols-outlined text-4xl">biotech</span>
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4">{isRtl ? 'الكيمياء الصيدلانية' : 'Pharmaceutical Chemistry'}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-base font-medium leading-relaxed flex-1 mb-8">
                                {isRtl ? 'تصميم الأدوية والنمذجة الجزيئية وتخليق كيانات كيميائية جديدة لأغراض علاجية.' : 'Drug design, molecular modeling, and the synthesis of new chemical entities for therapeutic purposes.'}
                            </p>
                            <a className="inline-flex items-center w-fit gap-2 font-bold text-sm text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 group-hover:bg-primary group-hover:text-slate-900 group-hover:border-primary transition-all" href="#">
                                {isRtl ? 'اعرف المزيد' : 'Learn More'} <span className={`material-symbols-outlined text-lg transition-transform ${isRtl ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'}`}>chevron_right</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-24 bg-white dark:bg-slate-900 transition-colors">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-slate-900 dark:bg-slate-950 rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden group shadow-2xl shadow-slate-900/20 border-4 border-primary/10 dark:border-slate-800">
                        <div className={`absolute top-0 ${isRtl ? 'left-0 -ml-48' : 'right-0 -mr-48'} w-96 h-96 bg-primary/20 rounded-full -mt-48 blur-[100px] transition-all duration-1000 group-hover:scale-150`}></div>
                        <div className={`absolute bottom-0 ${isRtl ? 'right-0 -mr-32' : 'left-0 -ml-32'} w-64 h-64 bg-primary/20 rounded-full -mb-32 blur-[80px] transition-all duration-1000 group-hover:scale-150`}></div>
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8">
                                {isRtl ? 'مستعد لبدء رحلتك في الصيدلة؟' : 'Ready to Start Your Journey in Pharmacy?'}
                            </h2>
                            <p className="text-xl text-slate-300 font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
                                {isRtl
                                    ? 'انضم إلى مجتمع من العلماء والممارسين الذين يعيدون تعريف حدود الطب ورعاية المرضى.'
                                    : 'Join a community of scholars and practitioners who are redefining the boundaries of medicine and patient care.'}
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6">

                                <button className="flex min-w-[220px] items-center justify-center h-14 border border-white/20 bg-white/5 backdrop-blur-md text-white px-10 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
                                    {isRtl ? 'طلب معلومات' : 'Request Information'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Faculty Staff Section Preview */}
            <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h2 className="text-4xl font-black text-slate-900 dark:text-white capitalize">{isRtl ? 'هيئة التدريس' : 'Faculty Staff'}</h2>
                            <div className="mt-4 h-1.5 w-24 rounded-full bg-primary"></div>
                        </div>
                        <a href={`/college/pharmacy/faculty`} className="flex items-center gap-2 group bg-white dark:bg-slate-800 text-slate-900 dark:text-white hover:text-primary dark:hover:text-primary px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary shadow-sm font-bold transition-all">
                            {isRtl ? 'عرض الكل' : 'View All'}
                            <span className={`material-symbols-outlined transition-transform ${isRtl ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'}`}>arrow_forward</span>
                        </a>
                    </div>
                    
                    {filteredFaculty.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {filteredFaculty.map(member => (
                                <FacultyCard key={member.id} member={member} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 text-slate-500">
                            {isRtl ? 'لم يتم إضافة أعضاء هيئة تدريس بعد.' : 'No faculty members added yet.'}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
