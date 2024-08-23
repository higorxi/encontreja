// src/services/authService.ts

import { post } from './apiService';

export const login = async (email: string, password: string) => {
  return await post('/auth/login', { email, password });
};

export const logout = async () => {
  return await post('/auth/logout', {});
};
