import { decrypt, encrypt } from '../utils';

export const setToken = (token: string) => {
  if (!token) return;
  const newToken = encrypt(token);
  localStorage.setItem('assess-app-key', newToken);
};

export const getToken = () => {
  const storedToken = localStorage.getItem('assess-app-key') || '';
  return decrypt(storedToken);
};

export const setUserData = (user: any) => {
  localStorage.setItem('assess-app-user', JSON.stringify(user));
};

export const getUserData = () => {
  const storedUser = localStorage.getItem('assess-app-user') || '';
  if (!storedUser) return null;
  return JSON.parse(storedUser);
};
