import axios from "axios";

const movieCreditsAPI = (idMovie) =>
  `https://api.themoviedb.org/3/movie/${idMovie}/credits?api_key=25dc6b875063fb2a5cdc0fd9237d002d&language=en-US`;

export const getMovieCredits = (idMovie) =>
  axios.get(movieCreditsAPI(idMovie)).then((response) => response.data);
