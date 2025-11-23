import styled from 'styled-components';
import { useState } from 'react';
import { useData } from '../providers/DataProvider';
import chevron from '../../assets/chevron.png';

export function Search() {
  const {
    searchName,
    searchGender,
    searchType,
    searchSpecies,
    searchStatus,
    setActivePage,
    setSearchName,
    setSearchGender,
    setSearchType,
    setSearchSpecies,
    setSearchStatus
  } = useData();

  const [tempName, setTempName] = useState(searchName);
  const [tempGender, setTempGender] = useState(searchGender);
  const [tempType, setTempType] = useState(searchType);
  const [tempSpecies, setTempSpecies] = useState(searchSpecies);
  const [tempStatus, setTempStatus] = useState(searchStatus);

  const handleApply = () => {
    setSearchName(tempName);
    setSearchGender(tempGender);
    setSearchType(tempType);
    setSearchSpecies(tempSpecies);
    setSearchStatus(tempStatus);
    setActivePage(0);
  };
  const handleReset = () => {
    setSearchName('');
    setSearchGender('');
    setSearchType('');
    setSearchSpecies('');
    setSearchStatus('');
    setTempName('');
    setTempGender('');
    setTempSpecies('');
    setTempType('');
    setTempStatus('');
    setActivePage(0);
  };

  return (
    <SearchContainer>
      <SearchSelect
        onChange={(e) => setTempStatus(e.target.value)}
        value={tempStatus}
        className={!tempStatus ? 'placeholder' : ''}
      >
        <option value="" disabled hidden>
          Status
        </option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="Unknown">Unknown</option>
      </SearchSelect>
      <SearchSelect
        type="text"
        onChange={(e) => setTempGender(e.target.value)}
        value={tempGender}
        className={!tempGender ? 'placeholder' : ''}
      >
        <option value="" disabled hidden>
          Gender
        </option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
        <option value="Genderless">Genderless</option>
        <option value="Unknown">Unknown</option>
      </SearchSelect>
      <SearchSelect
        onChange={(e) => setTempSpecies(e.target.value)}
        value={tempSpecies}
        className={!tempSpecies ? 'placeholder' : ''}
      >
        <option value="" disabled hidden>
          Species
        </option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
        <option value="Humanoid">Humanoid</option>
        <option value="Robot">Robot</option>
        <option value="Animal">Animal</option>
        <option value="Mythological Creature">Mythological Creature</option>
        <option value="Disease">Disease</option>
        <option value="Poopybutthole">Poopybutthole</option>
        <option value="Cronenberg">Cronenberg</option>
        <option value="Unknown">Unknown</option>
      </SearchSelect>
      <SearchInput
        type="text"
        placeholder="Name"
        onChange={(e) => setTempName(e.target.value)}
        value={tempName}
      />
      <SearchInput
        type="text"
        placeholder="Type"
        onChange={(e) => setTempType(e.target.value)}
        value={tempType}
      />
      <SearchApplyButton onClick={handleApply}>Apply</SearchApplyButton>
      <SearchResetButton onClick={handleReset}>Reset</SearchResetButton>
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 561px;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: flex-end;
  @media (max-width: 951px) {
    max-width: 482px;
  }
  @media (max-width: 531px) {
    flex-direction: column;
    width: 100%;
    max-width: 240px;
  }
`;

const SearchInput = styled.input`
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
  @media (max-width: 951px) {
    max-width: 150px;
  }
  @media (max-width: 531px) {
    max-width: 240px;
  }
`;

const SearchSelect = styled.select`
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
    color: #757575;
  }
  @media (max-width: 951px) {
    max-width: 150px;
  }
  @media (max-width: 531px) {
    max-width: 240px;
  }
`;
const SearchApplyButton = styled.button`
  padding: 10px 15px;
  border: 1px solid;
  border-radius: 10px;
  font-size: 24px;
  border: 1px solid #83bf46;
  color: #83bf46;
  border-radius: 8px;
  background-color: #263750;
  width: 100%;
  max-width: 85px;
  display: flex;
  justify-content: center;
  @media (max-width: 951px) {
    max-width: 70px;
  }
  @media (max-width: 531px) {
    max-width: 240px;
  }
`;
const SearchResetButton = styled.button`
  padding: 10px 15px;
  border: 1px solid;
  border-radius: 10px;
  font-size: 24px;
  border: 1px solid #ff5152;
  color: #ff5152;
  border-radius: 8px;
  background-color: #263750;
  width: 100%;
  max-width: 85px;
  display: flex;
  justify-content: center;
  @media (max-width: 951px) {
    max-width: 70px;
  }
  @media (max-width: 531px) {
    max-width: 240px;
  }
`;
