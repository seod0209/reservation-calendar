import axios, { type AxiosInstance } from 'axios';

const BASE_URL = process.env.REACT_APP_HOLIDAY_DATA_BASE_URL;
function createApi(): AxiosInstance {
  const api = axios.create({
    baseURL: BASE_URL,
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return api;
}

export const API = createApi();
