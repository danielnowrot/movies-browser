import { createSlice } from "@reduxjs/toolkit";

const genreSlice = createSlice({
  name: "genres",
  initialState: {
    genre: [],
  },
  reducers: {
    fetchGenres: () => ({ genre: [] }),
    fetchGenresError: () => ({ genre: [] }),
    fetchGenresSuccess: (state, { payload: genresApi }) => ({
      genre: genresApi.genres,
    }),
  },
});

export const { fetchGenres, fetchGenresError, fetchGenresSuccess } =
  genreSlice.actions;

const selectGenresState = (state) => state.genres;
export const selectGenres = (state) => selectGenresState(state).genre;
export default genreSlice.reducer;
