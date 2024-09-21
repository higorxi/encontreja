// src/services/anuncioService.ts

import { advertisementDetails } from '@/@types/advertisement';
import { get, post, put, del } from './apiService';

export const getAnuncio = async (anuncioId: string) => {
  return await get(`/anuncios/${anuncioId}`);
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
