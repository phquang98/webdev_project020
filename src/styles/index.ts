import { createGlobalStyle } from "styled-components";

import robotoFont from "../assets/Roboto-Regular.ttf";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: randomNameHere;
    src: url(${robotoFont}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: randomNameHere;
    box-sizing: border-box;
    margin: 0;
  }
`;

// Import the fonts -> declare it with a name (randomNameHere) -> apply it everywhere
// <https://stackoverflow.com/a/55242731/8834000>
// <https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face>
// Check out how MUI create CSSBaseLine: <https://github.com/mui/material-ui/blob/master/packages/mui-material/src/CssBaseline/CssBaseline.js>