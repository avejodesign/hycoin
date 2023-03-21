import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    :root {
        --color-primary: #fec601;
        --color-white: #f7fff7;
        --color-dark: #011627;
    }

    @font-face {
        font-family: "Oddval";
        src: local("Oddval"),
        url("https://hycoin.netlify.app/src/fonts/Oddval/oddval.otf");
        font-weight: medium;
        font-style: normal;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        scroll-snap-type: y mandatory;
        scroll-behavior: smooth;
    }

    body {
        color: var(--color-dark);
        background: var(--color-dark);
    }

    body, input, button, textarea {
        font-family: "Poppins", serif;
        font-size: 14px;
        outline: none;
        -webkit-font-smoothing: antialiased;
    }

    a {
        text-decoration: none;
        cursor: pointer;

        &:hover {
            text-decoration: none;
        }
    }

    h1, h2, h3, h4, h5 {
        font-family: "Oddval";
    }

    h1 {
        font-size: 64px;
    }

    h2 {
        font-size: 36px;
    }

    @media (max-width: 576px) {
        h2 {
            font-size: 24px;
        }
    }

    .button-primary {
        background: var(--color-primary);
        width: fit-content;
        color: var(--color-dark) !important;
        padding: 10px 20px;
        border-radius: 10px;
        margin-top: 15px;
        cursor: pointer;
        transition: opacity 0.2s linear;

        &:hover {
            opacity: 0.8;
        }
    }

    .button-outline {
        padding: 10px 20px;
        border-radius: 10px;
        border: 1px solid var(--color-dark);
        margin-right: 0;
        color: var(--color-white);

        &:hover {
            background: var(--color-white);
            color: var(--color-dark);
        }
    }
    
    
`;