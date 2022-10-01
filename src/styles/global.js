import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    @import url('../assets/Fonts/helvetica-25-ultra-light.otf');
    font-family: 'Helvetica';
    font-weight: 100;
    width: 100vw;
    height: 100vh;
    /* background-color: #f0f9f5; */
    color: #fff;
  }
`;

export default GlobalStyle;
