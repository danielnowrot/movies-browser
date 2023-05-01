import { useDispatch } from "react-redux";
import { axiosMovieList } from "../movieListSlice";
import { axiosGenreList } from "../../genreList/genreListSlice";
import { useEffect } from "react";

export const MovieList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(axiosGenreList());
    dispatch(axiosMovieList());
  }, [dispatch]);
  
  return <div>{/* lista popularnych filmów: */}</div>;
};


