import { Wrapper } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { axiosMovieDetails, selectMovieDetails } from "../movieDetailsSlice";
import { useEffect } from "react";
import { selectMovieCredits, axiosMovieCredits } from "../movieCreditsSlice";

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
      {/* <p>
        {Object.keys(movieDetails || {}).map((obj) => (
          <li key={obj}>{obj} </li>
        ))}
      </p> */}
    </Wrapper>
  );
};
