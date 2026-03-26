import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import CollegeLayout from '../layouts/CollegeLayout';
import DashboardLayout from '../layouts/DashboardLayout';

import Home from '../pages/home/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import CollegesList from '../pages/CollegesList';
import Admissions from '../pages/Admissions';
import News from '../pages/News';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import ComputerScience from '../pages/ComputerScience';
import Pharmacy from '../pages/Pharmacy';
import Tourism from '../pages/Tourism';
import SuperAdminDashboard from '../pages/dashboard/SuperAdminDashboard';
import CollegeAdminDashboard from '../pages/dashboard/CollegeAdminDashboard';
import RankingPage from '../pages/rankings/RankingPage';
import UniversitiesPage from '../pages/universities/UniversitiesPage';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Pages */}
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/about" element={<MainLayout><About /></MainLayout>} />
      <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
      <Route path="/news" element={<MainLayout><News /></MainLayout>} />
      <Route path="/admissions" element={<MainLayout><Admissions /></MainLayout>} />
      <Route path="/colleges" element={<MainLayout><CollegesList /></MainLayout>} />

      <Route path="/login" element={<MainLayout><Login /></MainLayout>} />
      <Route path="/register" element={<MainLayout><Register /></MainLayout>} />

      {/* Dynamic Pages */}
      <Route path="/rankings/:slug" element={<MainLayout><RankingPage /></MainLayout>} />
      <Route path="/universities/:category" element={<MainLayout><UniversitiesPage /></MainLayout>} />

      {/* College Pages */}
      <Route path="/college/computer-science" element={
        <CollegeLayout
          collegeName="Faculty of Computer Science & AI"
          collegeNameAr="كلية الحاسبات والذكاء الاصطناعي"
          collegeIcon="computer"
        >
          <ComputerScience />
        </CollegeLayout>
      } />
      <Route path="/college/pharmacy" element={
        <CollegeLayout
          collegeName="Faculty of Pharmacy"
          collegeNameAr="كلية الصيدلة"
          collegeIcon="medical_services"
        >
          <Pharmacy />
        </CollegeLayout>
      } />
      <Route path="/college/tourism" element={
        <CollegeLayout
          collegeName="Faculty of Tourism & Hotels"
          collegeNameAr="كلية السياحة والفنادق"
          collegeIcon="travel_explore"
        >
          <Tourism />
        </CollegeLayout>
      } />

      {/* Dashboards */}
      <Route path="/dashboard/super-admin" element={<DashboardLayout><SuperAdminDashboard /></DashboardLayout>} />
      <Route path="/dashboard/college-admin" element={<DashboardLayout><CollegeAdminDashboard /></DashboardLayout>} />
    </Routes>
  );
}
