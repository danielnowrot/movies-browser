import { Wrapper } from "./styled";
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
import { PhotoBackdrop } from "./styled";

export const MovieDetails = () => {
  const dispatch = useDispatch();
  const movieDetails = useSelector(selectMovieDetails);
  const movieCredits = useSelector(selectMovieCredits);
  const status = useSelector(selectMovieDetailsStatus);

  useEffect(() => {
    dispatch(axiosMovieDetails());
  }, [dispatch]);

  useEffect(() => {
    dispatch(axiosMovieCredits());
  }, [dispatch]);
  const pathPhoto1280 = "https://image.tmdb.org/t/p/w1280/";

  return (
    <>
      {status === "loading" ? (
        <Loading></Loading>
      ) : (
        <>
          <PhotoBackdrop
            src={pathPhoto1280 + movieDetails.backdrop_path}
          ></PhotoBackdrop>
          <Wrapper>
            <Section movieCredits={movieCredits} movieDetails={movieDetails} />
          </Wrapper>
        </>
      )}
    </>
  );
};
