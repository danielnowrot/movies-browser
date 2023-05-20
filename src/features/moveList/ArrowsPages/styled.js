import styled, { css } from "styled-components";
import { ReactComponent as leftArrow } from "../../../Images/leftArrow.svg";
import { ReactComponent as rightArrow } from "../../../Images/rightArrow.svg";

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

export const StyledButtonText = styled.div`

    @media(max-width: ${({ theme }) => theme.breakpoints.arrow}px) {
        display: none;
    }
`

export const StyledButtonLeftArrow = styled(leftArrow)`
    display: none;

    ${({ small }) => small && css`
        display: block;

        @media(max-width: ${({ theme }) => theme.breakpoints.arrow}px) {
        display: block;
    }
    `}
    
    @media(max-width: ${({ theme }) => theme.breakpoints.arrow}px) {
        display: block;
        width: 5px;
        height: 8px;
    }
`

export const StyledButtonRightArrow = styled(rightArrow)`
    display: none;

    ${({ small }) => small && css`
        display: block;

        @media(max-width: ${({ theme }) => theme.breakpoints.arrow}px) {
        display: block;
    }
    `}
    
    @media(max-width: ${({ theme }) => theme.breakpoints.arrow}px) {
        display: block;
        width: 5px;
        height: 8px;
    }
`

export const StyledPageOf = styled.div`
    color: #7E839A;
    display: flex;
    gap: 8px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
     font-weight: 400;
     font-size: 10px;
     line-height: 24px;
    }
`

export const StyledPage = styled.div`
    font-weight: 600;
    line-height: 150%;
    color: #18181B;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
        font-size: 10px;
        line-height: 24px;
    }
`

export const StyledGetTotal = styled.div`
    font-weight: 600;
    line-height: 150%;
    color: #18181B;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
        font-size: 10px;
        line-height: 24px;
    }
`