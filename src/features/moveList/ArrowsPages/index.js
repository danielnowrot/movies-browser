import { useNavigate } from "react-router-dom";
import { StyledPages, StyledButton } from "./styled";
import leftArrow from "../../../Images/leftArrow.svg";
import rightArrow from "../../../Images/rightArrow.svg";

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

const getPopularMoviesPages = (getPage, navigate, getTotal) => {
    let disabledFirst = false;
    let disabledLast = false

    if (getPage < 2 || getPage === getTotal) {
        disabledFirst = true;
    }

    if (getPage > 499 || getPage === getTotal) {
        disabledLast = true;
    }

    return (
        <StyledPages>
            <StyledButton disabled={disabledFirst} onClick={() => firstPage(navigate)}> <img src={leftArrow} alt="arrow" /> First</StyledButton>
            <StyledButton disabled={disabledFirst} onClick={() => subPage(getPage, navigate)}> <img src={leftArrow} alt="arrow" /> Previous</StyledButton>
            {/* Due to talk TMDB, error occure over > 500 pages so cant load above that */}
            <div>Page {getPage} of {getTotal ? getTotal : 500}</div>
            <StyledButton disabled={disabledLast} onClick={() => addPage(getPage, navigate)}>Next <img src={rightArrow} alt="arrow" /> </StyledButton>
            <StyledButton disabled={disabledLast} onClick={() => lastPage(navigate)}>Last <img src={rightArrow} alt="arrow" /> </StyledButton>
        </StyledPages>
    )
}

export const ArrowsPages = ({getPage, getTotal}) => {
    const navigate = useNavigate();
    return (getPopularMoviesPages(getPage, navigate, getTotal))
}

export default ArrowsPages;