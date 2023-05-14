import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getPersonCredits } from "./personCreditsAPI";
import {
  axiosPersonCredits,
  axiosPersonCreditsSuccess,
  axiosPersonCreditsError,
} from "./personCreditsSlice";

function* axiosPersonCreditsHandler({ payload: { page, query } }) {
  const base = "https://api.themoviedb.org/3";
  const key = "?api_key=25dc6b875063fb2a5cdc0fd9237d002d";
  const language = "&language=en-US";

  const path =
    query === null
      ? `${base}/person/popular${key}${language}&page=${page}`
      : `${base}/search/person${key}${language}&query=${query}&page=${page}`;

  try {
    yield delay(1000);
    const people = yield call(getPersonCredits, path);
    console.log(people);
    yield put(axiosPersonCreditsSuccess(people));
  } catch (error) {
    yield put(axiosPersonCreditsError());
  }
}

export function* personCreditsSaga() {
  yield takeLatest(axiosPersonCredits.type, axiosPersonCreditsHandler);
}
