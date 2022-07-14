import React from 'react';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';
import Header from '../Header';

import { Container } from './styles';

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyles />
    <Container>
      <Header />
    </Container>
  </ThemeProvider>
);

export default App;
