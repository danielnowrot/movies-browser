import {
  StyledTitle,
  StyledMovies,
  StyledMovie,
  StyledImg,
  StyledName,
  StyledYear,
  StyledGenres,
  StyledRate,
  StyledStar,
  StyledAvarage,
  StyledVotes,
  StyledGenre,
} from "./styled";
import star from "../../Images/star.svg";
import { useSelector } from "react-redux";
import {
  selectMovieList,
  selectMovieListState,
} from "../../features/moveList/movieListSlice";
import {
  selectGenreList,
  selectGenreListState,
} from "../../features/genreList/genreListSlice";

const Movies = () => {
  const fetchData = useSelector(selectMovieList);
  const fetchGenre = useSelector(selectGenreList);
  const loadingGeners = useSelector(selectGenreListState);
  const loadingMovies = useSelector(selectMovieListState);
  const URL = "https://www.themoviedb.org/t/p/w440_and_h660_face/";

  if (
    loadingMovies.status === "success" &&
    loadingGeners.status === "success"
  ) {
    const moviesList = fetchData.results;
    const genreList = fetchGenre.genres;
    const genres = [];

    return (
      <>
        <StyledTitle>Popular movies</StyledTitle>
        <StyledMovies>
          {moviesList.map((movie) => {
            return (
              <StyledMovie key={movie.id}>
                <StyledImg src={`${URL}${movie.poster_path}`} />
                <StyledName>{movie.original_title}</StyledName>
                <StyledYear>{movie.release_date.slice(0, 4)}</StyledYear>
                <StyledGenres>
                  {movie.genre_ids.forEach((element, index) => {
                    genres[index] = genreList
                      .filter(({ id }) => id === element)
                      .map(({ name }) => name);
                  })}
                  {genres.map((list, index) => (
                    <StyledGenre key={index}>{list}</StyledGenre>
                  ))}
                </StyledGenres>
                <StyledRate>
                  <StyledStar src={star} />
                  <StyledAvarage>{movie.vote_average}</StyledAvarage>
                  <StyledVotes>
                    {movie.vote_count}{" "}
                    {movie.vote_count !== 1 ? "votes" : "vote"}
                  </StyledVotes>
                </StyledRate>
              </StyledMovie>
            );
          })}
        </StyledMovies>
      </>
    );
  }
};

export default Movies;
