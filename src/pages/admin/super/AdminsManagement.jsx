import React, { useState } from 'react';
import { useGlobalData } from '../../../context/GlobalDataContext';
import { useThemeContext } from '../../../context/ThemeContext';
import { useCollegeContext } from '../../../context/CollegeContext';

export default function AdminsManagement() {
    const { admins, addAdmin, updateAdmin, deleteAdmin } = useGlobalData();
    const { isRtl } = useThemeContext();
    const { colleges: contextColleges } = useCollegeContext();
    const collegesList = Object.values(contextColleges || {});

    const [isEditing, setIsEditing] = useState(false);
    const [currentId, setCurrentId] = useState(null);
    const [toast, setToast] = useState({ message: '', type: '' });
    const [formData, setFormData] = useState({
        nameEn: '', nameAr: '', email: '', password: 'password123', role: 'College Admin', collegeId: '', avatar: ''
    });

    const showToast = (message, type = 'success') => {
        setToast({ message, type });
        setTimeout(() => setToast({ message: '', type: '' }), 3000);
    };

    const handleOpenForm = (admin = null) => {
        if (admin) {
            setIsEditing(true);
            setCurrentId(admin.id);
            setFormData({
                nameEn: admin.nameEn || admin.name || '',
                nameAr: admin.nameAr || admin.name || '',
                email: admin.email || '',
                password: admin.password || 'password123',
                role: admin.role === 'SUPER_ADMIN' ? 'Super Admin' : (admin.role === 'admin' ? 'College Admin' : admin.role || 'College Admin'),
                collegeId: admin.collegeId || '',
                avatar: admin.avatar || ''
            });
        } else {
            setIsEditing(true);
            setCurrentId(null);
            setFormData({ nameEn: '', nameAr: '', email: '', password: 'password123', role: 'College Admin', collegeId: '', avatar: '' });
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
        if (formData.role === 'College Admin' && !formData.collegeId) {
            showToast(isRtl ? 'الرجاء اختيار كلية' : 'Please select an assigned college', 'error');
            return;
        }
        
        // Match expected admin mock structure:
        const finalData = { ...formData, name: formData.nameEn, role: formData.role === 'Super Admin' ? 'SUPER_ADMIN' : 'admin' };
        if (finalData.role === 'SUPER_ADMIN') {
            finalData.collegeId = null;
        }

        if (currentId) {
            updateAdmin(currentId, finalData);
            showToast(isRtl ? 'تم تحديث المسؤول بنجاح!' : 'Admin updated successfully!');
        } else {
            addAdmin(finalData);
            showToast(isRtl ? 'تم إضافة المسؤول بنجاح!' : 'Admin added successfully!');
        }
        handleCloseForm();
    };

    const handleDelete = (id) => {
        if (window.confirm(isRtl ? 'هل أنت متأكد من حذف هذا المسؤول؟' : 'Are you sure you want to delete this admin?')) {
            deleteAdmin(id);
            showToast(isRtl ? 'تم الحذف بنجاح!' : 'Deleted successfully!');
        }
    };

    return (
        <div className={`p-4 md:p-8 max-w-[1600px] w-full mx-auto space-y-8 fade-in ${isRtl ? 'rtl' : 'ltr'} relative`}>
            {toast.message && (
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-3 rounded-xl shadow-2xl font-bold text-sm animate-in fade-in slide-in-from-top-4 z-50 text-white flex items-center gap-2 ${toast.type === 'error' ? 'bg-red-500' : 'bg-green-500'}`}>
                    <span className="material-symbols-outlined">{toast.type === 'error' ? 'error' : 'check_circle'}</span>
                    {toast.message}
                </div>
            )}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                        {isRtl ? 'إدارة المسؤولين' : 'Admins Management'}
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">
                        {isRtl ? 'إدارة صلاحيات مستخدمي لوحة التحكم.' : 'Manage dashboard users, assigning colleges and strictly defining permissions.'}
                    </p>
                </div>
                {!isEditing && (
                    <button onClick={() => handleOpenForm()} className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-primary/30 transition-all">
                        <span className="material-symbols-outlined">person_add</span>
                        {isRtl ? 'إضافة مسؤول' : 'Add Admin'}
                    </button>
                )}
            </div>

            {isEditing ? (
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-slate-200 dark:border-white/5 shadow-xl fade-in">
                    <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">
                        {currentId ? (isRtl ? 'تعديل بيانات المسؤول' : 'Edit Admin Info') : (isRtl ? 'إضافة مسؤول جديد' : 'Create New Admin')}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-slate-500 mb-2">{isRtl ? 'الاسم (إنجليزي)' : 'Name (EN)'}</label>
                            <input name="nameEn" value={formData.nameEn} onChange={handleChange} className="w-full border rounded-xl p-3 bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 dark:text-white outline-none focus:border-primary" />
                        </div>
                        <div dir="rtl">
                            <label className="block text-sm font-bold text-slate-500 mb-2 text-right">{isRtl ? 'الاسم (عربي)' : 'Name (AR)'}</label>
                            <input name="nameAr" value={formData.nameAr} onChange={handleChange} className="w-full border rounded-xl p-3 bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 dark:text-white outline-none focus:border-primary" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-500 mb-2">{isRtl ? 'البريد الإلكتروني' : 'Email Address'}</label>
                            <input name="email" type="email" value={formData.email} onChange={handleChange} className="w-full border rounded-xl p-3 bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 dark:text-white outline-none focus:border-primary" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-500 mb-2">{isRtl ? 'كلمة المرور' : 'Password'}</label>
                            <input name="password" type="password" value={formData.password} onChange={handleChange} className="w-full border rounded-xl p-3 bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 dark:text-white outline-none focus:border-primary" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-500 mb-2">{isRtl ? 'الصلاحية (الدور)' : 'Role'}</label>
                            <select name="role" value={formData.role} onChange={handleChange} className="w-full border rounded-xl p-3 bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 dark:text-white outline-none focus:border-primary">
                                <option value="Super Admin">{isRtl ? 'مدير عام (جميع الكليات)' : 'Super Admin (All Colleges)'}</option>
                                <option value="College Admin">{isRtl ? 'مدير كلية' : 'College Admin'}</option>
                            </select>
                        </div>
                        
                        {formData.role === 'College Admin' && (() => {
                            const assignedCollegeIds = (admins || [])
                                .filter(a => (a.role === 'admin' || a.role === 'College Admin') && a.id !== currentId)
                                .map(a => a.collegeId)
                                .filter(Boolean);
                            const availableColleges = collegesList.filter(col => !assignedCollegeIds.includes(col.id));
                            
                            return (
                                <div>
                                    <label className="block text-sm font-bold text-slate-500 mb-2">{isRtl ? 'الكلية المعينة' : 'Assigned College'}</label>
                                    <select name="collegeId" value={formData.collegeId} onChange={handleChange} className={`w-full border rounded-xl p-3 outline-none focus:border-primary ${!formData.collegeId ? 'border-red-400 bg-red-50/50' : 'bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 dark:text-white'}`}>
                                        <option value="">{isRtl ? '-- اختر الكلية --' : '-- Select College --'}</option>
                                        {availableColleges.map(col => (
                                            <option key={col.id} value={col.id}>{isRtl ? col.nameAr : col.name}</option>
                                        ))}
                                    </select>
                                    {availableColleges.length === 0 && !formData.collegeId && (
                                        <p className="text-xs text-amber-500 mt-2 font-bold flex items-center gap-1">
                                            <span className="material-symbols-outlined text-sm">warning</span>
                                            {isRtl ? 'جميع الكليات معينة مسبقاً.' : 'All colleges are currently assigned.'}
                                        </p>
                                    )}
                                </div>
                            );
                        })()}
                        <div>
                            <label className="block text-sm font-bold text-slate-500 mb-2">{isRtl ? 'رابط الصورة الرمزية' : 'Avatar URL'}</label>
                            <input name="avatar" value={formData.avatar} onChange={handleChange} className="w-full border rounded-xl p-3 bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 dark:text-white outline-none focus:border-primary" placeholder="https://" />
                        </div>
                    </div>

                    <div className="mt-8 flex gap-4">
                        <button onClick={handleSave} className="bg-primary text-white px-6 py-2.5 rounded-lg font-bold hover:bg-primary/90 transition">
                            {isRtl ? 'حفظ المسؤول' : 'Save Admin'}
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
                                <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">{isRtl ? 'المسؤول' : 'Admin'}</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">{isRtl ? 'الصلاحية' : 'Role'}</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">{isRtl ? 'الكلية المعينة' : 'Assigned College'}</th>
                                <th className={`px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest ${isRtl ? 'text-left' : 'text-right'}`}>{isRtl ? 'إجراءات' : 'Actions'}</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-slate-900 dark:text-white">
                            {(admins || []).map((admin) => (
                                <tr key={admin.id} className="hover:bg-primary/5 transition-colors group">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-4">
                                            <div className="h-10 w-10 rounded-full overflow-hidden shrink-0 bg-slate-200 dark:bg-gray-700">
                                                {admin.avatar ? (
                                                    <img src={admin.avatar} alt={admin.nameEn} className="w-full h-full object-cover" />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center text-slate-400">
                                                        <span className="material-symbols-outlined">person</span>
                                                    </div>
                                                )}
                                            </div>
                                            <div>
                                                <p className="font-bold text-sm text-slate-900 dark:text-white">
                                                    {isRtl ? admin.nameAr : admin.nameEn}
                                                </p>
                                                <p className="text-xs text-slate-500">{admin.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${admin.role === 'SUPER_ADMIN' || admin.role === 'Super Admin' ? 'bg-primary/10 text-primary' : 'bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300'}`}>
                                            {admin.role === 'SUPER_ADMIN' ? 'Super Admin' : (admin.role === 'admin' ? 'College Admin' : admin.role)}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-slate-700 dark:text-slate-300">
                                        {admin.role === 'SUPER_ADMIN' || admin.role === 'Super Admin' ? (
                                            <span className="text-slate-400 italic font-normal text-xs">{isRtl ? 'صلاحيات غير مقيدة' : 'All Access'}</span>
                                        ) : (
                                            <div className="flex items-center gap-2">
                                                <span className="material-symbols-outlined text-sm text-primary">school</span>
                                                {contextColleges[admin.collegeId] ? (isRtl ? contextColleges[admin.collegeId].nameAr : contextColleges[admin.collegeId].name) : (isRtl ? 'غير معين' : 'Unassigned')}
                                            </div>
                                        )}
                                    </td>
                                    <td className={`px-6 py-4 ${isRtl ? 'text-left' : 'text-right'}`}>
                                        <div className={`flex ${isRtl ? 'justify-start' : 'justify-end'} gap-1`}>
                                            <button onClick={() => handleOpenForm(admin)} className="p-2 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-all" title={isRtl ? "تعديل" : "Edit"}>
                                                <span className="material-symbols-outlined text-lg">edit</span>
                                            </button>
                                            <button onClick={() => handleDelete(admin.id)} className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all" title={isRtl ? "حذف" : "Delete"}>
                                                <span className="material-symbols-outlined text-lg">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {(!admins || admins.length === 0) && (
                                <tr>
                                    <td colSpan="4" className="px-6 py-8 text-center text-slate-500">
                                        {isRtl ? 'لا يوجد مسؤولين.' : 'No admins available.'}
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
