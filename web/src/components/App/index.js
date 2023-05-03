import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import Routes from '../../Routes';

import Header from '../Header';
import ToggleThemeButton from '../ToggleThemeButton';
import ToastContainer from '../Toast/ToastContainer';

import { Container } from './styles';
import GlobalStyles from '../../assets/styles/global';

import useTheme from '../../hooks/useTheme';

function App() {
  const { theme, current, handleToggleTheme } = useTheme();

  return (
    <BrowserRouter>
      <ThemeProvider theme={current}>
        <GlobalStyles />
        <ToastContainer />
        <Container>
          <ToggleThemeButton theme={theme} onToggleTheme={handleToggleTheme} />
          <Header theme={theme} />
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
