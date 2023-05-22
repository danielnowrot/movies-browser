import { useSelector } from "react-redux";
import { selectGenres } from "./genreSlice";
import { GenreTag, GenreWrapper } from "./styled";

export const Genre = ({ movieDetails }) => {
  const genres = useSelector(selectGenres);
  const filterGenres = movieDetails.genres_id.map((genre) =>
    genres.filter(({ id }) => genre === id)
  );

  return (
    <GenreWrapper>
      {filterGenres.map((genre) =>
        genre.map((genre) => (
          <GenreTag key={movieDetails.genres_id}>{genre.name}</GenreTag>
        ))
      )}
    </GenreWrapper>
  );
};
