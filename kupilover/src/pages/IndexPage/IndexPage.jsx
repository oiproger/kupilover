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
            <Link to="/random-romantic">
              <Button size="m">Случайное свидание</Button>
            </Link>
          </Placeholder>
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
