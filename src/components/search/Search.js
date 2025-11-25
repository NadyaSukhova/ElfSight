import styled from 'styled-components';
import { useCallback, useState } from 'react';
import { useData } from '../providers/DataProvider';
import { SearchSelect } from './SearchSelect';
import { SearchInput } from './SearchInput';
import { SearchButton } from './SearchButton';

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

  const handleApply = useCallback(() => {
    setSearchName(tempName);
    setSearchGender(tempGender);
    setSearchType(tempType);
    setSearchSpecies(tempSpecies);
    setSearchStatus(tempStatus);
    setActivePage(0);
  }, [
    setActivePage,
    setSearchGender,
    setSearchName,
    setSearchSpecies,
    setSearchStatus,
    setSearchType,
    tempGender,
    tempName,
    tempSpecies,
    tempStatus,
    tempType
  ]);

  const handleReset = useCallback(() => {
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
  }, [
    setActivePage,
    setSearchGender,
    setSearchName,
    setSearchSpecies,
    setSearchStatus,
    setSearchType
  ]);

  return (
    <SearchContainer>
      <SearchSelect
        searchEl={tempStatus}
        setSearchEl={setTempStatus}
        placeholder={'Status'}
        options={['Alive', 'Dead', 'Unknown']}
      />
      <SearchSelect
        searchEl={tempGender}
        setSearchEl={setTempGender}
        placeholder={'Gender'}
        options={['Female', 'Male', 'Genderless', 'Unknown']}
      />
      <SearchSelect
        searchEl={tempSpecies}
        setSearchEl={setTempSpecies}
        placeholder={'Species'}
        options={[
          'Human',
          'Alien',
          'Humanoid',
          'Robot',
          'Animal',
          'Mythological Creature',
          'Disease',
          'Poopybutthole',
          'Cronenberg',
          'Unknown'
        ]}
      />

      <SearchInput
        searchEl={tempName}
        setSearchEl={setTempName}
        placeholder={'Name'}
      />
      <SearchInput
        searchEl={tempType}
        setSearchEl={setTempType}
        placeholder={'Type'}
      />
      <SearchButton text="Apply" handleClick={handleApply} color={'#83bf46'} />
      <SearchButton text="Reset" handleClick={handleReset} color={'#ff5152'} />
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
