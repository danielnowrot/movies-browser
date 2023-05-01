import styled from "styled-components";
import { ReactComponent as NoSearch } from "../../../Images/NoResults.svg";
const mobileMinBreakpoint = ({ theme }) => theme.breakpoints.mobileMax;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1368px;
  margin: auto;
`;
export const Title = styled.h1`
  margin: 0 0 40px 12px;
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  transition: 0.5s;

  @media (max-width: ${mobileMinBreakpoint}px) {
    margin-bottom: 10px;
    font-weight: 500;
    font-size: 20px;
    line-height: 130%;
  }
`;

export const NoSearchImage = styled(NoSearch)`
  align-self: center;
  transition: 0.5s;
  
  @media (max-width: ${mobileMinBreakpoint}px) {
    scale: 50%;
  }
`;