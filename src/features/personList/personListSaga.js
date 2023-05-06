import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getPopularPersonAPI } from "./personListAPI";
import {
  axiosPersonList,
  axiosPersonListSuccess,
  axiosPersonListError,
} from "./personListSlice";

function* axiosPersonListHandler() {
  try {
    yield delay(1000);
    const personList = yield call(getPopularPersonAPI);
    console.log(personList);
    yield put(axiosPersonListSuccess(personList));
  } catch (error) {
    yield put(axiosPersonListError());
  }
}

export function* personListSaga() {
  yield takeLatest(axiosPersonList.type, axiosPersonListHandler);
}
