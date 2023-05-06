import styled from "styled-components";
const mobileMinBreakpoint = ({ theme }) => theme.breakpoints.mobileMin;
const mobileBreakpoint = ({ theme }) => theme.breakpoints.mobileMax;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1368px;
  margin: auto;
`;

export const Header = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  margin: 0px 0 120px 12px;
  transition: 0.5s;
  @media (max-width: ${mobileBreakpoint}px) {
    margin: 0px 0 12px 16px;
    max-width: 1368px;
    font-size: 18px;
  }
  @media (max-width: ${mobileMinBreakpoint}px) {
    margin: 0 0 24px 16px;
    font-weight: 500;
    font-size: 14px;
    line-height: 130%;
  }
`;

export const Loader = styled.div`
  align-self: center;
  width: 91px;
  height: 91px;
  /* margin: 40px; */
  margin: auto;
  border: 12px solid ${({ theme }) => theme.colors.snuff};
  border-top: 12px solid ${({ theme }) => theme.colors.black};
  border-radius: 50%;
  animation: spin 1s linear infinite;
  transition: 0.5s;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: ${mobileMinBreakpoint}px) {
    width: 35px;
    height: 35px;
    border: 4px solid ${({ theme }) => theme.colors.snuff};
    border-top: 4px solid ${({ theme }) => theme.colors.black};
  }
`;