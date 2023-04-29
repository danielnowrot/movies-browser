import { all } from "redux-saga/effects";
import { movieDetailsSaga } from "../features/movieDetails/movieDetailsSaga";
import { movieListSaga } from "../features/moveList/movieListSaga";

export default function* rootSaga() {
  yield all([movieDetailsSaga(), movieListSaga()]);
}
