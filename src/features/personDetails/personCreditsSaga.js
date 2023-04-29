import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getPersonCredits } from "./personCreditsAPI";
import {
  axiosPersonCredits,
  axiosPersonCreditsSuccess,
  axiosPersonCreditsError,
} from "./personCreditsSlice";

function* axiosPersonCreditsHandler() {
  try {
    yield delay(2000);
    const personCredits = yield call(getPersonCredits);
    console.log(personCredits);
    yield put(axiosPersonCreditsSuccess(personCredits));
  } catch (error) {
    yield put(axiosPersonCreditsError());
  }
}

export function* personCreditsSaga() {
  yield takeLatest(axiosPersonCredits.type, axiosPersonCreditsHandler);
}
