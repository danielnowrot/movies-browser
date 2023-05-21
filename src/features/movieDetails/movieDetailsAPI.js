import axios from "axios";

const movieDetailsAPI = (idMovie) => 
  `https://api.themoviedb.org/3/movie/${idMovie}?api_key=25dc6b875063fb2a5cdc0fd9237d002d&language=en-US`;

export const getMovieDetails = (idMovie) =>
  axios.get(movieDetailsAPI(idMovie)).then((response) => response.data);