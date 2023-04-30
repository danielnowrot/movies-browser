import { createSlice } from "@reduxjs/toolkit";

const personDetailsSlice = createSlice({
  name: "personDetails",
  initialState: {
    personDetails: null,
    status: "initial",
  },
  reducers: {
    axiosPersonDetails: () => ({
      status: "loading",
      personDetails: null,
    }),
    axiosPersonDetailsSuccess: (_, { payload: personDetails }) => ({
      status: "success",
      personDetails,
    }),
    axiosPersonDetailsError: () => ({
      status: "error",
      personDetails: null,
    }),
  },
});

const selectPersonDetailsState = (state) => state.personDetails;

export const selectPersonDetails = (state) =>
  selectPersonDetailsState(state).personDetails;

export const selectPersonDetailsStatus = (state) =>
  selectPersonDetailsState(state).status;

export const {
  axiosPersonDetails,
  axiosPersonDetailsSuccess,
  axiosPersonDetailsError,
} = personDetailsSlice.actions;

export default personDetailsSlice.reducer;
