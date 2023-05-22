import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../../Images/star.svg";
const mobileMaxBreakpoint = ({ theme }) => theme.breakpoints.mobileMax;

export const TileWrapper = styled.div`
  height: 100%;
  background: #ffffff;
  display: grid;
  grid-template-rows: auto 1fr;
  transition: all 170ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  border-radius: 5px;
  padding: 16px;

  &:hover {
    cursor: pointer;
    transform: translateY(-8px);
    box-shadow: 0px 8px 20px 5px #a1bae2;
  }
  &:active {
    transform: translateY(-8px);
  }

  @media (max-width: ${mobileMaxBreakpoint}px) {
    grid-template-columns: auto 1fr;
    padding: 12px;
  }
`;

export const ImageWrapper = styled.img`
  display: flex;
  justify-content: center;
  height: auto;
  width: 100%;
  border-radius: 5px;

  @media (max-width: ${mobileMaxBreakpoint}px) {
    width: 114px;
    height: 169px;
  }
`;

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0, 8px;
  margin: 0 0 0 10px;
`;

export const Star = styled(StarIcon)`
  width: 24px;
  height: 21px;

  @media (max-width: ${mobileMaxBreakpoint}px) {
    width: 16px;
    height: 16px;
  }
`;

export const Rate = styled.span`
  color: ${({ theme }) => theme.colors.smoke};
  font-size: 16px;
  line-height: 150%;
  font-weight: 600;
  margin: 0 0 0 10px;

  @media (max-width: ${mobileMaxBreakpoint}px) {
    font-size: 13px;
    line-height: 130%;
    margin: 0 0 0 10px;
  }
`;

export const Votes = styled.span`
  color: ${({ theme }) => theme.colors.waterloo};
  font-size: 16px;
  line-height: 150%;
  margin: 0 0 0 10px;
  @media (max-width: ${mobileMaxBreakpoint}px) {
    font-size: 13px;
    line-height: 130%;
    margin: 0 0 0 10px;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;

  @media (max-width: ${mobileMaxBreakpoint}px) {
    justify-content: start;
    margin: 0 0 0 8px;
    gap: 4px;
  }
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.smoke};
  margin: 16px 0 0;

  @media (max-width: ${mobileMaxBreakpoint}px) {
    margin: 0 0 0 8px;
    font-size: 16px;
  }
`;

export const Subtitle = styled.p`
  font-weight: 400;
  font-size: 18px;
  margin: 0;
  color: ${({ theme }) => theme.colors.waterloo};

  @media (max-width: ${mobileMaxBreakpoint}px) {
    margin: 0 0 0 8px;
    font-size: 12px;
  }
`;