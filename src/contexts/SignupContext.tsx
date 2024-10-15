'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { register } from '@/service/registerService';
import { Document, Email, Telephone } from '@/@types/userTypes';
import { useAuth } from './AuthContext';

interface User {
  id: string;
  email: string;
}

export interface RegistrationDetails {
  name: string;
  gender: {
    id: number;
  };
  email: Email;
  phone: Telephone;
  document: Document;
  password: string;
  city: string;
}

interface CadastroContextType {
  registerUser: (details: RegistrationDetails) => Promise<boolean>;
}

const CadastroContext = createContext<CadastroContextType | undefined>(undefined);

export const CadastroProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { setUser, setIsAuthenticated } = useAuth();

  const registerUser = async (details: RegistrationDetails) => {
    try {
      const data = await register(details);
      localStorage.setItem('user', JSON.stringify(data)); 
      setUser(data); 
      setIsAuthenticated(true); 
      return true;
    } catch (error) {
      throw new Error('Falha no cadastro');
    }
  };

  return <CadastroContext.Provider value={{ registerUser }}>{children}</CadastroContext.Provider>;
};

export const useCadastro = () => {
  const context = useContext(CadastroContext);
  if (context === undefined) {
    throw new Error('useCadastro must be used within a CadastroProvider');
  }
  return context;
};
