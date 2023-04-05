import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { ResetPassword } from './pages/ResetPassword';
import { ForgotPassword } from './pages/ForgotPassword';
import { Home } from './pages/Home';

import { useIsAuthenticated } from 'react-auth-kit';

function App() {
  const isAuthenticated = useIsAuthenticated();

  const router = createBrowserRouter([
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
  ]);
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
