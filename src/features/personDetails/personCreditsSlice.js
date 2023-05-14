import { createSlice } from "@reduxjs/toolkit";

const personCreditsSlice = createSlice({
  name: "personCredits",
  initialState: {
    status: "initial",
    people: [],
    totalPages: 0,
    totalResults: 0,
  },
  reducers: {
    axiosPersonCredits: () => ({
      status: "loading",
    }),
    axiosPersonCreditsSuccess: (_, { payload: people}) => ({
      status: "success",
      people: people.results,
      totalPages: people.total_pages,
      totalResults: people.total_results,
    }),
    axiosPersonCreditsError: () => ({
      status: "error",
    }),
  },
});

const selectPersonCreditsState = (state) => state.personCredits;

export const selectPersonCredits = (state) =>
  selectPersonCreditsState(state).people;
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
