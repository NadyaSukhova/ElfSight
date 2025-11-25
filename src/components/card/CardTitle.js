import styled from 'styled-components';
import { ReactComponent as Male } from '../../assets/genders/male.svg';
import { ReactComponent as Female } from '../../assets/genders/female.svg';
import { ReactComponent as Genderless } from '../../assets/genders/genderless.svg';

export function CardTitle({ name, gender, className }) {
  function Icon() {
    return gender === 'Male' ? (
      <Male width={20} height={20} fill="#33b3c8" title="Male" />
    ) : gender === 'Female' ? (
      <Female width={24} height={24} fill="pink" title="Female" />
    ) : gender === 'Unknown' || gender === 'Genderless' ? (
      <Genderless width={24} height={24} fill="#999" title="Genderless" />
    ) : null;
  }

  return (
    <CardTitleContainer className={className}>
      <CardTitleText className="card-title">{name}</CardTitleText>
      <IconContainer>{Icon()}</IconContainer>
    </CardTitleContainer>
  );
}

const IconContainer = styled.div`
  display: flex;
`;

const CardTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const CardTitleText = styled.h2`
  margin-right: 8px;
  transition: color 0.3s;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
  font-size: 24px;

  @media (max-width: 450px) {
    max-width: 130px;
    font-size: 18px;
  }
`;
