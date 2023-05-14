import styled from "styled-components";
const mobileBreakpoint = ({ theme }) => theme.breakpoints.mobileMax;
const largeBreakpoint = ({ theme }) => theme.breakpoints.large;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  display: grid;
  grid-template-columns: minmax(116px, 399px) auto;
  grid-template-areas:
    "i h"
    "i b"
    "i p";
  padding: 40px;
  column-gap: 40px;
  margin: 56px 0 0 0;

  @media (max-width: ${largeBreakpoint}px) {
    gap: 20px 28px;
    grid-template-columns: minmax(auto, 215px) 1fr;
  }

  @media (max-width: ${mobileBreakpoint}px) {
    gap: 15px 16px;
    grid-template-columns: minmax(auto, 114px) 1fr;
    padding: 16px;
    margin: 16px 0;
  }
`;

export const Poster = styled.img`
  width: 100%;
  display: block;
  border-radius: 5px;
  grid-row: span 2;

  @media (max-width: ${largeBreakpoint}px) {
    width: 215px;
    height: 319px;
  }

  @media (max-width: ${mobileBreakpoint}px) {
    width: 114px;
    height: 169px;
  }
`;

export const Content = styled.div`
  @media (max-width: ${largeBreakpoint}px) {
    grid-row: span 2;
  }
`;

export const Title = styled.header`
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  margin-top: 8px;
  margin-bottom: 24px;

  @media (max-width: ${mobileBreakpoint}px) {
    font-weight: 500;
    font-size: 16px;
    line-height: 130%;
    margin-top: 0px;
    margin-bottom: 4px;
  }
`;

export const Year = styled.div`
  font-size: 22px;
  line-height: 120%;
  margin-bottom: 24px;

  @media (max-width: ${mobileBreakpoint}px) {
    font-size: 13px;
    line-height: 130%;
    margin-bottom: 8px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SubTitle = styled.p`
  padding-right: 10px;
  color: ${({ theme }) => theme.colors.stormGray};
  margin-top: 0px;
  margin-bottom: 8px;

  @media (max-width: ${mobileBreakpoint}px) {
    display: none;
  }
`;

export const Information = styled.p`
  margin-top: 0px;
  margin-bottom: 8px;

  @media (max-width: ${mobileBreakpoint}px) {
    font-size: 12px;
    line-height: 130%;
  }
`;

export const TileArticle = styled.article`
  font-size: 20px;
  line-height: 160%;

  @media (max-width: ${largeBreakpoint}px) {
    grid-row: 3;
    grid-column: span 2;
  }

  @media (max-width: ${mobileBreakpoint}px) {
    font-size: 14px;
    line-height: 160%;
  }
`;