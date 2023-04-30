import axios from "axios";

const popularMovieAPI =
  "https://api.themoviedb.org/3/movie/popular?api_key=25dc6b875063fb2a5cdc0fd9237d002d&language=en-US&page=1";

export const getPopularMovieAPI = () =>
  axios.get(popularMovieAPI).then((response) => response.data);

  const genresMovieAPI =
  "https://api.themoviedb.org/3/genre/movie/list?api_key=25dc6b875063fb2a5cdc0fd9237d002d&language=en-US";
export const getGenreMovieAPI = () =>
  axios.get(genresMovieAPI).then((response) => response.data);