// src/services/userService.ts

import { get, put, del, patch } from './apiService';

export const getUserProfile = async (userId: string) => {
  return await get(`/api/user/${userId}`);
};

export const updateUserProfile = async (userId: string, data: any) => {
  return await put(`/api/user/${userId}`, data);
};

export const updateUserProfilePhotoURL = async (profilePhotoUrl: any) => {
  const data = {
    profilePhotoUrl
  }
  return await put(`/api/user`, data);
};

export const deleteUser = async (userId: string) => {
  return await del(`/api/user/${userId}`);
};
