import axios from 'axios';
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback
} from 'react';

const API_URL = 'https://rickandmortyapi.com/api/character/';

export function DataProvider({ children }) {
  const [activePage, setActivePage] = useState(0);
  const [characters, setCharacters] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState(false);
  const [info, setInfo] = useState({});
  const [apiURL, setApiURL] = useState(API_URL);
  const [searchName, setSearchName] = useState('');
  const [searchGender, setSearchGender] = useState('');
  const [searchType, setSearchType] = useState('');
  const [searchSpecies, setSearchSpecies] = useState('');
  const [searchStatus, setSearchStatus] = useState('');
  const [searchUrl, setSearchUrl] = useState(API_URL);

  useEffect(() => {
    const newSearchUrl =
      (activePage > 0 ? `page=${activePage + 1}` : '?page=1') +
      (searchName ? `&name=${searchName}` : '') +
      (searchGender ? `&gender=${searchGender}` : '') +
      (searchType ? `&type=${searchType}` : '') +
      (searchSpecies ? `&species=${searchSpecies}` : '') +
      (searchStatus ? `&status=${searchStatus}` : '');

    const finalUrl = newSearchUrl ? `${API_URL}?${newSearchUrl}` : API_URL;
    setSearchUrl(finalUrl);
  }, [
    activePage,
    searchName,
    searchGender,
    searchType,
    searchSpecies,
    searchStatus
  ]);

  const fetchData = useCallback(async (url) => {
    setIsFetching(true);
    setIsError(false);
    axios
      .get(url)
      .then(({ data }) => {
        setIsFetching(false);
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((e) => {
        setIsFetching(false);
        setIsError(true);
        console.error(e);
      });
  }, []);

  useEffect(() => {
    fetchData(searchUrl);
  }, [searchUrl, fetchData]);

  const dataValue = useMemo(
    () => ({
      activePage,
      setActivePage,
      apiURL,
      setApiURL,
      searchName,
      setSearchName,
      searchGender,
      setSearchGender,
      searchType,
      setSearchType,
      searchSpecies,
      setSearchSpecies,
      searchStatus,
      setSearchStatus,
      characters,
      fetchData,
      isFetching,
      isError,
      info
    }),
    [
      activePage,
      apiURL,
      searchName,
      searchGender,
      searchType,
      searchSpecies,
      searchStatus,
      characters,
      isFetching,
      isError,
      info,
      fetchData
    ]
  );

  return (
    <DataContext.Provider value={dataValue}>{children}</DataContext.Provider>
  );
}

const DataContext = createContext({});

export const useData = () => useContext(DataContext);
