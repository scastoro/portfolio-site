import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    font-family: 'Poppins', sans-serif;
  }
  a{
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
  body{
    background: #151517;
    font-size: 1.4rem;
  }
 `
