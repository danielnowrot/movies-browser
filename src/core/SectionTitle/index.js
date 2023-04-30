import styled, {css} from "styled-components";
const mobileBreakPoint = ({ theme }) => theme.breakpoints.mobileMax;

export const SectionTitle = styled.h2`
    margin: 64px 0 24px 0;
    color: ${({ theme }) => theme.colors.woodsmoke};
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;

    @media (max-width: ${mobileBreakPoint}px) {
        margin: 0 0 12px 0;
        max-width: 1368px;
        font-size: 18px;
    }
    
    ${({ detailsPage }) => 
        detailsPage && 
        css`
            margin: 64px 0 24px;

            @media (max-width: ${mobileBreakPoint}px) {
                margin: 24px 0 16px;
            }
        `}

    ${({ peopleList }) => 
        peopleList && 
        css`
            margin: 0 0 24px;

            @media (max-width: ${mobileBreakPoint}px) {
                margin: 0 0 12px;
            }
        `}

    ${({ movieList }) =>
        movieList && 
        css`
            margin: 0 0 24px;

            @media (max-width: ${mobileBreakPoint}px) {
                margin: 0 0 12px;
            }
        `    
    }
`;
