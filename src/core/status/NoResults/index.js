import { Wrapper, Title, NoSearchImage } from "./styled";

export const NoResults = ({ query }) => {
    return (
        <Wrapper>
            <Title>Sorry, there are no results for "{query}"</Title>
            <NoSearchImage/>
        </Wrapper>
    );
};