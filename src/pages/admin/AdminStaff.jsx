import React, { useState } from 'react';
import { useThemeContext } from '../../context/ThemeContext';
import { useCollegeContext } from '../../context/CollegeContext';
import { useAuth } from '../../context/AuthContext';

export default function AdminStaff() {
    const { isRtl } = useThemeContext();
    const { currentCollegeId } = useAuth();
    const { colleges, addStaff, deleteStaff } = useCollegeContext();
    
    // Fallback if not loaded
    const college = colleges[currentCollegeId];
    const staffList = college?.staff || [];
    const departments = college?.departments || [];

    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [newStaff, setNewStaff] = useState({ name: '', nameAr: '', role: '', roleAr: '', email: '', departmentId: '', status: 'active' });

    const handleAddStaff = (e) => {
        e.preventDefault();
        addStaff(currentCollegeId, newStaff);
        setIsAddModalOpen(false);
        setNewStaff({ name: '', nameAr: '', role: '', roleAr: '', email: '', departmentId: '', status: 'active' });
    };

    const handleDelete = (id) => {
        if(window.confirm(isRtl ? 'هل أنت متأكد من حذف هذا العضو؟' : 'Are you sure you want to delete this member?')) {
            deleteStaff(currentCollegeId, id);
        }
    };

    return (
        <div className="flex-1 overflow-y-auto bg-slate-50/50 dark:bg-gray-900/50 p-4 md:p-8">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                            {isRtl ? 'إدارة هيئة التدريس' : 'Manage Faculty'}
                        </h2>
                        <p className="text-slate-500 mt-1 font-medium">
                            {isRtl ? 'دليل شامل لأعضاء هيئة التدريس ورؤساء الأقسام' : 'Comprehensive directory of academic staff and department heads'}
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button 
                            onClick={() => setIsAddModalOpen(true)}
                            className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white hover:bg-blue-700 transition-all shadow-lg shadow-primary/20"
                        >
                            <span className="material-symbols-outlined text-lg">person_add</span>
                            <span>{isRtl ? 'إضافة عضو هيئة تدريس' : 'Add Faculty Member'}</span>
                        </button>
                    </div>
                </div>

                {/* Stats Overview */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-slate-100 dark:border-gray-700 shadow-sm flex items-center gap-4">
                        <div className="h-12 w-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-primary flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined">group</span>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{isRtl ? 'إجمالي الموظفين' : 'Total Staff'}</p>
                            <p className="text-2xl font-extrabold text-slate-900 dark:text-white leading-none">{staffList.length}</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-slate-100 dark:border-gray-700 shadow-sm flex items-center gap-4">
                        <div className="h-12 w-12 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined">verified_user</span>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{isRtl ? 'نشط' : 'Active'}</p>
                            <p className="text-2xl font-extrabold text-slate-900 dark:text-white leading-none">
                                {staffList.filter(s => s.status === 'active').length}
                            </p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-slate-100 dark:border-gray-700 shadow-sm flex items-center gap-4">
                        <div className="h-12 w-12 rounded-xl bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined">school</span>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{isRtl ? 'الأقسام' : 'Departments'}</p>
                            <p className="text-2xl font-extrabold text-slate-900 dark:text-white leading-none">{departments.length}</p>
                        </div>
                    </div>
                </div>

                {/* Faculty Table */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl border border-slate-200 dark:border-gray-700 shadow-sm overflow-hidden flex flex-col">
                    <div className="overflow-x-auto">
                        <table className={`w-full border-collapse ${isRtl ? 'text-right' : 'text-left'}`}>
                            <thead>
                                <tr className="bg-white dark:bg-gray-800 border-b border-slate-100 dark:border-gray-700">
                                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400 whitespace-nowrap">{isRtl ? 'عضو هيئة التدريس' : 'Faculty Member'}</th>
                                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400 whitespace-nowrap">{isRtl ? 'القسم' : 'Department'}</th>
                                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400 whitespace-nowrap">{isRtl ? 'التعيين' : 'Designation'}</th>
                                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400 whitespace-nowrap">{isRtl ? 'البريد الإلكتروني' : 'Email'}</th>
                                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400 whitespace-nowrap">{isRtl ? 'الحالة' : 'Status'}</th>
                                    <th className={`px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400 whitespace-nowrap ${isRtl ? 'text-left' : 'text-right'}`}>{isRtl ? 'الإجراءات' : 'Actions'}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50 dark:divide-gray-700">
                                {staffList.map((member) => {
                                    const dept = departments.find(d => d.id === member.departmentId);
                                    return (
                                        <tr key={member.id} className="hover:bg-slate-50/80 dark:hover:bg-gray-700/50 transition-colors group">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-9 w-9 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary font-bold text-xs shrink-0">
                                                        {(member.name || member.nameAr).substring(0,2).toUpperCase()}
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-bold text-slate-900 dark:text-white">{isRtl ? member.nameAr : member.name}</p>
                                                        <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tight" dir="ltr">ID: #{member.id}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-600 dark:text-slate-300">
                                                {dept ? (isRtl ? dept.nameAr : dept.name) : '-'}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-300">{isRtl ? member.roleAr : member.role}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 italic">{member.email}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold ${member.status === 'active' ? 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400' : 'bg-slate-100 dark:bg-gray-700 text-slate-600 dark:text-gray-300'}`}>
                                                    <span className={`w-1.5 h-1.5 rounded-full ${member.status === 'active' ? 'bg-emerald-500' : 'bg-slate-400'}`}></span>
                                                    {member.status === 'active' ? (isRtl ? 'نشط' : 'Active') : (isRtl ? 'غير نشط' : 'Inactive')}
                                                </span>
                                            </td>
                                            <td className={`px-6 py-4 whitespace-nowrap ${isRtl ? 'text-left' : 'text-right'}`}>
                                                <div className={`flex items-center ${isRtl ? 'justify-start' : 'justify-end'} gap-1`}>
                                                    <button onClick={() => handleDelete(member.id)} className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-all" title={isRtl ? "حذف العضو" : "Delete Member"}>
                                                        <span className="material-symbols-outlined text-[20px]">delete</span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                                {staffList.length === 0 && (
                                    <tr>
                                        <td colSpan="6" className="text-center py-8 text-slate-500">{isRtl ? 'لا يوجد أعضاء هيئة تدريس' : 'No staff found'}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Add Modal */}
            {isAddModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-lg p-6 shadow-xl">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                            {isRtl ? 'إضافة عضو جديد' : 'Add New Staff'}
                        </h3>
                        <form onSubmit={handleAddStaff} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{isRtl ? 'الاسم (EN)' : 'Name (EN)'}</label>
                                    <input required value={newStaff.name} onChange={e => setNewStaff({...newStaff, name: e.target.value})} className="w-full border rounded-lg p-2 dark:bg-gray-900 dark:border-gray-700 text-slate-900 dark:text-white" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{isRtl ? 'الاسم (AR)' : 'Name (AR)'}</label>
                                    <input required value={newStaff.nameAr} onChange={e => setNewStaff({...newStaff, nameAr: e.target.value})} className="w-full border rounded-lg p-2 dark:bg-gray-900 dark:border-gray-700 text-slate-900 dark:text-white" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{isRtl ? 'الدور (EN)' : 'Role (EN)'}</label>
                                    <input required value={newStaff.role} onChange={e => setNewStaff({...newStaff, role: e.target.value})} className="w-full border rounded-lg p-2 dark:bg-gray-900 dark:border-gray-700 text-slate-900 dark:text-white" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{isRtl ? 'الدور (AR)' : 'Role (AR)'}</label>
                                    <input required value={newStaff.roleAr} onChange={e => setNewStaff({...newStaff, roleAr: e.target.value})} className="w-full border rounded-lg p-2 dark:bg-gray-900 dark:border-gray-700 text-slate-900 dark:text-white" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{isRtl ? 'البريد' : 'Email'}</label>
                                <input required type="email" value={newStaff.email} onChange={e => setNewStaff({...newStaff, email: e.target.value})} className="w-full border rounded-lg p-2 dark:bg-gray-900 dark:border-gray-700 text-slate-900 dark:text-white" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{isRtl ? 'القسم' : 'Department'}</label>
                                <select required value={newStaff.departmentId} onChange={e => setNewStaff({...newStaff, departmentId: e.target.value})} className="w-full border rounded-lg p-2 dark:bg-gray-900 dark:border-gray-700 text-slate-900 dark:text-white bg-transparent">
                                    <option value="">{isRtl ? 'اختر القسم' : 'Select Dept'}</option>
                                    {departments.map(d => (
                                        <option key={d.id} value={d.id}>{isRtl ? d.nameAr : d.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex justify-end gap-3 mt-6">
                                <button type="button" onClick={() => setIsAddModalOpen(false)} className="px-4 py-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-gray-700 rounded-lg">
                                    {isRtl ? 'إلغاء' : 'Cancel'}
                                </button>
                                <button type="submit" className="px-4 py-2 bg-primary text-white hover:bg-blue-700 rounded-lg">
                                    {isRtl ? 'حفظ' : 'Save'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
