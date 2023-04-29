import { StyledTitle, StyledMovies, StyledMovie, StyledImg,
        StyledName, StyledYear, StyledGenre, StyledRate } from "./styled";
import img from "../../Images/test.jpg";

const Movies = () => {
    return (
        <>
            <StyledTitle>
                Popular movies
            </StyledTitle>
            <StyledMovies>
                <StyledMovie>
                    <StyledImg src={img}/>
                    <StyledName>

                    </StyledName>
                    <StyledYear>

                    </StyledYear>
                    <StyledGenre>

                    </StyledGenre>
                    <StyledRate>

                    </StyledRate>
                </StyledMovie>
            </StyledMovies>
        </>
    )
};

export default Movies;