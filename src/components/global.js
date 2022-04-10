import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 10px;
    font-family: 'Poppins', sans-serif;
  }
  a{
    color: inherit;
    text-decoration: none;
  }
  body{
    background: #151517
  }
 `
