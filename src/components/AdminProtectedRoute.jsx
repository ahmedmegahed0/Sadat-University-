import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAdminAuth } from '../context/AdminAuthContext';

export default function AdminProtectedRoute({ children, requireSuperAdmin = false }) {
    const { adminUser, isSuperAdmin, isLoading } = useAdminAuth();

    if (isLoading) {
        return <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 text-primary">Loading...</div>;
    }

    if (!adminUser) {
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
