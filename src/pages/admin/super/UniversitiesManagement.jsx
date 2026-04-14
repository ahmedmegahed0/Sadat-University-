import React, { useState, useMemo } from 'react';
import { useGlobalData } from '../../../context/GlobalDataContext';
import { useThemeContext } from '../../../context/ThemeContext';
import FileUploader from '../../../components/common/FileUploader';

export default function UniversitiesManagement() {
    const { universities, addUniversity, updateUniversity, deleteUniversity } = useGlobalData();
    const { isRtl } = useThemeContext();

    const [isAdding, setIsAdding] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({
        nameEn: '',
        nameAr: '',
        category: 'egyptian',
        students: '',
        link: '',
        image: '',
        overviewEn: '',
        overviewAr: '',
        accreditationEn: '',
        accreditationAr: ''
    });

    const handleSave = (e) => {
        e.preventDefault();
        if (editingId) {
            updateUniversity(editingId, formData);
        } else {
            addUniversity({
                ...formData,
                icon: "school", // default icon
            });
        }
        setIsAdding(false);
        setEditingId(null);
        setFormData({
            nameEn: '', nameAr: '', category: 'egyptian', students: '', link: '', image: '',
            overviewEn: '', overviewAr: '', accreditationEn: '', accreditationAr: ''
        });
    };

    const handleEdit = (uni) => {
        setFormData(uni);
        setEditingId(uni.id);
        setIsAdding(true);
    };

    const handleCancel = () => {
        setIsAdding(false);
        setEditingId(null);
        setFormData({
            nameEn: '', nameAr: '', category: 'egyptian', students: '', link: '', image: '',
            overviewEn: '', overviewAr: '', accreditationEn: '', accreditationAr: ''
        });
    };

    const handleDelete = (id) => {
        if (window.confirm(isRtl ? "هل أنت متأكد من حذف هذه الجامعة؟" : "Are you sure you want to delete this university?")) {
            deleteUniversity(id);
        }
    };

    const renderedUniversities = useMemo(() => universities.map((uni) => (
        <tr key={uni.id} className="hover:bg-primary/5 transition-colors group">
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl overflow-hidden shrink-0 border border-slate-200 dark:border-white/10 p-1 bg-black/5 dark:bg-white/5">
                        <img alt={uni.nameEn} className="w-full h-full object-cover rounded-lg" loading="lazy" src={uni.image} />
                    </div>
                    <div>
                        <p className="font-bold text-sm text-slate-900 dark:text-white">
                            {isRtl ? uni.nameAr : uni.nameEn}
                        </p>
                        <p className="text-[10px] font-bold text-primary uppercase" dir="ltr">{uni.category}</p>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 text-center">
                <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 text-xs font-bold text-slate-900 dark:text-white">{uni.category}</span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium text-slate-900 dark:text-white">
                {uni.students}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-center">
                {uni.link ? (
                    <a href={uni.link} target="_blank" rel="noreferrer" className="text-primary hover:underline text-sm font-medium inline-flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">link</span>
                        {isRtl ? 'زيارة' : 'Visit'}
                    </a>
                ) : (
                    <span className="text-slate-400 text-sm">-</span>
                )}
            </td>
            <td className={`px-6 py-4 ${isRtl ? 'text-left' : 'text-right'}`}>
                <div className={`flex ${isRtl ? 'justify-start' : 'justify-end'} gap-1`}>
                    <button onClick={() => handleEdit(uni)} className="p-2 text-slate-400 hover:text-blue-500 hover:bg-blue-500/10 rounded-lg transition-all" title={isRtl ? "تعديل" : "Edit"}>
                        <span className="material-symbols-outlined text-lg">edit</span>
                    </button>
                    <button onClick={() => handleDelete(uni.id)} className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all" title={isRtl ? "حذف" : "Delete"}>
                        <span className="material-symbols-outlined text-lg">delete</span>
                    </button>
                </div>
            </td>
        </tr>
    )), [universities, isRtl]);

    return (
        <div className={`p-4 md:p-8 max-w-[1600px] w-full mx-auto space-y-8 fade-in ${isRtl ? 'rtl' : 'ltr'}`}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                        {isRtl ? 'إدارة الجامعات' : 'Universities Management'}
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">
                        {isRtl ? 'أضف الجامعات وعناصر التصنيف الخاصة بها.' : 'Add universities and their categorizations.'}
                    </p>
                </div>
                {!isAdding && (
                    <button onClick={() => {
                        setEditingId(null);
                        setFormData({
                            nameEn: '', nameAr: '', category: 'egyptian', students: '', link: '', image: '',
                            overviewEn: '', overviewAr: '', accreditationEn: '', accreditationAr: ''
                        });
                        setIsAdding(true);
                    }} className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-primary/30 transition-all">
                        <span className="material-symbols-outlined">add</span>
                        {isRtl ? 'إضافة جامعة' : 'Add University'}
                    </button>
                )}
            </div>

            {isAdding ? (
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-white/5 shadow-xl">
                    <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100 dark:border-white/5">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                            {editingId ? (isRtl ? 'تعديل بيانات الجامعة' : 'Edit University') : (isRtl ? 'إضافة جامعة جديدة' : 'Add New University')}
                        </h3>
                        <button onClick={handleCancel} className="p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 rounded-full transition-colors">
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </div>

                    <form onSubmit={handleSave} className="space-y-6">
                        <div className="mb-6">
                            <FileUploader 
                                label={isRtl ? 'صورة الجامعة' : 'University Image'}
                                value={formData.image}
                                onChange={val => setFormData({...formData, image: val})}
                                type="image"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{isRtl ? 'الاسم (EN)' : 'Name (EN)'}</label>
                                <input required value={formData.nameEn} onChange={e => setFormData({...formData, nameEn: e.target.value})} className="w-full border rounded-xl p-3 dark:bg-gray-900 dark:border-gray-700 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{isRtl ? 'الاسم (AR)' : 'Name (AR)'}</label>
                                <input required value={formData.nameAr} onChange={e => setFormData({...formData, nameAr: e.target.value})} className="w-full border rounded-xl p-3 dark:bg-gray-900 dark:border-gray-700 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{isRtl ? 'الفئة' : 'Category'}</label>
                                <select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="w-full border rounded-xl p-3 dark:bg-gray-900 dark:border-gray-700 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                                    <option value="egyptian">{isRtl ? 'جامعة مصرية' : 'Egyptian'}</option>
                                    <option value="arab">{isRtl ? 'جامعة عربية' : 'Arab'}</option>
                                    <option value="foreign">{isRtl ? 'جامعة أجنبية' : 'Foreign'}</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{isRtl ? 'عدد الطلاب' : 'Students Count'}</label>
                                <input placeholder="e.g. 50,000+" required value={formData.students} onChange={e => setFormData({...formData, students: e.target.value})} className="w-full border rounded-xl p-3 dark:bg-gray-900 dark:border-gray-700 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{isRtl ? 'الرابط (URL)' : 'Website Link (URL)'}</label>
                                <input type="url" placeholder="https://" value={formData.link} onChange={e => setFormData({...formData, link: e.target.value})} className="w-full border rounded-xl p-3 dark:bg-gray-900 dark:border-gray-700 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{isRtl ? 'نبذة (EN)' : 'Overview (EN)'}</label>
                                <textarea rows="3" value={formData.overviewEn} onChange={e => setFormData({...formData, overviewEn: e.target.value})} className="w-full border rounded-xl p-3 dark:bg-gray-900 dark:border-gray-700 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"></textarea>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{isRtl ? 'نبذة (AR)' : 'Overview (AR)'}</label>
                                <textarea rows="3" value={formData.overviewAr} onChange={e => setFormData({...formData, overviewAr: e.target.value})} className="w-full border rounded-xl p-3 dark:bg-gray-900 dark:border-gray-700 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"></textarea>
                            </div>
                        </div>

                        <div className="flex justify-end pt-6 border-t border-slate-100 dark:border-white/5 space-x-3 rtl:space-x-reverse">
                            <button type="button" onClick={handleCancel} className="px-6 py-2.5 rounded-xl font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors">
                                {isRtl ? 'إلغاء' : 'Cancel'}
                            </button>
                            <button type="submit" className="px-6 py-2.5 rounded-xl font-bold bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/30 transition-all">
                                {editingId ? (isRtl ? 'حفظ التغييرات' : 'Save Changes') : (isRtl ? 'حفظ الجامعة' : 'Save University')}
                            </button>
                        </div>
                    </form>
                </div>
            ) : (
                <div className="bg-white dark:bg-gray-800 border border-slate-200 dark:border-white/5 rounded-2xl overflow-hidden shadow-xl overflow-x-auto">
                    <table className={`w-full ${isRtl ? 'text-right' : 'text-left'}`}>
                        <thead className="bg-slate-50 dark:bg-white/5 border-b border-slate-200 dark:border-white/5">
                            <tr>
                                <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">{isRtl ? 'الجامعة' : 'University'}</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center">{isRtl ? 'الفئة' : 'Category'}</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center">{isRtl ? 'الطلاب' : 'Students'}</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center">{isRtl ? 'الرابط' : 'Link'}</th>
                                <th className={`px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest ${isRtl ? 'text-left' : 'text-right'}`}>{isRtl ? 'إجراءات' : 'Actions'}</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-slate-900 dark:text-white">
                            {universities.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="px-6 py-8 text-center text-slate-500">
                                        {isRtl ? 'لا توجد جامعات حالياً' : 'No universities currently.'}
                                    </td>
                                </tr>
                            ) : renderedUniversities}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

