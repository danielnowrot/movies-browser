import styled from "styled-components";
import { Link } from "react-router-dom";
const mobileMinBreakpoint = ({ theme }) => theme.breakpoints.mobileMin;

export const Wrapper = styled(Link)`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  display: block;
  transition: all 170ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  padding: 16px;
  color: ${({ theme }) => theme.colors.black};
  &:hover {
    cursor: pointer;
    transform: translateY(-4px);
    box-shadow: 0px 6px 18px 2px #c2d7ff;
  }
  &:active {
    transform: translateY(-4px);
  }
  @media (max-width: ${mobileMinBreakpoint}px) {
    padding: 8px;
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`;

export const ProfileImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
  aspect-ratio: 3 / 4;
`;

export const Name = styled.p`
  font-size: 22px;
  font-weight: 500;
  text-align: center;
  margin: 12px 0 0 0;
  color: ${({ theme }) => theme.colors.woodsmoke};
  word-break: break-word;
  @media (max-width: ${mobileMinBreakpoint}px) {
    font-size: 14px;
    margin: 8px 0 0 0;
  }
`;

export const Character = styled.div`
  font-size: 18px;
  margin-top: 8px;
  text-align: center;
  color: ${({ theme }) => theme.colors.waterloo};
  @media (max-width: ${mobileMinBreakpoint}px) {
    font-size: 13px;
    margin: 8px 0 0 0;
  }
`;