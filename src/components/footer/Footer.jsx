import React from 'react';
import { Link } from 'react-router-dom';
import { useThemeContext } from '../../context/ThemeContext';

export default function Footer() {
    const { isRtl } = useThemeContext();

    return (
        <footer className="bg-brand-dark text-slate-400 py-16 px-6 lg:px-20 border-t-8 border-primary">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="text-primary">
                                <span className="material-symbols-outlined text-3xl">school</span>
                            </div>
                            <h2 className="text-lg font-bold text-white">
                                {isRtl ? 'جامعة السادات الذكية' : 'SADAT SMART UNIVERSITY'}
                            </h2>
                        </div>
                        <p className="text-sm leading-relaxed">
                            {isRtl
                                ? 'منارة للتعليم الحديث ملتزمة برعاية المواهب ودفع الابتكار من خلال بيئات تعليمية تعتمد على التكنولوجيا.'
                                : 'A beacon of modern education committed to nurturing talent and driving innovation through technology-driven learning environments.'}
                        </p>
                        <div className="flex gap-4">
                            <a className="h-8 w-8 flex items-center justify-center rounded-full bg-slate-800 text-white hover:bg-primary transition-colors" href="#">
                                <span className="material-symbols-outlined text-sm">social_leaderboard</span>
                            </a>
                            <a className="h-8 w-8 flex items-center justify-center rounded-full bg-slate-800 text-white hover:bg-primary transition-colors" href="#">
                                <span className="material-symbols-outlined text-sm">alternate_email</span>
                            </a>
                            <a className="h-8 w-8 flex items-center justify-center rounded-full bg-slate-800 text-white hover:bg-primary transition-colors" href="#">
                                <span className="material-symbols-outlined text-sm">share</span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h5 className="text-white font-bold mb-6 border-b border-slate-800 pb-2 inline-block pr-10">
                            {isRtl ? 'روابط سريعة' : 'Quick Links'}
                        </h5>
                        <ul className="space-y-4 text-sm">
                            <li><Link className="hover:text-primary transition-colors" to="#">{isRtl ? 'التقويم الأكاديمي' : 'Academic Calendar'}</Link></li>
                            <li><Link className="hover:text-primary transition-colors" to="#">{isRtl ? 'المكتبة الإلكترونية' : 'Online Library'}</Link></li>
                            <li><Link className="hover:text-primary transition-colors" to="#">{isRtl ? 'بوابة التعلم الإلكتروني' : 'E-Learning Portal'}</Link></li>
                            <li><Link className="hover:text-primary transition-colors" to="#">{isRtl ? 'الخدمات المهنية' : 'Career Services'}</Link></li>
                            <li><Link className="hover:text-primary transition-colors" to="#">{isRtl ? 'خريطة الحرم الجامعي' : 'Campus Map'}</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-white font-bold mb-6 border-b border-slate-800 pb-2 inline-block pr-10">
                            {isRtl ? 'اتصل بنا' : 'Contact Us'}
                        </h5>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary text-lg">location_on</span>
                                <span>{isRtl ? 'مدينة السادات، محافظة المنوفية، مصر' : 'Sadat City, Monufia Governorate, Egypt'}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-lg">call</span>
                                <span dir="ltr">+20 (0) 48 260 1234</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-lg">mail</span>
                                <span>info@ssu.edu.eg</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-white font-bold mb-6 border-b border-slate-800 pb-2 inline-block pr-10">
                            {isRtl ? 'النشرة الإخبارية' : 'Newsletter'}
                        </h5>
                        <p className="text-sm mb-4">
                            {isRtl ? 'ابق على اطلاع بأحدث الأخبار والأحداث الأكاديمية.' : 'Stay updated with our latest academic news and events.'}
                        </p>
                        <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
                            <input className="rounded border-0 bg-slate-800 p-3 text-sm text-white focus:ring-2 focus:ring-primary" placeholder={isRtl ? "بريدك الإلكتروني" : "Your Email"} type="email" />
                            <button className="rounded bg-primary py-3 text-xs font-black uppercase text-brand-dark hover:brightness-110 flex items-center justify-center gap-2">
                                <span>{isRtl ? 'اشترك' : 'Subscribe'}</span>
                                <span className="material-symbols-outlined text-sm rtl:-scale-x-100">send</span>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="border-t border-slate-800 pt-8 text-center text-xs">
                    <p>
                        {isRtl
                            ? '© 2024 جامعة السادات الذكية. جميع الحقوق محفوظة. مصممة لمستقبل التعليم.'
                            : '© 2024 Sadat Smart University. All rights reserved. Designed for the future of education.'}
                    </p>
                </div>
            </div>
        </footer>
    );
}
