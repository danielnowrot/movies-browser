import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getMovieCredits } from "./movieCreditsAPI";
import {
  axiosMovieCredits,
  axiosMovieCreditsSuccess,
  axiosMovieCreditsError,
} from "./movieCreditsSlice";

function* axiosMovieCreditsHandler() {
  try {
    yield delay(1000);
    const movieCredits = yield call(getMovieCredits);
    yield put(axiosMovieCreditsSuccess(movieCredits));
  } catch (error) {
    yield put(axiosMovieCreditsError());
  }
}

export function* movieCreditsSaga() {
  yield takeLatest(axiosMovieCredits.type, axiosMovieCreditsHandler);
}
