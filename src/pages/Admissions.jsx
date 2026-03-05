import React from 'react';
import { useThemeContext } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';

export default function Admissions() {
    const { isRtl } = useThemeContext();
    const navigate = useNavigate();

    return (
        <div className="flex flex-col w-full min-h-screen text-slate-900 dark:text-slate-100">
            <main className="flex-1 w-full pb-24">
                {/* Hero Section */}
                <div className="w-full relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        alt="Modern university campus building with students walking"
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCc-BSk7jZ_F90do36ZM4kK25ptNdSsyxQ9j4kLFA6ErlN8lkZ42hlQmT4RhoEhNwyRg0wvl1hQKtwIh15-9vUh2miTBrzHb60JURMqQ--S_wqDzodmKclVRNgCmnyVKDfsGJSs0b6rpb1kcQ9OCBUjuakqxz-YoKetYp7leF_0SpP0dhHVFWL7QvJp2SlxtrxdopV4PDgBIA5i6D9N0Cqt_vmL094tI5vWJwRLjsatrWpqlKg6BlSHnFnjqd0VTpLK36Nbv_J3rq__")' }}
                    >
                        <div className="absolute inset-0 bg-slate-900/80 dark:bg-slate-900/90 mix-blend-multiply"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                    </div>

                    <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 flex flex-col items-center text-center mt-12">
                        <span className="inline-block py-2 px-6 rounded-full bg-primary/20 border border-primary/30 text-primary font-bold text-sm tracking-widest uppercase mb-8 backdrop-blur-md">
                            {isRtl ? 'القبول والتسجيل' : 'Admissions & Enrollment'}
                        </span>
                        <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tight mb-8">
                            {isRtl ? 'انضم إلى ' : 'Join Our '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-300">
                                {isRtl ? 'مجتمعنا' : 'Community'}
                            </span>
                        </h1>
                        <p className="text-slate-300 text-lg md:text-xl font-medium max-w-2xl mb-12 leading-relaxed">
                            {isRtl
                                ? 'شكل مستقبلك في جامعة السادات الذكية. نحن نبحث عن عقول مبتكرة وقادة المستقبل. باب التقديم للعام الدراسي 2024 مفتوح الآن.'
                                : 'Shape your future at Sadat Smart University. We are looking for innovative minds and future leaders. Applications for the 2024 academic year are now open.'}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
                            <button
                                onClick={() => navigate('/register')}
                                className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-primary text-slate-900 text-lg font-black transition-all duration-300 hover:bg-primary-600 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/30 active:scale-95"
                            >
                                {isRtl ? 'ابدأ التقديم' : 'Start Application'}
                            </button>
                            <button className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-white/10 backdrop-blur-md text-white border border-white/20 text-lg font-bold transition-all duration-300 hover:bg-white/20 hover:-translate-y-1">
                                {isRtl ? 'عرض الدليل' : 'View Prospectus'}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="max-w-[1200px] mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Left Column: Requirements & Process */}
                    <div className="lg:col-span-8 space-y-20">
                        {/* Admission Requirements Section */}
                        <section>
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined text-3xl">fact_check</span>
                                </div>
                                <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                                    {isRtl ? 'متطلبات القبول' : 'Admission Requirements'}
                                </h2>
                            </div>
                            <div className="grid gap-5">
                                <div className="flex items-start gap-5 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-none transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 group">
                                    <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                        <span className="material-symbols-outlined text-lg">check</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{isRtl ? 'المؤهلات الأكاديمية' : 'Academic Qualifications'}</h4>
                                        <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed mt-1">
                                            {isRtl
                                                ? 'شهادة الثانوية العامة أو ما يعادلها عالمياً بمعدل تراكمي لا يقل عن 3.0 من 4.0.'
                                                : 'High school diploma or international equivalent with a minimum GPA of 3.0 on a 4.0 scale.'}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-5 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-none transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 group">
                                    <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                        <span className="material-symbols-outlined text-lg">check</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{isRtl ? 'إجادة اللغة' : 'Language Proficiency'}</h4>
                                        <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed mt-1">
                                            {isRtl
                                                ? 'إثبات إجادة اللغة الإنجليزية عبر TOEFL (حد أدنى 80) أو IELTS (حد أدنى 6.5) أو شهادة معادلة.'
                                                : 'Proof of English proficiency via TOEFL (min 80), IELTS (min 6.5), or equivalent certification.'}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-5 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-none transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 group">
                                    <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                        <span className="material-symbols-outlined text-lg">check</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{isRtl ? 'رسائل التوصية' : 'Letters of Recommendation'}</h4>
                                        <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed mt-1">
                                            {isRtl
                                                ? 'رسالتان من مشرفين أكاديميين أو مهنيين تسلط الضوء على إمكاناتك.'
                                                : 'Two letters from academic or professional supervisors highlighting your potential.'}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-5 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-none transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 group">
                                    <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                        <span className="material-symbols-outlined text-lg">check</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{isRtl ? 'البيان الشخصي' : 'Personal Statement'}</h4>
                                        <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed mt-1">
                                            {isRtl
                                                ? 'مقال من 500-800 كلمة يوضح أهدافك وسبب اختيارك لجامعة السادات الذكية.'
                                                : 'A 500-800 word essay detailing your goals and why you chose Sadat Smart University.'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Application Process Section */}
                        <section>
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined text-3xl">account_tree</span>
                                </div>
                                <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                                    {isRtl ? 'عملية التقديم' : 'Application Process'}
                                </h2>
                            </div>
                            <div className={`relative space-y-10 before:absolute before:inset-0 ${isRtl ? 'before:mr-6 before:translate-x-px' : 'before:ml-6 before:-translate-x-px'} md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-primary/30 before:to-transparent`}>

                                {/* Step 1 */}
                                <div className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row${isRtl ? '' : '-reverse'} group`}>
                                    <div className="flex items-center justify-center w-14 h-14 rounded-full border-4 border-white dark:border-slate-950 bg-primary/10 text-primary font-black shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white z-10 text-xl backdrop-blur-md">
                                        1
                                    </div>
                                    <div className="w-[calc(100%-5rem)] md:w-[calc(50%-3rem)] p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-none transition-transform duration-300 group-hover:-translate-y-1">
                                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{isRtl ? 'إنشاء حساب' : 'Create Account'}</h4>
                                        <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                                            {isRtl ? 'سجل في بوابة القبول الخاصة بنا وقم بتأكيد بريدك الإلكتروني لبدء رحلتك.' : 'Register on our admissions portal and verify your email to start your journey.'}
                                        </p>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row${isRtl ? '-reverse' : ''} group`}>
                                    <div className="flex items-center justify-center w-14 h-14 rounded-full border-4 border-white dark:border-slate-950 bg-primary/10 text-primary font-black shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white z-10 text-xl backdrop-blur-md">
                                        2
                                    </div>
                                    <div className="w-[calc(100%-5rem)] md:w-[calc(50%-3rem)] p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-none transition-transform duration-300 group-hover:-translate-y-1">
                                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{isRtl ? 'رفع المستندات' : 'Upload Documents'}</h4>
                                        <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                                            {isRtl ? 'قم بمسح ورفع جميع الكشوفات الدراسية والهويات والشهادات المطلوبة إلى ملفك الشخصي.' : 'Scan and upload all required transcripts, IDs, and certificates to your profile.'}
                                        </p>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row${isRtl ? '' : '-reverse'} group`}>
                                    <div className="flex items-center justify-center w-14 h-14 rounded-full border-4 border-white dark:border-slate-950 bg-primary text-slate-900 font-black shadow-lg shadow-primary/30 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-all duration-300 group-hover:scale-110 z-10 text-xl backdrop-blur-md">
                                        3
                                    </div>
                                    <div className="w-[calc(100%-5rem)] md:w-[calc(50%-3rem)] p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-none transition-transform duration-300 group-hover:-translate-y-1">
                                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{isRtl ? 'جولة المقابلات' : 'Interview Round'}</h4>
                                        <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                                            {isRtl ? 'سيتم دعوة المرشحين المختارين لجلسة مقابلة افتراضية أو شخصية.' : 'Shortlisted candidates will be invited for a virtual or in-person interview session.'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right Column: Important Dates & Sidebar */}
                    <div className="lg:col-span-4 space-y-10">
                        {/* Important Dates Card */}
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-none">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined text-2xl">calendar_month</span>
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white">{isRtl ? 'تواريخ مهمة' : 'Important Dates'}</h3>
                            </div>
                            <div className="overflow-hidden rounded-xl border border-slate-100 dark:border-slate-800">
                                <table className={`w-full text-sm ${isRtl ? 'text-right' : 'text-left'}`}>
                                    <thead className="bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400 uppercase text-xs font-black tracking-widest border-b border-slate-100 dark:border-slate-800">
                                        <tr>
                                            <th className="px-5 py-4">{isRtl ? 'الحدث' : 'Event'}</th>
                                            <th className="px-5 py-4">{isRtl ? 'الموعد النهائي' : 'Deadline'}</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                        <tr className="dark:text-slate-300 transition-colors hover:bg-slate-50 dark:hover:bg-slate-950">
                                            <td className="px-5 py-4 font-bold text-slate-700 dark:text-slate-200">{isRtl ? 'القبول المبكر' : 'Early Action'}</td>
                                            <td className="px-5 py-4 font-black text-primary" dir="ltr">Nov 15, 2024</td>
                                        </tr>
                                        <tr className="dark:text-slate-300 transition-colors hover:bg-slate-50 dark:hover:bg-slate-950">
                                            <td className="px-5 py-4 font-bold text-slate-700 dark:text-slate-200">{isRtl ? 'القرار العادي' : 'Regular Decision'}</td>
                                            <td className="px-5 py-4 font-black text-primary" dir="ltr">Jan 15, 2025</td>
                                        </tr>
                                        <tr className="dark:text-slate-300 transition-colors hover:bg-slate-50 dark:hover:bg-slate-950">
                                            <td className="px-5 py-4 font-bold text-slate-700 dark:text-slate-200">{isRtl ? 'تطبيقات المنح' : 'Scholarship Apps'}</td>
                                            <td className="px-5 py-4 font-black text-primary" dir="ltr">Feb 01, 2025</td>
                                        </tr>
                                        <tr className="dark:text-slate-300 transition-colors hover:bg-slate-50 dark:hover:bg-slate-950">
                                            <td className="px-5 py-4 font-bold text-slate-700 dark:text-slate-200">{isRtl ? 'التسجيل النهائي' : 'Final Enrollment'}</td>
                                            <td className="px-5 py-4 font-black text-primary" dir="ltr">May 01, 2025</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/10 rounded-xl border border-amber-200 dark:border-amber-800/30 flex gap-3">
                                <span className="material-symbols-outlined text-amber-500 text-sm mt-0.5">info</span>
                                <p className="text-xs text-amber-800 dark:text-amber-500 font-medium leading-relaxed">
                                    {isRtl ? 'التواريخ قابلة للتغيير. يرجى مراجعة بوابة التقديم الخاصة بك بانتظام للحصول على التحديثات.' : 'Dates are subject to change. Please check your application portal regularly for updates.'}
                                </p>
                            </div>
                        </div>

                        {/* Sidebar CTA */}
                        <div className="bg-slate-900 dark:bg-slate-950 text-white p-10 rounded-[2rem] relative overflow-hidden group shadow-2xl shadow-slate-900/20">
                            <div className="absolute top-0 right-0 p-6 opacity-10 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12">
                                <span className="material-symbols-outlined text-9xl">rocket_launch</span>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                            <h3 className="text-3xl font-black mb-4 relative z-10">{isRtl ? 'مستعد للبدء؟' : 'Ready to begin?'}</h3>
                            <p className="text-slate-400 font-medium mb-8 relative z-10 leading-relaxed">
                                {isRtl ? 'مسؤولو القبول لدينا هنا لمساعدتك في أي أسئلة قد تكون لديك خلال العملية.' : 'Our admissions officers are here to help you with any questions you may have during the process.'}
                            </p>
                            <button
                                onClick={() => navigate('/register')}
                                className="w-full h-14 bg-primary text-slate-900 font-black rounded-xl hover:bg-primary-600 transition-all duration-300 flex items-center justify-center gap-3 relative z-10 active:scale-95 group/btn"
                            >
                                <span className="text-lg">{isRtl ? 'التقديم الآن' : 'APPLY NOW'}</span>
                                <span className={`material-symbols-outlined transition-transform duration-300 group-hover/btn:${isRtl ? '-translate-x-2' : 'translate-x-2'} ${isRtl ? 'rotate-180' : ''}`}>arrow_forward</span>
                            </button>
                            <div className="mt-6 flex flex-col gap-3 text-sm font-medium text-slate-400 relative z-10">
                                <span className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer" dir="ltr">
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                        <span className="material-symbols-outlined text-sm">call</span>
                                    </div>
                                    +1-800-SSU-JOIN
                                </span>
                                <span className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer" dir="ltr">
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                        <span className="material-symbols-outlined text-sm">mail</span>
                                    </div>
                                    admissions@ssu.edu
                                </span>
                            </div>
                        </div>

                        {/* FAQ Preview Card */}
                        <div className="p-8 border border-slate-100 dark:border-slate-800 rounded-[2rem] bg-white dark:bg-slate-900 shadow-xl shadow-slate-200/40 dark:shadow-none">
                            <h4 className="text-xl font-black mb-6 text-slate-900 dark:text-white flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">live_help</span>
                                {isRtl ? 'أسئلة شائعة' : 'Common Questions'}
                            </h4>
                            <div className="space-y-4">
                                <details className="group cursor-pointer bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-100 dark:border-slate-800 open:bg-white dark:open:bg-slate-900 open:border-primary/20 transition-all">
                                    <summary className="flex justify-between items-center font-bold text-sm list-none text-slate-800 dark:text-slate-200 w-full outline-none">
                                        {isRtl ? 'هل هناك رسوم تقديم؟' : 'Is there an application fee?'}
                                        <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center group-open:bg-primary group-open:border-primary group-open:text-white transition-all flex-shrink-0">
                                            <span className="material-symbols-outlined text-sm transition-transform group-open:rotate-180">expand_more</span>
                                        </div>
                                    </summary>
                                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mt-4 leading-relaxed pl-2 rtl:pl-0 rtl:pr-2 border-l-2 rtl:border-r-2 rtl:border-l-0 border-primary/30">
                                        {isRtl ? 'نعم، مطلوب رسوم غير قابلة للاسترداد قدرها 75 دولاراً لجميع المتقدمين الدوليين والمحليين.' : 'Yes, a non-refundable $75 application fee is required for all international and domestic applicants.'}
                                    </p>
                                </details>
                                <details className="group cursor-pointer bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-100 dark:border-slate-800 open:bg-white dark:open:bg-slate-900 open:border-primary/20 transition-all">
                                    <summary className="flex justify-between items-center font-bold text-sm list-none text-slate-800 dark:text-slate-200 w-full outline-none">
                                        {isRtl ? 'هل يمكنني التقديم للحصول على مساعدة مالية؟' : 'Can I apply for financial aid?'}
                                        <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center group-open:bg-primary group-open:border-primary group-open:text-white transition-all flex-shrink-0">
                                            <span className="material-symbols-outlined text-sm transition-transform group-open:rotate-180">expand_more</span>
                                        </div>
                                    </summary>
                                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mt-4 leading-relaxed pl-2 rtl:pl-0 rtl:pr-2 border-l-2 rtl:border-r-2 rtl:border-l-0 border-primary/30">
                                        {isRtl ? 'بالتأكيد. يتلقى أكثر من 80% من طلابنا شكلاً من أشكال المساعدة المالية أو المنح الدراسية القائمة على الجدارة.' : 'Absolutely. Over 80% of our students receive some form of financial assistance or merit-based scholarship.'}
                                    </p>
                                </details>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
