import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useThemeContext } from '../../context/ThemeContext';
import { useFacultyContext } from '../../context/FacultyContext';
import { useCollegeContext } from '../../context/CollegeContext';
import FacultyCard from '../../components/faculty/FacultyCard';

export default function CollegeFaculty() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { isRtl } = useThemeContext();
    const { facultyList } = useFacultyContext();
    const { colleges } = useCollegeContext();

    const college = colleges[id];

    if (!college) {
        return (
            <div className="min-h-[50vh] flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                    {isRtl ? 'الكلية غير موجودة' : 'College not found'}
                </h2>
                <button onClick={() => navigate(-1)} className="text-primary hover:underline font-bold">
                    {isRtl ? 'العودة' : 'Go Back'}
                </button>
            </div>
        );
    }

    const filteredFaculty = useMemo(() => {
        let result = facultyList.filter(f => f.colleges && f.colleges.includes(id));
        
        // Sort: Doctors first, then Assistants
        return result.sort((a, b) => {
            if (a.role === 'doctor' && b.role !== 'doctor') return -1;
            if (a.role !== 'doctor' && b.role === 'doctor') return 1;
            return 0;
        });
    }, [facultyList, id]);

    return (
        <div className="bg-slate-50 dark:bg-slate-900 min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <button 
                    onClick={() => navigate(`/college/${id}`)}
                    className="flex items-center gap-2 text-slate-500 hover:text-primary mb-8 font-medium transition-colors"
                >
                    <span className={`material-symbols-outlined ${isRtl ? 'rotate-180' : ''}`}>arrow_back</span>
                    {isRtl ? `العودة إلى ${college.nameAr}` : `Back to ${college.name}`}
                </button>

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                        <span className="material-symbols-outlined text-3xl">diversity_3</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 mb-6">
                        {isRtl ? `هيئة التدريس - ${college.nameAr}` : `Faculty Staff - ${college.name}`}
                    </h1>
                </div>

                {/* Grid */}
                {filteredFaculty.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredFaculty.map(member => (
                            <FacultyCard key={member.id} member={member} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700">
                        <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400">
                            <span className="material-symbols-outlined text-4xl">group_off</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                            {isRtl ? 'لا يوجد أعضاء هيئة تدريس' : 'No Faculty Members'}
                        </h3>
                        <p className="text-slate-500">
                            {isRtl ? 'لم يتم إضافة أعضاء هيئة تدريس لهذه الكلية بعد.' : 'No faculty members have been added to this college yet.'}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
