import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getPopularMovieAPI } from "./movieListAPI";
import {
  axiosMovieList,
  axiosMovieListSuccess,
  axiosMovieListError,
} from "./movieListSlice";

function* axiosMovieListHandler() {
  try {
    yield delay(2000);
    const movieList = yield call(getPopularMovieAPI);
    console.log(movieList);
    yield put(axiosMovieListSuccess(movieList));
  } catch (error) {
    yield put(axiosMovieListError());
  }
}

export function* movieListSaga() {
  yield takeLatest(axiosMovieList.type, axiosMovieListHandler);
}
