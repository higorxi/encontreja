import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL, 
    headers: {
      'Content-Type': 'application/json', 
    },
  });

  api.interceptors.request.use(
    (config) => {
      const user = JSON.parse(localStorage.getItem('user') as string);
  
      if (user.token) {
        config.headers['Authorization'] = `Bearer ${user.token}`;
      }
  
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

// Função GET
export const get = async (endpoint: string, params?: any) => {
  const response = await api.get(endpoint, { params });
  return response.data;
};

// Função POST
export const post = async (endpoint: string, data: any) => {
  const response = await api.post(endpoint, data);
  return response.data;
};

// Função PUT
export const put = async (endpoint: string, data: any) => {
  const response = await api.put(endpoint, data);
  return response.data;
};

// Função PATCH
export const patch = async (endpoint: string, data: any) => {
  const response = await api.patch(endpoint, data);
  return response.data;
};

// Função DELETE
export const del = async (endpoint: string) => {
  const response = await api.delete(endpoint);
  return response.data;
};
