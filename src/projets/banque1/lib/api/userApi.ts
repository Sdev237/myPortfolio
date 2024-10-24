import { User } from '../../types/user';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getCurrentUser = async (): Promise<User> => {
  const response = await fetch(`${API_URL}/users/me`);
  if (!response.ok) {
    throw new Error('Échec de la récupération des informations utilisateur');
  }
  return response.json();
};

export const updateUserProfile = async (userData: Partial<User>): Promise<User> => {
  const response = await fetch(`${API_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  if (!response.ok) {
    throw new Error('Échec de la mise à jour du profil utilisateur');
  }
  return response.json();
};