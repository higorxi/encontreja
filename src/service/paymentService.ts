// src/services/paymentService.ts

import { get, post } from './apiService';

export interface PaymentResponse {
    transactionId: string;
    base64image: string;
    emvqrcps: string;
  }

export const createPaymentPIX = async (userDocument: string, plan: any, dataBilling: object): Promise<PaymentResponse> => {
  const data = {
    userDocument,
    plan:{
      id: plan.id
    },
    billingAddress: dataBilling
  };
  const response = await post('/api/payments/pix', data);
  return response
};

export const getStatusPaymentPIX = async (paymentId: string) => {
    return await get(`/api/payments/transaction/${paymentId}`);
  };

export const createPaymentCreditCard = async (userDocument: string, plan: any, dataBilling: object) => {
      const data = {
        userDocument,
        plan:{
          id: plan.id
        },
        billingAddress: dataBilling
      };
    const response = await post('/api/payments/', data);
    return response;
};



