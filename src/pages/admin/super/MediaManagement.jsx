import React, { useState } from 'react';
import { useGlobalData } from '../../../context/GlobalDataContext';
import { useThemeContext } from '../../../context/ThemeContext';
import FileUploader from '../../../components/common/FileUploader';

export default function MediaManagement() {
    const { media, addMedia, deleteMedia } = useGlobalData();
    const { isRtl } = useThemeContext();

    const [isAddOpen, setIsAddOpen] = useState(false);
    const [formData, setFormData] = useState({
        url: '', altEn: '', altAr: '', category: 'gallery'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        if(formData.url) {
            addMedia({
                url: formData.url,
                altEn: formData.altEn,
                altAr: formData.altAr,
                category: formData.category
            });
            setIsAddOpen(false);
            setFormData({ url: '', altEn: '', altAr: '', category: 'gallery' });
        } else {
            alert(isRtl ? 'الرجاء إدخال رابط الصورة' : 'Please provide an image URL');
        }
    };

    const handleDelete = (id) => {
        if (window.confirm(isRtl ? 'هل أنت متأكد من حذف هذه الوسائط؟' : 'Are you sure you want to delete this media?')) {
            deleteMedia(id);
        }
    };

    return (
        <div className={`p-4 md:p-8 max-w-[1600px] w-full mx-auto space-y-8 fade-in ${isRtl ? 'rtl' : 'ltr'}`}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                        {isRtl ? 'إدارة الوسائط' : 'Media Management'}
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">
                        {isRtl ? 'مكتبة الصور والوسائط الخاصة بالبوابة.' : 'Manage image library and media assets for the portal.'}
                    </p>
                </div>
                {!isAddOpen && (
                    <button onClick={() => setIsAddOpen(true)} className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-primary/30 transition-all">
                        <span className="material-symbols-outlined">add_photo_alternate</span>
                        {isRtl ? 'إضافة وسائط' : 'Upload Media'}
                    </button>
                )}
            </div>

            {isAddOpen && (
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-slate-200 dark:border-white/5 shadow-xl fade-in">
                    <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">
                        {isRtl ? 'إضافة وسائط جديدة' : 'Add New Media'}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:col-span-2">
                             <FileUploader 
                                 label={isRtl ? 'صورة المعرض' : 'Gallery Image'}
                                 value={formData.url}
                                 onChange={val => setFormData({...formData, url: val})}
                                 type="image"
                             />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-500 mb-2">{isRtl ? 'النص البديل (إنجليزي)' : 'Alt Text (EN)'}</label>
                            <input name="altEn" value={formData.altEn} onChange={handleChange} className="w-full border rounded-xl p-3 bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 dark:text-white outline-none focus:border-primary" />
                        </div>
                        <div dir="rtl">
                            <label className="block text-sm font-bold text-slate-500 mb-2 text-right">{isRtl ? 'النص البديل (عربي)' : 'Alt Text (AR)'}</label>
                            <input name="altAr" value={formData.altAr} onChange={handleChange} className="w-full border rounded-xl p-3 bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 dark:text-white outline-none focus:border-primary" />
                        </div>
                    </div>

                    <div className="mt-8 flex gap-4">
                        <button onClick={handleSave} className="bg-primary text-white px-6 py-2.5 rounded-lg font-bold hover:bg-primary/90 transition">
                            {isRtl ? 'حفظ وإضافة' : 'Save Media'}
                        </button>
                        <button onClick={() => setIsAddOpen(false)} className="bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-white px-6 py-2.5 rounded-lg font-bold hover:bg-slate-300 dark:hover:bg-white/20 transition">
                            {isRtl ? 'إلغاء' : 'Cancel'}
                        </button>
                    </div>
                </div>
            )}

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {media.map((img) => (
                    <div key={img.id} className="group relative rounded-2xl overflow-hidden aspect-square border border-slate-200 dark:border-white/5 shadow-sm bg-slate-100 dark:bg-gray-800">
                        <img src={img.url} alt={img.altEn} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                        
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                            <div className="flex justify-end">
                                <button onClick={() => handleDelete(img.id)} className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors shadow-lg">
                                    <span className="material-symbols-outlined text-sm">delete</span>
                                </button>
                            </div>
                            <div>
                                <p className="text-white text-xs font-bold line-clamp-2">
                                    {isRtl ? img.altAr : img.altEn}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
                {media.length === 0 && (
                    <div className="col-span-full py-12 text-center text-slate-500">
                        {isRtl ? 'لا توجد وسائط.' : 'No media found.'}
                    </div>
                )}
            </div>
        </div>
    );
}
