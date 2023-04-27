import {
    StyledHeader, StyledImg, StyledTitle,
    StyledMoviesPeople, StyledSearch, StyledBar,
    StyledLeft, StyledRight
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
            <StyledSearch placeholder="Search for movies..." />
        </StyledHeader>
    )
};

export default Root;