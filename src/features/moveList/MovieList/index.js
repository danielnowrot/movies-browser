import { useDispatch } from "react-redux";
import { axiosMovieList, axiosGenreList } from "../movieListSlice";
import { useEffect } from "react";

export const MovieList = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(axiosGenreList());
    dispatch(axiosMovieList());
  }, [dispatch]);
  
};
