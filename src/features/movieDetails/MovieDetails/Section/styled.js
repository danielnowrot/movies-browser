import styled from "styled-components";

export const AllWraper = styled.div``;

export const Wrapper = styled.div``;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: center;
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));
  white-space: nowrap;
`;

export const Tile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 15px 14px 16px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  transition: all 170ms;

  &:hover {
    cursor: pointer;
    transform: translateY(-8px);
    box-shadow: 0px 6px 18px 2px #c2d7ff;
  }
`;

export const Photo = styled.img`
  border-radius: 5px;
  max-width: 177px;
  max-height: 264px;
`;

export const Name = styled.p`
  margin: 0px;
  padding-top: 14px;
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.woodsmoke};
`;

export const Character = styled.p`
  margin: 0;
  padding-top: 8px;
  font-size: 18px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.waterloo};
`;

export const NoPathWrapper = styled.div`
  background: ${({ theme }) => theme.colors.silver};
  width: 100%;
  height: 264px;
  display: grid;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;
