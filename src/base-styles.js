import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: #4a4b4e;
    background: #ffeeee;
    padding: unset;
    margin: unset;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: #4a4b4e;
  }

  #app {
    background: #e7e7e7;
    min-height: 100%;
    min-width: 100%;
    z-index: -100001;
  }

  article {
    display: block;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
    color: #4a4b4e;
  }
`;

export default GlobalStyle;