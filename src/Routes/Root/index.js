import { StyledHeader, StyledImg, StyledTitle } from "./styled";
import camera from "../../Images/camera.svg";

const Root = () => {
    return (
        <StyledHeader>
            <StyledImg src={camera} />
            <StyledTitle>
                Movies Browser
            </StyledTitle>
        </StyledHeader>
    )
};

export default Root;