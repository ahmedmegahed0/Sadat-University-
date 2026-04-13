import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Wrapper component to protect doctor routes
export default function DoctorProtectedRoute({ children }) {
  const { isAuthenticated, isDoctor, isLoading } = useAuth();

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 text-primary">Loading...</div>;
  }

  if (!isAuthenticated || !isDoctor) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
