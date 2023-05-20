import { useNavigate } from "react-router-dom";
import {
    StyledPages, StyledButton, StyledButtonText,
    StyledButtonLeftArrow, StyledButtonRightArrow,
    StyledPageOf, StyledPage, StyledGetTotal
} from "./styled";

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
            <StyledButton disabled={disabledFirst} onClick={() => firstPage(navigate, query)}>
                <StyledButtonLeftArrow small />
                <StyledButtonLeftArrow />
                <StyledButtonText>
                    First
                </StyledButtonText>
            </StyledButton>
            <StyledButton
                disabled={disabledFirst} onClick={() => subPage(getPage, navigate, query)}>
                <StyledButtonLeftArrow small/>
                <StyledButtonText>
                    Previous
                </StyledButtonText>
            </StyledButton>
            {/* Due to talk TMDB, error occure over > 500 pages, so cant load above that */}
            <StyledPageOf>
                Page <StyledPage>{getPage}</StyledPage> of {getTotal ? (<StyledGetTotal>{getTotal}</StyledGetTotal>) : <StyledGetTotal>500</StyledGetTotal>}
            </StyledPageOf>
            <StyledButton disabled={disabledLast} onClick={() => addPage(getPage, navigate, query)}>
                <StyledButtonText>
                    Next
                </StyledButtonText>
               <StyledButtonRightArrow small/>
            </StyledButton>
            <StyledButton disabled={disabledLast} onClick={() => lastPage(navigate, query, getTotal)}>
                <StyledButtonText>
                    Last
                </StyledButtonText>
                <StyledButtonRightArrow />
                <StyledButtonRightArrow small />
            </StyledButton>
        </StyledPages>
    )
}

export const ArrowsPages = ({ getPage, getTotal, query }) => {
    const navigate = useNavigate();
    return (getPopularMoviesPages(getPage, navigate, getTotal, query))
}

export default ArrowsPages;