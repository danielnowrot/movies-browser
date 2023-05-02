import {
  Wrapper,
  List,
  Name,
  Tile,
  Photo,
  Character,
  NoPathWrapper,
} from "./styled";
import { SectionTitle } from "../../../../core/SectionTitle";
import { ReactComponent as NoProfilePath } from "../../../../Images/NoProfilePath.svg";

export const Section = ({ movieCredits, movieDetails }) => {
  return (
    <Wrapper>
      <SectionTitle>Cast</SectionTitle>
      <List>
        {Object.values(movieCredits.cast || {}).map(
          ({ id, profile_path, name, character }) => (
            <Tile key={id}>
              {profile_path ? (
                <Photo
                  src={`https://image.tmdb.org/t/p/w185/${profile_path}`}
                />
              ) : (
                <NoPathWrapper>
                  <NoProfilePath />
                </NoPathWrapper>
              )}

              <Name>{name}</Name>
              <Character>{character}</Character>
            </Tile>
          )
        )}
      </List>

      <SectionTitle>Crew</SectionTitle>
      <List>
        {Object.values(movieCredits.crew || {}).map(
          ({ id, profile_path, name, department }) => (
            <Tile key={id}>
              {profile_path ? (
                <Photo
                  src={`https://image.tmdb.org/t/p/w185/${profile_path}`}
                />
              ) : (
                <NoPathWrapper>
                  <NoProfilePath />
                </NoPathWrapper>
              )}

              <Name>{name}</Name>
              <Character>{department}</Character>
            </Tile>
          )
        )}
      </List>
    </Wrapper>
  );
};
