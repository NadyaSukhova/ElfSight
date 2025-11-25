import { useState, useCallback } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Popup } from './popup/Popup';
import { useData } from './providers';
import { Card } from './card/Card';

const defaultPopupSettings = {
  visible: false,
  content: {}
};

export function ItemsGrid() {
  const { characters } = useData();
  const [popupSettings, setPopupSettings] = useState(defaultPopupSettings);

  const cardOnClickHandler = useCallback(async (character) => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${character.id}`
    );
    const fullCharacterData = response.data;
    const mainElement = document.querySelector('body');
    const currentScroll = window.scrollY;
    const scrollWidth =
      window.innerWidth - document.documentElement.clientWidth;
    if (mainElement) {
      mainElement.style.overflow = 'hidden';
      mainElement.style.paddingRight = `${scrollWidth}px`;
      mainElement.dataset.savedScroll = currentScroll;
    }
    setPopupSettings({
      visible: true,
      content: { ...fullCharacterData }
    });
  }, []);

  const closePopup = useCallback(() => {
    const mainElement = document.querySelector('body');
    if (mainElement) {
      mainElement.style.overflow = '';
      mainElement.style.paddingRight = '0';
    }
    const savedScroll = mainElement.dataset.savedScroll;
    if (savedScroll) {
      window.scrollTo(0, savedScroll);
    }
  }, []);

  if (!characters.length) {
    return null;
  }

  return (
    <Container>
      {characters.map((character) => (
        <Card
          key={character.id}
          onClickHandler={cardOnClickHandler}
          {...character}
        />
      ))}

      <Popup
        settings={popupSettings}
        setSettings={setPopupSettings}
        onClose={closePopup}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  justify-items: center;
  gap: 30px;
`;
