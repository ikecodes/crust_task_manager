// import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';
import {store} from '../slices';
import {logOut} from '../slices/userSlice';
import Toast from 'react-native-toast-message';

export const baseURL = '';

const API = axios.create({
  baseURL,
  headers: {
    'Content-type': 'application/json',
    Accept: 'Application/json',
  },
});
API.interceptors.request.use(async req => {
  const {accessToken} = store.getState().user;
  if (accessToken) {
    req.headers.Authorization = `Bearer ${accessToken}`;
  }
  return req;
});
API.interceptors.response.use(
  async res => {
    return res;
  },
  error => {
    if (error.response.status === 401) {
      store.dispatch(logOut());
    }
    return Promise.reject(error);
  },
);

export const API2 = axios.create({
  baseURL,
  headers: {
    'Content-type': 'multipart/form-data',
    Accept: 'Application/json',
  },
});

API2.interceptors.request.use(async req => {
  const {accessToken} = store.getState().user;
  if (accessToken) {
    req.headers.Authorization = `Bearer ${accessToken}`;
  }
  return req;
});
API2.interceptors.response.use(
  async res => {
    return res;
  },
  error => {
    if (error.response.status === 401) {
      Toast.show({
        type: 'error',
        text1: 'Session expired, please login again',
      });
      setTimeout(() => {
        store.dispatch(logOut());
      }, 1500);
    }
    return Promise.reject(error);
  },
);

export default API;
