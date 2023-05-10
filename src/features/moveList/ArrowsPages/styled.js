import styled from "styled-components";

export const StyledPages = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    display: flex;
    gap:12px;
    justify-content: center;
    align-items: center;
    margin: 40px 0 103px 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
        margin: 32px 0 31px 0;
        font-weight: 400;
        font-size: 10px;
        line-height: 24px;
    }
`;

export const StyledButton = styled.button`
    cursor: pointer;
    display: flex;
    gap: 8px;
    align-items: center;
    background-color: #D6E4FF;
    padding: 8px 16px;
    border-radius: 5px;
    border: none;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
        padding: 8px 12px;
    }
`