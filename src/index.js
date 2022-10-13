import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import Router from './Router';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import variables from './styles/variables';
import Modal from 'react-modal';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThemeProvider theme={{ style: theme, variables }}>
    <GlobalStyle />
    <Router />
  </ThemeProvider>
);

Modal.setAppElement('#root');
