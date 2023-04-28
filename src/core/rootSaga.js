import { all } from "redux-saga/effects";
import { movieDetailsSaga } from "../features/movieDetails/movieDetailsSaga";

export default function* rootSaga() {
  yield all([movieDetailsSaga()]);
}
