import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../../Images/star.svg";
const mobileMaxBreakpoint = ({ theme }) => theme.breakpoints.mobileMax;

export const TileWrapper = styled.div`
  height: 100%;
  background: #ffffff;
  display: flex;
  grid-template-rows: auto 1fr;
  transition: all 170ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  border-radius: 5px;
  padding: 40px;
  margin: 64px 0;

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
  border-radius: 5px;
  margin-right: 40px;
  max-height: 464px;

  @media (max-width: ${mobileMaxBreakpoint}px) {
    width: 114px;
    height: 169px;
    margin-right: 16px;
  }
`;

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0, 8px;
  margin-bottom: 24px;

  @media (max-width: ${mobileMaxBreakpoint}px) {
    margin-bottom: 19px;
  }
`;

export const Star = styled(StarIcon)`
  width: 24px;
  height: 23px;
  margin-right: 8px;

  @media (max-width: ${mobileMaxBreakpoint}px) {
    width: 16px;
    height: 15px;
  }
`;

export const Rate = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  margin-right: 8px;

  @media (max-width: ${mobileMaxBreakpoint}px) {
    font-size: 13px;
    line-height: 130%;
    font-weight: 600;
  }
`;

export const Ten = styled.span`
  font-size: 14px;
  line-height: 120%;
  padding-top: 2px;
  margin-right: 12px;

  @media (max-width: ${mobileMaxBreakpoint}px) {
    display: none;
  }
`;

export const Votes = styled.span`
  font-size: 14px;
  line-height: 120%;
  padding-top: 2px;

  @media (max-width: ${mobileMaxBreakpoint}px) {
    font-size: 13px;
    line-height: 130%;
    color: ${({ theme }) => theme.colors.waterloo};
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: 20px;
  line-height: 160%;

  @media (max-width: ${mobileMaxBreakpoint}px) {
    justify-content: start;
  }
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 36px;
  color: ${({ theme }) => theme.colors.smoke};
  margin: 0 0 24px;
  line-height: 120%;

  @media (max-width: ${mobileMaxBreakpoint}px) {
    margin: 0 0 4px;
    font-weight: 500;
    font-size: 16px;
    line-height: 130%;
  }
`;

export const Subtitle = styled.p`
  margin: 0 0 24px;
  font-size: 22px;
  line-height: 120%;

  @media (max-width: ${mobileMaxBreakpoint}px) {
    font-size: 13px;
    line-height: 130%;
    color: ${({ theme }) => theme.colors.waterloo};
    margin: 0 0 8px;
  }
`;

export const CountryWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Production = styled.p`
  color: ${({ theme }) => theme.colors.stormGray};
  font-size: 18px;
  line-height: 120%;
  margin: 0 0 8px;

  @media (max-width: ${mobileMaxBreakpoint}px) {
    display: none;
  }
`;

export const Country = styled.span`
  font-size: 18px;
  line-height: 120%;
  margin: 0 0 8px;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${mobileMaxBreakpoint}px) {
    font-size: 12px;
    line-height: 130%;
  }
`;

export const ReleaseDate = styled.p`
  color: ${({ theme }) => theme.colors.stormGray};
  font-size: 18px;
  line-height: 120%;
  margin: 0 0 24px;

  @media (max-width: ${mobileMaxBreakpoint}px) {
    display: none;
  }
`;

export const FullDate = styled.span`
  font-size: 18px;
  line-height: 120%;
  margin: 0 0 24px;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${mobileMaxBreakpoint}px) {
    font-size: 12px;
    line-height: 130%;
    margin: 0 0 8px;
  }
`;

export const Overview = styled.p`
  margin: 0px;
  font-size: 20px;
  line-height: 160%;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${mobileMaxBreakpoint}px) {
    font-size: 14px;
  }
`;
