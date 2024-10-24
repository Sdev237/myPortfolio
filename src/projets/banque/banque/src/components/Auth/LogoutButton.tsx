'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../hooks/useAuth';

export const LogoutButton: React.FC = () => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      // Utilisez window.location.href au lieu de router.push
      window.location.href = '/login';
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
    }
  };
  return (
    <button onClick={handleLogout} className="logout-button">
      Déconnexion
    </button>
  );
};