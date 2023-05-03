import { ProfileImage, Wrapper, Name, Character } from "./styled";
import noPicture from "../../../Images/noPicture.png";

export const PersonTile = ({ id, profile_path, name, character, job }) => {
    const imagesBaseUrl = "https://image.tmdb.org/t/p";
    
    return (
        <Wrapper to={`/personCredits/${id}`}>
            <ProfileImage
                src={profile_path ? `${imagesBaseUrl}/w342${profile_path}` : noPicture}
                alt=""
            ></ProfileImage>    
            {name && <Name>{name}</Name>}
            {character && <Character>{character}</Character>}
            {job && <Character>{job}</Character>}
        </Wrapper>
    );
};