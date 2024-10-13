"use client"
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { login } from '@/service/authService';

interface User {
  id: string;
  email: string;
  document: string;
  token: string;
  name: string
}

interface Credentials {
  email: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  loginAuth: (credentials: Credentials) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useUser = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(null);
    }
  }, []);

  return user;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);


  useEffect(() => {
    const checkAuth = async () => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
        setIsAuthenticated(true);
        return;
      }
      setUser(null);
      setIsAuthenticated(false);
    };

    checkAuth();
  }, []);

  const loginAuth = async (credentials: Credentials) => {

    try {
      const data = await login(credentials.email, credentials.password)
      localStorage.setItem('user', JSON.stringify(data));
      setUser(data);
      setIsAuthenticated(true);
      return true
    } catch (error) {
      console.error('Login failed', error);
      return false
    }
  };

  const logout = () => {
    localStorage.removeItem('user'); 
    setUser(null); 
    setIsAuthenticated(false); 
    window.location.reload(); 
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, loginAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
