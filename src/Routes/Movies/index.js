import {
    StyledTitle, StyledMovies, StyledMovie, StyledImg,
    StyledName, StyledYear, StyledGenre, StyledRate,
    StyledStar, StyledAvarage, StyledVotes
} from "./styled";
import star from "../../Images/star.svg";
import { useSelector } from "react-redux";
import { selectGenreList, selectGenreListState, selectMovieList, selectMovieListState } from "../../features/moveList/movieListSlice";

const Movies = () => {
    const fetchData = useSelector(selectMovieList);
    const fetchGenre = useSelector(selectGenreList);
    const loadingGeners = useSelector(selectGenreListState);
    const loadingMovies = (useSelector(selectMovieListState));
    const URL = "https://www.themoviedb.org/t/p/w440_and_h660_face/";
    
    if (loadingMovies.status === "success" && loadingGeners.status === "success") {
        const moviesList = fetchData.results;
        console.log(fetchGenre)
        return (
            <>
                <StyledTitle>
                    Popular movies
                </StyledTitle>
                <StyledMovies>
                    <StyledMovie>
                        <StyledImg src={`${URL}${moviesList[0].poster_path}`} />
                        <StyledName>
                            {moviesList[0].original_title}
                        </StyledName>
                        <StyledYear>
                            {(moviesList[0].release_date).slice(0, 4)}
                        </StyledYear>
                        <StyledGenre>
                            {moviesList[0].genre_ids}
                        </StyledGenre>
                        <StyledRate>
                            <StyledStar src={star} />
                            <StyledAvarage>
                                {moviesList[0].vote_average}
                            </StyledAvarage>
                            <StyledVotes>
                                {moviesList[0].vote_count} {moviesList[0].vote_count !== 1 ? "votes" : "vote"}
                            </StyledVotes>
                        </StyledRate>
                    </StyledMovie>
                </StyledMovies>
            </>
        )
    }
};

export default Movies;