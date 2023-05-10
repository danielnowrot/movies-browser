import axios from "axios";

const popularMovieAPI = (getPage) => {
  return `https://api.themoviedb.org/3/movie/popular?api_key=25dc6b875063fb2a5cdc0fd9237d002d&language=en-US&page=${getPage}`;
}

export const getPopularMovieAPI = (getPage) =>
  axios.get(popularMovieAPI(getPage)).then((response) => response.data);

  const genresMovieAPI =
  "https://api.themoviedb.org/3/genre/movie/list?api_key=25dc6b875063fb2a5cdc0fd9237d002d&language=en-US";
export const getGenreMovieAPI = () =>
  axios.get(genresMovieAPI).then((response) => response.data);