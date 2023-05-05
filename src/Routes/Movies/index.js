import {
    StyledTitle, StyledMovies, StyledMovieLink, StyledImg,
    StyledName, StyledYear, StyledGenres, StyledRate,
    StyledStar, StyledAvarage, StyledVotes, StyledGenre,
    StyledDetails
} from "./styled";
import star from "../../Images/star.svg";
import { useSelector } from "react-redux";
import { selectMovieList, selectMovieListStatus } from "../../features/moveList/movieListSlice";
import { selectGenreList, selectGenreListStatus } from "../../features/genreList/genreListSlice";
import { Error } from "../../core/status/Error";
import { Loading } from "../../core/status/Loading";

const Movies = () => {
    const fetchData = useSelector(selectMovieList);
    const fetchGenre = useSelector(selectGenreList);
    const loadingGeners = useSelector(selectGenreListStatus);
    const loadingMovies = (useSelector(selectMovieListStatus));
    const URL = "https://www.themoviedb.org/t/p/w440_and_h660_face/";

    if (loadingMovies === "success" && loadingGeners === "success") {
        const moviesList = fetchData.results;
        const genreList = fetchGenre.genres;
        const genres = [];

        return (
            <>
                <StyledMovies>
                    <StyledTitle>
                        Popular movies
                    </StyledTitle>
                    {moviesList.map(movie => {
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
                                    <StyledRate>
                                        <StyledStar src={star} />
                                        <StyledAvarage>
                                            {movie.vote_average}
                                        </StyledAvarage>
                                        <StyledVotes>
                                            {movie.vote_count} {movie.vote_count !== 1 ? "votes" : "vote"}
                                        </StyledVotes>
                                    </StyledRate>
                                </StyledDetails>
                            </StyledMovieLink>
                        )
                    })}
                </StyledMovies>
            </>
        )
    }
    if (loadingMovies === "error" || loadingGeners === "error") {
        return <Error />
    }
    if (loadingMovies === "loading" || loadingGeners === "loading") {
        return <Loading />
    }
};

export default Movies;