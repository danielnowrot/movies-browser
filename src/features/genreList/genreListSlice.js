import { createSlice } from "@reduxjs/toolkit";

const genreListSlice = createSlice({
  name: "movieList",
  initialState: {
    genreList: null,
    status: "initial",
  },
  reducers: {
    axiosGenreList: () => ({
      status: "loading",
      genreList: null,
    }),
    axiosGenreListSuccess: (_, { payload: genreList }) => ({
      status: "success",
      genreList,
    }),
    axiosGenreListError: () => ({
      status: "error",
      genreList: null,
    }),
  },
});

const selectGenreListState = (state) => state.genreList;

export const selectGenreList = (state) => selectGenreListState(state).genreList;

export const selectGenreListStatus = (state) =>
  selectGenreListState(state).status;

export const { axiosGenreList, axiosGenreListSuccess, axiosGenreListError } =
genreListSlice.actions;

export default genreListSlice.reducer;
