import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getMovieDetails } from "./movieDetailsAPI";
import {
  axiosMovieDetails,
  axiosMovieDetailsSuccess,
  axiosMovieDetailsError,
} from "./movieDetailsSlice";

function* axiosMovieDetailsHandler({ payload: idMovie }) {
  try {
    yield delay(1000);
    const movieDetails = yield call(getMovieDetails, idMovie);
    yield put(axiosMovieDetailsSuccess(movieDetails));
  } catch (error) {
    yield put(axiosMovieDetailsError());
  }
}

export function* movieDetailsSaga() {
  yield takeLatest(axiosMovieDetails.type, axiosMovieDetailsHandler);
}
