import styled from 'styled-components';
import { Logo } from './Logo';
import { Search } from './Search';

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
  justify-items: end;
`;
