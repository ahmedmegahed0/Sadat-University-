import React, { useState, useMemo } from 'react';
import { useThemeContext } from '../../context/ThemeContext';
import { useFacultyContext } from '../../context/FacultyContext';
import FacultyCard from '../../components/faculty/FacultyCard';

export default function GlobalFaculty() {
    const { isRtl } = useThemeContext();
    const { facultyList } = useFacultyContext();
    const [searchQuery, setSearchQuery] = useState('');
    const [roleFilter, setRoleFilter] = useState('all');

    const filteredFaculty = useMemo(() => {
        let result = facultyList;
        
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            result = result.filter(f => 
                f.name.toLowerCase().includes(query) || 
                f.specialization.toLowerCase().includes(query)
            );
        }
        
        if (roleFilter !== 'all') {
            result = result.filter(f => f.role === roleFilter);
        }
        
        // Sort: Doctors first, then Assistants
        return result.sort((a, b) => {
            if (a.role === 'doctor' && b.role !== 'doctor') return -1;
            if (a.role !== 'doctor' && b.role === 'doctor') return 1;
            return 0;
        });
    }, [facultyList, searchQuery, roleFilter]);

    return (
        <div className="bg-slate-50 dark:bg-slate-900 min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 mb-6">
                        {isRtl ? 'هيئة التدريس' : 'Faculty Staff'}
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-300">
                        {isRtl 
                            ? 'تعرف على نخبة من أفضل الأكاديميين والباحثين في جامعتنا' 
                            : 'Meet our distinguished academics and researchers across all disciplines.'}
                    </p>
                </div>

                {/* Filters & Search */}
                <div className="flex flex-col md:flex-row gap-4 mb-12 max-w-3xl mx-auto">
                    <div className="flex-1 relative">
                        <span className="material-symbols-outlined absolute top-1/2 -translate-y-1/2 left-4 text-slate-400">
                            search
                        </span>
                        <input 
                            type="text" 
                            placeholder={isRtl ? 'ابحث بالاسم أو التخصص...' : 'Search by name or specialization...'}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className={`w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all ${isRtl ? 'pr-12 pl-4 text-right' : ''}`}
                            dir={isRtl ? 'rtl' : 'ltr'}
                        />
                    </div>
                    <select 
                        value={roleFilter}
                        onChange={(e) => setRoleFilter(e.target.value)}
                        className={`py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 focus:ring-2 focus:ring-primary outline-none cursor-pointer ${isRtl ? 'text-right' : ''}`}
                        dir={isRtl ? 'rtl' : 'ltr'}
                    >
                        <option value="all">{isRtl ? 'الكل' : 'All Roles'}</option>
                        <option value="doctor">{isRtl ? 'أطباء / دكاترة' : 'Doctors'}</option>
                        <option value="assistant">{isRtl ? 'معيدين / مساعدين' : 'Assistants'}</option>
                    </select>
                </div>

                {/* Grid */}
                {filteredFaculty.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredFaculty.map(member => (
                            <FacultyCard key={member.id} member={member} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400">
                            <span className="material-symbols-outlined text-4xl">search_off</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                            {isRtl ? 'لم يتم العثور على نتائج' : 'No Results Found'}
                        </h3>
                        <p className="text-slate-500">
                            {isRtl ? 'حاول البحث بكلمات مختلفة أو تغيير عوامل التصفية' : 'Try adjusting your search criteria or filters'}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
