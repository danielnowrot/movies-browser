import {
    StyledHeader, StyledImg, StyledTitle,
    StyledMoviesPeople, StyledSearch, StyledBar,
    StyledLeft, StyledRight, StyledIcon, StyledInput
} from "./styled";
import camera from "../../Images/camera.svg";

const Root = () => {
    return (
        <StyledHeader>
            <StyledBar>
                <StyledLeft>
                    <StyledImg src={camera} />
                    <StyledTitle>
                        Movies Browser
                    </StyledTitle>
                </StyledLeft>
                <StyledRight>
                    <StyledMoviesPeople>
                        Movies
                    </StyledMoviesPeople>
                    <StyledMoviesPeople>
                        Poeple
                    </StyledMoviesPeople>
                </StyledRight>
            </StyledBar>
            <StyledSearch>
                <StyledInput placeholder="Search for movies..." type="search" />
                <StyledIcon />
            </StyledSearch>
        </StyledHeader>
    )
};

export default Root;