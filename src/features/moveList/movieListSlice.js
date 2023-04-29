import { createSlice } from "@reduxjs/toolkit";

const movieListSlice = createSlice({
  name: "movieList",
  initialState: {
    movieList: null,
    genreList: null,
    status: "initial",
    statusGenre: "initial"
  },
  reducers: {
    axiosMovieList: () => ({
      status: "loading",
      movieList: null,
    }),
    axiosGenreList: () => ({
      statusGenre: "loading",
      genreList: null,
    }),
    axiosMovieListSuccess: (_, { payload: movieList }) => ({
      status: "success",
      movieList,
    }),
    axiosGenreListSuccess: (_, { payload: genreList }) => ({
      statusGenre: "success",
      genreList,
    }),
    axiosMovieListError: () => ({
      status: "error",
      movieList: null,
    }),
    axiosGenreListError: () => ({
      statusGenre: "error",
      genreList: null,
    }),
  },
});

export const selectMovieListState = (state) => state.movieList;
export const selectGenreListState = (state) => state.genreList;

export const selectMovieList = (state) => selectMovieListState(state).movieList;
export const selectGenreList = (state) => selectGenreListState(state).genreList;

export const selectMovieListStatus = (state) =>
  selectMovieListState(state).status;
export const selectGenreListStatus = (state) =>
  selectGenreListState(state).status;

export const { axiosMovieList, axiosMovieListSuccess, axiosMovieListError,
    axiosGenreList, axiosGenreListSuccess, axiosGenreListError } =
  movieListSlice.actions;

export default movieListSlice.reducer;
