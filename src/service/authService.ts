// src/services/authService.ts

import { post, put } from './apiService';

export const login = async (email: string, password: string) => {
  return await post('/api/auth/login', { email, password });
};

export const updateUser = async(document: string, data: any) => {
  return await put(`/api/user/${document}`, data)
}
