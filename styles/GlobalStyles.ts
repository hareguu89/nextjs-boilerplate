import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    body {
        font-family: "Spoqa Han Sans Neo";
        font-size: 2rem;
        color: black;
        background-color: #1a202c;
    }
`;

export default globalStyles;
