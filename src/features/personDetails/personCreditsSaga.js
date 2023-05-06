import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getPersonCredits } from "./personCreditsAPI";
import {
  axiosPersonCredits,
  axiosPersonCreditsSuccess,
  axiosPersonCreditsError,
} from "./personCreditsSlice";

function* axiosPersonCreditsHandler({payload: page}) {
  const base = "https://api.themoviedb.org/3";
  const key = "?api_key=25dc6b875063fb2a5cdc0fd9237d002d";
  const language = "&language=en-US";

  const path =    
       `${base}/person/popular${key}${language}&page=${page}`;

  try {
    yield delay(1000);
    const personCredits = yield call(getPersonCredits, path );
    console.log(personCredits);
    yield put(axiosPersonCreditsSuccess(personCredits));
  } catch (error) {
    yield put(axiosPersonCreditsError());
  }
}

export function* personCreditsSaga() {
  yield takeLatest(axiosPersonCredits.type, axiosPersonCreditsHandler);
}
