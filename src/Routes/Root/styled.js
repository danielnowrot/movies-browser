import styled from "styled-components";
import magnifyingGlass from "../../Images/magniyfying-glass.svg";

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 0 12px;
    justify-content: space-around;
    height: ${({ theme }) => theme.topBar.thick}px;
    background-color: ${({ theme }) => theme.topBar.woodSmoke};
`;

export const StyledBar = styled.div`
    display: flex;
    flex-basis: 516px;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
`

export const StyledLeft = styled.div`
    display: flex;
    gap: 12px;
`

export const StyledRight = styled.div`
    display: flex;
    gap: 16px;
`

export const StyledImg = styled.img`
`

export const StyledTitle = styled.div`
    color: #FFFFFF;
    font-weight: 500;
    font-size: 24px;
    line-height: 40px;
    letter-spacing: -1.5px;
    text-transform: capitalize;
`

export const StyledMoviesPeople = styled.div`
    color: white;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    padding: 13.5px 24px;
    text-transform: uppercase;
    border: 1px solid #FFFFFF;
    border-radius: 24px;
`

export const StyledSearch = styled.div`
    position: relative;
`

export const StyledInput = styled.input`
    border: 1px solid #E4E6F0;
    border-radius: 33px;
    width: 432px;
    height: 48px;
    padding-left: 64px;
    padding-right: 16px;
`

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
`;