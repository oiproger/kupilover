import { useState } from 'react';
import { List, Placeholder, Section, Select, Button} from '@telegram-apps/telegram-ui';
import { DatesBase } from '@/components/DatesBase/DatesBase.jsx';

/**
 * @returns {JSX.Element}
 */
export function GetFilterRomantic() {
  const romanticCards = [
  ];
  const [selTheme, setSelTheme] = useState("Выберите");
  const [romCards, setRomCards] = useState(romanticCards);
  const genCriteries = [
    "Выберите",
    "Домашний",
    "Прогулочный",
    "Познавательный",
    "Выездной",
    "Знакомство в компании",
  ];

  const generateMission = () => {
    if (selTheme === genCriteries[0]) {
      return;
    }
    romanticCards.length = 0;
    for (let i = 0; i < 2; i++) {
      romanticCards.push(selTheme);
    }
    setRomCards(romanticCards);
    console.log(romanticCards);
    return;
  };

  return (
    <List className="background">
      <Section header="Свидание по предпочтениям" id="filterRomantic">
        <List>
          <Select header="Тематика" placeholder="Выбирай)" value={selTheme} onChange={e => setSelTheme(e.target.value)}>
            {genCriteries.map((criteriesName, criteriesVal) => (
              <option key={criteriesVal}>{criteriesName}</option>
            ))}
          </Select>

          <Placeholder>
            <Button size="m" onClick={generateMission}>Подобрать!</Button>
          </Placeholder>

          <Section>
              {romCards.map((
                itm
              ) => 
                <DatesBase hTheme={itm} />
              )}
          </Section>

        </List>
      </Section>
    </List>
  );
}
