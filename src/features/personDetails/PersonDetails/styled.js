import styled from "styled-components";
const largeBreakpoint = ({ theme }) => theme.breakpoints.large;
const mobileMaxBreakpoint = ({ theme }) => theme.breakpoints.mobileMax;
const mediumBreakpoint = ({ theme }) => theme.breakpoints.medium;

export const Wrapper = styled.div`
  max-width: 1368px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px 32px;
  list-style: none;
`;

export const ContentContainer = styled.div`
  padding: 0;
  margin: 0;
  margin-bottom: 64px;
  display: grid;
  gap: 24px;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: ${largeBreakpoint}px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  @media (max-width: ${mobileMaxBreakpoint}px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media (max-width: ${mediumBreakpoint}px) {
    grid-template-columns: 1fr;
    gap: 16px;
  } ;
`;