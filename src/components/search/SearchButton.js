import styled from 'styled-components';

export function SearchButton({ color, handleClick, text }) {
  return (
    <SearchButtonContainer color={color} onClick={handleClick}>
      {text}
    </SearchButtonContainer>
  );
}

const SearchButtonContainer = styled.button`
  padding: 10px 15px;
  border: 1px solid;
  border-radius: 10px;
  font-size: 24px;
  border: 1px solid ${(props) => props.color};
  color: ${(props) => props.color};
  border-radius: 8px;
  background-color: #263750;
  width: 100%;
  max-width: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 951px) {
    max-width: 70px;
  }
  @media (max-width: 531px) {
    max-width: 240px;
  }
`;
