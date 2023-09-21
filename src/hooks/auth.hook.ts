import {useMutation} from '@tanstack/react-query';
import API from '../api/api';
const URL = '/auth';

export function useSignIn() {
  return useMutation(data => API.post(`${URL}/login`, data));
}
