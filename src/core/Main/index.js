import styled, {css} from "styled-components";
const mobileBreakPoint = ({ theme }) => theme.breakpoints.mobileMax;

export const Main = styled.main`
    padding: 56px 16px 40px;
    @media (max-width: ${mobileBreakPoint}px) {
        padding: 24px 16px 32px;
    }

    ${({ moviePage }) =>
        moviePage &&
        css`
        padding-top: 0;
        padding-bottom: 336px;

        @media (max-width: ${mobileBreakPoint}px) {
            padding-bottom: 88px;
        }
        `}
`;
