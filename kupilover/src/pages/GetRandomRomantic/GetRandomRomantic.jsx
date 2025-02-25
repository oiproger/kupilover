import { useState } from 'react';
import { List, Placeholder, Section, Button} from '@telegram-apps/telegram-ui';
import { DatesBase } from '@/components/DatesBase/DatesBase.jsx';

/**
 * @returns {JSX.Element}
 */
export function GetRandomRomantic() {
  const romanticCards = [
  ];
  const [romCards, setRomCards] = useState([]);
  const genCriteries = [
    "Выберите",
    "Домашний",
    "Прогулочный",
    "Познавательный",
    "Выездной",
  ];

  const generateRandMission = () => {
    romanticCards.length = 0;
    for (let i = 0; i < 2; i++) {
      const hGenIndx = Math.floor(Math.random() * (genCriteries.length - 1) + 1);
      const tmpTheme = genCriteries[hGenIndx];
      // console.log(hGenIndx);
      romanticCards.push([tmpTheme,i]);
    }
    setRomCards(romanticCards);
  };

  return (
    <List >
      <Section header="Случайное свидание">
        <List>

          <Placeholder>
            <Button size="m" onClick={generateRandMission}>Подобрать!</Button>
          </Placeholder>

          <Section>
              {romCards.map((
                itm
              ) => 
                <DatesBase hTheme={itm[0]} hNumber={itm[1]} />
              )}
          </Section>

        </List>
      </Section>
    </List>
  );
}
