import axios from "axios";

const creditAPI =
  "https://api.themoviedb.org/3/movie/22/credits?api_key=25dc6b875063fb2a5cdc0fd9237d002d&language=en-US";

export const getCredit = () =>
  axios.get(creditAPI).then((response) => response.data);
