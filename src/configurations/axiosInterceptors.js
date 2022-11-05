import axios from 'axios';
import { BASE_URL } from './config';
import { store } from '../redux-toolkit';

const authApi = axios.create({
  baseURL: BASE_URL,
});

const api = axios.create({
  baseURL: BASE_URL,
});

authApi.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

authApi.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);

api.interceptors.request.use((request) => {
  const token = store.getState().authSlice.token;
  request.headers.Authorization = token ? `Bearer ${token}` : '';
  return request;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export { authApi, api };
