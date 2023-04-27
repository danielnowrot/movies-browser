import { createGlobalStyle } from "styled-components";

const StyledGlobal = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }
`

export default StyledGlobal;