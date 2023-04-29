import { createSlice } from "@reduxjs/toolkit";

const movieListSlice = createSlice({
  name: "movieList",
  initialState: {
    movieList: null,
    status: "initial",
  },
  reducers: {
    axiosMovieList: () => ({
      status: "loading",
      movieList: null,
    }),
    axiosMovieListSuccess: (_, { payload: movieList }) => ({
      status: "success",
      movieList,
    }),
    axiosMovieListError: () => ({
      status: "error",
      movieList: null,
    }),
  },
});

const selectMovieListState = (state) => state.movieList;

export const selectMovieList = (state) => selectMovieListState(state).movieList;

export const selectMovieListStatus = (state) =>
  selectMovieListState(state).status;

export const { axiosMovieList, axiosMovieListSuccess, axiosMovieListError } =
  movieListSlice.actions;

export default movieListSlice.reducer;
