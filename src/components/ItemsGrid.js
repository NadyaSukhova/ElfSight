import { useState } from 'react';
import styled from 'styled-components';
import { Popup } from './popup';
import { useData } from './providers';
import { Card } from './card/Card';

const defaultPopupSettings = {
  visible: false,
  content: {}
};

export function ItemsGrid() {
  const { characters } = useData();
  const [popupSettings, setPopupSettings] = useState(defaultPopupSettings);
  const [scrollY, setScrollY] = useState(0);

  function cardOnClickHandler(props) {
    const mainElement = document.querySelector('body');
    const currentScroll = window.scrollY;
    const scrollWidth =
      window.innerWidth - document.documentElement.clientWidth;
    setScrollY(currentScroll);
    if (mainElement) {
      mainElement.style.overflow = 'hidden';
      mainElement.style.paddingRight = `${scrollWidth}px`;
      mainElement.dataset.savedScroll = currentScroll;
    }
    setPopupSettings({
      visible: true,
      content: { ...props }
    });
  }

  function closePopup() {
    const mainElement = document.querySelector('body');
    if (mainElement) {
      mainElement.style.overflow = '';
      mainElement.style.paddingRight = '0';
    }
    const savedScroll = mainElement.dataset.savedScroll;
    if (savedScroll) {
      window.scrollTo(0, savedScroll);
    }
  }

  if (!characters.length) {
    return null;
  }

  return (
    <Container>
      {characters.map((props, index) => (
        <Card
          key={index}
          onClickHandler={() => cardOnClickHandler(props)}
          {...props}
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
