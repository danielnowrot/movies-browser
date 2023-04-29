import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import movieDetailsReducer from "../features/movieDetails/movieDetailsSlice";
import movieListReducer from "../features/moveList/movieListSlice";
import movieCreditsReducer from "../features/movieDetails/movieCreditsSlice";
import personListReducer from "../features/personList/personListSlice";

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movieDetails: movieDetailsReducer,
    movieList: movieListReducer,
    movieCredits: movieCreditsReducer,
    personList: personListReducer,
  },
  middleware: [sagaMiddleWare],
});

sagaMiddleWare.run(rootSaga);

export default store;
