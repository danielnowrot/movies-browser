import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../../core/Container";
import { SectionTitle } from "../../../core/SectionTitle";
import { PersonTile } from "../PersonTile";
import {
    axiosPersonCredits,
    selectPersonCredits,
    selectPersonCreditsStatus,
    selectPersonCreditsTotalPages,
    selectPersonCreditsResults
} from "../../personDetails/personCreditsSlice";
import { useSearchParams } from "react-router-dom";
import { searchQueryParamName } from "../../useQueryParameter";
import { useEffect } from "react";
import { Main } from "../../../core/Main";
import { Loading } from "../../../core/status/Loading";
import { Error } from "../../../core/status/Error";
import { NoResults } from "../../../core/status/NoResults";
import { Grid } from "../../../core/Grid";

const PopularPeople = () => {
    const dispatch = useDispatch();
    const personCredits = useSelector(selectPersonCredits);
    const stateOfLoading = useSelector(selectPersonCreditsStatus);
    // const totalPages = useSelector(selectPersonCreditsTotalPages);
    const totalResults = useSelector(selectPersonCreditsResults);

    const [searchParams] = useSearchParams({ page: 1});
    const page = Number(searchParams.get("page")) || 1;
    const query = searchParams.get(searchQueryParamName) || null;

    useEffect(() => {
        dispatch(axiosPersonCredits({ page, query }));
    }, [dispatch, page, query]);

  return (
    <>
    {stateOfLoading === "loading" ? (
        <Loading />
    ) : stateOfLoading === "error" ? (
        <Error />
    ) : (
        <Main>
            {!personCredits.length ? (
                <NoResults query={query} />
            ) : (
                <>
                <Container>
                    <section>
                        <SectionTitle peopleList>
                            {query ? `Search results for "${query}" (${totalResults})`
                            : "People list"}
                        </SectionTitle>
                        {personCredits && personCredits.length > 0 && (
                            <Grid popularPeople>
                                {personCredits.map(({ profile_path, id, name }) => (
                                    <li key={id}>
                                        <PersonTile
                                        id={id}
                                        profile_path={profile_path}
                                        name={name}
                                        />
                                    </li>
                                ))}
                            </Grid>
                        )}
                    </section>
                </Container>
                </>
            )}
        </Main>
    )
}
    </>
  )  
};

export default PopularPeople;