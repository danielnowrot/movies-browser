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
  const pathPhoto = "https://image.tmdb.org/t/p/w185/";
  return (
    <Wrapper>
      <SectionTitle>Crew</SectionTitle>
      <List>
        {Object.values(movieCredits.cast || {}).map(
          ({ index, profile_path, name, character }) => (
            <Tile key={index}>
              {profile_path ? (
                <Photo src={`${pathPhoto}${profile_path}`} />
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
          ({ index, profile_path, name, department }) => (
            <Tile key={index}>
              {profile_path ? (
                <Photo src={`${pathPhoto}${profile_path}`} />
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

      {/* <SectionTitle>{title}</SectionTitle>
      <List>
        {Object.values(objectValues || {}).map(
          ({ index, profile_path, name }, characterOrDepartment) => (
            <Tile key={index}>
              {profile_path ? (
                <Photo src={`${pathPhoto}${profile_path}`} />
              ) : (
                <NoPathWrapper>
                  <NoProfilePath />
                </NoPathWrapper>
              )}

              <Name>{name}</Name>
              <Character>{characterOrDepartment}</Character>
            </Tile>
          )
        )}
      </List> */}
    </Wrapper>
  );
};
