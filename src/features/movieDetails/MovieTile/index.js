import { Genre } from "./Genre";
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
} from "./styled";
import noPoster from "../../../Images/no poster.svg";

export const MovieTile = ({
  id,
  job,
  title,
  poster_path,
  vote_average,
  vote_count,
  release_date,
  genre_ids,
}) => {
  return (
    <TileWrapper key={id} id={id}>
      <ImageWrapper
        src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : noPoster}
        alt=""
      ></ImageWrapper>
      <DescriptionWrapper>
        {title && <Title>{title}</Title>}
        {job && 
          <Subtitle>{job}</Subtitle>
        }
        {release_date && (
          <Subtitle>{new Date(release_date).getFullYear()}</Subtitle>
        )}
        {genre_ids && <Genre genre_ids={genre_ids} />}
        {vote_average && vote_count ? (
          <RatingWrapper>
            <Star />
            <Rate>{vote_average.toFixed(1)}</Rate>
            <Votes>{vote_count} votes</Votes>
          </RatingWrapper>
        ) : (
          <Star />
        )}
      </DescriptionWrapper>
    </TileWrapper>
  );
};