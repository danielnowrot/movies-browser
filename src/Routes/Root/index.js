import {
    StyledHeader, StyledImg, StyledTitle,
    StyledNavLink, StyledSearch, StyledBar,
    StyledMoviesBrowser, StyledNav, StyledIcon, StyledInput,
    StyledSection,
    StyledPages,
    StyledButton
} from "./styled";
import camera from "../../Images/camera.svg";
import { Outlet, useLocation, Form, useSubmit, useNavigate } from "react-router-dom"
import { searchQueryParamName } from "../../features/useQueryParameter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosMovieList, selectMovieList } from "../../features/moveList/movieListSlice";
import { useState } from "react";
import leftArrow from "../../Images/leftArrow.svg";
import rightArrow from "../../Images/rightArrow.svg"

const firstPage = (navigate) => {
    navigate(`/movies/page/1`)
}

const lastPage = (navigate) => {
    navigate(`/movies/page/500`)
}

const addPage = (getPage, navigate) => {
    navigate(`/movies/page/${(+getPage + 1)}`)
}

const subPage = (getPage, navigate) => {
    navigate(`/movies/page/${(+getPage - 1)}`)
}

const getPopularMoviesPages = (getPage, navigate) => {
    let disabledFirst = false;
    let disabledLast = false

    if(getPage < 2 ) {
        disabledFirst = true;
    }

    if(getPage > 499 ) {
        disabledLast = true;
    }

    return (
        <StyledPages>
            <StyledButton disabled={disabledFirst} onClick={() => firstPage(navigate)}> <img src={leftArrow}/> First</StyledButton>
            <StyledButton disabled={disabledFirst} onClick={() => subPage(getPage, navigate)}> <img src={leftArrow}/> Previous</StyledButton>
            {/* Due to talk TMDB, error occure over > 500 pages so cant load above that */}
            <div>Page {getPage} of 500</div>
            <StyledButton disabled={disabledLast} onClick={() => addPage(getPage, navigate)}>Next <img src={rightArrow}/> </StyledButton>
            <StyledButton disabled={disabledLast} onClick={() => lastPage(navigate)}>Last <img src={rightArrow}/> </StyledButton>
        </StyledPages>
    )
}

const Root = () => {
    const [getPage, setGetPages] = useState(1)

    const getMovies = useSelector(selectMovieList);
    const location = useLocation();
    const splitLocation = location.pathname.split('/');
    const submit = useSubmit();
    const navigate = useNavigate();
    
    const searchMovie = (new URLSearchParams(location.search)).get(searchQueryParamName) || null;
    const URLPage = splitLocation[3];

    const onInputChange = ({ currentTarget }) => {
        if (currentTarget.value.trim() === "") {
            return navigate(location.pathname === "/movies/page/1" ? "/movies/page/1" : location.pathname === "/people" ? "/people" : "");
        }

        submit(currentTarget.form)
    };

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(axiosMovieList());
    }, [searchMovie])

    useEffect(() => {
        setGetPages(previousPage => previousPage = URLPage);
    }, [URLPage])

    return (
        <>
            <StyledHeader>
                <StyledBar>
                    <StyledMoviesBrowser>
                        <StyledImg src={camera} />
                        <StyledTitle>
                            Movies Browser
                        </StyledTitle>
                    </StyledMoviesBrowser>
                    <StyledNav>
                        <StyledNavLink to={`movies/page/1`}>
                            Movies
                        </StyledNavLink>
                        <StyledNavLink to={`people`}>
                            Poeple
                        </StyledNavLink>
                    </StyledNav>
                </StyledBar>
                <StyledSearch>
                    <Form autoComplete="off" action={location.pathname === "/movies/page/1" ? "/movies/page/1" : location.pathname === "/people" ? "/people" : ""}>
                        <StyledInput
                            placeholder={location.pathname === "/movies" ? "Search for movies..." : location.pathname === "/people" ? "Search for people..." : ""}
                            name={searchQueryParamName}
                            type="search"
                            disabled={location.pathname === "/" ? true : false}
                            value={searchMovie || ""}
                            onChange={onInputChange} />
                    </Form>
                    <StyledIcon />
                </StyledSearch>
            </StyledHeader>
            <StyledSection>
                <Outlet context={getPage} />
            </StyledSection>
            {splitLocation[1] === "movies" && getMovies !== null ? getPopularMoviesPages(getPage, navigate) : ""}
        </>
    )
};

export default Root;
