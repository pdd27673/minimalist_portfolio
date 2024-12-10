import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    background: #fafaf4;
    font-family: 'Georgia', serif;
    color: #333;
    font-size: 1.1em; /* Base font size for body text */
  }

  a {
    color: black;
    text-decoration: underline;
  }

  a:hover {
    text-decoration: underline;
  }

  * {
    box-sizing: border-box;
  }

  p {
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  ul {
    list-style: none;
    padding-left: 0;
    margin-bottom: 1.5rem;
  }

  ul li {
    margin-bottom: 0.75rem;
  }

  h1 {
    font-size: 1.5em; /* Headers are larger: 1.5em */
    margin-bottom: 1.5rem;
    font-weight: bold;
    color: #000;
  }
`;

export default GlobalStyles;
