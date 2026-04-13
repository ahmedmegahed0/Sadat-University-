import React from 'react';
import { useThemeContext } from '../../context/ThemeContext';
import { useCollegeContext } from '../../context/CollegeContext';
import { useAdminAuth } from '../../context/AdminAuthContext';
import { useNavigate } from 'react-router-dom';

export default function AdminOverview() {
    const { isRtl } = useThemeContext();
    const { currentCollegeId } = useAdminAuth();
    const { colleges } = useCollegeContext();
    const navigate = useNavigate();
    
    const college = colleges[currentCollegeId];
    if(!college) return null;

    const stats = [
        {
            label: isRtl ? 'الأقسام' : 'Departments',
            value: college.departments.length,
            icon: 'corporate_fare',
            color: 'text-blue-600 dark:text-blue-400',
            bg: 'bg-blue-50 dark:bg-blue-900/30',
            link: '/dashboard/college-admin/departments'
        },
        {
            label: isRtl ? 'البرامج' : 'Programs',
            value: college.programs.length,
            icon: 'menu_book',
            color: 'text-orange-600 dark:text-orange-400',
            bg: 'bg-orange-50 dark:bg-orange-900/30',
            link: '/dashboard/college-admin/programs'
        },
        {
            label: isRtl ? 'أعضاء هيئة التدريس' : 'Faculty Staff',
            value: college.staff.length,
            icon: 'groups',
            color: 'text-emerald-600 dark:text-emerald-400',
            bg: 'bg-emerald-50 dark:bg-emerald-900/30',
            link: '/dashboard/college-admin/staff'
        }
    ];

    return (
        <div className="flex-1 overflow-y-auto bg-slate-50/50 dark:bg-gray-900/50 p-4 md:p-8">
            <div className="max-w-7xl mx-auto space-y-8">
                
                {/* Welcome Banner */}
                <div className="bg-gradient-to-r from-primary to-blue-600 p-8 md:p-10 rounded-[2.5rem] text-white shadow-xl shadow-primary/20 relative overflow-hidden">
                    <div className="relative z-10 max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">
                            {isRtl ? 'مرحباً بعودتك،' : 'Welcome back,'} {isRtl ? 'المدير' : 'Admin'}! 👋
                        </h2>
                        <p className="text-blue-100 text-lg md:text-xl font-medium leading-relaxed opacity-90">
                            {isRtl 
                                ? `أنت تدير الآن ${college.nameAr}. يمكنك التحكم في الأقسام والبرامج والكادر التعليمي من هذه اللوحة.` 
                                : `You are managing ${college.name}. Control your departments, programs, and staff from this dashboard.`}
                        </p>
                    </div>
                    <span className="material-symbols-outlined absolute -right-10 -bottom-10 rtl:left-[-2.5rem] rtl:right-auto text-[15rem] text-white/5 rotate-[-15deg] rtl:rotate-[15deg]">dashboard</span>
                </div>

                {/* Stats Grid */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white px-2 mt-10">
                    {isRtl ? 'نظرة عامة' : 'Quick Overview'}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stats.map((stat, idx) => (
                        <div 
                            key={idx} 
                            onClick={() => navigate(stat.link)}
                            className="bg-white dark:bg-gray-800 rounded-3xl p-6 border border-slate-200 dark:border-gray-700 shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all cursor-pointer group"
                        >
                            <div className="flex items-center justify-between">
                                <div className={`h-16 w-16 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center transition-transform group-hover:scale-110`}>
                                    <span className="material-symbols-outlined text-3xl">{stat.icon}</span>
                                </div>
                                <span className={`material-symbols-outlined text-slate-300 dark:text-gray-600 group-hover:text-primary transition-colors ${isRtl ? 'rotate-180' : ''}`}>arrow_forward</span>
                            </div>
                            <div className="mt-6">
                                <p className="text-4xl font-black text-slate-900 dark:text-white leading-none mb-2">{stat.value}</p>
                                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest leading-none">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
