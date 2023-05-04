import {
  SectionCastCrew,
  Wrapper,
  List,
  Name,
  Tile,
  Photo,
  Character,
} from "./styled";
import { SectionTitle } from "./SectionTitle";

export const Section = ({ movieCredits, title }) => {
  return (
    <SectionCastCrew>
      <SectionTitle>{title}</SectionTitle>
      <Wrapper>
        <List>
          {Object.values(movieCredits.cast || {}).map((element) => (
            <Tile key={element.id}>
              <Photo
                src={`https://image.tmdb.org/t/p/w185/${element.profile_path}`}
              />
              <Name>{element.name}</Name>
              <Character>{element.character}</Character>
            </Tile>
          ))}
        </List>
      </Wrapper>
    </SectionCastCrew>
  );
};
