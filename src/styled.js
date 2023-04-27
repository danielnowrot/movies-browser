import { createGlobalStyle } from "styled-components";

const StyledGlobal = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-style: normal;
        margin: 0;
    }
`

export default StyledGlobal;