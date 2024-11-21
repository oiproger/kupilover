import { Section, Cell, Image, List, Button, Modal, Placeholder, Select, Caption, Tabbar, Card, Textarea } from '@telegram-apps/telegram-ui';
import React, { useState } from 'react';
import { popup } from '@telegram-apps/sdk';

import { Link } from '@/components/Link/Link.jsx';

import tonSvg from './ton.svg';

import './IndexPage.css';
import { SectionHeader } from '@telegram-apps/telegram-ui/dist/components/Blocks/Section/components/SectionHeader/SectionHeader';
import { ModalHeader } from '@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader';
import { CardChip } from '@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardChip/CardChip';
import { CardCell } from '@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardCell/CardCell';

/**
 * @returns {JSX.Element}
 */
export function IndexPage() {
  const generateRandMission = () => {
    romanticCards.length = 0;
    for (let i = 0; i < 2; i++) {
      const randIndx = genCriteries.length * Math.random() << 0;
      const tmpTheme = genCriteries[randIndx];
      const getSubTheme = genMissions[tmpTheme];
      let randomItem = pickRandomMission(getSubTheme);
      while (tmpName === randomItem.missName) {
        randomItem = pickRandomMission(getSubTheme);
      }
      tmpName = randomItem.missName;
      tmpAbout = randomItem.missAbout;
      romanticCards.push({
        hName: tmpName,
        hAbout: tmpAbout,
      });
    }
    setRomCards(romanticCards);
    return;
  }

  const MainPage = () => (
    <Section>
          <Placeholder>
            <Link to="/filter-romantic">
              <Button size="m">Свидание по предпочтениям</Button>
            </Link>
          </Placeholder>
          <Placeholder>
            <Button size="m">Случайное свидание</Button>
          </Placeholder>
        </Section>
  )

  const RandomPage = () => (
    <Section header="Случайное свидание" id="randomRomantic">
      <List>
        <Placeholder>
          <Button size="m" onClick={generateRandMission}>Мне повезёт!</Button>
        </Placeholder>

        <Section>
            {romCards.map(({
              hName,
              hAbout,
            }) => 
              <Section>
                <Textarea header={hName} disabled>{hAbout}</Textarea>
              </Section>
            )}
        </Section>

        <Placeholder>
          <Button size="m">Будущая кнопка "Поделиться"</Button>
        </Placeholder>

      </List>
    </Section>
  )

  return ( <div style={{
    height: 200,
    width: 400,
  }}>
    <List>
      { <MainPage />}
    </List>
    </div>);
}
