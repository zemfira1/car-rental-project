import { css } from '@emotion/react';
import { theme } from 'styles/theme';

export const GlobalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap');

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: 'Manrope', sans-serif;
    min-height: 100vh;
    font-style: normal;
    font-size: ${theme.fontSizes.regular};
    color: ${theme.colors.black};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  ul,
  ol {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  button {
    padding: 0;
    border: none;
    font: inherit;
    font-size: ${theme.fontSizes.regular};
    font-weight: ${theme.fontWeight.semiBold};
    color: ${theme.colors.white};
    background-color: ${theme.colors.blue};
    cursor: pointer;
    border-radius: ${theme.spacing(3)};
    transition: background-color 200ms linear;

    &:hover,
    :focus {
      background-color: ${theme.colors.activeBlue};
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
