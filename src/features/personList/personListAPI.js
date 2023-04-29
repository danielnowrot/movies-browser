import axios from "axios";

const popularPersonAPI =
  "https://api.themoviedb.org/3/person/popular?api_key=25dc6b875063fb2a5cdc0fd9237d002d&language=en-US&page=1";

export const getPopularPersonAPI = () =>
  axios.get(popularPersonAPI).then((response) => response.data);
