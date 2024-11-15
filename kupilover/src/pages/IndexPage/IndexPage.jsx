import { Section, Cell, Image, List, Button, Modal, Placeholder, Slider, Select } from '@telegram-apps/telegram-ui';
import { useState } from 'react';
import { popup } from '@telegram-apps/sdk';

import { Link } from '@/components/Link/Link.jsx';

import tonSvg from './ton.svg';

import './IndexPage.css';
import { SectionHeader } from '@telegram-apps/telegram-ui/dist/components/Blocks/Section/components/SectionHeader/SectionHeader';

/**
 * @returns {JSX.Element}
 */
export function IndexPage() {
  const [distMin, setDistMin] = useState(0);
  const [distMax, setDistMax] = useState(20);
  const [missName, setMissName] = useState("Test");
  const [missAbout, setMissAbout] = useState("Test lalalal");
  const [selTheme, setSelTheme] = useState("Веселье");
  const genCriteries = [
    "Веселье",
    "18+",
    "Романтик",
  ];

  const genMissions = {
    [genCriteries[0]]: {
      "0_3": {
        mission1: {
          missName: "Танцы",
          missAbout: "Потанцуйте друг с другом)",
        },
        mission2: {
          missName: "Готовка",
          missAbout: "Поготовьте вместе)",
        },
        mission2: {
          missName: "Машины",
          missAbout: `Посчитайте вместе машины) Допустим, ${
            ["красного", "зелёного", "чёрного"].at(Math.floor(Math.random() * 3))
          } цвета`,
        },
      },
      "3_12": {
        mission1: {
          missName: "Прогулка",
          missAbout: `Прогуляйтесь до магазина) К примеру, к нашему партнёру 
            ${["Ярче", "Лента", "Пятёрочка"].at(Math.floor(Math.random() * 3))}
          `,
        },
      },
      "12_20": {
        mission1: {
          missName: "Поездка",
          missAbout: "Съездите в маленький город/село, что находится рядом 'здесь подумать об интеграции карты'",
        }
      }
    },
    [genCriteries[1]]: {
      "0_20": {
        mission1: {
          missName: "Хехе)",
          missAbout: "Трахнитесь сексом)",
        }
      },
    },
    [genCriteries[2]]: {
      "0_20": {
        mission1: {
          missName: "По душам",
          missAbout: "Поговорите о том, что вам нравится друг в друге <3",
        }
      },
    },
  };

  const pickRandomMission = (hObj) => {
    const keys = Object.keys(hObj);
    return hObj[keys[ keys.length * Math.random() << 0]];
  };
  const generateMission = (e) => {
    console.log("GEN");
    const getSubTheme = genMissions[selTheme];
    for (const obj in getSubTheme) {
      const tmpObj = obj.split("_");
      const minMax = [
        Number(tmpObj[0]),
        Number(tmpObj[1]),
      ];

      if (distMin > minMax[0] && distMax < minMax[1]) {
        const randomItem = pickRandomMission(getSubTheme[obj]);
        const selElm = document.querySelector("#showDescr");
        // selElm.description = randomItem.missName;
        // selElm.header = randomItem.missAbout;
        console.log(randomItem);
        setMissName(randomItem.missName);
        setMissAbout(randomItem.missAbout);
      }
    }
  };

  return (
    <List>
      <Section header="Генерация!">
        <Cell>
          <Modal
          header=""
          trigger={<Button size="m" onClick={generateMission}>Мне повезёт!</Button>}
          >
          <VisuallyHidden.Root>
        <Dialog.Title>{title}</Dialog.Title>
      </VisuallyHidden.Root>
          <Placeholder id="showDescr"
            description={missName}
            header={missAbout}
          >
            <img
              alt="Telegram sticker"
              src="https://xelene.me/telegram.gif"
              style={{
                display: 'block',
                height: '144px',
                width: '144px'
              }}
            />
          </Placeholder>
          </Modal>
        </Cell>
      </Section>

      <Section header="Если такая вредина и хочешь уточнить запрос)">
             <Section>
              <SectionHeader>
                Тематика: {selTheme}
              </SectionHeader>
              <Select placeholder="Выбери, чего хочешь)" value={selTheme} onChange={e => setSelTheme(e.target.value)}>
                  {genCriteries.map((criteriesName, criteriesVal) => (
                    <option key={criteriesVal}>{criteriesName}</option>
                  ))}
                </Select>
              </Section>
             <Section>
                <SectionHeader>
                  На расстоянии {distMin} - {distMax}
                </SectionHeader>
                <Slider min={0} max={20} step={0.5} multiple onChange={(e) => {setDistMin(e[0]); setDistMax(e[1]);}}/>
              </Section> 
      </Section>
    </List>
  );
}
