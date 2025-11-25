import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import { Loader, Text } from '../common';

const API_EPISODES_URL = 'https://rickandmortyapi.com/api/episode';

export function PopupEpisodes({ episodes }) {
  const [series, setSeries] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    if (!episodes?.length) {
      setSeries([]);
      setIsFetching(false);

      return;
    }
    try {
      setIsFetching(true);

      const episodesIds = episodes.map((ep) => ep.match(/\d+$/)[0]);

      axios
        .get(`${API_EPISODES_URL}/${episodesIds.join(',')}`)
        .then(({ data }) => {
          if (episodes.length === 1) {
            setSeries([data]);
          } else {
            setSeries(data);
          }
        });
    } catch (err) {
      console.error('Ошибка при загрузке эпизодов');
      console.error(err);
    } finally {
      setIsFetching(false);
    }
  }, [episodes]);

  if (isFetching) {
    return <Loader />;
  }

  return (
    <PopupEpisodesContainer>
      <Text>Participated in episodes:</Text>

      <PopupEpisodesList _length={series.length}>
        {series?.map(({ id, name, episode }) => (
          <Episode key={id} _length={series.length}>
            <EpisodeMarking>
              {episode
                .replace(/S0?(\d+)/, 'Season $1 - ')
                .replace(/E0?(\d+)/, 'Ep. $1')}
            </EpisodeMarking>
            {name}
          </Episode>
        ))}
      </PopupEpisodesList>
    </PopupEpisodesContainer>
  );
}

const PopupEpisodesContainer = styled.div``;

const PopupEpisodesList = styled.div`
  display: flex;
  flex-direction: column;

  ${({ _length }) =>
    _length > 20 &&
    css`
      display: grid;
      grid-auto-flow: column;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: repeat(${Math.ceil(_length / 2)}, 1fr);

      & p {
        width: 95%;
        border-bottom: 2px solid #eee;
      }

      & span {
        margin-bottom: 0;
      }

      @media (max-width: 600px) {
        grid-template-columns: 1fr;
        & span {
          margin-bottom: 10px;
        }
        grid-template-rows: repeat(${_length}, 1fr);
      }
    `}
`;

const Episode = styled.p`
  width: 100%;
  display: grid;
  align-items: center;
  padding: 10px 0;
`;

const EpisodeMarking = styled.span`
  margin-bottom: 8px;
  color: #83bf46;
`;
