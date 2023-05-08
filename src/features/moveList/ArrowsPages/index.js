import { useNavigate } from "react-router-dom";
import { StyledPages, StyledButton } from "./styled";
import leftArrow from "../../../Images/leftArrow.svg";
import rightArrow from "../../../Images/rightArrow.svg";

const firstPage = (navigate, query) => {
    query !== undefined ?
        navigate(`/movies/page/1?search=${query}`) :
        navigate(`/movies/page/1`)
}

const lastPage = (navigate, query, getTotal) => {
    query !== undefined ?
        navigate(`/movies/page/${getTotal}?search=${query}`) :
        navigate(`/movies/page/500`)
}

const addPage = (getPage, navigate, query) => {
    query !== undefined ?
        navigate(`/movies/page/${(+getPage + 1)}?search=${query}`) :
        navigate(`/movies/page/${(+getPage + 1)}`)
}

const subPage = (getPage, navigate, query) => {
    query !== undefined ?
        navigate(`/movies/page/${(+getPage - 1)}?search=${query}`) :
        navigate(`/movies/page/${(+getPage - 1)}`)
}

const getPopularMoviesPages = (getPage, navigate, getTotal, query) => {
    let disabledFirst = false;
    let disabledLast = false
    
    if (getPage < 2) {
        disabledFirst = true;
    }

    if (getPage > 499 || +getPage === getTotal) {
        disabledLast = true;
    }

    return (
        <StyledPages>
            <StyledButton disabled={disabledFirst} onClick={() => firstPage(navigate, query)}> <img src={leftArrow} alt="arrow" /> First</StyledButton>
            <StyledButton disabled={disabledFirst} onClick={() => subPage(getPage, navigate, query)}> <img src={leftArrow} alt="arrow" /> Previous</StyledButton>
            {/* Due to talk TMDB, error occure over > 500 pages so cant load above that */}
            <div>Page {getPage} of {getTotal ? getTotal : 500}</div>
            <StyledButton disabled={disabledLast} onClick={() => addPage(getPage, navigate, query)}>Next <img src={rightArrow} alt="arrow" /> </StyledButton>
            <StyledButton disabled={disabledLast} onClick={() => lastPage(navigate, query, getTotal)}>Last <img src={rightArrow} alt="arrow" /> </StyledButton>
        </StyledPages>
    )
}

export const ArrowsPages = ({ getPage, getTotal, query }) => {
    const navigate = useNavigate();
    return (getPopularMoviesPages(getPage, navigate, getTotal, query))
}

export default ArrowsPages;