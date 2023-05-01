import { createSlice } from "@reduxjs/toolkit";

const personCreditsSlice = createSlice({
  name: "personCredits",
  initialState: {
    status: "initial",
    personCredits: [],
    // people: [],
    totalPages: 0,
    totalResults: 0,
  },
  reducers: {
    axiosPersonCredits: () => ({
      status: "loading",
      // personCredits: null,
    }),
    axiosPersonCreditsSuccess: (_, { payload: personCredits}) => ({
      status: "success",
      personCredits: personCredits.results,
      // people: people.results,
      totalPages: personCredits.total_pages,
      totalResults: personCredits.total_results,
    }),
    axiosPersonCreditsError: () => ({
      status: "error",
      // personCredits: null,
    }),
  },
});

const selectPersonCreditsState = (state) => state.personCredits;

export const selectPersonCredits = (state) =>
  selectPersonCreditsState(state).personCredits;

export const selectPersonCreditsStatus = (state) =>
  selectPersonCreditsState(state).status;

export const selectPersonCreditsTotalPages = (state) =>  
  selectPersonCreditsState(state).totalPages;

export const selectPersonCreditsResults = (state) =>
  selectPersonCreditsState(state).totalResults;  

export const {
  axiosPersonCredits,
  axiosPersonCreditsSuccess,
  axiosPersonCreditsError,
} = personCreditsSlice.actions;

export default personCreditsSlice.reducer;
