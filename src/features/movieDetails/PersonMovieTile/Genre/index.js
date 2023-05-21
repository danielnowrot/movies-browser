import { useSelector } from "react-redux";
import { selectGenres } from "./genreSlice";
import { GenreTag, GenreWrapper } from "./styled";

export const Genre = ({ genre_ids }) => {
  const genres = useSelector(selectGenres);
  const filterGenres = genre_ids.map((genre) =>
    genres.filter(({ id }) => genre === id)
  );

  return (
    <GenreWrapper>
      {filterGenres.map((genre) =>
        genre.map(({ name }) => <GenreTag key={genre_ids}>{name}</GenreTag>)
      )}
    </GenreWrapper>
  );
};