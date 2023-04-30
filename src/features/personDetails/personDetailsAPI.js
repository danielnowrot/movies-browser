import axios from "axios";

const personDetailsAPI =
  "https://api.themoviedb.org/3/person/22?api_key=25dc6b875063fb2a5cdc0fd9237d002d&language=en-US";

export const getPersonDetails = () =>
  axios.get(personDetailsAPI).then((response) => response.data);
