import axios from "axios";

const movieDetailsAPI =
  "https://api.themoviedb.org/3/movie/22?api_key=25dc6b875063fb2a5cdc0fd9237d002d&language=en-US";

export const getMovieDetails = () =>
  axios.get(movieDetailsAPI).then((response) => response.data);
