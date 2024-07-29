import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';

// Perfect Scrollbar
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'flatpickr/dist/themes/material_red.css';

// Tailwind css
import './index.css';

// Router
import { RouterProvider } from 'react-router-dom';
import { baseRoutes } from './routes/base-routes.tsx';

// Redux
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <RouterProvider router={baseRoutes} />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
