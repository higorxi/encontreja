// src/services/registerService.ts

import { post } from './apiService';

export const register = async (name: string, email: string, password: string) => {
  return await post('/user', { name, email, password });
};
