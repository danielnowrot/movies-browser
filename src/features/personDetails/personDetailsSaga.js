import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getPersonDetails } from "./personDetailsAPI";
import {
  axiosPersonDetails,
  axiosPersonDetailsSuccess,
  axiosPersonDetailsError,
} from "./personDetailsSlice";

function* axiosPersonDetailsHandler() {
  try {
    yield delay(2000);
    const personDetails = yield call(getPersonDetails);
    console.log(personDetails);
    yield put(axiosPersonDetailsSuccess(personDetails));
  } catch (error) {
    yield put(axiosPersonDetailsError());
  }
}

export function* personDetailsSaga() {
  yield takeLatest(axiosPersonDetails.type, axiosPersonDetailsHandler);
}
