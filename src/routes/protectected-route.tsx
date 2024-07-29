import { Navigate, useLocation } from 'react-router-dom';
import { getToken } from '../endpoints';
import { authRoutes } from './app-routes';
import { PropsWithChildren } from 'react';

export const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const token = getToken();
  let location = useLocation();

  if (!token) return <Navigate to={authRoutes.login()} state={{ from: location }} replace />;
  return children;
};
