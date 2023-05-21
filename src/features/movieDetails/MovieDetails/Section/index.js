import {
  AllWraper,
  Wrapper,
  List,
  Name,
  Tile,
  Photo,
  Character,
  NoPathWrapper,
  StyledLink,
} from "./styled";
import { SectionTitle } from "../../../../core/SectionTitle";
import { ReactComponent as NoProfilePath } from "../../../../Images/NoProfilePath.svg";

export const Section = ({ movieCredits }) => {
  const pathPhoto = "https://image.tmdb.org/t/p/w342/";

  return (
    <AllWraper>
      <Wrapper>
        <SectionTitle>Cast</SectionTitle>
        <List>
          {Object.values(movieCredits.cast || {}).map(
            ({ profile_path, name, character }, index) => (
              <StyledLink key={index} to={`/people/:id`}>
                <Tile>
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
              </StyledLink>
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
