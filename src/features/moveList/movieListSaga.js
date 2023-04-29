import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getPopularMovieAPI, getGenreMovieAPI } from "./movieListAPI";
import {
  axiosMovieList, axiosGenreList,
  axiosMovieListSuccess, axiosGenreListSuccess,
  axiosMovieListError, axiosGenreListError,
} from "./movieListSlice";

function* axiosMovieListHandler() {
  try {
    yield delay(1000);
    const movieList = yield call(getPopularMovieAPI);
    yield put(axiosMovieListSuccess(movieList));
  } catch (error) {
    yield put(axiosMovieListError());
  }
}

function* axiosGenreListHandler() {
  try {
    yield delay(1000);
    const genreList = yield call(getGenreMovieAPI);
    yield put(axiosGenreListSuccess(genreList));
  } catch (error) {
    yield put(axiosGenreListError());
  }
}

export function* movieListSaga() {
  yield takeLatest(axiosMovieList.type, axiosMovieListHandler);
  yield takeLatest(axiosGenreList.type, axiosGenreListHandler);
}
