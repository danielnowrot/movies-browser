import { Wrapper } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { axiosMovieDetails, selectMovieDetails } from "../movieDetailsSlice";
import { useEffect } from "react";
import { selectMovieCredits, axiosMovieCredits } from "../movieCreditsSlice";
import { Section } from "./Section";

export const MovieDetails = () => {
  const dispatch = useDispatch();
  const movieDetails = useSelector(selectMovieDetails);
  const movieCredits = useSelector(selectMovieCredits);

  useEffect(() => {
    dispatch(axiosMovieDetails());
  }, [dispatch]);

  useEffect(() => {
    dispatch(axiosMovieCredits());
  }, [dispatch]);

  return (
    <Wrapper>
      <Section movieCredits={movieCredits} title="GDZIE JEST TYTUŁ?!!!" />
      {/* czy jest możliwe aby ten wyżej Section przekazał dalej moveCredits,
      a jednocześnie dostał title i inne propsy, które chcę przekazać,
      czy raczej nie robić tutaj Sectiona genreycznego? */}
    </Wrapper>
  );
};
