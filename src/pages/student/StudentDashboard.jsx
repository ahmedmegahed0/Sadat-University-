import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function StudentDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="bg-[#f5f7f8] dark:bg-[#0f1723] text-slate-900 dark:text-slate-100 font-display min-h-screen">
      <div className="flex min-h-screen">
        <aside className="w-72 bg-white dark:bg-slate-900 border-r border-primary/10 flex flex-col justify-between p-6 h-screen sticky top-0">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <div className="size-10 rounded-xl bg-primary flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-2xl">school</span>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-slate-900 dark:text-slate-100 text-sm font-bold leading-tight">Sadat Smart</h1>
                  <p className="text-primary text-xs font-medium uppercase tracking-wider">Student Portal</p>
                </div>
              </Link>
            </div>
            <nav className="flex flex-col gap-1">
              <Link to="/student/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary text-white shadow-md shadow-primary/20 transition-all">
                <span className="material-symbols-outlined">dashboard</span>
                <span className="text-sm font-medium">Dashboard</span>
              </Link>
              <Link to="/student/profile" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-primary/10 hover:text-primary transition-all">
                <span className="material-symbols-outlined">person</span>
                <span className="text-sm font-medium">Profile</span>
              </Link>
              <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-red-50 hover:text-red-500 transition-all text-left w-full mt-auto">
                <span className="material-symbols-outlined">logout</span>
                <span className="text-sm font-medium">Sign out</span>
              </button>
            </nav>
          </div>
          <div className="flex flex-col gap-4 border-t border-primary/5 pt-6">
            <div className="flex items-center gap-3 px-2">
              <div className="size-10 rounded-full bg-cover bg-center border-2 border-primary/20" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA-NnYYn2tO4LSUHO1e8DPyPAhjwvnRREboTABJF0j-yTgbatVbu_NPvyNjBlr7wvm9IDjRkoIshyJYDUp3PgWYIbt9UVtMp4Gdj-rO3H2OF0N6ja9A9u2KIYtHZofyV8L2TFK2-B5uEWQzlpdo3xLPSjFc9ynAxMxw2Y46JwEj7N-Sn16OlseyaMESFtvNXEOCqBSa5YBTe7SpCGGWQrUyeHhJTbGEB5-GlsMPlWL31ok-kBVnCXB598m2-2Jy8cfYT2SZB8kWgGYe')" }}></div>
              <div className="flex flex-col truncate">
                <p className="text-sm font-bold truncate">{user?.name || 'Ahmed Mansour'}</p>
                <p className="text-xs text-slate-500 truncate">ID: {user?.id || '202100452'}</p>
              </div>
            </div>
            <Link to="/student/profile" className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg py-2.5 text-sm font-bold shadow-lg shadow-primary/20 transition-all block text-center">
              View Profile
            </Link>
          </div>
        </aside>

        <main className="flex-1 p-8 lg:p-12 max-w-6xl mx-auto">
          <section className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="max-w-2xl">
              <h2 className="text-slate-900 dark:text-slate-100 text-5xl font-black tracking-tight mb-3">Welcome back, {user?.name ? user.name.split(' ')[0] : 'Ahmed'}!</h2>
              <p className="text-slate-600 dark:text-slate-400 text-xl">Academic Level: <span className="text-primary font-semibold">Undergraduate - Year {user?.enrollmentYear ? new Date().getFullYear() - user.enrollmentYear : 3}</span> • {user?.major || 'Computer Science'} Major</p>
            </div>
            {/* <button className="bg-white dark:bg-slate-800 border border-primary/20 px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
              <span className="material-symbols-outlined text-primary">event_note</span>
              Academic Calendar
            </button> */}
          </section>

          <section className="flex flex-col gap-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-3xl">rocket_launch</span>
              Quick Access
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative overflow-hidden group rounded-3xl bg-white dark:bg-slate-900 border border-primary/10 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col min-h-[340px]">
                <div className="h-44 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDOB6VaHmTMRlMzqujPekd3kwgTifpwkjwJksjnK9_CmQ1hLp679ki1_483fntyeAxVzN336j5gd3kUpNj3HCGdYV6KcTmm4e9JEEuOHVKqWTHzmxDq5ZAmhOHdD6qJvGS4kSd1xsGboJ9UTgbB3AowRky09TUUHAt6cgqpmStFe5WZWgnPAM-O61yxMhfCvUHWEVrqReemZC_Dn4_SxAm701OW_sshS_F5OiZv6T8VVZq_6Jt2En-mzvkehX9BcrH-BKSRo_bD1rYy')" }}></div>
                <div className="p-8 flex flex-col justify-between flex-1">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">Ibn Al-Haytham System</h4>
                    <p className="text-slate-500 dark:text-slate-400">Access the primary academic management system for course registration and official transcripts.</p>
                  </div>
                  <div className="flex justify-end mt-4">
                    <button className="bg-primary/5 hover:bg-primary/10 text-primary px-5 py-2.5 rounded-xl flex items-center gap-2 text-sm font-bold transition-colors">
                      Open System <span className="material-symbols-outlined text-sm">open_in_new</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden group rounded-3xl bg-white dark:bg-slate-900 border border-primary/10 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col min-h-[340px]">
                <div className="h-44 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD9CPM0lpzYnMUQXdd9Cr4PKEUXu9ICaZt3RH-mGxtx5JclJ32MscF_9_QLZCCz0KAMXtmbFCJgx4xHpzkhxbjeChwtB5T29N2x8RcS4OoilGKKI0t7ySZRemDV8LxBvl_SP5qeeOlC2Pows9GbFFbztz7xFw_XzYpA_oiNSzSyLv6u65NrSBPXzeZhF_EZQn6xfYkaVHV50M0PWPzdZOrPqugLQ0qIDozGRGjIm0oeymKwJokj3BB1xlPll0RlEO_Po6lGo8LisymX')" }}></div>
                <div className="p-8 flex flex-col justify-between flex-1">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">College Learning Platform</h4>
                    <p className="text-slate-500 dark:text-slate-400">Manage your course materials, attend virtual lectures, and submit assignments on Moodle.</p>
                  </div>
                  <div className="flex justify-end mt-4">
                    <button className="bg-primary/5 hover:bg-primary/10 text-primary px-5 py-2.5 rounded-xl flex items-center gap-2 text-sm font-bold transition-colors">
                      Go to Courses <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
