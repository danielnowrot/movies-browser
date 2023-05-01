import { createSlice } from "@reduxjs/toolkit";

const movieCreditsSlice = createSlice({
  name: "movieCredits",
  initialState: {
    movieCredits: {} || null,
    status: "initial",
  },
  reducers: {
    axiosMovieCredits: () => ({
      status: "loading",
      movieCredits: {} || null,
    }),
    axiosMovieCreditsSuccess: (_, { payload: movieCredits }) => ({
      status: "success",
      movieCredits,
    }),
    axiosMovieCreditsError: () => ({
      status: "error",
      movieCredits: null,
    }),
  },
});

const selectMovieCreditsState = (state) => state.movieCredits;

export const selectMovieCredits = (state) =>
  selectMovieCreditsState(state).movieCredits;

export const selectMovieCreditsStatus = (state) =>
  selectMovieCreditsState(state).status;

export const {
  axiosMovieCredits,
  axiosMovieCreditsSuccess,
  axiosMovieCreditsError,
} = movieCreditsSlice.actions;

export default movieCreditsSlice.reducer;
