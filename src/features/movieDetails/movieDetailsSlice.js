import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: {
    movieDetails: null,
    status: "initial",
  },
  reducers: {
    axiosMovieDetails: () => ({
      status: "loading",
      movieDetails: null,
    }),
    axiosMovieDetailsSuccess: (_, { payload: movieDetails }) => ({
      status: "success",
      movieDetails,
    }),
    axiosMovieDetailsError: () => ({
      status: "error",
      movieDetails: null,
    }),
  },
});

const selectMovieDetailsState = (state) => state.movieDetails;

export const selectMovieDetails = (state) =>
  selectMovieDetailsState(state).movieDetails;

export const selectMovieDetailsStatus = (state) =>
  selectMovieDetailsState(state).status;

export const {
  axiosMovieDetails,
  axiosMovieDetailsSuccess,
  axiosMovieDetailsError,
} = movieDetailsSlice.actions;

export default movieDetailsSlice.reducer;
