import styled, { css } from "styled-components";
const mobileMaxBreakpoint = ({ theme }) => theme.breakpoints.mobileMax;

export const Grid = styled.div`
    padding: 0;
    margin: 0;
    display: grid;
    gap: 24px;
    justify-content: center;
    list-style: none;

    @media (max-width: ${mobileMaxBreakpoint}px) {
        gap: 16px;
    }

    ${({ popularPeople }) => 
        popularPeople && 
        css`
            grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));

            @media (max-width: ${mobileMaxBreakpoint}px) {
                grid-template-columns: repeat(auto-fill, minmax(136px, 1fr));
            }
        `}
`;