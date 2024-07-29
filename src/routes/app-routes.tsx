export const defaultRoute = '/';
export const homeRoute = '/';

export const authRoutes = {
  login: () => '/auth/login',
  register: () => '/auth/register',
  forgotPassword: () => '/auth/forgot-password',
  resetPassword: () => '/auth/reset-password',
  accountConfirmation: () => '/auth/account-confirmation'
};

export const otherRoutes = {
  citySales: () => '/events',
  delivery: () => '/delivery'
};
