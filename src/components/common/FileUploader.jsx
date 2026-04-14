import React, { useState, useRef } from 'react';
import { useThemeContext } from '../../context/ThemeContext';

export default function FileUploader({ 
    label, 
    value, 
    onChange, 
    accept = "image/jpeg, image/png, image/jpg", 
    maxSizeMB = 2,
    type = "image" // "image" | "document"
}) {
    const { isRtl } = useThemeContext();
    const [isDragging, setIsDragging] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const fileInputRef = useRef(null);

    const handleFile = (file) => {
        setError('');
        if (!file) return;

        // Check if PDF actually ends with .pdf or matches mimetype
        const validTypes = accept.split(',').map(t => t.trim());
        const ext = file.name.split('.').pop().toLowerCase();
        
        let isValid = false;
        if(type === 'document' && (file.type === 'application/pdf' || ext === 'pdf')) isValid = true;
        if(type === 'image' && file.type.startsWith('image/')) isValid = true;

        if (!isValid) {
            setError(isRtl ? 'صيغة الملف غير مدعومة' : 'Unsupported file format');
            return;
        }

        if (file.size > maxSizeMB * 1024 * 1024) {
            setError(isRtl ? `حجم الملف يجب أن لا يتجاوز ${maxSizeMB}MB` : `File size must not exceed ${maxSizeMB}MB`);
            return;
        }

        setIsLoading(true);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            onChange(reader.result);
            setIsLoading(false);
        };
        reader.onerror = (e) => {
            console.error("Error reading file", e);
            setError(isRtl ? 'حدث خطأ أثناء قراءة الملف' : 'Error reading file');
            setIsLoading(false);
        };
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files[0]);
        }
    };

    const handleChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files[0]);
        }
    };

    return (
        <div className="w-full">
            {label && <label className="block text-sm font-bold text-slate-500 mb-2">{label}</label>}
            
            <input 
                type="file" 
                ref={fileInputRef}
                accept={accept} 
                onChange={handleChange} 
                className="hidden"
            />

            <div 
                className={`relative border-2 border-dashed rounded-xl transition-colors ${
                    isDragging 
                        ? 'border-primary bg-primary/5' 
                        : 'border-slate-300 dark:border-white/10 hover:border-primary/50'
                }`}
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
            >
                <div className="p-4 flex flex-col items-center justify-center min-h-[140px] text-center gap-3">
                    {isLoading ? (
                        <div className="flex flex-col items-center gap-2 text-primary py-4">
                            <span className="material-symbols-outlined animate-spin text-4xl">progress_activity</span>
                            <span className="text-sm font-bold">{isRtl ? 'جاري الرفع...' : 'Uploading...'}</span>
                        </div>
                    ) : value ? (
                        <div className="w-full flex flex-col items-center gap-4">
                            {type === 'image' ? (
                                <img src={value} alt="Preview" className="max-h-40 w-auto object-contain rounded-lg shadow border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-gray-800" />
                            ) : (
                                <div className="flex items-center gap-3 bg-slate-100 dark:bg-white/5 p-4 rounded-xl w-full border border-slate-200 dark:border-white/10">
                                    <div className="p-3 bg-red-100 text-red-600 rounded-lg shrink-0">
                                        <span className="material-symbols-outlined">picture_as_pdf</span>
                                    </div>
                                    <div className="flex-1 text-left" dir="ltr">
                                        <p className="text-sm font-bold text-slate-800 dark:text-slate-200">{isRtl ? 'مستند مرفق' : 'Document attached'}</p>
                                    </div>
                                    <a 
                                        href={value} 
                                        target="_blank" 
                                        rel="noreferrer"
                                        className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 flex items-center gap-2 text-sm font-bold shrink-0 shadow-sm transition"
                                    >
                                        <span className="material-symbols-outlined text-[18px]">visibility</span>
                                        {isRtl ? 'عرض' : 'View'}
                                    </a>
                                </div>
                            )}

                            <div className="flex gap-3">
                                <button
                                    type="button"
                                    onClick={() => fileInputRef.current?.click()}
                                    className="px-4 py-2 text-sm font-bold rounded-lg bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-white hover:bg-slate-200 transition"
                                >
                                    {isRtl ? 'تغيير الملف' : 'Replace File'}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => onChange('')}
                                    className="px-4 py-2 text-sm font-bold rounded-lg bg-red-50 dark:bg-red-500/10 text-red-600 hover:bg-red-100 transition"
                                >
                                    {isRtl ? 'إزالة' : 'Remove'}
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div 
                            className="cursor-pointer w-full h-full flex flex-col items-center justify-center py-4"
                            onClick={() => fileInputRef.current?.click()}
                        >
                            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-3xl">cloud_upload</span>
                            </div>
                            <p className="text-sm font-bold text-slate-700 dark:text-slate-300">
                                {isRtl ? 'انقر أو اسحب الملف هنا' : 'Click or drag file here'}
                            </p>
                            <p className="text-xs text-slate-500 mt-2 font-medium">
                                {type === 'image' ? 'JPG, PNG, JPEG (Max 2MB)' : 'PDF (Max 2MB)'}
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {error && (
                <div className="mt-2 flex items-center gap-1 text-red-500 bg-red-50 dark:bg-red-500/10 p-2 rounded-lg animate-in fade-in">
                    <span className="material-symbols-outlined text-sm">error</span>
                    <span className="text-xs font-bold">{error}</span>
                </div>
            )}
        </div>
    );
}
