import { call, put, takeLatest } from "redux-saga/effects";
import {
    fetchGenres,
    fetchGenresError,
    fetchGenresSuccess,
} from "./genreSlice";
import axios from "axios";

function* fetchGenresHandler() {
    const genrePath = `https://api.themoviedb.org/3/genre/movie/list?api_key=25dc6b875063fb2a5cdc0fd9237d002d&language=en-US`;
    const getApi = (url) =>
        axios
            .get(url)
            .then((response) => response.data)
            .catch((error) => console.log(error));

    try {
        const genres = yield call(getApi, genrePath);
        yield put(fetchGenresSuccess(genres));
    } catch (error) {
        yield put(fetchGenresError());
    }
}

export function* watchFetchGenres() {
    yield takeLatest(fetchGenres.type, fetchGenresHandler);
}