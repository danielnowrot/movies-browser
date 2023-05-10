import { createSlice } from "@reduxjs/toolkit";

const searchParamsSlice = createSlice({
  name: "searchParams",
  initialState: {
    movieListSearch: null,
    movieId: null,
    status: "initial",
  },
  reducers: {
    axiosSearchParamsMovie: (_, { payload: movieId }) => ({
      status: "loading",
      movieListSearch: null,
      movieId
    }),
    axiosSearchParamsMovieSuccess: (_, { payload: movieListSearch }) => ({
      status: "success",
      movieListSearch,
      movieId: null
    }),
    axiosSearchParamsMovieError: () => ({
      status: "error",
      movieListSearch: null,
      movieId: null
    }),
  },
});

const selectSearchParamsMovieState = (state) => state.movieListSearch;

export const selectSearchParamsMovieList = (state) => selectSearchParamsMovieState(state).movieListSearch;

export const selectSearchParamsMovieStatus = (state) =>
  selectSearchParamsMovieState(state).status;

export const { axiosSearchParamsMovie, axiosSearchParamsMovieSuccess, axiosSearchParamsMovieError } =
  searchParamsSlice.actions;

export default searchParamsSlice.reducer;
