import { searchQueryParamName } from "../../features/useQueryParameter";
import { useSearchParams } from "react-router-dom";
import {
  PageCounter,
  ButtonText,
  ArrowIconPrevious,
  Wrapper,
  PageNumbers,
  Button,
  ArrowIconNext,
} from "./styled";

export const Pagination = ({ location, totalPages }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const query = searchParams.get(searchQueryParamName);
  const totalPage = totalPages > 500 ? 500 : totalPages;

  const onGoToFirst = () => {
    if (currentPage !== 1) {
      query
        ? setSearchParams({ [searchQueryParamName]: query, page: 1 })
        : setSearchParams({ page: 1 });
    }
  };

  const onGoToPrevious = () => {
    if (currentPage !== 1) {
      const previousPage = currentPage - 1;

      query
        ? setSearchParams({ [searchQueryParamName]: query, page: previousPage })
        : setSearchParams({ page: previousPage });
    }
  };

  const onGoToNext = () => {
    if (currentPage !== totalPages) {
      const nextPage = currentPage + 1;

      query
        ? setSearchParams({ [searchQueryParamName]: query, page: nextPage })
        : setSearchParams({ page: nextPage });
    }
  };

  const onGoToLast = () => {
    if (currentPage !== totalPage) {
      query
        ? setSearchParams({ [searchQueryParamName]: query, page: totalPage })
        : setSearchParams({ page: totalPage });
    }
  };
  return (
    <Wrapper location={location}>
      <Button disabled={currentPage <= 1} onClick={onGoToFirst}>
        <ArrowIconPrevious mobile="true" />
        <ArrowIconPrevious />
        <ButtonText>First</ButtonText>
      </Button>
      <Button disabled={currentPage <= 1} onClick={onGoToPrevious}>
        <ArrowIconPrevious />
        <ButtonText>Previous</ButtonText>
      </Button>
      <PageCounter>
        Page
        <PageNumbers>{currentPage}</PageNumbers>
        of
        <PageNumbers>{totalPage}</PageNumbers>
      </PageCounter>
      <Button disabled={currentPage >= totalPages} onClick={onGoToNext}>
        <ButtonText>Next</ButtonText>
        <ArrowIconNext />
      </Button>
      <Button disabled={currentPage >= totalPages} onClick={onGoToLast}>
        <ButtonText>Last</ButtonText>
        <ArrowIconNext />
        <ArrowIconNext mobile="true" />
      </Button>
    </Wrapper>
  );
};