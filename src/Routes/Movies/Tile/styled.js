import { Link } from "react-router-dom";

import styled from "styled-components";

export const StyledMovieLink = styled(Link)`
    color: ${({ theme }) => theme.colors.woodsmoke};
    text-decoration: none;
    display: flex;
    max-width: 100%;
    flex-direction: column;
    background: #FFFFFF;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    border-radius: 5px;
    padding: 16px;
    transition: 0.3s;

    &:hover {
        transform: translate(0px, -2%);
        cursor: pointer;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
        flex-direction: row;
        gap: 16px;
    }
`;

export const StyledImg = styled.img`
    width: 100%;
    border-radius: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
        width: 114px;
        height: 169px;
    }
`;

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;

     @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
        justify-content: flex-start;
    }
`

export const StyledDetails = styled.div`
    display: flex;
    flex-direction: column;
`

export const StyledName = styled.div`
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;
    margin: 16px 0 8px 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
        margin: 0px;
        font-size: 16px;
    }
`;

export const StyledYear = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #7E839A;
    margin-bottom: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
        font-size: 13px;
        line-height: 130%;
        margin: 4px 0 8px 0;
    }
`;

export const StyledGenres = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 39px;
    gap: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
        margin: 0 0 8px 0;
    }
`;

export const StyledGenre = styled.div`
    display: flex;
    align-items: center;
    background: #E4E6F0;
    border-radius: 5px;
    padding: 8px 16px;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
        font-size: 10px;
        line-height: 110%;
        padding: 4px 8px;
    }
`;

export const StyledRate = styled.div`
    display: flex;
    gap: 12px;


    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
        gap: 8px;
    }
`;

export const StyledStar = styled.img`
    height: 24px;
    width: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
        height: 16px;
        width: 15px;
    }
`;

export const StyledAvarage = styled.div`
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    color: #18181B;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
        font-size: 13px;
        line-height: 130%;
    }
`;

export const StyledVotes = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #7E839A;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
        font-size: 13px;
        line-height: 130%;
    }
`;