import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Exo 2', sans-serif;
  }

  body {
    background: #1D1D1D;
    overflow-x: hidden;
  }
`;