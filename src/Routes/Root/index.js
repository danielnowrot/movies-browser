import {
    StyledHeader, StyledImg, StyledTitle,
    StyledNavLink, StyledSearch, StyledBar,
    StyledLeft, StyledNav, StyledIcon, StyledInput,
    StyledSection
} from "./styled";
import camera from "../../Images/camera.svg";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <>
            <StyledHeader>
                <StyledBar>
                    <StyledLeft>
                        <StyledImg src={camera} />
                        <StyledTitle>
                            Movies Browser
                        </StyledTitle>
                    </StyledLeft>
                    <StyledNav>
                        <StyledNavLink to={`movies`}>
                            Movies
                        </StyledNavLink>
                        <StyledNavLink to={`people`}>
                            Poeple
                        </StyledNavLink>
                    </StyledNav>
                </StyledBar>
                <StyledSearch>
                    <StyledInput placeholder="Search for movies..." type="search" />
                    <StyledIcon />
                </StyledSearch>
            </StyledHeader>
            <StyledSection>
                <Outlet />
            </StyledSection>
        </>
    )
};

export default Root;