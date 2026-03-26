import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useThemeContext } from '../../context/ThemeContext';
import loginBanner from '../../assets/login-banner.png';

export default function Login() {
    const { isRtl } = useThemeContext();
    const navigate = useNavigate();
    const [role, setRole] = useState('student');

    const handleLogin = (e) => {
        e.preventDefault();
        if (role === 'super') {
            navigate('/dashboard/super-admin');
        } else if (role === 'admin') {
            navigate('/dashboard/college-admin');
        } else {
            navigate('/'); // Or student dashboard if there is one
        }
    };

    return (
        <div className="flex w-full min-h-[calc(100vh-80px)]">
            {/* Left side Image (or right in RTL) */}
            <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
                <img
                    alt="University Campus"
                    className="absolute inset-0 w-full h-full object-cover"
                    src={loginBanner}
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-16 text-white bg-gradient-to-t from-black/80 to-transparent">
                    <h1 className="text-4xl font-bold mb-4">
                        {isRtl ? 'تمكين مستقبل التعلم' : 'Empowering the Future of Learning'}
                    </h1>
                    <p className="text-lg opacity-90 max-w-lg">
                        {isRtl
                            ? 'انضم إلى مجتمع من العلماء والمبتكرين في جامعة السادات الذكية، حيث تلتقي التقاليد بالتحول الرقمي.'
                            : 'Join a community of scholars and innovators at Sadat Smart University, where tradition meets digital transformation.'}
                    </p>
                </div>
            </div>

            {/* Right side Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 bg-white dark:bg-gray-900 overflow-y-auto">
                <div className="w-full max-w-md mt-10 lg:mt-0">
                    <div className="flex flex-col items-center mb-10">
                        <div className="text-primary size-16 mb-6">
                            <span className="material-symbols-outlined text-[64px]">school</span>
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                            {isRtl ? 'مرحبًا بعودتك' : 'Welcome Back'}
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 mt-2 text-center">
                            {isRtl ? 'الرجاء إدخال بيانات الاعتماد الخاصة بك لتسجيل الدخول.' : 'Please enter your credentials to log in.'}
                        </p>
                    </div>

                    <div className="mb-8">
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                            {isRtl ? 'تسجيل الدخول كـ:' : 'Login as:'}
                        </label>
                        <div className="grid grid-cols-3 gap-2 p-1.5 bg-slate-100 dark:bg-gray-800 rounded-xl">
                            <label className="cursor-pointer">
                                <input
                                    type="radio" name="role" value="student" className="peer hidden"
                                    checked={role === 'student'} onChange={() => setRole('student')}
                                />
                                <div className="py-2.5 text-center text-sm font-medium rounded-lg transition-all peer-checked:bg-white dark:peer-checked:bg-slate-700 peer-checked:text-primary peer-checked:shadow-sm text-slate-500 dark:text-slate-400">
                                    {isRtl ? 'طالب' : 'Student'}
                                </div>
                            </label>
                            <label className="cursor-pointer">
                                <input
                                    type="radio" name="role" value="admin" className="peer hidden"
                                    checked={role === 'admin'} onChange={() => setRole('admin')}
                                />
                                <div className="py-2.5 text-center text-sm font-medium rounded-lg transition-all peer-checked:bg-white dark:peer-checked:bg-slate-700 peer-checked:text-primary peer-checked:shadow-sm text-slate-500 dark:text-slate-400">
                                    {isRtl ? 'مسؤول' : 'Admin'}
                                </div>
                            </label>
                            <label className="cursor-pointer">
                                <input
                                    type="radio" name="role" value="super" className="peer hidden"
                                    checked={role === 'super'} onChange={() => setRole('super')}
                                />
                                <div className="py-2.5 text-center text-sm font-medium rounded-lg transition-all peer-checked:bg-white dark:peer-checked:bg-slate-700 peer-checked:text-primary peer-checked:shadow-sm text-slate-500 dark:text-slate-400">
                                    {isRtl ? 'مسؤول النظام' : 'Super Admin'}
                                </div>
                            </label>
                        </div>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2" htmlFor="email">
                                {isRtl ? 'عنوان البريد الإلكتروني' : 'Email Address'}
                            </label>
                            <div className="relative">
                                <span className={`material-symbols-outlined absolute top-1/2 -translate-y-1/2 text-slate-400 text-xl ${isRtl ? 'right-3' : 'left-3'}`}>
                                    alternate_email
                                </span>
                                <input
                                    id="email" type="email" required
                                    placeholder="name@university.edu"
                                    className={`w-full py-3 bg-slate-50 dark:bg-gray-800/50 border border-slate-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm ${isRtl ? 'pr-11 pl-4' : 'pl-11 pr-4'}`}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300" htmlFor="password">
                                    {isRtl ? 'كلمة المرور' : 'Password'}
                                </label>
                                <Link to="#" className="text-xs font-bold text-primary hover:underline">
                                    {isRtl ? 'نسيت كلمة المرور؟' : 'Forgot Password?'}
                                </Link>
                            </div>
                            <div className="relative">
                                <span className={`material-symbols-outlined absolute top-1/2 -translate-y-1/2 text-slate-400 text-xl ${isRtl ? 'right-3' : 'left-3'}`}>
                                    lock_open
                                </span>
                                <input
                                    id="password" type="password" required
                                    placeholder="••••••••"
                                    className={`w-full py-3 bg-slate-50 dark:bg-gray-800/50 border border-slate-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm px-11`}
                                />
                                <button type="button" className={`absolute top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 ${isRtl ? 'left-3' : 'right-3'}`}>
                                    <span className="material-symbols-outlined text-xl">visibility</span>
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <input type="checkbox" id="remember" className="w-4 h-4 text-primary bg-white border-slate-300 rounded focus:ring-primary focus:ring-offset-0" />
                            <label htmlFor="remember" className="text-sm text-slate-600 dark:text-slate-400">
                                {isRtl ? 'الاحتفاظ بتسجيل الدخول' : 'Keep me signed in'}
                            </label>
                        </div>

                        <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-lg shadow-lg shadow-primary/30 hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2">
                            {isRtl ? 'تسجيل الدخول' : 'Sign In'}
                            <span className={`material-symbols-outlined text-xl ${isRtl ? 'rotate-180' : ''}`}>arrow_forward</span>
                        </button>
                    </form>

                    <div className="mt-10 text-center">
                        <p className="text-slate-500 dark:text-slate-400 text-sm">
                            {isRtl ? 'ليس لديك حساب؟ ' : 'Don\'t have an account? '}
                            <Link to="/register" className="text-primary font-bold hover:underline">
                                {isRtl ? 'التقدم للقبول' : 'Apply for Admission'}
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
