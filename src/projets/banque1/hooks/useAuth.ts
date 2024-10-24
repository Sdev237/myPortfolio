import { useState, useEffect } from 'react';
import { User } from '../types/user';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Vérifier si l'utilisateur est déjà connecté au chargement
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      // Appel à votre API pour vérifier le statut d'authentification
      const response = await fetch('/api/auth/status');
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      }
    } catch (error) {
      console.error("Erreur lors de la vérification du statut d'authentification:", error);
    }
  };

  const login = async (credentials: { email: string; password: string }) => {
    // Implémentez la logique de connexion ici
    // Par exemple :
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    if (response.ok) {
      const userData = await response.json();
      setUser(userData);
    } else {
      throw new Error('Échec de la connexion');
    }
  };

  const logout = async () => {
    try {
      // Appel à votre API pour se déconnecter
      await fetch('/api/auth/logout', { method: 'POST' });
      setUser(null);
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
      throw error;
    }
  };

  return { user, login, logout };
};