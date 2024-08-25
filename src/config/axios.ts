

import axios, { AxiosInstance } from "axios";
export const createAxiosInstance = (): AxiosInstance => {
  const baseURL = ' https://localhost:3000/';
  const axiosInstance: AxiosInstance = axios.create({
    baseURL: `${baseURL}`,
    headers: {
      'Content-Type': 'application/json',
    }
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      const token = window.localStorage.getItem('token');
      if (token) {
        config.headers['authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export const axiosInstance = createAxiosInstance();
