import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider, useThemeContext } from './context/ThemeContext';
import PublicLayout from './layouts/PublicLayout';
import CollegeLayout from './layouts/CollegeLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CollegesList from './pages/CollegesList';
import Admissions from './pages/Admissions';
import News from './pages/News';
import Login from './pages/Login';
import Register from './pages/Register';
import ComputerScience from './pages/ComputerScience';
import Pharmacy from './pages/Pharmacy';
import Tourism from './pages/Tourism';
import SuperAdminDashboard from './pages/SuperAdminDashboard';
import CollegeAdminDashboard from './pages/CollegeAdminDashboard';
// This component listens to route changes and updates the themeMode accordingly
const RouteThemeManager = () => {
  const location = useLocation();
  const { toggleThemeMode } = useThemeContext();

  useEffect(() => {
    // If the path includes /college or is a dashboard that requires blue theme, we set it to blue
    if (location.pathname.startsWith('/college')) {
      toggleThemeMode('blue');
    } else {
      toggleThemeMode('gold');
    }
  }, [location.pathname, toggleThemeMode]);

  return null;
};



function App() {
  return (
    <ThemeProvider>
      <Router>
        <RouteThemeManager />
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
          <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
          <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />
          <Route path="/news" element={<PublicLayout><News /></PublicLayout>} />
          <Route path="/admissions" element={<PublicLayout><Admissions /></PublicLayout>} />
          <Route path="/colleges" element={<PublicLayout><CollegesList /></PublicLayout>} />

          <Route path="/login" element={<PublicLayout><Login /></PublicLayout>} />
          <Route path="/register" element={<PublicLayout><Register /></PublicLayout>} />

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
          <Route path="/dashboard/super-admin" element={<SuperAdminDashboard />} />
          <Route path="/dashboard/college-admin" element={<CollegeAdminDashboard />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
