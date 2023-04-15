import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { AuthProvider } from 'react-auth-kit';

import { HotToastProvider } from 'react-hot-toast';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ColorModeScript />
    <AuthProvider authType={'cookie'} authName={'_auth'}>
      {/* <HotToastProvider> */}
      <App />
      {/* </HotToastProvider> */}
    </AuthProvider>
  </StrictMode>
);
