import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    overflow-x: hidden;
    position: relative;
    width: 100vw;
    box-sizing: border-box;
    margin: 0px;
    font-family: montserrat -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;;
  }
  
  a {
    text-decoration: none;
    color: inherit;
    &:visited {
      color: inherit;
    }
  }
  
  button {
    outline: none;
    border: none;
  }
  li {
    margin-bottom: 0.5em;
  }
`;

export default GlobalStyle;
