import axios from "axios";

const searchParamsAPI = (movieId) => {
  return `https://api.themoviedb.org/3/search/movie?api_key=25dc6b875063fb2a5cdc0fd9237d002d&language=en-US&${movieId[0] !== "" ? `query=${movieId[0]}` : ""}&page=${movieId[1]}&include_adult=false`;
}


export const getSearchParamsApi = (movieId) => {
  return axios.get(searchParamsAPI(movieId)).then((response) => response.data);
}