import React, { useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { ThemeProvider, useThemeContext } from './context/ThemeContext';
import AppRoutes from './routes/AppRoutes';
import { CollegeProvider } from './context/CollegeContext';
import { AdminAuthProvider } from './context/AdminAuthContext';
import { FacultyProvider } from './context/FacultyContext';
import { AuthProvider } from './context/AuthContext';
import { GlobalDataProvider } from './context/GlobalDataContext';

// This component listens to route changes and updates the themeMode accordingly
const RouteThemeManager = () => {
  const location = useLocation();
  const { toggleThemeMode } = useThemeContext();

  useEffect(() => {
    // If the path includes /college or is a dashboard that requires blue theme, we set it to blue
    if (location.pathname.startsWith('/college') || location.pathname.startsWith('/dashboard') || location.pathname.startsWith('/student') || location.pathname.startsWith('/faculty')) {
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
      <GlobalDataProvider>
        <CollegeProvider>
          <FacultyProvider>
            <AdminAuthProvider>
              <AuthProvider>
                <Router>
                  <RouteThemeManager />
                  <AppRoutes />
                </Router>
              </AuthProvider>
            </AdminAuthProvider>
          </FacultyProvider>
        </CollegeProvider>
      </GlobalDataProvider>
    </ThemeProvider>
  );
}

export default App;
