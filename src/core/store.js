import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import movieDetailsReducer from "../features/movieDetails/movieDetailsSlice";
import movieListReducer from "../features/moveList/movieListSlice";
import genreListReducer from "../features/genreList/genreListSlice";
import genreReducers from "../features/movieDetails/MovieTile/Genre/genreSlice";
import movieListSearchReducer from "../features/searchParams/searchParamsSlice";
import movieCreditsReducer from "../features/movieDetails/movieCreditsSlice";
import personListReducer from "../features/personList/personListSlice";
import personDetailsReducer from "../features/personDetails/personDetailsSlice";
import personCreditsReducer from "../features/personDetails/personCreditsSlice";

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movieDetails: movieDetailsReducer,
    movieList: movieListReducer,
    genreList: genreListReducer,
    genres: genreReducers,
    movieListSearch: movieListSearchReducer,
    movieCredits: movieCreditsReducer,
    personList: personListReducer,
    personDetails: personDetailsReducer,
    personCredits: personCreditsReducer,
  },
  middleware: [sagaMiddleWare],
});

sagaMiddleWare.run(rootSaga);

export default store;
