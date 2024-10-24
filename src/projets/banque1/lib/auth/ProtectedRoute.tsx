import React from 'react';
import { useRouter } from 'next/router';
import { useAuth } from './authContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (!user) {
    router.push('/login');
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;