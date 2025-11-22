import styled from 'styled-components';
import search from '../../assets/search.png';
import { useData } from '../providers/DataProvider';
import { SearchIcon } from './SearchIcon';

export function Search() {
  const { setSearchName } = useData();
  const handleChange = (e) => {
    setSearchName(e.target.value);
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search characters..."
        onChange={handleChange}
      />
      <SearchIcon src={search} />
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const SearchInput = styled.input`
  padding: 10px 15px;
  border: none;
  border-radius: 10px;
  font-size: 24px;
  color: white;
  background-color: rgba(255, 255, 255, 0.2);
  width: 300px;
`;
