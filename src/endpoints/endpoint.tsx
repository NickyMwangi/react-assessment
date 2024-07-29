import { BaseUrl } from '../config';

/*
 *TODO All endPoints related to account
 */
export const accountEndpoints = {
  login: () => `${BaseUrl}/auth/login`,
  register: () => `${BaseUrl}/auth/register`,
  emailConfirmation: (id: string) => `${BaseUrl}/auth/confirm-email/${id}`,
  forgotPassword: (id: string) => `${BaseUrl}/auth/forgot-password/${id}`,
  resetPassword: (id: string) => `${BaseUrl}/auth/reset-password/${id}`,
  menus: (userId: string) => `${BaseUrl}/menus/?userId=${userId}`,
  lookups: (category: string) => `${BaseUrl}/lookups/?category=${category}`,
  usersLookup: () => `${BaseUrl}/users-lookup`,
  profile: (id: string) => `${BaseUrl}/users/profile/${id}`,
  updateProfile: (id: string) => `${BaseUrl}/users/${id}`,
  deleteProfile: (id: string) => `${BaseUrl}/users/${id}`
};

/*
 *TODO All endPoints related to events
 */
export const OrderEndpoints = {
  lateDelivery: (page: number, perPage: number) => `${BaseUrl}/order/late?page=${page ?? 1}&perPage=${perPage ?? 10}`,
  earlyDelivery: (page: number, perPage: number) => `${BaseUrl}/order/early?page=${page ?? 1}&perPage=${perPage ?? 10}`,
  combinedDelivery: (page: number, perPage: number) =>
    `${BaseUrl}/order/combined?page=${page ?? 1}&perPage=${perPage ?? 10}`,
  postTimer: () => `${BaseUrl}/timer`
};
