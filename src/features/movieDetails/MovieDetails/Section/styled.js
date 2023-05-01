import styled from "styled-components";

export const SectionCastCrew = styled.section``;

export const Wrapper = styled.div``;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

export const Tile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 15px 14px 16px;
  background: ${({ theme }) => theme.colors.white};
  margin-right: 24px;
  margin-bottom: 24px;
`;

export const Photo = styled.img`
  border-radius: 5px;
  max-width: 177px;
  max-height: 264px;
`;

export const Name = styled.p`
  margin: 0px;
  padding-top: 14px;
`;

export const Character = styled.p`
  margin: 0;
  padding-top: 8px;
`;
