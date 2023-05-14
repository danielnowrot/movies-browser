import {
    Container,
    Content,
    Poster,
    Title,
    Year,
    Wrapper,
    SubTitle,
    Information,
    TileArticle,
  } from "./styled";
  
  import noPoster from "../../Images/noPicture.png";
  
  export const Tile = ({
    title,
    release_date,
    place_of_birth,
    birthday,
    countries,
    article,
    profile_path,
  }) => {
    const dateOfRelease = new Date(release_date);
    const dayOfBirth = new Date(birthday);
  
    return (
      <Container>
        {profile_path !== undefined && (
          <Poster
            src={profile_path ? `https://image.tmdb.org/t/p/w342${profile_path}` : noPoster}
            alt=""
          />
        )}
  
        <Content>
          {title && <Title>{title}</Title>}
          {release_date && <Year>{release_date.slice(0, 4)}</Year>}
          <>
            {countries && release_date ? (
              <>
                {countries ? (
                  countries.length > 0 ? (
                    <Wrapper>
                      <SubTitle>Production:</SubTitle>
                      <Information>
                        {countries.map((country) => (
                          <>{country.name}</>
                        ))}
                      </Information>
                    </Wrapper>
                  ) : null
                ) : null}
                {release_date ? (
                  <Wrapper>
                    <SubTitle>Release date:</SubTitle>
                    <Information>
                      {dateOfRelease.toLocaleDateString("pl-PL")}
                    </Information>
                  </Wrapper>
                ) : null}
              </>
            ) : null}
  
            {birthday || place_of_birth ? (
              <div>
                {birthday && (
                  <Wrapper>
                    <SubTitle>Date of birth:</SubTitle>
                    <Information>
                      {dayOfBirth.toLocaleDateString("pl-PL")}
                    </Information>
                  </Wrapper>
                )}
                {place_of_birth && (
                  <Wrapper>
                    <SubTitle>Place of birth:</SubTitle>
                    <Information>{place_of_birth}</Information>
                  </Wrapper>
                )}
              </div>
            ) : null}
          </>
        </Content>
        <TileArticle>{article}</TileArticle>
      </Container>
    );
  };