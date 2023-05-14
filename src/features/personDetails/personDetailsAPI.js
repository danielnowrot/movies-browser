import axios from "axios";

export const baseUrl = "https://api.themoviedb.org/3/";
export const language = "&language=en-US";
export const imagesBaseUrl = "https://image.tmdb.org/t/p";

export const getApi = (url) =>
  axios
    .get(url)
    .then((response) => response.data)
    .catch((error)=>console.log(error));