// src/services/anuncioService.ts

import { advertisementDetails } from '@/@types/advertisement';
import { get, post, put, del } from './apiService';

export const getAnuncios = async (city: string) => {
  return await get(`/advertisement/city/${city}`);
};

export const getAnuncio = async (id: string) => {
  return await get(`/advertisement/${id}`);
};

export const createAnuncio = async (data: advertisementDetails) => {
  return await post('/advertisement', data);
};

export const updateAnuncio = async (anuncioId: string, data: any) => {
  return await put(`/anuncios/${anuncioId}`, data);
};

export const deleteAnuncio = async (anuncioId: string) => {
  return await del(`/anuncios/${anuncioId}`);
};

export const listAnuncios = async (params?: any) => {
  return await get('/anuncios', params);
};
