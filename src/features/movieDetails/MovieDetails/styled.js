import styled from "styled-components";

import { PhotoBackdrop } from "./photoBackdrop";
import { ReactComponent as StarIcon } from "../../../Images/star.svg";

const pathPhoto1280 = "https://image.tmdb.org/t/p/w1280/";
const pathPhoto780 = "https://image.tmdb.org/t/p/w780/";
const pathPhoto300 = "https://image.tmdb.org/t/p/w300/";

const mobileMaxBreakpoint = ({ theme }) => theme.breakpoints.mobileMax;

export const Wrapper = styled.div`
  padding: 0 24px;
  max-width: 1368px;
  margin: auto;

  @media (max-width: ${mobileMaxBreakpoint}px) {
    padding: 0 16px;
  }
`;

export const StyledPhotoBackdrop = styled.div`
  max-width: 1368px;
  margin: auto;
  height: 770px;
  background-image: url("${pathPhoto1280}${PhotoBackdrop}");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  display: grid;
  align-content: end;
  color: ${({ theme }) => theme.colors.white};
  box-shadow: rgb(0, 0, 0) 0px 0px 6vw 5.5vw inset;
  @media (max-width: ${mobileMaxBreakpoint}px) {
    background-image: url("${pathPhoto780}${PhotoBackdrop}");
  }
`;

export const OriginalTitle = styled.h1`
  font-size: 64px;
  line-height: 120%;
  margin-bottom: 25px;

  @media (max-width: ${mobileMaxBreakpoint}px) {
    font-size: 24px;
  }
`;

export const Background = styled.div`
  margin-top: -56px;
  background: black;
`;

export const VoteArea = styled.div`
  display: flex;
`;

export const StyledStarIcon = styled(StarIcon)`
  width: 40px;
  height: 38px;

  @media (max-width: ${mobileMaxBreakpoint}px) {
    width: 16px;
    height: 15px;
  }
`;

export const Vote = styled.span`
  font-weight: 500;
  font-size: 30px;
  line-height: 130%;
  margin-left: 8px;
  display: flex;
  align-items: center;

  @media (max-width: ${mobileMaxBreakpoint}px) {
    font-weight: 600;
    font-size: 13px;
  }
`;

export const Ten = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  display: flex;
  align-items: center;
  padding-top: 8px;

  @media (max-width: ${mobileMaxBreakpoint}px) {
    font-size: 10px;
    padding-top: 1px;
  }
`;

export const VotesAmount = styled.p`
  font-size: 16px;
  line-height: 120%;
  margin: 17px 0 56px;

  @media (max-width: ${mobileMaxBreakpoint}px) {
    font-size: 13px;
    line-height: 130%;
  }
`;
