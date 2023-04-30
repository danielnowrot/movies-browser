import { useDispatch, useSelector } from "react-redux";
import { axiosMovieList, selectMovieList } from "../movieListSlice";
import { useEffect } from "react";

export const MovieList = () => {
  const dispatch = useDispatch();
  const movieList = useSelector(selectMovieList);

  useEffect(() => {
    dispatch(axiosMovieList());
  }, [dispatch]);

  return <div>{/* lista popularnych filmów: */}</div>;
};
