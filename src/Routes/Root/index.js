import {
    StyledHeader, StyledImg, StyledTitle,
    StyledNavLink, StyledSearch, StyledBar,
    StyledMoviesBrowser, StyledNav, StyledIcon, StyledInput,
    StyledSection,
    StyledPages
} from "./styled";
import camera from "../../Images/camera.svg";
import { Outlet, useLocation, Form, useSubmit, useNavigate } from "react-router-dom"
import { searchQueryParamName } from "../../features/useQueryParameter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosMovieList, selectMovieList } from "../../features/moveList/movieListSlice";

const getPages = ({page, total_pages}) => {
    return (
        <StyledPages>
            <div>Page {page} of {total_pages}</div>
        </StyledPages>
    )
}

const Root = () => {
    const getMovies = useSelector(selectMovieList);

    const location = useLocation();
    const splitLocation = location.pathname.split('/');
    const submit = useSubmit();
    const navigate = useNavigate();

    const searchMovie = (new URLSearchParams(location.search)).get(searchQueryParamName) || null;

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
                <Outlet context={"test"}/>
            </StyledSection>
            {splitLocation[1] === "movies" && getMovies !== null ? getPages(getMovies) : ""}
        </>
    )
};

export default Root;
