import {
  AllWraper,
  Wrapper,
  List,
  Name,
  Tile,
  TileMovie,
  PhotoMovie,
  Photo,
  Character,
  NoPathWrapper,
  DetailsContainer,
  DeatilsMovie,
  Year,
} from "./styled";
import { SectionTitle } from "../../../../core/SectionTitle";
import { ReactComponent as NoProfilePath } from "../../../../Images/NoProfilePath.svg";

export const Section = ({ movieCredits, movieDetails }) => {
  const pathPhoto = "https://image.tmdb.org/t/p/w185/";
  const pathPhoto300 = "https://image.tmdb.org/t/p/w300/";
  const pathPhoto1280 = "https://image.tmdb.org/t/p/w1280/";
  return (
    <AllWraper>
      <Wrapper>
        <DetailsContainer>
          <PhotoMovie
            src={pathPhoto300 + movieDetails.poster_path}
          ></PhotoMovie>
          <DeatilsMovie>
            <SectionTitle>{movieDetails.title}</SectionTitle>
          </DeatilsMovie>
        </DetailsContainer>

        <SectionTitle>Crew</SectionTitle>
        <List>
          {Object.values(movieCredits.cast || {}).map(
            ({ profile_path, name, character }, index) => (
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
            ({ profile_path, name, department }, index) => (
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
      </Wrapper>
    </AllWraper>
  );
};
