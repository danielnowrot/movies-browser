import { StyledMovieLink } from "./styled";
import { StyledImg } from "./styled";
import { StyledDetails } from "./styled";
import { StyledName } from "./styled";
import { StyledYear } from "./styled";
import { StyledGenres } from "./styled";
import { StyledGenre } from "./styled";
import { StyledRate } from "./styled";
import { StyledAvarage } from "./styled";
import { StyledVotes } from "./styled";
import { StyledStar } from "./styled";
import star from "../../../Images/star.svg"

export const MovieTile = ({ moviesList, genreList }) => {
    const URL = "https://www.themoviedb.org/t/p/w440_and_h660_face/";
    const genres = [];

    return (
        moviesList.map(movie => {
            return (
                <StyledMovieLink key={movie.id} to={`${movie.id}`}>
                    <StyledImg src={`${URL}${movie.poster_path}`} />
                    <StyledDetails>
                        <StyledName>
                            {movie.original_title}
                        </StyledName>
                        <StyledYear>
                            {(movie.release_date).slice(0, 4)}
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
                            {movie.vote_average}
                        </StyledAvarage>
                        <StyledVotes>
                            {movie.vote_count} {movie.vote_count !== 1 ? "votes" : "vote"}
                        </StyledVotes>
                    </StyledRate>
                </StyledMovieLink>
            )
        })
    )
}

export default MovieTile;