import {
    StyledHeader, StyledImg, StyledTitle,
    StyledNavLink, StyledSearch, StyledBar,
    StyledMoviesBrowser, StyledNav, StyledIcon, StyledInput,
    StyledSection
} from "./styled";
import camera from "../../Images/camera.svg";
import { Outlet, useLocation, Form, useSubmit, useNavigate } from "react-router-dom"
import { searchQueryParamName } from "../../features/useQueryParameter";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { axiosMovieList } from "../../features/moveList/movieListSlice";

const Root = () => {
    const location = useLocation();
    const submit = useSubmit();
    const navigate = useNavigate();

    const searchMovie = (new URLSearchParams(location.search)).get(searchQueryParamName);

    const onInputChange = ({ currentTarget }) => {
        if (currentTarget.value.trim() === "") {
            return navigate(location.pathname === "/movies" ? "/movies" : location.pathname === "/people" ? "/people" : "");
        }

        submit(currentTarget.form)
    };

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(axiosMovieList());
    },[searchMovie])

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
                        <StyledNavLink to={`movies`}>
                            Movies
                        </StyledNavLink>
                        <StyledNavLink to={`people`}>
                            Poeple
                        </StyledNavLink>
                    </StyledNav>
                </StyledBar>
                <StyledSearch>
                    <Form autoComplete="off" action={location.pathname === "/movies" ? "/movies" : location.pathname === "/people" ? "/people" : ""}>
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
                <Outlet />
            </StyledSection>
        </>
    )
};

export default Root;
