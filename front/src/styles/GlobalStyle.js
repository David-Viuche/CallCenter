import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; }
    ul { list-style: none; }
    button { background: transparent; border: 0; outline: 0 }
`