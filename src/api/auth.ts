import { createAxiosInstance } from '@/config/axios';
import axios from 'axios';


const API_URL = 'https://your-api-url.com/api';
const axiosInstance = createAxiosInstance();


export const apiLogin = async (email: string, password: string) => {
    try {
      console.log("entered in auth context");
      console.log("emai:",email,"passowrd:",password);
      const apiURL = "login";
      const response = await axiosInstance.post(apiURL, { email, password });
      console.log("login request", response);
      localStorage.setItem("token",response?.data?.token );
      const token = localStorage.getItem("token");
      localStorage.setItem("user", JSON.stringify(response?.data?.foundUser[0]));
      return response.data;
    } catch (error) {
      console.log("Error on login", error);
      throw error;
    }
  };


export const apiSignup = async (email: string, password: string, name: string) => {
    const apiURL = "signup";
    const response = await axiosInstance.post(apiURL, { email, password, name });
  return response.data; // Handle and return response data
};


export const apiLogout = async () => {
  await axios.post(`${API_URL}/logout`);
};
