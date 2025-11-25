import styled from 'styled-components';
import { useCallback } from 'react';
import { useData } from './providers';

export function Pagination() {
  const { info, activePage, setActivePage } = useData();

  const totalPages = info?.pages || 0;

  const handlePageClick = useCallback(
    (index) => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActivePage(index);
    },
    [setActivePage]
  );

  const handleFirstPage = useCallback(() => handlePageClick(0), [
    handlePageClick
  ]);
  const handlePrevPage = useCallback(() => handlePageClick(activePage - 1), [
    handlePageClick,
    activePage
  ]);
  const handleNextPage = useCallback(() => handlePageClick(activePage + 1), [
    handlePageClick,
    activePage
  ]);
  const handleLastPage = useCallback(() => handlePageClick(totalPages - 1), [
    handlePageClick,
    totalPages
  ]);

  if (totalPages <= 1) return null;

  return (
    <PaginationContainer>
      {activePage > 0 && (
        <>
          {activePage > 1 && (
            <>
              <Page onClick={handleFirstPage}>« First</Page>
              <Ellipsis>...</Ellipsis>
            </>
          )}
          <Page onClick={handlePrevPage}>{activePage}</Page>
        </>
      )}

      <Page active>{activePage + 1}</Page>

      {activePage < totalPages - 1 && (
        <>
          <Page onClick={handleNextPage}>{activePage + 2}</Page>

          {activePage < totalPages - 2 && (
            <>
              <Ellipsis>...</Ellipsis>
              <Page onClick={handleLastPage}>Last »</Page>
            </>
          )}
        </>
      )}
    </PaginationContainer>
  );
}
const PaginationContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const Page = styled.span`
  color: #fff;
  font-size: 18px;
  padding: 5px;
  cursor: pointer;
  transition: color 0.2s;
  ${({ active }) => active && 'color: #83bf46'};

  &:hover {
    color: #83bf46;
  }
`;

const Ellipsis = styled(Page)`
  cursor: default;

  &:hover {
    color: #fff;
  }
`;
