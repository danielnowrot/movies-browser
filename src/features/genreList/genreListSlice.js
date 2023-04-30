import { createSlice } from "@reduxjs/toolkit";

const genreListSlice = createSlice({
  name: "movieList",
  initialState: {
    genreList: null,
    statusGenre: "initial",
  },
  reducers: {
    axiosGenreList: () => ({
      statusGenre: "loading",
      genreList: null,
    }),
    axiosGenreListSuccess: (_, { payload: genreList }) => ({
      statusGenre: "success",
      genreList,
    }),
    axiosGenreListError: () => ({
      statusGenre: "error",
      genreList: null,
    }),
  },
});

export const selectGenreListState = (state) => state.genreList;

export const selectGenreList = (state) => selectGenreListState(state).genreList;

export const selectGenreListStatus = (state) =>
  selectGenreListState(state).status;

export const { axiosGenreList, axiosGenreListSuccess, axiosGenreListError } =
genreListSlice.actions;

export default genreListSlice.reducer;
