import styled from "styled-components";
import { Link } from "react-router-dom";
const mediumBreakpoint = ({ theme }) => theme.breakpoints.medium;
const mobileMaxBreakpoint = ({ theme }) => theme.breakpoints.mobileMax;
const largeBreakpoint = ({ theme }) => theme.breakpoints.large;
const maxBreakpoint = ({ theme }) => theme.breakpoints.max;

export const PeopleList = styled.div`
  padding: 0;
  margin: 0;
  display: grid;
  gap: 24px;
  justify-content: center;
  grid-template-columns: repeat(6, 1fr);

  @media (max-width: ${maxBreakpoint}px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: ${largeBreakpoint}px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: ${mobileMaxBreakpoint}px) {
    gap: 16px;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${mediumBreakpoint}px) {
    gap: 16px;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  } ;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: block;
  text-align: center;
  height: 100%;
  color: ${({ theme }) => theme.colors.black};
`;