import { createSlice } from "@reduxjs/toolkit";

const personCreditsSlice = createSlice({
  name: "personCredits",
  initialState: {
    status: "initial",
    personCredits: null,
  },
  reducers: {
    axiosPersonCredits: () => ({
      status: "loading",
      personCredits: null,
    }),
    axiosPersonCreditsSuccess: (_, { payload: personCredits}) => ({
      status: "success",
      personCredits,
    }),
    axiosPersonCreditsError: () => ({
      status: "error",
      personCredits: null,
    }),
  },
});

const selectPersonCreditsState = (state) => state.personCredits;

export const selectPersonCredits = (state) =>
  selectPersonCreditsState(state).personCredits;

export const selectPersonCreditsStatus = (state) =>
  selectPersonCreditsState(state).status;

export const {
  axiosPersonCredits,
  axiosPersonCreditsSuccess,
  axiosPersonCreditsError,
} = personCreditsSlice.actions;

export default personCreditsSlice.reducer;
