import styled from 'styled-components';
import { Logo } from './Logo';
import { Search } from '../search/Search';

export function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <Search />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: auto auto;
  gap: 10px;
  @media (min-width: 951px) {
    justify-content: initial;
    justify-items: end;
  }
  @media (max-width: 531px) {
    justify-items: center;
  }
`;
