import React, { useState } from 'react';
import { useThemeContext } from '../../../context/ThemeContext';
import { useCollegeContext } from '../../../context/CollegeContext';
import { useGlobalData } from '../../../context/GlobalDataContext';

export default function CollegesManagement() {
    const { isRtl } = useThemeContext();
    const { colleges: contextColleges, addCollege, updateCollege, deleteCollege } = useCollegeContext();
    const { admins } = useGlobalData();
    
    const colleges = Object.values(contextColleges || {});

    const [isEditing, setIsEditing] = useState(false);
    const [currentId, setCurrentId] = useState(null);
    const [formData, setFormData] = useState({
        name: '', nameAr: '', icon: 'school'
    });
    const [toast, setToast] = useState(null);

    const showToast = (msg) => {
        setToast(msg);
        setTimeout(() => setToast(null), 3000);
    };

    const handleOpenForm = (college = null) => {
        if (college) {
            setIsEditing(true);
            setCurrentId(college.id);
            setFormData({
                name: college.name || '',
                nameAr: college.nameAr || '',
                icon: college.icon || 'school'
            });
        } else {
            setIsEditing(true);
            setCurrentId(null);
            setFormData({ name: '', nameAr: '', icon: 'school' });
        }
    };

    const handleCloseForm = () => {
        setIsEditing(false);
        setCurrentId(null);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        if (currentId) {
            updateCollege(currentId, formData);
            showToast(isRtl ? 'تم تحديث الكلية بنجاح!' : 'College updated successfully!');
        } else {
            const newId = formData.name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '') || Date.now().toString();
            addCollege({ ...formData, id: newId });
            showToast(isRtl ? 'تم إضافة الكلية بنجاح!' : 'College added successfully!');
        }
        handleCloseForm();
    };

    const handleDelete = (id) => {
        const assignedAdmin = (admins || []).find(a => (a.role === 'admin' || a.role === 'College Admin') && a.collegeId === id);
        
        if (assignedAdmin) {
            alert(isRtl ? `لا يمكن الحذف! هذه الكلية مدارة بواسطة المسؤول: ${assignedAdmin.nameAr || assignedAdmin.nameEn || assignedAdmin.name}. يرجى إزالة المسؤول المعين أولاً.` : `Cannot delete! This college is managed by admin: ${assignedAdmin.nameEn || assignedAdmin.name}. Please unassign them first.`);
            return;
        }

        if (window.confirm(isRtl ? 'هل أنت متأكد من حذف هذه الكلية؟' : 'Are you sure you want to delete this college?')) {
            deleteCollege(id);
            showToast(isRtl ? 'تم حذف الكلية بنجاح!' : 'College deleted successfully!');
        }
    };

    return (
        <div className={`p-4 md:p-8 max-w-[1600px] w-full mx-auto space-y-8 fade-in ${isRtl ? 'rtl' : 'ltr'}`}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 relative">
                {toast && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm animate-in fade-in slide-in-from-top-4 z-50">
                        {toast}
                    </div>
                )}
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                        {isRtl ? 'إدارة الكليات' : 'Colleges Management'}
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">
                        {isRtl ? 'إضافة وإدارة الكليات المدرجة في بوابة الجامعة.' : 'Manage the faculties listed in the university portal. Data is deeply integrated with website systems.'}
                    </p>
                </div>
                {!isEditing && (
                    <button onClick={() => handleOpenForm()} className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-primary/30 transition-all">
                        <span className="material-symbols-outlined">add</span>
                        {isRtl ? 'إضافة كلية' : 'Add College'}
                    </button>
                )}
            </div>

            {isEditing ? (
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-slate-200 dark:border-white/5 shadow-xl fade-in">
                    <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">
                        {currentId ? (isRtl ? 'تعديل بيانات الكلية' : 'Edit College') : (isRtl ? 'إضافة كلية جديدة' : 'Create New College')}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-slate-500 mb-2">{isRtl ? 'الاسم (إنجليزي)' : 'Name (EN)'}</label>
                            <input name="name" value={formData.name} onChange={handleChange} className="w-full border rounded-xl p-3 bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 dark:text-white outline-none focus:border-primary" />
                        </div>
                        <div dir="rtl">
                            <label className="block text-sm font-bold text-slate-500 mb-2 text-right">{isRtl ? 'الاسم (عربي)' : 'Name (AR)'}</label>
                            <input name="nameAr" value={formData.nameAr} onChange={handleChange} className="w-full border rounded-xl p-3 bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 dark:text-white outline-none focus:border-primary" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-bold text-slate-500 mb-2">{isRtl ? 'أيقونة الكلية (Material Symbol)' : 'College Icon'}</label>
                            <input name="icon" value={formData.icon} onChange={handleChange} className="w-full border rounded-xl p-3 bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 dark:text-white outline-none focus:border-primary" />
                        </div>
                    </div>

                    <div className="mt-8 flex gap-4">
                        <button onClick={handleSave} className="bg-primary text-white px-6 py-2.5 rounded-lg font-bold hover:bg-primary/90 transition">
                            {isRtl ? 'حفظ الكلية' : 'Save College'}
                        </button>
                        <button onClick={handleCloseForm} className="bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-white px-6 py-2.5 rounded-lg font-bold hover:bg-slate-300 dark:hover:bg-white/20 transition">
                            {isRtl ? 'إلغاء' : 'Cancel'}
                        </button>
                    </div>
                </div>
            ) : (
                <div className="bg-white dark:bg-gray-800 border border-slate-200 dark:border-white/5 rounded-2xl overflow-hidden shadow-xl overflow-x-auto">
                    <table className={`w-full ${isRtl ? 'text-right' : 'text-left'}`}>
                        <thead className="bg-slate-50 dark:bg-white/5 border-b border-slate-200 dark:border-white/5">
                            <tr>
                                <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">{isRtl ? 'الكلية' : 'College'}</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">{isRtl ? 'المسؤول المعين' : 'Assigned Admin'}</th>
                                <th className={`px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest ${isRtl ? 'text-left' : 'text-right'}`}>{isRtl ? 'إجراءات' : 'Actions'}</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-slate-900 dark:text-white">
                            {colleges.map((col) => (
                                <tr key={col.id} className="hover:bg-primary/5 transition-colors group">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-4">
                                            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                                                <span className="material-symbols-outlined">{col.icon || 'school'}</span>
                                            </div>
                                            <div>
                                                <p className="font-bold text-sm text-slate-900 dark:text-white">
                                                    {isRtl ? col.nameAr : col.name}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {(() => {
                                            const assigned = (admins || []).find(a => (a.role === 'admin' || a.role === 'College Admin') && a.collegeId === col.id);
                                            return assigned ? (
                                                <div className="flex items-center gap-2">
                                                    <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden flex items-center justify-center">
                                                        {assigned.avatar ? <img src={assigned.avatar} alt="Avatar" className="w-full h-full object-cover" /> : <span className="material-symbols-outlined text-[14px]">person</span>}
                                                    </div>
                                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                                        {isRtl ? (assigned.nameAr || assigned.nameEn || assigned.name) : (assigned.nameEn || assigned.name)}
                                                    </span>
                                                </div>
                                            ) : (
                                                <span className="text-slate-400 italic font-normal text-xs">{isRtl ? 'غير معين' : 'Unassigned'}</span>
                                            );
                                        })()}
                                    </td>
                                    <td className={`px-6 py-4 ${isRtl ? 'text-left' : 'text-right'}`}>
                                        <div className={`flex ${isRtl ? 'justify-start' : 'justify-end'} gap-1`}>
                                            <button onClick={() => handleOpenForm(col)} className="p-2 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-all" title={isRtl ? "تعديل" : "Edit"}>
                                                <span className="material-symbols-outlined text-lg">edit</span>
                                            </button>
                                            <button onClick={() => handleDelete(col.id)} className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all" title={isRtl ? "حذف" : "Delete"}>
                                                <span className="material-symbols-outlined text-lg">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {colleges.length === 0 && (
                                <tr>
                                    <td colSpan="3" className="px-6 py-8 text-center text-slate-500">
                                        {isRtl ? 'لا توجد كليات.' : 'No colleges available.'}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
