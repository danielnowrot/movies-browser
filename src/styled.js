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
        background: ${({ theme }) => theme.colors.whisper};
        word-break: break-word;
        
    }
`;

export default StyledGlobal;
