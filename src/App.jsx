import React, { useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { ThemeProvider, useThemeContext } from './context/ThemeContext';
import AppRoutes from './routes/AppRoutes';

// This component listens to route changes and updates the themeMode accordingly
const RouteThemeManager = () => {
  const location = useLocation();
  const { toggleThemeMode } = useThemeContext();

  useEffect(() => {
    // If the path includes /college or is a dashboard that requires blue theme, we set it to blue
    if (location.pathname.startsWith('/college') || location.pathname.startsWith('/dashboard')) {
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
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
