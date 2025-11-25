import styled from 'styled-components';
import { useCallback } from 'react';

export function SearchInput({ searchEl, setSearchEl, placeholder }) {
  const inputChange = useCallback(
    (e) => {
      setSearchEl(e.target.value);
    },
    [setSearchEl]
  );

  return (
    <SearchInputContainer
      type="text"
      placeholder={placeholder}
      onChange={inputChange}
      value={searchEl}
    />
  );
}

const SearchInputContainer = styled.input`
  padding: 12px 12px 12px 16px;
  border: 1px solid;
  border-radius: 10px;
  font-size: 24px;
  color: white;
  border: 1px solid #83bf46;
  border-radius: 8px;
  background-color: #263750;
  width: 100%;
  max-width: 180px;
  ::placeholder {
    color: rgba(179, 179, 179, 1);
  }
  @media (max-width: 951px) {
    max-width: 150px;
  }
  @media (max-width: 531px) {
    max-width: 240px;
  }
`;
