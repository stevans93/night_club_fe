import axios from "axios";
import { getToken } from "../helpers/auth";

const instance = axios.create({
  baseURL: "http://localhost:4000/api",
});

//add when deploying
//baseURL: "https://api.where2go.vip/api",

instance.interceptors.request.use((config) => {
  const token = getToken();
  config.headers["Content-Type"] = "application/json";
  if (token) {
    config.headers["Authorization"] = `${token}`;
  }
  return config;
});

export const http = instance;
