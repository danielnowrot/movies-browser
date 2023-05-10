import {
    StyledTitle, StyledMovies
} from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { axiosMovieList, selectMovieList, selectMovieListStatus } from "../../features/moveList/movieListSlice";
import { selectGenreList, selectGenreListStatus } from "../../features/genreList/genreListSlice";
import { Error } from "../../core/status/Error";
import { Loading } from "../../core/status/Loading";
import { useLocation } from "react-router-dom";
import { searchQueryParamName } from "../../features/useQueryParameter";
import { useEffect, useState } from "react";
import { axiosSearchParamsMovie, selectSearchParamsMovieList } from "../../features/searchParams/searchParamsSlice";
import MovieTile from "./Tile";
import { NoResults } from "../../core/status/NoResults";
import ArrowsPages from "../../features/moveList/ArrowsPages";

const getSearchMovie = (fetchMoviesSearch, loadingMoviesSearch, fetchMovieGenre, loadingGeners, searchParams, getPage, URLPage) => {
    if (loadingMoviesSearch === "success" && loadingGeners === "success" && fetchMoviesSearch !== null) {
        const moviesList = fetchMoviesSearch.results;
        const genreList = fetchMovieGenre.genres;

        if (moviesList.length === 0) {
            return <NoResults query={searchParams} />
        }
        return (
            <>
                <StyledMovies>
                    <StyledTitle>
                        Search results for "{searchParams}" ({moviesList.length})
                    </StyledTitle>
                    <MovieTile moviesList={moviesList} genreList={genreList} />
                </StyledMovies>
                <ArrowsPages getPage={getPage} getTotal={fetchMoviesSearch.total_pages} query={searchParams}/>
            </>
        )
    }

    return (
        loadingMoviesSearch === "loading" || loadingGeners === "loading" ?
            <Loading /> :
            loadingMoviesSearch === "error" || loadingGeners === "error" ?
                <Error /> :
                null
    )
}

const getPopularMovies = (fetchMovieData, fetchMovieGenre, loadingMovies, loadingGeners, getPage) => {
    if (loadingMovies === "success" && loadingGeners === "success") {
        const moviesList = fetchMovieData.results;
        const genreList = fetchMovieGenre.genres;
        return (
            <>
                <StyledMovies>
                    <StyledTitle>
                        Popular movies
                    </StyledTitle>
                    <MovieTile moviesList={moviesList} genreList={genreList} />
                </StyledMovies>
                <ArrowsPages getPage={getPage}/>
            </>
        )
    }
    else {
        return (
            loadingMovies === "loading" || loadingGeners === "loading" ?
                <Loading /> :
                loadingMovies === "error" || loadingGeners === "error" ?
                    <Error /> :
                    null
        )
    }
}

const Movies = () => {
    const [getPage, setGetPage] = useState(1)

    const dispatch = useDispatch();
    const location = useLocation();
    const splitLocation = location.pathname.split('/');

    const URLPage = splitLocation[3];
    
    useEffect(() => {
        setGetPage(previousPage => previousPage = URLPage);
    }, [URLPage])

    const fetchMovieData = useSelector(selectMovieList);
    const fetchMovieGenre = useSelector(selectGenreList);
    const fetchMoviesSearch = useSelector(selectSearchParamsMovieList);

    const loadingMoviesSearch = useSelector(selectMovieListStatus);
    const loadingGeners = useSelector(selectGenreListStatus);
    const loadingMovies = (useSelector(selectMovieListStatus));

    const searchParams = (new URLSearchParams(location.search)).get(searchQueryParamName);

    useEffect(() => {
        dispatch(axiosSearchParamsMovie([searchParams, getPage]))
    }, [searchParams, getPage, dispatch])

    useEffect(() => {
        dispatch(axiosMovieList(getPage))
    }, [getPage, dispatch])

    return searchParams === null ?
        getPopularMovies(fetchMovieData, fetchMovieGenre, loadingMovies, loadingGeners, getPage) :
        getSearchMovie(fetchMoviesSearch, loadingMoviesSearch, fetchMovieGenre, loadingGeners, searchParams, getPage);
};

export default Movies;