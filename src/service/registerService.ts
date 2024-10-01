// src/services/registerService.ts

import { RegistrationDetails } from '@/contexts/SignupContext';
import { post } from './apiService';

export const register = async (dataRegiter: RegistrationDetails) => {
  return await post('/api/user', dataRegiter);
};
