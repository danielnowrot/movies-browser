import { all } from "redux-saga/effects";
import { movieDetailsSaga } from "../features/movieDetails/movieDetailsSaga";
import { movieListSaga } from "../features/moveList/movieListSaga";
import { movieCreditsSaga } from "../features/movieDetails/movieCreditsSaga";
import { personListSaga } from "../features/personList/personListSaga";

export default function* rootSaga() {
  yield all([
    movieDetailsSaga(),
    movieListSaga(),
    movieCreditsSaga(),
    personListSaga(),
  ]);
}
