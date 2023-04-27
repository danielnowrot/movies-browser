import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getCredit } from "./movieDetailsAPI";
import {
  axiosMovieDetails,
  axiosMovieDetailsSuccess,
  axiosMovieDetailsError,
} from "./movieDetailsSlice";

function* axiosMovieDetailsHandler() {
  try {
    yield delay(2000);
    const movieDetails = yield call(getCredit);
    console.log(movieDetails);
    yield put(axiosMovieDetailsSuccess(movieDetails));
  } catch (error) {
    yield put(axiosMovieDetailsError());
  }
}

export function* movieDetailsSaga() {
  yield takeLatest(axiosMovieDetails.type, axiosMovieDetailsHandler);
}
