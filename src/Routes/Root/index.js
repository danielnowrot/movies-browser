import { StyledHeader, StyledImg, StyledTitle,
        StyledMoviesPeople, StyledSearch } from "./styled";
import camera from "../../Images/camera.svg";
 
const Root = () => {
    return (
        <StyledHeader>
            <StyledImg src={camera} />
            <StyledTitle>
                Movies Browser    
            </StyledTitle>
            <StyledMoviesPeople>
                Movies
            </StyledMoviesPeople>
            <StyledMoviesPeople>
                Poeple
            </StyledMoviesPeople>
            <StyledSearch/>
        </StyledHeader>
    )
};

export default Root;