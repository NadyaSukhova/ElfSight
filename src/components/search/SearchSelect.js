import styled from 'styled-components';
import chevron from '../../assets/chevron.png';
import { useCallback } from 'react';

export function SearchSelect({ searchEl, setSearchEl, placeholder, options }) {
  const selectChange = useCallback(
    (e) => {
      setSearchEl(e.target.value);
    },
    [setSearchEl]
  );

  if (options && options.length > 0)
    return (
      <SearchSelectContainer
        onChange={selectChange}
        value={searchEl}
        className={!searchEl ? 'placeholder' : ''}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </SearchSelectContainer>
    );
  else return;
}

const SearchSelectContainer = styled.select`
  padding: 12px 12px 12px 16px;
  border: 1px solid;
  border-radius: 10px;
  font-size: 24px;
  color: white;
  border: 1px solid #83bf46;
  border-radius: 8px;
  width: 100%;
  max-width: 180px;
  appearance: none;
  background: url(${chevron}) no-repeat right 12px center #263750;
  &.placeholder {
    color: rgba(179, 179, 179, 1);
  }
  @media (max-width: 951px) {
    max-width: 150px;
  }
  @media (max-width: 531px) {
    max-width: 240px;
  }
`;
