// axiosContext.ts
import React, { createContext, useContext, ReactNode } from 'react';
import { AxiosInstance } from 'axios';
import { createAxiosInstance } from '../config/axios';

export const AxiosContext = createContext<AxiosInstance | null>(null);

export const AxiosProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const axiosInstance = createAxiosInstance();

  return (
    <AxiosContext.Provider value={axiosInstance}>
      {children}
    </AxiosContext.Provider>
  );
};
// / Custom hook to use the Axios instance
export const useAxios = (): AxiosInstance => {
  console.log("error in use axios",AxiosContext);
  const context = useContext(AxiosContext);
  console.log("error in use axios after");

  // If context is null, throw an error (this means the hook is used outside the provider)
  if (!context) {
    console.log("error in use axios");
    
    throw new Error('useAxios must be used within an AxiosProvider');
  }

  return context;
};

