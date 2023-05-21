import { StyledStarIcon, Wrapper } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  axiosMovieDetails,
  selectMovieDetails,
  selectMovieDetailsStatus,
} from "../movieDetailsSlice";
import { useEffect } from "react";
import { selectMovieCredits, axiosMovieCredits } from "../movieCreditsSlice";
import { Section } from "./Section";
import { Loading } from "../../../core/status/Loading";
import { Error } from "../../../core/status/Error";
import {
  StyledPhotoBackdrop,
  OriginalTitle,
  Background,
  VoteArea,
  Vote,
  Ten,
  VotesAmount,
} from "./styled";

import { MovieTile } from "../MovieTile";
import { useParams } from "react-router-dom";

export const MovieDetails = () => {
  const { idMovie } = useParams();

  const dispatch = useDispatch();
  const movieDetails = useSelector(selectMovieDetails);
  const movieCredits = useSelector(selectMovieCredits);
  const status = useSelector(selectMovieDetailsStatus);
  const statusCredits = useSelector(selectMovieCredits);

  useEffect(() => {
    dispatch(axiosMovieDetails(idMovie));
  }, [dispatch]);

  useEffect(() => {
    dispatch(axiosMovieCredits(idMovie));
  }, [dispatch]);

  return (
    <>
      {status === "loading" || statusCredits === "loading" ? (
        <Loading />
      ) : status === "error" || statusCredits === "error" ? (
        <Error />
      ) : (
        <>
          <Background>
            <StyledPhotoBackdrop>
              <OriginalTitle>{movieDetails.original_title}</OriginalTitle>
              <VoteArea>
                <StyledStarIcon />
                <Vote>{movieDetails.vote_average?.toFixed(1)}</Vote>&nbsp;
                <Ten>/&nbsp;10</Ten>
              </VoteArea>
              <VotesAmount>{movieDetails.vote_count} votes</VotesAmount>
            </StyledPhotoBackdrop>
          </Background>
          <Wrapper>
            <MovieTile movieDetails={movieDetails}></MovieTile>
            <Section movieCredits={movieCredits} />
          </Wrapper>
        </>
      )}
    </>
  );
};
