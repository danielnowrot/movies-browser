import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../../core/Container";
import { SectionTitle } from "../../../core/SectionTitle";
import { PersonTile } from "../PersonTile";
import {
    axiosPersonCreditsLoading,
    selectPersonCredits,
    selectPersonCreditsStatus,
    selectPersonCreditsTotalPages,
    selectPersonCreditsResults
} from "../personCreditsSlice";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const PopularPeople = () => {
    const dispatch = useDispatch();
    const people = useSelector(selectPersonCredits);
    const stateOfLoading = useSelector(selectPersonCreditsStatus);
    const totalPages = useSelector(selectPersonCreditsTotalPages);
    const totalResults = useSelector(selectPersonCreditsResults);

    const [searchParams] = useSearchParams({ page: 1});
    const page = Number(searchParams.get("page")) || 1;
    const query = searchParams.get(searchQueryParamName) || null;

    useEffect(() => {
        dispatch(axiosPersonCreditsLoading({ page, query}));
    }, [dispatch, page, query]);

  return (
    <>
    {stateOfLoading === "loading" ? (
        <Loading />
    ) : stateOfLoading === "error" ? (
        <Error />
    ) : (
        <Main>
            {!people.length ? (
                <NoResult query={query} />
            ) : (
                <>
                <Container>
                    <Section>
                        <SectionTitle peopleList>
                            {query ? `Search results for "${query}" (${totalResults})`
                            : "People list"}
                        </SectionTitle>
                        {people && people.length > 0 && (
                            <GridList popularPeople>
                                {people.map(({ profile_path, id, name }) => (
                                    <li key={id}>
                                        <PersonTile
                                        id={id}
                                        profile_path={profile_path}
                                        name={name}
                                        />
                                    </li>
                                ))}
                            </GridList>
                        )}
                    </Section>
                </Container>
                </>
            )}
        </Main>
    )
}
    </>
  )  
};