import React from 'react';
import { useThemeContext } from '../context/ThemeContext';
import naser from '../assets/naser.png';
export default function About() {
    const { isRtl } = useThemeContext();

    return (
        <div className="flex flex-col w-full min-h-screen text-slate-900 dark:text-slate-100">
            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden bg-slate-950">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-luminosity"
                    alt={isRtl ? "مبنى تاريخي للجامعة" : "Majestic university campus landmark building with clock tower"}
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB2M4FUo4iXqhMYU6hj_mHlYkV33Jg0DdJUw1LSJ9W8VpDQN_RscmdG0EsVPGPlJPkoO6cemFCWyAztP8K2MTRSczWiNBZNGmTqEbvFgPNYriumkRijOYpOwhfA2gnJ3cJ8gz3-uXy9rfImXRn7IvnmczyJ3cvK92W1tGsmxyprTdoIo82QXfbgyyFWTxEnMabi0VPvYy7NlkugK5MPXeAS0Zn1dULuGsHNRQ7riyYPzWe_00dxqYzrGWI0mXFbSqFLCgkauYCpHOdM")' }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>

                <div className="relative z-10 text-center px-6 max-w-4xl mt-20">
                    <h1 className="text-white text-5xl md:text-7xl font-black mb-6 tracking-tight">
                        {isRtl ? 'تراثنا' : 'Our Heritage'}
                    </h1>
                    <p className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                        {isRtl ? 'إرث من التميز والابتكار والقيادة في التعليم منذ عام 2013.' : 'A legacy of excellence, innovation, and leadership in education since 2013.'}
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">
                {/* President's Message */}
                <section>
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        <div className="flex-1">
                            <div className="inline-block px-5 py-2 bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest rounded-full mb-8">
                                {isRtl ? 'القيادة' : 'Leadership'}
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-8 leading-tight tracking-tight">
                                {isRtl ? 'رسالة رئيس الجامعة' : "President's Message"}
                            </h2>
                            <div className="space-y-6 text-slate-600 dark:text-slate-400 font-medium leading-relaxed text-lg">
                                <p>
                                    {isRtl
                                        ? 'مرحبًا بكم في جامعة السادات الذكية. وبينما نتطلع إلى المستقبل، يظل التزامنا ثابتًا: تعزيز بيئة يلتقي فيها الابتكار بالتقاليد. إن حرمنا الجامعي هو أكثر من مجرد مكان للتعلم؛ إنه بوتقة لقادة الغد.'
                                        : 'Welcome to Sadat Smart University. As we look towards the future, our commitment remains steadfast: to foster an environment where innovation meets tradition. Our campus is more than just a place of learning; it is a crucible for the leaders of tomorrow.'}
                                </p>
                                <p>
                                    {isRtl
                                        ? 'نحن نؤمن بقوة "التعليم الذكي" - الاستفادة من التكنولوجيا لتعزيز الإمكانات البشرية بدلاً من استبدالها. انضم إلينا ونحن نواصل دفع حدود ما هو ممكن في الأوساط الأكاديمية والبحثية.'
                                        : 'We believe in the power of "Smart Education"—leveraging technology to enhance human potential rather than replace it. Join us as we continue to push the boundaries of what is possible in academia and research.'}
                                </p>
                                <div className={`pt-6 pb-2 ${isRtl ? 'border-r-4 pr-6' : 'border-l-4 pl-6'} border-primary`}>
                                    <p className="italic text-slate-900 dark:text-white font-bold text-xl leading-snug">
                                        {isRtl
                                            ? '"هدفنا ليس فقط تخريج طلاب، بل استلهام رؤى الذين سيشكلون القرن القادم."'
                                            : '"Our goal is not just to produce graduates, but to inspire visionaries who will shape the next century."'}
                                    </p>
                                </div>
                                <div className="pt-8 flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-full bg-slate-200 dark:bg-slate-800 border-2 border-primary flex items-center justify-center overflow-hidden">
                                        <span className="material-symbols-outlined text-slate-400">person</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white">
                                            {isRtl ? 'أ.د. أحمد السادات' : 'Dr. Ahmed El-Sadat'}
                                        </p>
                                        <p className="text-sm text-primary font-bold uppercase tracking-wider mt-1">
                                            {isRtl ? 'رئيس الجامعة' : 'President & Vice-Chancellor'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 w-full lg:w-5/12">
                            <div className="relative pb-6 pr-6">
                                <div className="absolute top-6 left-6 w-full h-full border-2 border-primary/20 rounded-3xl -z-10 bg-slate-50 dark:bg-slate-900"></div>
                                <img
                                    className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
                                    alt={isRtl ? "صورة لرئيس الجامعة بأزياء رسمية" : "Portrait of the University President in formal attire"}
                                    src={naser}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Vision & Mission */}
                <section className="bg-slate-50 dark:bg-slate-900/50 rounded-[3rem] p-12 lg:p-24 border border-slate-100 dark:border-slate-800">
                    <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
                        <div className="space-y-8">
                            <div className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-2xl mb-8 border border-primary/20">
                                <span className="material-symbols-outlined text-primary text-3xl">visibility</span>
                            </div>
                            <h3 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">{isRtl ? 'رؤيتنا' : 'Our Vision'}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium">
                                {isRtl
                                    ? 'أن نكون رائدًا عالميًا في التعليم الذكي، من خلال تعزيز الابتكار والتنمية المستدامة عبر مقاربة تعتمد على التكنولوجيا الرقمية أولاً وتمكين كل طالب من الوصول إلى أقصى إمكاناته.'
                                    : 'To be a global vanguard in smart education, fostering innovation and sustainable development through a digital-first approach that empowers every student to reach their absolute maximum potential.'}
                            </p>
                        </div>
                        <div className="space-y-8">
                            <div className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-2xl mb-8 border border-primary/20">
                                <span className="material-symbols-outlined text-primary text-3xl">track_changes</span>
                            </div>
                            <h3 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">{isRtl ? 'رسالتنا' : 'Our Mission'}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium">
                                {isRtl
                                    ? 'توفير تعليم عالي الجودة وبحث يخدم المجتمع. نسعى لدمج التكنولوجيا مع التعلم المتمحور حول الإنسان لإنشاء قوة عاملة عالمية مرنة وقابلة للتكيف.'
                                    : 'To provide high-quality education and research that serves the community. We strive to integrate technology with human-centric learning to create a resilient and adaptive global workforce.'}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Our Values */}
                <section className="text-center">
                    <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">{isRtl ? 'قيمنا الأساسية' : 'Our Core Values'}</h2>
                    <p className="text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto mb-20 text-lg">
                        {isRtl ? 'المبادئ التي توجه مجتمعنا كل يوم، وتشكل مستقبلنا.' : 'The principles that guide our community every day, molding our collective future.'}
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-slate-950 p-12 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-primary/30 transition-all duration-300">
                            <div className="w-20 h-20 mx-auto bg-slate-50 dark:bg-slate-900 rounded-full flex items-center justify-center mb-8 border border-slate-100 dark:border-slate-800">
                                <span className="material-symbols-outlined text-primary text-4xl">verified_user</span>
                            </div>
                            <h4 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">{isRtl ? 'النزاهة' : 'Integrity'}</h4>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                                {isRtl ? 'نحن نلتزم بأعلى المعايير الأخلاقية في البحث والتدريس والمشاركة.' : 'We uphold the highest ethical standards in research, teaching, and community engagement.'}
                            </p>
                        </div>
                        <div className="bg-white dark:bg-slate-950 p-12 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-primary/30 transition-all duration-300">
                            <div className="w-20 h-20 mx-auto bg-slate-50 dark:bg-slate-900 rounded-full flex items-center justify-center mb-8 border border-slate-100 dark:border-slate-800">
                                <span className="material-symbols-outlined text-primary text-4xl">lightbulb</span>
                            </div>
                            <h4 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">{isRtl ? 'الابتكار' : 'Innovation'}</h4>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                                {isRtl ? 'نشجع التفكير الإبداعي لحل التحديات المعقدة في عالمنا الحديث بالتقنية.' : 'We embrace change and encourage creative thinking to solve complex challenges through technology.'}
                            </p>
                        </div>
                        <div className="bg-white dark:bg-slate-950 p-12 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-primary/30 transition-all duration-300">
                            <div className="w-20 h-20 mx-auto bg-slate-50 dark:bg-slate-900 rounded-full flex items-center justify-center mb-8 border border-slate-100 dark:border-slate-800">
                                <span className="material-symbols-outlined text-primary text-4xl">groups</span>
                            </div>
                            <h4 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">{isRtl ? 'الشمولية' : 'Inclusion'}</h4>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                                {isRtl ? 'نحتفي بالتنوع ونضمن أن حرمنا الجامعي مساحة ترحيبية لجميع الثقافات.' : 'We celebrate diversity and ensure that our campus remains a welcoming space for all cultures.'}
                            </p>
                        </div>
                    </div>
                </section>

                {/* History Timeline */}
                <section>
                    <div className="text-center mb-20">
                        <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">{isRtl ? 'رحلتنا' : 'Our Journey'}</h2>
                        <p className="text-slate-600 dark:text-slate-400 mt-6 text-lg font-medium mx-auto max-w-2xl">
                            {isRtl ? 'المعالم الرئيسية في تاريخ التميز لدينا.' : 'Key milestones marking our institutional path of historic excellence.'}
                        </p>
                    </div>

                    <div className="relative space-y-16">
                        {/* Vertical Line */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800 hidden md:block z-0"></div>

                        {/* Timeline Items */}
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
                            <div className={`md:w-5/12 ${isRtl ? 'md:text-left md:pl-16' : 'md:text-right md:pr-16'} text-center md:block`}>
                                <h5 className="text-3xl font-black text-primary mb-2">2013</h5>
                                <p className="text-slate-900 dark:text-white font-bold text-lg">{isRtl ? 'تأسيس معهد السادات' : 'Foundation of Sadat Institute'}</p>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-950 border-4 border-primary shadow-lg shadow-primary/20 shrink-0"></div>
                            <div className={`md:w-5/12 ${isRtl ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'} text-center md:block`}>
                                <div className="md:hidden text-primary font-black text-2xl mb-2">2013</div>
                                <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                                    {isRtl ? 'تأسس كمعهد فني يركز على الهندسة والعلوم التطبيقية لخدمة الصناعة المحلية.' : 'Founded as a technical institute focusing on engineering and applied sciences to serve the local industry.'}
                                </p>
                            </div>
                        </div>

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
                            <div className={`md:w-5/12 ${isRtl ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'} text-center md:block order-last md:order-first`}>
                                <div className="md:hidden text-primary font-black text-2xl mb-2">2013</div>
                                <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                                    {isRtl ? 'حصلت المؤسسة على وضع جامعة كامل من وزارة التعليم العالي، مع التوسع في الأعمال.' : 'The institution received full university status from the Ministry of Higher Education, expanding rapidly.'}
                                </p>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-950 border-4 border-primary shadow-lg shadow-primary/20 shrink-0 order-2"></div>
                            <div className={`md:w-5/12 ${isRtl ? 'md:text-left md:pl-16' : 'md:text-right md:pr-16'} text-center md:block order-first md:order-last`}>
                                <h5 className="text-3xl font-black text-primary mb-2 hidden md:block">2013</h5>
                                <p className="text-slate-900 dark:text-white font-bold text-lg">{isRtl ? 'منح ميثاق الجامعة' : 'University Charter Granted'}</p>
                            </div>
                        </div>

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
                            <div className={`md:w-5/12 ${isRtl ? 'md:text-left md:pl-16' : 'md:text-right md:pr-16'} text-center md:block`}>
                                <h5 className="text-3xl font-black text-primary mb-2 hidden md:block">2020</h5>
                                <p className="text-slate-900 dark:text-white font-bold text-lg">{isRtl ? 'تحول الحرم الجامعي الذكي' : 'Smart Campus Transformation'}</p>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-950 border-4 border-primary shadow-lg shadow-primary/20 shrink-0"></div>
                            <div className={`md:w-5/12 ${isRtl ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'} text-center md:block`}>
                                <div className="md:hidden text-primary font-black text-2xl mb-2">2020</div>
                                <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                                    {isRtl ? 'إطلاق مبادرة "التعليم الذكي"، ودمج الذكاء الاصطناعي في المناهج الأكاديمية.' : 'Inception of the "Smart Education" initiative, integrating AI and cloud computing curriculums.'}
                                </p>
                            </div>
                        </div>

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
                            <div className={`md:w-5/12 ${isRtl ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'} text-center md:block order-last md:order-first`}>
                                <div className="md:hidden text-primary font-black text-2xl mb-2">{isRtl ? 'الحاضر' : 'Present'}</div>
                                <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                                    {isRtl ? 'تصنف الآن كأفضل جامعة ذكية في المنطقة، تستضيف آلاف الطلاب من حول العالم.' : 'Now consistently ranked as the top innovation university in the region by major metrics.'}
                                </p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-[0_0_20px_rgba(201,162,39,0.5)] shrink-0 order-2 z-20 -my-1">
                                <div className="w-4 h-4 rounded-full bg-white animate-pulse"></div>
                            </div>
                            <div className={`md:w-5/12 ${isRtl ? 'md:text-left md:pl-16' : 'md:text-right md:pr-16'} text-center md:block order-first md:order-last`}>
                                <h5 className="text-3xl font-black text-primary mb-2 hidden md:block">{isRtl ? 'الحاضر' : 'Present'}</h5>
                                <p className="text-slate-900 dark:text-white font-bold text-lg">{isRtl ? 'ريادة الحدود الرقمية' : 'Leading the Digital Frontier'}</p>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    );
}
