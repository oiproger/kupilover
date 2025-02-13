import { useState } from 'react';
import { List, Placeholder, Section, Select, Button} from '@telegram-apps/telegram-ui';
import { DatesBase } from '@/components/DatesBase/DatesBase.jsx';
import './GetFilterRomantic.css';

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
  ];

  const generateMission = () => {
    let tmpTheme = selTheme;
    if (selTheme === genCriteries[0]) {
      tmpTheme = "Домашний";
    }
    romanticCards.length = 0;
    for (let i = 0; i < 2; i++) {
      romanticCards.push([tmpTheme,i]);
    }
    setRomCards(romanticCards);
    return;
  };

  return (
    <List >
      <Section header="Свидание по предпочтениям" id="filterRomantic">
        <List>
          <Select header="Тематика" placeholder="Выбирай)" id="selectThem" value={selTheme} onChange={e => {setSelTheme(e.target.value); generateMission();}}>
            {genCriteries.map((criteriesName, criteriesVal) => (
              <option key={criteriesVal}>{criteriesName}</option>
            ))}
          </Select>

          {/* <Placeholder>
            <Button size="m" onClick={generateMission}>Подобрать!</Button>
          </Placeholder> */}

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
