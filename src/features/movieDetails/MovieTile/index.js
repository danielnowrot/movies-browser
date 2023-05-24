import {
  DescriptionWrapper,
  Subtitle,
  ImageWrapper,
  TileWrapper,
  Rate,
  RatingWrapper,
  Star,
  Title,
  Votes,
  Overview,
  Production,
  CountryWrapper as SmallWrapper,
  Country,
  ReleaseDate,
  FullDate,
  Ten,
} from "./styled";
import noPoster from "../../../Images/no poster.svg";
import { GenreWrapper, GenreTag } from "./Genre/styled";

export const MovieTile = ({ movieDetails }) => {
  return (
    <TileWrapper key={movieDetails.id} id={movieDetails.id}>
      <ImageWrapper
        src={
          movieDetails.poster_path
            ? `https://image.tmdb.org/t/p/w342${movieDetails.poster_path}`
            : noPoster
        }
        alt=""
      ></ImageWrapper>
      <DescriptionWrapper>
        {movieDetails.title && <Title>{movieDetails.title}</Title>}
        {movieDetails.release_date && (
          <Subtitle>
            {new Date(movieDetails.release_date).getFullYear()}
          </Subtitle>
        )}
        <SmallWrapper>
          <Production>Production:&nbsp;</Production>
          <Country>
            {movieDetails.production_countries &&
              movieDetails.production_countries
                .map((country) => country.name)
                .join(", ")}
          </Country>
        </SmallWrapper>
        {movieDetails.release_date && (
          <SmallWrapper>
            <ReleaseDate>Release date:&nbsp;</ReleaseDate>
            <FullDate>
              {new Date(movieDetails.release_date).toLocaleDateString()}
            </FullDate>
          </SmallWrapper>
        )}
        <GenreWrapper>
          {movieDetails.genres?.map((genre) => (
            <GenreTag key={genre.id}>{genre.name}</GenreTag>
          ))}
        </GenreWrapper>
        {movieDetails.vote_average && movieDetails.vote_count ? (
          <RatingWrapper>
            <Star />
            <Rate>{movieDetails.vote_average?.toFixed(1)}</Rate>
            <Ten>/10</Ten>
            <Votes>{movieDetails.vote_count} votes</Votes>
          </RatingWrapper>
        ) : (
          <Star />
        )}
      </DescriptionWrapper>
      <Overview>{movieDetails.overview}</Overview>
    </TileWrapper>
  );
};
