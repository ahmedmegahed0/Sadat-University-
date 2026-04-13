import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function StudentProfile() {
  const { user } = useAuth();
  const [name, setName] = useState(user?.name || 'Alex Johnson');
  const [email, setEmail] = useState(user?.email || 'alex.johnson@ssu.edu.eg');

  const handleSave = () => {
    alert('Profile saved! (Mock)');
  };

  return (
    <div className="bg-[#f5f7f8] dark:bg-[#101722] text-slate-900 dark:text-slate-100 antialiased min-h-screen">
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <div className="flex h-full grow flex-col">
          {/* Header Section */}
          <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 lg:px-40 py-3">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3 text-primary">
                <span className="material-symbols-outlined text-3xl">school</span>
                <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">Sadat Smart University</h2>
              </div>
            </div>
          </header>

          {/* Main Content Area */}
          <main className="flex-1 px-6 lg:px-40 py-8">
            <div className="flex items-center gap-2 mb-8 text-sm">
              <Link className="text-slate-500 hover:text-primary transition-colors" to="/student/dashboard">Home</Link>
              <span className="material-symbols-outlined text-xs text-slate-400">chevron_right</span>
              <span className="text-primary font-medium">Student Profile</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Profile Card */}
              <div className="lg:col-span-4 flex flex-col gap-6">
                <div className="bg-white dark:bg-slate-900 rounded-xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col items-center text-center">
                  <div className="relative group">
                    <div className="h-40 w-40 rounded-full border-4 border-primary/10 p-1">
                      <img alt="Student Large" className="h-full w-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIK-WrgSXnmBEJscQPU0EAo9m75CqhT6QV9CXOZm9yAv95uvKjhNlzNRAR_c8reHNqNEXxSkxKKd2Fl5iH3JErSmSI8U-nwkzNYxdkfH4RPBRHRlMFTDWbskK3t19zpqRjEwpvv6WSE5O4d_hwhFIyQd-vw8Fr7shCdO97geCmKhO4lQ-D7xyMX76njR49x8m0fRFG412_yCLDnQnHwoCMKDBfykAB5mHYVb1sKATJahOwEy0IKlrqWrzeLRmRqBOTZ4bnNQqd55LO" />
                    </div>
                    <label className="absolute bottom-1 right-1 bg-primary text-white p-2 rounded-full cursor-pointer shadow-lg hover:bg-primary/90 transition-transform hover:scale-105">
                      <span className="material-symbols-outlined text-sm">photo_camera</span>
                      <input className="hidden" type="file" />
                    </label>
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">{name}</h3>
                  <p className="text-slate-500 text-sm mt-1">{user?.major || 'Computer Science'} Undergrad</p>
                  <div className="mt-4 px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full uppercase tracking-wider">
                    SSU-2024-001
                  </div>
                  <div className="w-full border-t border-slate-100 dark:border-slate-800 mt-8 pt-6 grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-widest">GPA</p>
                      <p className="text-slate-900 dark:text-white font-bold text-lg">3.85</p>
                    </div>
                    <div className="text-center">
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-widest">Credits</p>
                      <p className="text-slate-900 dark:text-white font-bold text-lg">94/120</p>
                    </div>
                  </div>
                  <button className="mt-8 w-full py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                    Upload New Photo
                  </button>
                </div>
              </div>

              {/* Right Column: Forms Section */}
              <div className="lg:col-span-8 space-y-8">
                <section className="bg-white dark:bg-slate-900 rounded-xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="flex items-center gap-2 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
                    <span className="material-symbols-outlined text-primary">person</span>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">Personal Information</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Username</label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                          <span className="material-symbols-outlined text-sm">alternate_email</span>
                        </div>
                        <input className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-500 cursor-not-allowed text-sm focus:ring-0" readOnly type="text" value={email.split('@')[0]} />
                      </div>
                      <p className="text-[11px] text-slate-400 italic">Usernames are assigned by administration and cannot be changed.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Full Name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                          <span className="material-symbols-outlined text-sm">badge</span>
                        </div>
                        <input value={name} onChange={e => setName(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-white text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all" type="text" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">University Email</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                          <span className="material-symbols-outlined text-sm">mail</span>
                        </div>
                        <input value={email} onChange={e => setEmail(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-white text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all" type="email" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Phone Number</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                          <span className="material-symbols-outlined text-sm">call</span>
                        </div>
                        <input className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-white text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all" type="tel" defaultValue="+20 123 456 7890" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <button onClick={handleSave} className="px-6 py-2.5 bg-primary text-white rounded-lg font-bold text-sm shadow-md shadow-primary/20 hover:bg-primary/90 transition-all active:scale-95">
                      Save Profile Changes
                    </button>
                  </div>
                </section>

                <section className="bg-white dark:bg-slate-900 rounded-xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="flex items-center gap-2 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
                    <span className="material-symbols-outlined text-primary">lock_reset</span>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">Secure Password</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Current Password</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                            <span className="material-symbols-outlined text-sm">key</span>
                          </div>
                          <input className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-white text-sm focus:border-primary focus:ring-1 focus:ring-primary/20" placeholder="Enter current password" type="password" />
                        </div>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        <span className="material-symbols-outlined text-[14px] align-middle mr-1">info</span>
                        Regularly changing your password helps keep your student record secure.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">New Password</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                            <span className="material-symbols-outlined text-sm">lock</span>
                          </div>
                          <input className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-white text-sm focus:border-primary focus:ring-1 focus:ring-primary/20" placeholder="Min 8 characters" type="password" />
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Confirm New Password</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                            <span className="material-symbols-outlined text-sm">verified_user</span>
                          </div>
                          <input className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-white text-sm focus:border-primary focus:ring-1 focus:ring-primary/20" placeholder="Repeat new password" type="password" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-between items-center">
                    <div className="hidden md:flex gap-1">
                      <div className="h-1 w-8 rounded-full bg-slate-200 dark:bg-slate-800"></div>
                      <div className="h-1 w-8 rounded-full bg-slate-200 dark:bg-slate-800"></div>
                      <div className="h-1 w-8 rounded-full bg-slate-200 dark:bg-slate-800"></div>
                      <div className="h-1 w-8 rounded-full bg-slate-200 dark:bg-slate-800"></div>
                    </div>
                    <button className="px-6 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-bold text-sm hover:opacity-90 transition-all">
                      Update Password
                    </button>
                  </div>
                </section>
              </div>
            </div>
          </main>

          <footer className="mt-12 px-6 lg:px-40 py-8 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <span className="material-symbols-outlined text-lg">copyright</span>
                <span>2024 Sadat Smart University. All rights reserved.</span>
              </div>

            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
