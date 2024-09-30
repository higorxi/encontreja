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
  const response = await post('/api/payments/create/pix', data);
  return response.data
};

export const getStatusPaymentPIX = async (paymentId: string) => {
    return await get(`/api/payments/pix/${paymentId}`);
  };

export const createPaymentCreditCard = async (userDocument: string, plan: any) => {
    const data = {
        userDocument,
        plan:{
          id: plan.id
        }
      };
    const response = await post('/api/payments/create', data);
    return response;
};

