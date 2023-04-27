import { createGlobalStyle } from "styled-components";

const StyledGlobal = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        white-space: nowrap;
    }
`

export default StyledGlobal;