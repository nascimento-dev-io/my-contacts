import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import Routes from '../../Routes';

import Header from '../Header';
import ToastContainer from '../Toast/ToastContainer';

import GlobalStyles from '../../assets/styles/global';
import { Container } from './styles';

import useTheme from '../../hooks/useTheme';

function App() {
  const { theme, current, handleToggleTheme } = useTheme();

  return (
    <BrowserRouter>
      <ThemeProvider theme={current}>
        <GlobalStyles />
        <ToastContainer />
        <Container>
          <Header theme={theme} onHandleToggleTheme={handleToggleTheme} />
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
