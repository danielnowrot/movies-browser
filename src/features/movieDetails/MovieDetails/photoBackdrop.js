import { useSelector } from "react-redux";
import { selectMovieDetails } from "../movieDetailsSlice";

export const PhotoBackdrop = () => {
  const movieDetails = useSelector(selectMovieDetails);

  return movieDetails.backdrop_path;
};
