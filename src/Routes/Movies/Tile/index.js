import { StyledContainer, StyledMovieLink, StyledImg,
    StyledDetails, StyledName, StyledYear, StyledGenres,
    StyledGenre, StyledRate, StyledAvarage, StyledVotes,
    StyledStar } from "./styled";
import star from "../../../Images/star.svg"
import noPicture from "../../../Images/noPicture.png";

export const MovieTile = ({ moviesList, genreList }) => {
    const URL = "https://www.themoviedb.org/t/p/w440_and_h660_face/";
    const genres = [];

    return (
        moviesList.map(movie => {
            return (
                <StyledMovieLink key={movie.id} to={`${movie.id}`}>
                    <StyledImg src={movie.poster_path ? `${URL}${movie.poster_path}` : noPicture} />
                    <StyledContainer>
                        <StyledDetails>
                            <StyledName>
                                {movie.original_title}
                            </StyledName>
                            <StyledYear>
                                {movie.release_date !== undefined ? (movie.release_date).slice(0, 4) : ""}
                            </StyledYear>
                            <StyledGenres>
                                {(movie.genre_ids).forEach((element, index) => {
                                    genres[index] = (genreList.filter(({ id }) => id === element)).map(({ name }) => name)
                                })}
                                {genres.map((list, index) => <StyledGenre key={index}>{list}</StyledGenre>)}
                            </StyledGenres>
                        </StyledDetails>
                        <StyledRate>
                            <StyledStar src={star} />
                            <StyledAvarage>
                                {(movie.vote_average).toFixed(1)}
                            </StyledAvarage>
                            <StyledVotes>
                                {movie.vote_count} {movie.vote_count !== 1 ? "votes" : "vote"}
                            </StyledVotes>
                        </StyledRate>
                    </StyledContainer>
                </StyledMovieLink>
            )
        })
    )
}

export default MovieTile;