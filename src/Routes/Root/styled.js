import styled from "styled-components";
import magnifyingGlass from "../../Images/magniyfying-glass.svg";
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    gap: 40px;
    padding: 0 12px;
    justify-content: space-around;
    height: ${({ theme }) => theme.topBar.thick}px;
    background-color: ${({ theme }) => theme.topBar.woodSmoke};

    @media (max-width: ${({ theme }) => theme.topBar.mediaSizeS}px) {
        flex-wrap: wrap;
        height: ${({ theme }) => theme.topBar.mediaThickS}px;
        align-content: center;
        justify-content: center;
        gap: 24px;
    }

    @media (max-width: ${({ theme }) => theme.topBar.mediaSizeL}px) and 
        (min-width: ${({ theme }) => theme.topBar.mediaSizeS}px) {
        height: ${({ theme }) => theme.topBar.mediaThickS}px;
        flex-wrap: wrap;
        gap: 0px;
    }
`;

export const StyledBar = styled.div`
    display: flex;
    flex-basis: 516px;
    justify-content: space-between;
    align-items: center;
    gap: 12px;

    @media (max-width: ${({ theme }) => theme.topBar.mediaSizeS}px) {
        flex-basis: 288px;
    }
`;

export const StyledMoviesBrowser = styled.div`
    display: flex;
    gap: 12px;
`;

export const StyledNav = styled.nav`
    display: flex;
    gap: 16px;
`;

export const StyledImg = styled.img`
    width: 40px;
    height: 40px;

    @media (max-width: ${({ theme }) => theme.topBar.mediaSizeS}px) {
    width: 17px;
    height: 17px;    
    }
`;

export const StyledTitle = styled.div`
    color: #FFFFFF;
    font-weight: 500;
    font-size: 24px;
    line-height: 40px;
    letter-spacing: -1.5px;
    text-transform: capitalize;

    @media (max-width: ${({ theme }) => theme.topBar.mediaSizeS}px) {
        font-size: 13px;
        line-height: 130%;
    }
`;

export const StyledNavLink = styled(NavLink)`
    color: white;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    padding: 14px 24px;
    background-color: ${({ theme }) => theme.topBar.woodSmoke};
    text-transform: uppercase;
    text-decoration: none;
    
    &.active {
        outline: 1px solid #FFFFFF;
        border-radius: 24px;
    }

    @media (max-width: ${({ theme }) => theme.topBar.mediaSizeS}px) {
        font-size: 12px;
        line-height: 18px;
        padding: 8px 12px;
    }
`;

export const StyledSearch = styled.div`
    position: relative;
`;

export const StyledInput = styled.input`
    border: 1px solid #E4E6F0;
    border-radius: 33px;
    width: 432px;
    height: 48px;
    padding-left: 64px;
    padding-right: 16px;

    @media (max-width: ${({ theme }) => theme.topBar.mediaSizeS}px) {
    width: 288px;
    padding-left: 40px;
    }
`;

export const StyledIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 26px;
  transform: translateY(-50%);
  width: 19px;
  height: 19px;
  background-image: url(${magnifyingGlass});
  background-repeat: no-repeat;
  background-size: contain;

  @media (max-width: ${({ theme }) => theme.topBar.mediaSizeS}px) {
    width: 13px;
    height: 13px;
    left: 16px;
    }
`;

export const StyledSection = styled.section`

`;