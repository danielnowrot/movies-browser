import axios from "axios";

const personCreditsAPI =
  "https://api.themoviedb.org/3/person/22/movie_credits?api_key=25dc6b875063fb2a5cdc0fd9237d002d&language=en-US";

export const getPersonCredits = () =>
  axios.get(personCreditsAPI).then((response) => response.data);
