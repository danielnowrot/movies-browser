import styled from "styled-components";
const mobileMaxBreakpoint = ({ theme }) => theme.breakpoints.mobileMax;

export const GenreWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;

  @media (max-width: ${mobileMaxBreakpoint}px) {
    line-height: 11px;
    font-size: 10px;
  }
`;

export const GenreTag = styled.div`
  display: flex;
  padding: 8px 16px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.mystic};
  color: ${({ theme }) => theme.colors.woodsmoke};
  margin: 0 16px 24px 0;
  font-size: 14px;
  line-height: 100%;

  @media (max-width: ${mobileMaxBreakpoint}px) {
    padding: 4px 8px;
    margin: 0 8px 12px 0;
    font-size: 10px;
    line-height: 110%;
  }
`;
