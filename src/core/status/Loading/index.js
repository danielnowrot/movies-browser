import { Header, Loader, Wrapper } from "./styled";
import { Main } from "../../Main";
import { useSearchParams } from "react-router-dom";
import { searchQueryParamName } from "../../../features/useQueryParameter";

export const Loading = () => {
    const [searchParams] = useSearchParams({[searchQueryParamName]: "" });
    const query = searchParams.get(searchQueryParamName);
    const content = query ? `Search results for "${query}"` : null;

    return (
        <>
            <Main>
                <Wrapper>
                    <Header>
                        {content}
                        <Loader />
                    </Header>
                </Wrapper>
            </Main>
        </>
    );
};