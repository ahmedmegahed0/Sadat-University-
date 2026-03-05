import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useThemeContext } from '../context/ThemeContext';

export default function Register() {
    const { isRtl } = useThemeContext();
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        navigate('/login');
    };

    return (
        <div className="flex w-full min-h-[calc(100vh-80px)]">
            {/* Left Form Area (Right in RTL) */}
            <div className="w-full lg:w-[45%] xl:w-[40%] h-full overflow-y-auto bg-white dark:bg-gray-900 px-8 md:px-16 lg:px-20 py-12 flex flex-col justify-center">
                <div className="max-w-md mx-auto w-full">
                    <div className="mb-10">
                        <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-2">
                            {isRtl ? 'إنشاء حساب' : 'Create Account'}
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 font-medium">
                            {isRtl ? 'انضم إلى مجتمعنا الأكاديمي اليوم.' : 'Join our academic community today.'}
                        </p>
                    </div>

                    <form onSubmit={handleRegister} className="space-y-5">
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                                {isRtl ? 'الاسم بالكامل' : 'Full Name'}
                            </label>
                            <div className="relative">
                                <span className={`material-symbols-outlined absolute top-1/2 -translate-y-1/2 text-slate-400 text-xl ${isRtl ? 'right-4' : 'left-4'}`}>person</span>
                                <input
                                    type="text" required
                                    placeholder={isRtl ? "أحمد محمد" : "John Doe"}
                                    className={`w-full h-12 rounded-xl border-slate-200 dark:border-gray-700 bg-slate-50 dark:bg-gray-800/50 focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-slate-400 dark:text-white ${isRtl ? 'pr-12 pl-4' : 'pl-12 pr-4'}`}
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                                {isRtl ? 'البريد الإلكتروني' : 'Email Address'}
                            </label>
                            <div className="relative">
                                <span className={`material-symbols-outlined absolute top-1/2 -translate-y-1/2 text-slate-400 text-xl ${isRtl ? 'right-4' : 'left-4'}`}>mail</span>
                                <input
                                    type="email" required
                                    placeholder="j.doe@university.edu"
                                    className={`w-full h-12 rounded-xl border-slate-200 dark:border-gray-700 bg-slate-50 dark:bg-gray-800/50 focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-slate-400 dark:text-white ${isRtl ? 'pr-12 pl-4' : 'pl-12 pr-4'}`}
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                                {isRtl ? 'اختر الكلية' : 'Select College'}
                            </label>
                            <div className="relative">
                                <span className={`material-symbols-outlined absolute top-1/2 -translate-y-1/2 text-slate-400 text-xl ${isRtl ? 'right-4' : 'left-4'}`}>account_balance</span>
                                <select
                                    required
                                    defaultValue=""
                                    className={`w-full h-12 appearance-none rounded-xl border-slate-200 dark:border-gray-700 bg-slate-50 dark:bg-gray-800/50 focus:ring-2 focus:ring-primary focus:border-transparent transition-all cursor-pointer dark:text-white ${isRtl ? 'pr-12 pl-10' : 'pl-12 pr-10'}`}
                                >
                                    <option disabled value="">{isRtl ? 'اختر كليتك' : 'Choose your faculty'}</option>
                                    <option value="cs-ai">{isRtl ? 'الحاسبات والذكاء الاصطناعي' : 'Computer Science & AI'}</option>
                                    <option value="pharmacy">{isRtl ? 'الصيدلة' : 'Pharmacy'}</option>
                                    <option value="tourism">{isRtl ? 'السياحة والفنادق' : 'Tourism & Hotels'}</option>
                                </select>
                                <span className={`material-symbols-outlined absolute top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none ${isRtl ? 'left-4' : 'right-4'}`}>expand_more</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                    {isRtl ? 'كلمة المرور' : 'Password'}
                                </label>
                                <input
                                    type="password" required placeholder="••••••••"
                                    className="w-full h-12 px-4 rounded-xl border-slate-200 dark:border-gray-700 bg-slate-50 dark:bg-gray-800/50 focus:ring-2 focus:ring-primary focus:border-transparent transition-all dark:text-white"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                    {isRtl ? 'تأكيد كلمة المرور' : 'Confirm'}
                                </label>
                                <input
                                    type="password" required placeholder="••••••••"
                                    className="w-full h-12 px-4 rounded-xl border-slate-200 dark:border-gray-700 bg-slate-50 dark:bg-gray-800/50 focus:ring-2 focus:ring-primary focus:border-transparent transition-all dark:text-white"
                                />
                            </div>
                        </div>

                        <div className="flex items-start gap-3 pt-2">
                            <input
                                id="terms" type="checkbox" required
                                className="w-5 h-5 mt-0.5 rounded border-slate-300 text-primary focus:ring-primary cursor-pointer bg-white dark:bg-gray-800"
                            />
                            <label htmlFor="terms" className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                {isRtl ? 'أوافق على ' : 'I accept the '}
                                <Link to="#" className="text-primary font-bold hover:underline">
                                    {isRtl ? 'الشروط والأحكام' : 'Terms & Conditions'}
                                </Link>
                                {isRtl ? ' وأوافق على معالجة البيانات.' : ' and consent to data processing.'}
                            </label>
                        </div>

                        <button type="submit" className="w-full h-14 bg-primary text-white font-extrabold text-lg rounded-xl shadow-lg shadow-primary/30 hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2 group mt-4">
                            {isRtl ? 'إنشاء حساب' : 'Create Account'}
                            <span className={`material-symbols-outlined group-hover:${isRtl ? '-translate-x-1' : 'translate-x-1'} transition-transform ${isRtl ? 'rotate-180' : ''}`}>arrow_forward</span>
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">
                            {isRtl ? 'لديك حساب بالفعل؟ ' : 'Already have an account? '}
                            <Link to="/login" className="text-primary font-bold hover:underline">
                                {isRtl ? 'تسجيل الدخول هنا' : 'Login here'}
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

            {/* Right side Image (Left in RTL) */}
            <div className="hidden lg:block relative flex-1 h-full overflow-hidden">
                <img
                    alt="Students in a modern lab"
                    className="absolute inset-0 w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMqXTll4NqJS00Bm2tRMr-tH7tPRv76jIvuBrWxLQIcw6f3XfAj4-I7mRNy3zB_mRJoZEXHBsM1pBPMgz931VtxZQxDBsIFCZFEdxwEWn3z_5do24agJqrsEkQr-H-sQl1x92K5PHa5P0f9FHMR0RAFgV_cST1KX8CwuN6ShPql_j3kW0pm5iq5jhSWi5PvuL60hLfS_zCCn2zPxbivTqyUeXl3YbMh83AE3DyGN4iG-uGVKRebqCjMuUOIPTahba6p7DKiCzV_qHm"
                />
                <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-20 text-white z-10 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="max-w-xl">
                        <span className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase mb-6 inline-block">
                            {isRtl ? 'ابتكار التعليم' : 'Innovating Education'}
                        </span>
                        <h3 className="text-5xl font-black leading-tight mb-6">
                            {isRtl ? 'تمكين الجيل القادم من المبتكرين.' : 'Empowering the next generation of innovators.'}
                        </h3>
                        <p className="text-xl text-white/80 font-medium leading-relaxed">
                            {isRtl
                                ? 'انضم إلى شبكة عالمية من الطلاب والخبراء. تم تصميم مختبراتنا الحديثة ومرافقنا البحثية لتحويل أفكارك إلى حقيقة.'
                                : 'Join a global network of students and experts. Our modern labs and research facilities are designed to turn your ideas into reality.'}
                        </p>

                        <div className="mt-10 flex gap-12">
                            <div className="flex flex-col">
                                <span className="text-3xl font-black">15k+</span>
                                <span className="text-sm font-bold text-white/70 uppercase">{isRtl ? 'طلاب' : 'Students'}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-black">98%</span>
                                <span className="text-sm font-bold text-white/70 uppercase">{isRtl ? 'معدل التخرج' : 'Graduate Rate'}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-black">#1</span>
                                <span className="text-sm font-bold text-white/70 uppercase">{isRtl ? 'حرم ذكي' : 'Smart Campus'}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
