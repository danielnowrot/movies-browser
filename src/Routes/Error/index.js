import { useRouteError } from "react-router-dom";
import { StyledDiv } from "./styled";

const Error = () => {
    const error = useRouteError();

    return (
        <StyledDiv>
            <h1>Oops...!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </StyledDiv>
    )
}

export default Error;