import axios from "axios";
import { getToken } from "../helpers/auth";

// Base instance with application/json content type
const instance = axios.create({
  baseURL: 'http://localhost:4000/api',
});

instance.interceptors.request.use((config) => {
  const token = getToken();
  config.headers["Content-Type"] = "application/json";
  if (token) {
    config.headers["Authorization"] = `${token}`;
  }
  return config;
});

// Create a new instance specifically for file uploads
const uploadInstance = axios.create({
  baseURL: 'http://localhost:4000/api', // Change the base URL if necessary
});

uploadInstance.interceptors.request.use((config) => {
  const token = getToken();
  config.headers["Content-Type"] = "multipart/form-data"; // Set content type to multipart/form-data
  if (token) {
    config.headers["Authorization"] = `${token}`;
  }
  return config;
});

export const http = instance;
export const uploadHttp = uploadInstance; // Export the new instance for file uploads
