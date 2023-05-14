import { createSlice } from "@reduxjs/toolkit";

const personDetailsSlice = createSlice({
  name: "personDetails",
  initialState: {
    status: "loading",
    person: [],
    cast: [],
    crew: [],
  },
  reducers: {
    axiosPersonDetails: () => ({
      status: "loading",
      person: [],
      cast: [],
      crew: [],
    }),
    axiosPersonDetailsSuccess: (_, { payload: { person, details } }) => ({
      status: "success",
      person: [details],
      cast: person.cast,
      crew: person.crew,
    }),
    axiosPersonDetailsError: () => ({
      status: "error",
      person: [],
      cast: [],
      crew: [],
    }),
  },
});

export const selectPersonDetailsState = (state) => state.personDetails;
export const selectPersonDetails = (state) =>
  selectPersonDetailsState(state).personDetails;
export const selectPersonDetailsStatus = (state) =>
  selectPersonDetailsState(state).status;
export const selectPerson = (state) => selectPersonDetailsState(state).person;
export const selectCrew = (state) => selectPersonDetailsState(state).crew;
export const selectCast = (state) => selectPersonDetailsState(state).cast;

export const {
  axiosPersonDetails,
  axiosPersonDetailsSuccess,
  axiosPersonDetailsError,
} = personDetailsSlice.actions;

export default personDetailsSlice.reducer;
