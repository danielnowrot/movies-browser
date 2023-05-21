import styled from "styled-components";
import { Link } from "react-router-dom";

const mobileMaxBreakpoint = ({ theme }) => theme.breakpoints.mobileMax;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const AllWraper = styled.div``;

export const Wrapper = styled.div``;

export const List = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));
  padding: 0;
  margin: 0;
  grid-gap: 24px;  
  /* white-space: nowrap; */

  @media (max-width: ${mobileMaxBreakpoint}px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    grid-gap: 16px;
  }
`;

export const Tile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  
  padding: 10px 15px 14px 16px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  transition: all 170ms;

  &:hover {
    cursor: pointer;
    transform: translateY(-8px);
    box-shadow: 0px 6px 18px 2px #c2d7ff;
  }

  @media (max-width: ${mobileMaxBreakpoint}px) {
    padding: 8px;
  }
`;

export const Photo = styled.img`
  border-radius: 5px;
  width: 100%;
`;

export const Name = styled.div`
  margin: 0px;
  padding-top: 14px;
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.woodsmoke};
  text-align: center;

  @media (max-width: ${mobileMaxBreakpoint}px) {
    font-size: 14px;
    padding-top: 8px;
  }
`;

export const Character = styled.div`
  margin: 0;
  padding-top: 8px;
  font-size: 18px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.waterloo};
  text-align: center;

  @media (max-width: ${mobileMaxBreakpoint}px) {
    font-size: 13px;
    line-height: 130%;
  }
`;

export const NoPathWrapper = styled.div`
  background: ${({ theme }) => theme.colors.silver};
  width: 100%;
  height: auto;
  display: grid;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  aspect-ratio: 2 / 3;
  object-fit: cover;
`;
