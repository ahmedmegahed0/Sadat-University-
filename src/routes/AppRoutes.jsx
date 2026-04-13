import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import CollegeLayout from '../layouts/CollegeLayout';
import DashboardLayout from '../layouts/DashboardLayout';
import ProtectedRoute from '../components/ProtectedRoute';
import AdminProtectedRoute from '../components/AdminProtectedRoute';
import DoctorProtectedRoute from '../components/DoctorProtectedRoute';

const Home = lazy(() => import('../pages/home/Home'));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const CollegesList = lazy(() => import('../pages/CollegesList'));
const Admissions = lazy(() => import('../pages/Admissions'));
const News = lazy(() => import('../pages/News'));
const Login = lazy(() => import('../pages/auth/Login'));
const Register = lazy(() => import('../pages/auth/Register'));
const ComputerScience = lazy(() => import('../pages/ComputerScience'));
const Pharmacy = lazy(() => import('../pages/Pharmacy'));
const Tourism = lazy(() => import('../pages/Tourism'));
const SuperAdminDashboard = lazy(() => import('../pages/dashboard/SuperAdminDashboard'));

// Super Admin Dashboards
const SuperAdminOverview = lazy(() => import('../pages/admin/super/SuperAdminOverview'));
const HomeManagement = lazy(() => import('../pages/admin/super/HomeManagement'));
const NewsManagement = lazy(() => import('../pages/admin/super/NewsManagement'));
const PresidentManagement = lazy(() => import('../pages/admin/super/PresidentManagement'));
const CollegesManagement = lazy(() => import('../pages/admin/super/CollegesManagement'));
const UniversitiesManagement = lazy(() => import('../pages/admin/super/UniversitiesManagement'));
const RankingsManagement = lazy(() => import('../pages/admin/super/RankingsManagement'));
const MediaManagement = lazy(() => import('../pages/admin/super/MediaManagement'));
const AdminsManagement = lazy(() => import('../pages/admin/super/AdminsManagement'));
const SettingsManagement = lazy(() => import('../pages/admin/super/SettingsManagement'));

const CollegeAdminDashboard = lazy(() => import('../pages/dashboard/CollegeAdminDashboard'));
const RankingPage = lazy(() => import('../pages/rankings/RankingPage'));
const UniversitiesPage = lazy(() => import('../pages/universities/UniversitiesPage'));
const StudentDashboard = lazy(() => import('../pages/student/StudentDashboard'));
const StudentProfile = lazy(() => import('../pages/student/StudentProfile'));
const AdminOverview = lazy(() => import('../pages/admin/AdminOverview'));
const AdminDepartments = lazy(() => import('../pages/admin/AdminDepartments'));
const AdminPrograms = lazy(() => import('../pages/admin/AdminPrograms'));
const AdminStaff = lazy(() => import('../pages/admin/AdminStaff'));
const AdminDean = lazy(() => import('../pages/admin/AdminDean'));

// Faculty Pages
const GlobalFaculty = lazy(() => import('../pages/faculty/GlobalFaculty'));
const DoctorProfile = lazy(() => import('../pages/faculty/DoctorProfile'));
const CollegeFaculty = lazy(() => import('../pages/faculty/CollegeFaculty'));
const DoctorDashboard = lazy(() => import('../pages/faculty/DoctorDashboard'));

export default function AppRoutes() {
  return (
    <Suspense fallback={null}>
      <Routes>
      {/* Public Pages */}
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/about" element={<MainLayout><About /></MainLayout>} />
      <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
      <Route path="/news" element={<MainLayout><News /></MainLayout>} />
      <Route path="/admissions" element={<MainLayout><Admissions /></MainLayout>} />
      <Route path="/colleges" element={<MainLayout><CollegesList /></MainLayout>} />
      
      {/* Faculty Global */}
      <Route path="/faculty" element={<MainLayout><GlobalFaculty /></MainLayout>} />
      <Route path="/faculty/:id" element={<MainLayout><DoctorProfile /></MainLayout>} />

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
      
      {/* College specific logic for faculty */}
      <Route path="/college/:id/faculty" element={<MainLayout><CollegeFaculty /></MainLayout>} />

      {/* Doctor Dashboard */}
      <Route path="/doctor/dashboard" element={
        <DoctorProtectedRoute>
          <DoctorDashboard />
        </DoctorProtectedRoute>
      } />
      
      <Route path="/dashboard/super-admin" element={
        <AdminProtectedRoute requireSuperAdmin={true}>
          <SuperAdminDashboard />
        </AdminProtectedRoute>
      }>
        <Route index element={<SuperAdminOverview />} />
        <Route path="universities" element={<UniversitiesManagement />} />
        <Route path="rankings" element={<RankingsManagement />} />
        <Route path="colleges" element={<CollegesManagement />} />
        <Route path="news" element={<NewsManagement />} />
        <Route path="home" element={<HomeManagement />} />
        <Route path="president" element={<PresidentManagement />} />
        <Route path="media" element={<MediaManagement />} />
        <Route path="admins" element={<AdminsManagement />} />
        <Route path="settings" element={<SettingsManagement />} />
      </Route>
      
      <Route path="/dashboard/college-admin" element={
        <AdminProtectedRoute>
          <CollegeAdminDashboard />
        </AdminProtectedRoute>
      }>
        <Route index element={<AdminOverview />} />
        <Route path="departments" element={<AdminDepartments />} />
        <Route path="programs" element={<AdminPrograms />} />
        <Route path="staff" element={<AdminStaff />} />
        <Route path="dean" element={<AdminDean />} />
      </Route>

      {/* Student Pages */}
      <Route path="/student/dashboard" element={
        <ProtectedRoute>
          <StudentDashboard />
        </ProtectedRoute>
      } />
      <Route path="/student/profile" element={
        <ProtectedRoute>
          <StudentProfile />
        </ProtectedRoute>
      } />
      </Routes>
    </Suspense>
  );
}
