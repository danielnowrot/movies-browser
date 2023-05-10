import styled from "styled-components";

export const StyledTitle = styled.div`
    grid-column: 1 / -1;
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    padding-bottom: 24px;
    white-space: nowrap;
    margin-bottom: -24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
        font-size: 18px;
    }
`;

export const StyledMovies = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(${({ theme }) => theme.breakpoints.tilesMin}px, max-content));
    gap: 24px;
    margin: 0 16px;
    justify-content: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: repeat(auto-fit, minmax(288px, max-content));
        gap: 16px;
    }
`;