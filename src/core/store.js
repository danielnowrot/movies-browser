import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import movieDetailsReducer from "../features/movieDetails/movieDetailsSlice";
import movieListReducer from "../features/moveList/movieListSlice";
<<<<<<< HEAD
import genreListReducer from "../features/genreList/genreListSlice";
=======
import movieCreditsReducer from "../features/movieDetails/movieCreditsSlice";
import personListReducer from "../features/personList/personListSlice";
import personDetailsReducer from "../features/personDetails/personDetailsSlice";
import personCreditsReducer from "../features/personDetails/personCreditsSlice";
>>>>>>> master

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movieDetails: movieDetailsReducer,
    movieList: movieListReducer,
<<<<<<< HEAD
    genreList: genreListReducer,
=======
    movieCredits: movieCreditsReducer,
    personList: personListReducer,
    personDetails: personDetailsReducer,
    personCredits: personCreditsReducer,
>>>>>>> master
  },
  middleware: [sagaMiddleWare],
});

sagaMiddleWare.run(rootSaga);

export default store;
