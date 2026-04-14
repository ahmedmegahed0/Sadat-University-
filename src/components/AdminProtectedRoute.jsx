import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function AdminProtectedRoute({ children, requireSuperAdmin = false }) {
    const { user, isSuperAdmin, isAdmin, isLoading } = useAuth();

    if (isLoading) {
        return <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 text-primary">Loading...</div>;
    }

    if (!user || (!isAdmin && !isSuperAdmin)) {
        return <Navigate to="/login" replace />;
    }

    if (requireSuperAdmin && !isSuperAdmin) {
        return <Navigate to="/dashboard/college-admin" replace />;
    }

    if (!requireSuperAdmin && isSuperAdmin) {
        return <Navigate to="/dashboard/super-admin" replace />;
    }

    return children;
}
