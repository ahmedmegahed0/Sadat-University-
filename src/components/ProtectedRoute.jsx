import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Wrapper component to protect student routes
export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isStudent, isLoading } = useAuth();

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 text-primary">Loading...</div>;
  }

  if (!isAuthenticated || !isStudent) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
