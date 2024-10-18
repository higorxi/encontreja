// src/services/anuncioService.ts

import { advertisementDetails } from '@/@types/advertisement';
import { get, post, put, del } from './apiService';

export const getAnuncios = async (city: string) => {
  return await get(`/api/advertisement/city/${city}`);
};

export const getAnuncio = async (id: string) => {
  return await get(`/api/advertisement/${id}`);
};

export const getStatusForMyAdvertisement = async () => {
  return await get(`/api/advertisement/document/authenticated`)
}

export const createAnuncio = async (data: advertisementDetails) => {
  return await post('/api/advertisement', data);
};

export const updateAnuncio = async (anuncioId: string, data: any) => {
  return await put(`/api/anuncios/${anuncioId}`, data);
};

export const updateAnuncioPhotosURL = async (anuncioId: string, photosURL: string[]) => {
  const data = {
    anuncioId,
    photosURL
  }
  return await put(`/api/anuncios/${anuncioId}`, data);
};

export const deleteAnuncio = async (anuncioId: string) => {
  return await del(`/api/anuncios/${anuncioId}`);
};

export const listServices = async () => {
  return await get('/api/service-available');
};
