import styled from "styled-components";

export const StyledTitle = styled.div`
    grid-column: 1 / -1;
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    padding-bottom: 24px;
    white-space: nowrap;
    margin-bottom: -24px;
`;

export const StyledMovies = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(288px, max-content));
    gap: 24px;
    margin: 0 16px;
    justify-content: center;
`;

export const StyledMovie = styled.div`
    display: flex;
    max-width: 324px;
    flex-direction: column;
    justify-content: space-between;
    background: #FFFFFF;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    border-radius: 5px;
    padding: 16px;
`;

export const StyledImg = styled.img`
    width: 100%;
`;

export const StyledName = styled.div`
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;
    margin: 16px 0 8px 0;
`;

export const StyledYear = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #7E839A;
    margin-bottom: 8px;
`;

export const StyledGenres = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 39px;
    gap: 8px;
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
`;

export const StyledRate = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

export const StyledStar = styled.img`
    height: 16px;
    width: 16.5px;
`;

export const StyledAvarage = styled.div`
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    color: #18181B;
`;

export const StyledVotes = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #7E839A;
`;