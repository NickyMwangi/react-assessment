import { createBrowserRouter } from 'react-router-dom';
import { AuthLayout, MotherLayout } from '../components';
import { ForgotPasssword, Login, Register, ResetPassword, AccountConfirmation, NotFound, Dashboard } from '../pages';
import { Deliveries } from '../pages/deliveries';

const routes = [
  //Authentication
  {
    path: 'auth/',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'forgot-password',
        element: <ForgotPasssword />
      },
      {
        path: 'reset-password',
        element: <ResetPassword />
      },
      {
        path: 'account-confirmation',
        element: <AccountConfirmation />
      }
    ]
  },

  //pages
  {
    path: '/',
    element: <MotherLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Dashboard />
      },
      {
        path: 'delivery',
        element: <Deliveries />
      }
    ]
  }
];

export const baseRoutes = createBrowserRouter(
  routes.map((n) => {
    return {
      ...n
    };
  })
);
