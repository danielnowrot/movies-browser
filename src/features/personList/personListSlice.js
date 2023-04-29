import { createSlice } from "@reduxjs/toolkit";

const personListSlice = createSlice({
  name: "personList",
  initialState: {
    personList: null,
    status: "initial",
  },
  reducers: {
    axiosPersonList: () => ({
      status: "loading",
      personList: null,
    }),
    axiosPersonListSuccess: (_, { payload: personList }) => ({
      status: "success",
      personList,
    }),
    axiosPersonListError: () => ({
      status: "error",
      personList: null,
    }),
  },
});

const selectPersonListState = (state) => state.personList;

export const selectPersonList = (state) =>
  selectPersonListState(state).personList;

export const selectPersonListStatus = (state) =>
  selectPersonListState(state).status;

export const { axiosPersonList, axiosPersonListSuccess, axiosPersonListError } =
  personListSlice.actions;

export default personListSlice.reducer;
