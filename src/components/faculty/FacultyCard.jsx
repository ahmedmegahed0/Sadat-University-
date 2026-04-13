import React from 'react';
import { Link } from 'react-router-dom';
import { useThemeContext } from '../../context/ThemeContext';

export default function FacultyCard({ member }) {
    const { isRtl } = useThemeContext();
    
    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all group flex flex-col h-full">
            <div className="relative pt-[100%] bg-slate-100 dark:bg-slate-800 shrink-0">
                <img 
                    src={member.image || 'https://via.placeholder.com/400x400?text=No+Image'} 
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md ${member.role === 'doctor' ? 'bg-primary/90 text-white' : 'bg-white/90 text-slate-800 shadow-sm'}`}>
                        {member.role === 'doctor' ? (isRtl ? 'دكتور' : 'Doctor') : (isRtl ? 'معيد' : 'Assistant')}
                    </span>
                </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                    {member.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-4 line-clamp-2">
                    {member.specialization}
                </p>
                
                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <Link 
                        to={`/faculty/${member.id}`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-dark transition-colors"
                    >
                        {isRtl ? 'عرض الملف' : 'View Profile'}
                        <span className={`material-symbols-outlined text-sm transition-transform duration-300 ${isRtl ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}>
                            {isRtl ? 'arrow_back' : 'arrow_forward'}
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
