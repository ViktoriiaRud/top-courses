'use client'
import { createGlobalStyle } from 'styled-components';
import { breakpoint, reset } from '.';


export const GlobalStyle = createGlobalStyle`
  ${reset}
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }

  :root {
    --black: #0a0a0a;
    --white: #ededed;
}

  body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto_Mono', 'Nunito', sans-serif;
}

  button:focus-visible, a:focus-visible {
  }

  a[href], button {
    cursor: pointer;
  }

  a[href] {
    transition: all 0.1s linear 0s;
  }
`;


export default GlobalStyle;