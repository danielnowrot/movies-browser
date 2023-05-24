import { all, call, delay, put, takeLatest } from "redux-saga/effects";
import { baseUrl, language, getApi } from "./personDetailsAPI";
import {
  axiosPersonDetails,
  axiosPersonDetailsSuccess,
  axiosPersonDetailsError,
} from "./personDetailsSlice";

function* axiosPersonDetailsHandler({ payload: id }) {
  const personPath = `${baseUrl}person/${id}/movie_credits?api_key=25dc6b875063fb2a5cdc0fd9237d002d${language}`;
  const detailsPath = `${baseUrl}person/${id}?api_key=25dc6b875063fb2a5cdc0fd9237d002d${language}`;

  try {
    yield delay(1000);
    const [person, details] = yield all([
      call(getApi, personPath),
      call(getApi, detailsPath),
    ]);
    yield put(axiosPersonDetailsSuccess({ person, details }));
  } catch (error) {
    yield put(axiosPersonDetailsError());
  }
}

export function* personDetailsSaga() {
  yield takeLatest(axiosPersonDetails.type, axiosPersonDetailsHandler);
}
