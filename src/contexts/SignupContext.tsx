"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { register } from '@/service/registerService';
import { Document, Email, Telephone } from '@/@types/userTypes';

interface User {
  id: string;
  email: string;
}

export interface RegistrationDetails {
  name: string;
  gender: {
    id: 1
  };
  email: Email;
  phone: Telephone;
  document: Document;
  password: string;
  city: string;
}

interface CadastroContextType {
  user: User | null;
  isRegistered: boolean;
  registerUser: (details: RegistrationDetails) => Promise<boolean>;
}

const CadastroContext = createContext<CadastroContextType | undefined>(undefined);

export const CadastroProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isRegistered, setIsRegistered] = useState<boolean>(false);

  const registerUser = async (details: RegistrationDetails) => {
    try {
      const data = await register(details);
      setUser(data);
      setIsRegistered(true);
      return true;
    } catch (error) {
      console.error('Falha no cadastro', error);
      return false;
    }
  };

  return (
    <CadastroContext.Provider value={{ user, isRegistered, registerUser }}>
      {children}
    </CadastroContext.Provider>
  );
};

export const useCadastro = () => {
  const context = useContext(CadastroContext);
  if (context === undefined) {
    throw new Error('useCadastro must be used within a CadastroProvider');
  }
  return context;
};
