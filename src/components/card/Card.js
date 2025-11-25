import styled from 'styled-components';
import { CardTitle } from './CardTitle';
import { CardStatus } from './CardStatus';
import { useCallback } from 'react';

export function Card({
  id,
  status,
  name,
  species,
  type,
  gender,
  image,
  onClickHandler
}) {
  const handleClick = useCallback(() => {
    const characterData = { id, status, name, species, type, gender, image };
    onClickHandler(characterData);
  }, [onClickHandler, id, status, name, species, type, gender, image]);

  return (
    <CardContainer onClick={handleClick}>
      <CardImg src={image} alt={name} />
      <CardInfo>
        <CardTitle name={name} gender={gender} />
        <CardStatus status={status} species={species} type={type} />
      </CardInfo>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 400px;
  flex-direction: column;
  background: #263750;
  border-radius: 10px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.01);
    box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.2);
  }

  &:hover .card-title {
    color: #83bf46;
  }
`;

const CardImg = styled.img`
  border-radius: 10px 10px 0 0;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  padding: 20px;
`;
