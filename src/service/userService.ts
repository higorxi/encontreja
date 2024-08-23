// src/services/userService.ts

import { get, put, del } from './apiService';

export const getUserProfile = async (userId: string) => {
  return await get(`/users/${userId}`);
};

export const updateUserProfile = async (userId: string, data: any) => {
  return await put(`/users/${userId}`, data);
};

export const deleteUser = async (userId: string) => {
  return await del(`/users/${userId}`);
};
