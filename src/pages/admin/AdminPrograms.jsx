import React, { useState } from 'react';
import { useThemeContext } from '../../context/ThemeContext';
import { useCollegeContext } from '../../context/CollegeContext';
import { useAuth } from '../../context/AuthContext';

export default function AdminPrograms() {
    const { isRtl } = useThemeContext();
    const { currentCollegeId } = useAuth();
    const { colleges, addProgram, deleteProgram } = useCollegeContext();
    
    const college = colleges[currentCollegeId];
    const programs = college?.programs || [];

    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [newProg, setNewProg] = useState({ name: '', nameAr: '', description: '', descriptionAr: '' });

    const handleAdd = (e) => {
        e.preventDefault();
        addProgram(currentCollegeId, newProg);
        setIsAddModalOpen(false);
        setNewProg({ name: '', nameAr: '', description: '', descriptionAr: '' });
    };

    const handleDelete = (id) => {
        if(window.confirm(isRtl ? 'هل أنت متأكد من حذف هذا البرنامج؟' : 'Are you sure you want to delete this program?')) {
            deleteProgram(currentCollegeId, id);
        }
    };

    return (
        <div className="flex-1 overflow-y-auto bg-slate-50/50 dark:bg-gray-900/50 p-4 md:p-8">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                            {isRtl ? 'إدارة البرامج' : 'Manage Programs'}
                        </h2>
                        <p className="text-slate-500 mt-1 font-medium">
                            {isRtl ? 'إعداد ومراقبة برامج الكلية' : 'Setup and monitor college programs'}
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button 
                            onClick={() => setIsAddModalOpen(true)}
                            className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white hover:bg-blue-700 transition-all shadow-lg shadow-primary/20"
                        >
                            <span className="material-symbols-outlined text-lg">add</span>
                            <span>{isRtl ? 'إضافة برنامج جديد' : 'Add New Program'}</span>
                        </button>
                    </div>
                </div>

                {/* Programs List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {programs.map(prog => (
                        <div key={prog.id} className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-slate-200 dark:border-gray-700 shadow-sm relative group">
                            <div className="flex justify-between items-start mb-4">
                                <div className="h-12 w-12 rounded-xl bg-orange-50 dark:bg-orange-900/30 text-orange-500 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-2xl">menu_book</span>
                                </div>
                                <button onClick={() => handleDelete(prog.id)} className="text-slate-300 hover:text-red-500 transition-colors">
                                    <span className="material-symbols-outlined">delete</span>
                                </button>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{isRtl ? prog.nameAr : prog.name}</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-3">{isRtl ? prog.descriptionAr : prog.description}</p>
                        </div>
                    ))}
                    {programs.length === 0 && (
                        <div className="col-span-full text-center py-12 text-slate-500 bg-white dark:bg-gray-800 rounded-2xl border border-slate-200 dark:border-gray-700">
                            {isRtl ? 'لا توجد برامج بعد' : 'No programs yet'}
                        </div>
                    )}
                </div>
            </div>

            {/* Add Modal */}
            {isAddModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-lg p-6 shadow-xl">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                            {isRtl ? 'إضافة برنامج جديد' : 'Add New Program'}
                        </h3>
                        <form onSubmit={handleAdd} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{isRtl ? 'الاسم (EN)' : 'Name (EN)'}</label>
                                    <input required value={newProg.name} onChange={e => setNewProg({...newProg, name: e.target.value})} className="w-full border rounded-lg p-2 dark:bg-gray-900 dark:border-gray-700 text-slate-900 dark:text-white" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{isRtl ? 'الاسم (AR)' : 'Name (AR)'}</label>
                                    <input required value={newProg.nameAr} onChange={e => setNewProg({...newProg, nameAr: e.target.value})} className="w-full border rounded-lg p-2 dark:bg-gray-900 dark:border-gray-700 text-slate-900 dark:text-white" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{isRtl ? 'الوصف (EN)' : 'Description (EN)'}</label>
                                <textarea required value={newProg.description} onChange={e => setNewProg({...newProg, description: e.target.value})} className="w-full border rounded-lg p-2 dark:bg-gray-900 dark:border-gray-700 text-slate-900 dark:text-white"></textarea>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{isRtl ? 'الوصف (AR)' : 'Description (AR)'}</label>
                                <textarea required value={newProg.descriptionAr} onChange={e => setNewProg({...newProg, descriptionAr: e.target.value})} className="w-full border rounded-lg p-2 dark:bg-gray-900 dark:border-gray-700 text-slate-900 dark:text-white"></textarea>
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
