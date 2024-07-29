import axios from 'axios';
import { BaseUrl } from '.';

export const AxiosInstance = axios.create({
  baseURL: BaseUrl,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});
