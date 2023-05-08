import { call, debounce, put} from "redux-saga/effects";
import { getSearchParamsApi } from "./searchParamsAPI";
import {
  axiosSearchParamsMovie,
  axiosSearchParamsMovieError,
  axiosSearchParamsMovieSuccess
} from "./searchParamsSlice";

function* axiosSearchParamsMovieHandler({payload: movieId}) {
  try {
    const getMovie = yield call(getSearchParamsApi, movieId);
    console.log(getMovie)
    yield put(axiosSearchParamsMovieSuccess(getMovie));
  } catch (error) {
    yield put(axiosSearchParamsMovieError());
  }
}

export function* movieSearchParamsSaga() {
  yield debounce(1000, axiosSearchParamsMovie.type, axiosSearchParamsMovieHandler);
}
