import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    gap:20px;
    max-width: 100%;
    height: 94px;
    background-color: ${({ theme }) => theme.topBar.Woodsmoke};
`;

export const StyledImg = styled.img`
`

export const StyledTitle = styled.div`
    color: #FFFFFF;
    font-weight: 500;
    font-size: 24px;
    line-height: 40px;
    letter-spacing: -1.5px;
    text-transform: capitalize;
`

export const StyledMoviesPeople = styled.div`
    color: white;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    text-transform: uppercase;
`

export const StyledSearch = styled.input`

`