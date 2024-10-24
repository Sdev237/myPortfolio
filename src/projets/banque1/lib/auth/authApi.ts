import { apiClient } from '../api/apiClient';
import { User, UserLoginCredentials } from '../../types/user';

interface LoginResponse {
  token: string;
  user: User;
}

export const login = async (credentials: UserLoginCredentials): Promise<LoginResponse> => {
  return apiClient('/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const logout = async (): Promise<void> => {
  return apiClient('/auth/logout', {
    method: 'POST',
  });
};

export const getCurrentUser = async (): Promise<User> => {
  return apiClient('/auth/me');
};