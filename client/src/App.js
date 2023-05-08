import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { ResetPassword } from './pages/ResetPassword';
import { ForgotPassword } from './pages/ForgotPassword';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Zav } from './pages/Zav';
import { Unauthorized } from './pages/Unauthorized';

import { useIsAuthenticated } from 'react-auth-kit';

function App() {
  const isAuthenticated = useIsAuthenticated();

  const router = createBrowserRouter([
    {
      path: '/zav',
      element: isAuthenticated() ? <Zav /> : <Login />,
    },
    {
      path: '/',
      element: isAuthenticated() ? <Home /> : <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/ForgotPassword',
      element: <ForgotPassword />,
    },
    {
      path: '/ResetPassword',
      element: <ResetPassword />,
    },
    {
      path: '/Unauthorized',
      element: <Unauthorized />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);

  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
