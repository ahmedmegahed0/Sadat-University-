import React from 'react';
import { useThemeContext } from '../context/ThemeContext';

export default function ComputerScience() {
    const { isRtl } = useThemeContext();

    return (
        <>
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-white py-20 dark:bg-slate-900 lg:py-32 transition-colors">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid items-center gap-16 lg:grid-cols-2">
                        <div className="flex flex-col gap-8">
                            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 w-fit px-5 py-2 text-sm font-black text-primary dark:bg-primary/20 border border-primary/20">
                                <span className="material-symbols-outlined text-sm">verified</span>
                                {isRtl ? 'التميز في التكنولوجيا' : 'Excellence in Technology'}
                            </div>
                            <h1 className="text-5xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white lg:text-7xl">
                                {isRtl ? 'تشكيل مستقبل ' : 'Shaping the Future of '}
                                <span className="text-primary">{isRtl ? 'الذكاء الاصطناعي' : 'Global Tech'}</span>
                            </h1>
                            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400 font-medium max-w-xl">
                                {isRtl
                                    ? 'انضم إلى المؤسسة الرائدة لعلوم الكمبيوتر والذكاء الاصطناعي في جامعة السادات الذكية. نحن نقدم تعليماً عالمي المستوى مدعوماً بشراكات الصناعة والابتكار.'
                                    : 'Join the premier institution for Computer Science and Artificial Intelligence at Sadat Smart University. We provide world-class education powered by industry partnerships and innovation.'}
                            </p>
                            <div className="flex flex-wrap gap-4 mt-4">
                                <button className="flex h-14 items-center justify-center gap-2 rounded-xl bg-primary px-8 text-lg font-black text-slate-900 shadow-xl shadow-primary/30 hover:bg-primary-600 active:scale-95 transition-all group/btn">
                                    {isRtl ? 'قدم الآن' : 'Apply Now'}
                                    <span className={`material-symbols-outlined transition-transform duration-300 ${isRtl ? 'group-hover/btn:-translate-x-1 rotate-180' : 'group-hover/btn:translate-x-1'}`}>arrow_forward</span>
                                </button>
                                <button className="flex h-14 items-center justify-center rounded-xl border-2 border-slate-200 dark:border-slate-800 bg-transparent px-8 text-lg font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all">
                                    {isRtl ? 'عرض البرامج' : 'View Programs'}
                                </button>
                            </div>
                        </div>
                        <div className="relative">
                            <div
                                className="aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] bg-slate-200 dark:bg-slate-800 shadow-2xl lg:aspect-[4/3]"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAAGWh_8n57tOTHDinHAtQftm2QeXNAsABl_COjW7qA_4rH-BChX-vI1TXzorlnPjsGiKB_r1h8TVZSv4QvXzOSlk_j6hctqHv-PDyijbs4JsxXa_L076-I0G1MBzNxzL_7ic2dTf55RxKtXc7hRc2Ye0H_btDffe-3kPlfkqc8oXkyRsU-rVyPeQWRuCuc5NFtM1AmX805Kw3NE7gem1BgVqdjf--uRSaDqt42vIr1C1F74IWKvXtanMZy6g5zhuCBXRcmrId1Sax5")', backgroundSize: 'cover', backgroundPosition: 'center' }}
                            ></div>
                            <div className={`absolute -bottom-8 ${isRtl ? '-right-8' : '-left-8'} hidden h-36 w-36 rounded-2xl bg-slate-900 dark:bg-slate-950 border border-slate-800 p-6 text-white shadow-2xl shadow-slate-900/40 lg:flex lg:flex-col lg:justify-center`}>
                                <span className="text-4xl font-black text-primary">15+</span>
                                <span className="text-xs font-bold uppercase tracking-widest leading-tight mt-2 text-slate-400">{isRtl ? 'سنوات من التميز' : 'Years of Excellence'}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dean's Message */}
            <section className="bg-slate-50 py-24 dark:bg-slate-950 transition-colors" id="dean">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="rounded-[2.5rem] bg-white p-10 shadow-xl shadow-slate-200/40 dark:shadow-none dark:bg-slate-900 lg:p-16 transition-colors border border-slate-100 dark:border-slate-800">
                        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-start">
                            <div className="relative shrink-0">
                                <div
                                    className="h-72 w-72 overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-800"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBqVQG4Ze0I0MM3eHUBsm4pQF0C9s4bVE6OA5IoMZKys08hEX2Lyvqdn4cvOF8sBBv73gLq3OWsTfu-TuvPOfsjVZxB6NuNASOyITbCs5N0Vn6ENV823RU5FKgVT17y_Zta7DxKHZpK8YjJzIhbdciNkkXc0P5kNvllHUTNQbNGx28GWhT6E5Rllbhn047c8cD0WOOJ1wQU9uwFkxbvKN8DVi0GTcpvABAYlgNnX0xBj9gnBQvCboUMu4VaZdro6cLwLtWLDIpR6q8x")', backgroundSize: 'cover', backgroundPosition: 'center' }}
                                ></div>
                                <div className={`absolute -bottom-6 ${isRtl ? '-left-6' : '-right-6'} flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-slate-900 shadow-xl shadow-primary/20`}>
                                    <span className="material-symbols-outlined text-3xl">format_quote</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-8 w-full">
                                <div>
                                    <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white">{isRtl ? 'رسالة ترحيب العميد' : "Dean's Welcome Message"}</h2>
                                    <p className="mt-2 text-xl font-bold text-primary">{isRtl ? 'أ.د. عصام الدين' : 'Prof. Dr. Essam Eldin'}</p>
                                </div>
                                <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg font-medium leading-relaxed">
                                    <p className="italic">
                                        {isRtl
                                            ? '"مرحباً بكم في كلية الحاسبات والذكاء الاصطناعي في جامعة السادات الذكية. مهمتنا هي تنمية القيادة والابتكار في قطاع التكنولوجيا المتطور باستمرار. نحن نجمع بين التميز النظري وجهات النظر العالمية العملية لإعداد طلابنا لشغل وظائف مجزية في الصناعة الأكثر ديناميكية في العالم."'
                                            : '"Welcome to the Faculty of Computers & Artificial Intelligence at Sadat Smart University. Our mission is to cultivate leadership and innovation in the ever-evolving tech sector. We combine theoretical excellence with practical global perspectives to prepare our students for rewarding careers in the world\'s most dynamic industry."'}
                                    </p>
                                    <p className="hidden sm:block">
                                        {isRtl
                                            ? 'بينما ننتقل إلى حقبة جديدة من التعليم الرقمي، تم تصميم مناهجنا الدراسية لدمج التكنولوجيا والاستدامة، مما يضمن أن خريجينا ليسوا مستعدين للسوق فحسب، بل هم قادة للتغيير.'
                                            : 'As we move into a new era of digital education, our curriculum is designed to integrate technology and sustainability, ensuring our graduates are not just ready for the market, but leaders of change.'}
                                    </p>
                                </div>
                                <button className="w-fit mt-2 group flex items-center gap-2 rounded-xl bg-slate-50 dark:bg-slate-800 px-6 py-3 text-sm font-bold text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 hover:bg-primary hover:text-slate-900 hover:border-primary transition-all">
                                    {isRtl ? 'اقرأ الرؤية الاستراتيجية الكاملة' : 'Read Full Strategic Vision'}
                                    <span className={`material-symbols-outlined transition-transform ${isRtl ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'}`}>arrow_forward</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Departments Grid */}
            <section className="py-24 bg-white dark:bg-slate-900 transition-colors" id="departments">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-16 text-center">
                        <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white">{isRtl ? 'أقسامنا' : 'Our Departments'}</h2>
                        <div className="mx-auto mt-6 h-1.5 w-24 rounded-full bg-primary"></div>
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Dept 1 */}
                        <div className="group flex flex-col rounded-[2rem] border border-slate-100 bg-white p-10 transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 dark:border-slate-800 dark:bg-slate-950/50 hover:-translate-y-1">
                            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-slate-900 transition-colors">
                                <span className="material-symbols-outlined text-3xl">smart_toy</span>
                            </div>
                            <h3 className="mb-4 text-2xl font-black text-slate-900 dark:text-white">{isRtl ? 'الذكاء الاصطناعي' : 'Artificial Intelligence'}</h3>
                            <p className="mb-8 text-base font-medium text-slate-600 dark:text-slate-400 leading-relaxed flex-1">
                                {isRtl ? 'أتقن فن التعلم الآلي والشبكات العصبية.' : 'Master the art of machine learning and neural networks.'}
                            </p>
                            <a className="flex items-center w-fit gap-2 text-sm font-bold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 group-hover:bg-primary group-hover:text-slate-900 group-hover:border-primary transition-all" href="#">
                                {isRtl ? 'استكشف البرنامج' : 'Explore Program'} <span className={`material-symbols-outlined text-lg transition-transform ${isRtl ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'}`}>arrow_forward</span>
                            </a>
                        </div>

                        {/* Dept 2 */}
                        <div className="group flex flex-col rounded-[2rem] border border-slate-100 bg-white p-10 transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 dark:border-slate-800 dark:bg-slate-950/50 hover:-translate-y-1">
                            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-slate-900 transition-colors">
                                <span className="material-symbols-outlined text-3xl">code</span>
                            </div>
                            <h3 className="mb-4 text-2xl font-black text-slate-900 dark:text-white">{isRtl ? 'علوم الحاسب' : 'Computer Science'}</h3>
                            <p className="mb-8 text-base font-medium text-slate-600 dark:text-slate-400 leading-relaxed flex-1">
                                {isRtl ? 'دراسة الخوارزميات وهياكل البيانات وتطوير البرمجيات.' : 'Study algorithms, data structures, and software development.'}
                            </p>
                            <a className="flex items-center w-fit gap-2 text-sm font-bold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 group-hover:bg-primary group-hover:text-slate-900 group-hover:border-primary transition-all" href="#">
                                {isRtl ? 'استكشف البرنامج' : 'Explore Program'} <span className={`material-symbols-outlined text-lg transition-transform ${isRtl ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'}`}>arrow_forward</span>
                            </a>
                        </div>

                        {/* Dept 3 */}
                        <div className="group flex flex-col rounded-[2rem] border border-slate-100 bg-white p-10 transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 dark:border-slate-800 dark:bg-slate-950/50 hover:-translate-y-1">
                            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-slate-900 transition-colors">
                                <span className="material-symbols-outlined text-3xl">security</span>
                            </div>
                            <h3 className="mb-4 text-2xl font-black text-slate-900 dark:text-white">{isRtl ? 'الأمن السيبراني' : 'Cybersecurity'}</h3>
                            <p className="mb-8 text-base font-medium text-slate-600 dark:text-slate-400 leading-relaxed flex-1">
                                {isRtl ? 'تعلم كيفية تأمين الشبكات وحماية البيانات من التهديدات.' : 'Learn how to secure networks and protect data from threats.'}
                            </p>
                            <a className="flex items-center w-fit gap-2 text-sm font-bold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 group-hover:bg-primary group-hover:text-slate-900 group-hover:border-primary transition-all" href="#">
                                {isRtl ? 'استكشف البرنامج' : 'Explore Program'} <span className={`material-symbols-outlined text-lg transition-transform ${isRtl ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'}`}>arrow_forward</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
