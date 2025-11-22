import styled from 'styled-components';

export function SearchIcon({ src }) {
  return (
    <Icon>
      <img src={src} alt="Search icon" />
    </Icon>
  );
}

const Icon = styled.div`
  width: 50px;
  height: 50px;

  img {
    width: 100%;
    height: 100%;
  }
`;
