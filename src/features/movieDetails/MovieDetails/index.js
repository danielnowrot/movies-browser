import { Wrapper } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { axiosMovieDetails, selectMovieDetails } from "../movieDetailsSlice";
import { useEffect } from "react";

export const MovieDetails = () => {
  const dispatch = useDispatch();
  const movieDetails = useSelector(selectMovieDetails);

  useEffect(() => {
    dispatch(axiosMovieDetails());
  }, [dispatch]);

  return (
    <Wrapper>
      <p>
        {Object.keys(movieDetails || {}).map((obj) => (
          <li key={obj}>{obj} </li>
        ))}
      </p>
    </Wrapper>
  );
};
