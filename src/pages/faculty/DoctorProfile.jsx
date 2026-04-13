import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useThemeContext } from '../../context/ThemeContext';
import { useFacultyContext } from '../../context/FacultyContext';
import { useCollegeContext } from '../../context/CollegeContext';

export default function DoctorProfile() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { isRtl } = useThemeContext();
    const { facultyList } = useFacultyContext();
    const { colleges } = useCollegeContext();

    const member = facultyList.find(f => f.id === id);

    if (!member) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8">
                <span className="material-symbols-outlined text-6xl text-slate-300 mb-4">person_off</span>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {isRtl ? 'الصفحة غير موجودة' : 'Profile Not Found'}
                </h2>
                <button onClick={() => navigate('/faculty')} className="text-primary hover:underline mt-4 font-bold">
                    {isRtl ? 'العودة لهيئة التدريس' : 'Back to Faculty'}
                </button>
            </div>
        );
    }

    const memberColleges = (member.colleges || []).map(cId => colleges[cId]).filter(Boolean);

    return (
        <div className="bg-slate-50 dark:bg-slate-900 min-h-screen py-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <button 
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-slate-500 hover:text-primary mb-8 font-medium transition-colors"
                >
                    <span className={`material-symbols-outlined ${isRtl ? 'rotate-180' : ''}`}>arrow_back</span>
                    {isRtl ? 'رجوع' : 'Go Back'}
                </button>

                <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl overflow-hidden">
                    <div className="h-48 bg-gradient-to-r from-primary/10 to-blue-500/10 dark:from-primary/20 dark:to-blue-500/20 relative">
                        <div className="absolute -bottom-20 left-8 md:left-12 flex items-end gap-6 w-full px-4">
                            <img 
                                src={member.image || 'https://via.placeholder.com/400x400?text=No+Image'} 
                                alt={member.name}
                                className="w-40 h-40 rounded-2xl object-cover ring-4 ring-white dark:ring-slate-800 shadow-lg bg-white"
                            />
                        </div>
                    </div>
                    
                    <div className="pt-24 px-8 md:px-12 pb-12">
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                            <div>
                                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                                    {member.name}
                                </h1>
                                <p className="text-xl text-primary font-medium mb-4">
                                    {member.specialization}
                                </p>
                                <div className="flex flex-wrap items-center gap-3">
                                    <span className={`px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide ${member.role === 'doctor' ? 'bg-primary/10 text-primary' : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300'}`}>
                                        {member.role === 'doctor' ? (isRtl ? 'دكتور' : 'Doctor') : (isRtl ? 'معيد' : 'Assistant')}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="flex shrink-0 gap-3">
                                {member.cv && (
                                    <a 
                                        href={member.cv} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-colors shadow-sm"
                                    >
                                        <span className="material-symbols-outlined text-[20px]">description</span>
                                        {isRtl ? 'السيرة الذاتية' : 'View CV'}
                                    </a>
                                )}
                                {member.portfolio && (
                                    <a 
                                        href={member.portfolio} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-700 text-slate-700 dark:text-white border border-slate-200 dark:border-slate-600 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors shadow-sm"
                                    >
                                        <span className="material-symbols-outlined text-[20px]">language</span>
                                        {isRtl ? 'الموقع الشخصي' : 'Portfolio'}
                                    </a>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                            {/* Colleges Section */}
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">account_balance</span>
                                    {isRtl ? 'الكليات' : 'Colleges'}
                                </h3>
                                {memberColleges.length > 0 ? (
                                    <div className="flex flex-wrap gap-3">
                                        {memberColleges.map(c => (
                                            <Link 
                                                key={c.id} 
                                                to={`/college/${c.id}`}
                                                className="px-4 py-2 bg-slate-100 dark:bg-slate-700/50 hover:bg-primary/5 dark:hover:bg-primary/10 hover:text-primary text-slate-700 dark:text-slate-300 rounded-xl text-sm font-medium transition-colors border border-transparent hover:border-primary/20"
                                            >
                                                {isRtl ? c.nameAr : c.name}
                                            </Link>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-sm text-slate-500">{isRtl ? 'لا يوجد كليات محددة.' : 'No colleges specified.'}</p>
                                )}
                            </div>

                            {/* Languages Section */}
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">translate</span>
                                    {isRtl ? 'اللغات' : 'Languages'}
                                </h3>
                                {member.languages && member.languages.length > 0 ? (
                                    <div className="flex flex-wrap gap-2">
                                        {member.languages.map((lang, idx) => (
                                            <span 
                                                key={idx}
                                                className="px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-400"
                                            >
                                                {lang}
                                            </span>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-sm text-slate-500">{isRtl ? 'لا يوجد لغات محددة.' : 'No languages specified.'}</p>
                                )}
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}
