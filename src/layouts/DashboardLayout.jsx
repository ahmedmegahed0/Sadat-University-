import React from 'react';

export default function DashboardLayout({ children }) {
    return (
        <div className="flex h-screen bg-gray-100 dark:bg-gray-900 overflow-hidden text-slate-900 dark:text-slate-100 transition-colors duration-300">
            {/* Sidebar Placeholder */}
            <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 hidden md:flex flex-col">
                <div className="h-16 flex items-center px-6 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-xl font-bold text-primary">Admin Panel</span>
                </div>
                <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                    {/* Placeholder for sidebar navigation links */}
                    <div className="text-sm text-gray-500 p-2">Navigation Links</div>
                </nav>
            </aside>
            
            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                <header className="h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center px-6 justify-between">
                     <span className="text-xl font-bold md:hidden">Admin Panel</span>
                     <div className="flex items-center gap-4 ml-auto">
                        <button className="text-sm font-medium hover:text-primary transition-colors">Logout</button>
                     </div>
                </header>
                <main className="flex-1 overflow-y-auto p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
