// src/services/paymentService.ts

import { typePlan } from '@/@types/typePlan';
import { get, post, put, del } from './apiService';

export interface PaymentResponse {
    paymentId: string;
    qrCode: string;
    pixCode: string;
  }

export const createPaymentPIX = async (userDocument: string, typePlan: typePlan): Promise<PaymentResponse> => {
  const data = {
    userDocument,
    typePlan,
  };
  const response = await post('/api/payment/create/pix', data);
  return response.data
};

export const getStatusPaymentPIX = async (paymentId: string) => {
    return await get(`/api/payment/pix/${paymentId}`);
  };

export const createPaymentCreditCard = async (id: string, clientSecret: string) => {
    const data = {
        id,
        clientSecret,
      };
    const response = await post('/api/payment/create', data);
    return response.data;
};

