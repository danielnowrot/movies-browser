import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import movieDetailsReducer from "../features/movieDetails/movieDetailsSlice";
import movieListReducer from "../features/moveList/movieListSlice";
import movieCreditsReducer from "../features/movieDetails/movieCreditsSlice";

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movieDetails: movieDetailsReducer,
    movieList: movieListReducer,
    movieCredits: movieCreditsReducer,
  },
  middleware: [sagaMiddleWare],
});

sagaMiddleWare.run(rootSaga);

export default store;
