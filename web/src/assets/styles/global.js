import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Sora', sans-serif;

  }

  body {
    width: 100vw;
    background: ${({ theme }) => theme.colors.background};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray[900]};
    transition: background 0.2s ease-in;
  }

  button {
    cursor: pointer;
  }
`;
