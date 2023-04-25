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
import { Pdf_viewer } from './pages/Pdf_viewer';

import { useIsAuthenticated, useAuthUser } from 'react-auth-kit';

function App() {
  const isAuthenticated = useIsAuthenticated();
  const auth = useAuthUser();
  const currentUser = auth();

  const router = createBrowserRouter([
    {
      path: '/pdfViewer',
      element: isAuthenticated() ? <Pdf_viewer /> : <Login />,
    },
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
