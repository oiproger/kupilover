import { Section, Cell, Image, List, Button, Modal, Placeholder, Select, Caption, Tabbar } from '@telegram-apps/telegram-ui';
import React, { useState } from 'react';
import { popup } from '@telegram-apps/sdk';

import { Link } from '@/components/Link/Link.jsx';

import tonSvg from './ton.svg';

import './IndexPage.css';
import { SectionHeader } from '@telegram-apps/telegram-ui/dist/components/Blocks/Section/components/SectionHeader/SectionHeader';
import { ModalHeader } from '@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader';

/**
 * @returns {JSX.Element}
 */
export function IndexPage() {
  const tabs = [
    {
      id: "tabMain",
      text: "Главная"
    }, 
    {
      id: "tabAdds",
      text:"Альбом"
    },
    {
      id: "tabSettings",
      text:"Аккаунт"
    },
  ];
  const [currTab, setCurrTab] = useState(tabs[0].id);
  const [missName, setMissName] = useState("Test");
  const [missAbout, setMissAbout] = useState("Test lalalal");
  const [selTheme, setSelTheme] = useState("Домашний");
  const genCriteries = [
    "Домашний",
    "Прогулочный",
    "Познавательный",
    "Выездной",
    "Знакомство в компании",
  ];

  const genMissions = {
    [genCriteries[0]]: {
        mission1: {
          missName: "Игра!",
          missAbout: `Поиграйте в ${["UNO", "свинтус", "монополию"].at(Math.floor(Math.random() * 3))}`,
        },
        mission2: {
          missName: "Настолки!",
          missAbout: `Поиграйте в ${["шашки", "шахматы", "нарды"].at(Math.floor(Math.random() * 3))}`,
        },
        mission3: {
          missName: "Сериал",
          missAbout: `Выберите сериал на Кинопоиске, приготовьте вкусное и завернитесь в пледик`,
        },
        mission4: {
          missName: "Магия вне Хогвартса",
          missAbout: `Приготовьте вместе сливочное пиво под первый фильм Гарри Поттера. Например, по этому рецепту:
          ${<Button
            Component="a"
            href="https://food.ru/recipes/74734-slivochnoe-pivo-iz-garri-pottera"
            mode="filled"
            size="s"
            target="_blank"
          >
            Рецептик
          </Button>}
          `,
        },
        mission5: {
          missName: "Чтение",
          missAbout: "Возьмите книгу и читайте второй половинке вслух (по очереди каждую главу)",
        },
        mission6: {
          missName: "Пазлы",
          missAbout: "Соберите вместе паззл",
        },
        mission7: {
          missName: "Вопрос-ответ ",
          missAbout: "Зайдите на сайт 'Вопросы для парочек', чтобы узнать друг друга получше",
        },
        mission8: {
          missName: "Уборочка ",
          missAbout: "Устройте совместную уборку",
        },
        mission9: {
          missName: "Подарки",
          missAbout: "Создайте канал и напишите в нём, какие подарки вы хотели бы получить",
        },
    },
    [genCriteries[1]]: {
      mission1: {
        missName: "Смех смехом",
        missAbout: "Сходите на стендап",
      },
      mission2: {
        missName: "Братьям нашим полётным",
        missAbout: "Купите семечек и покормите голубей",
      },
      mission3: {
        missName: "По конькам!",
        missAbout: "Сходите вместе на каток",
      },
      mission4: {
        missName: "Questионария",
        missAbout: "Сходите на квест",
      },
      mission5: {
        missName: "Ча-ча-ча",
        missAbout: "Сходите на занятия по парным танцам",
      },
      mission6: {
        missName: "Как тот Австрийский",
        missAbout: "Сходите на пробный урок по рисованию",
      },
      mission7: {
        missName: "Одержимость",
        missAbout: "Сходите на пробный урок по барабанам",
      },
      mission8: {
        missName: "Это будет хит!",
        missAbout: "Сходите на концерт артиста",
      },
      mission9: {
        missName: "Прекрасное на фоне красивого",
        missAbout: "Устройте фотосессию в красивых местах города",
      },
    },
    [genCriteries[2]]: {
      mission2: {
        missName: "День в музее",
        missAbout: "Сходите в музей",
      },
      mission3: {
        missName: "Пикасо... Или Пикасо?",
        missAbout: "Посетите выставку картин",
      },
      mission4: {
        missName: "Я и так знаю",
        missAbout: "Запишитесь на экскурсию по вашему городу",
      },
      mission5: {
        missName: "Отлёт и вылет",
        missAbout: "Посмотрите трэвел-шоу и распишите, какие страны вы хотели бы посетить",
      },
      mission6: {
        missName: "[засекречено]",
        missAbout: `Посмотрите документальный фильм про ${["маньяка", "происшествие", "компанию"].at(Math.floor(Math.random() * 3))}`,
      },
      mission7: {
        missName: "Как скажут звёзды",
        missAbout: "Посмотрите натальные карты друг друга",
      },
      mission8: {
        missName: "Корни",
        missAbout: "Постройте семейное древо настолько, насколько помните",
      },
      mission9: {
        missName: "Миллионы световых лет",
        missAbout: "Сходите в планетарий",
      },
      mission10: {
        missName: "Квиз-плиз",
        missAbout: "Устройте вечер квизов (перейдите на сайт Кинопоиск - раздел игры)",
      },
    },
    [genCriteries[3]]: {
      mission1: {
        missName: "От края до края",
        missAbout: "Купите экскурсию по местным достопримечательностям вашего края",
      },
      mission2: {
        missName: "Шашлычки",
        missAbout: "Устройте пикник с шашлыком на природе!",
      },
      mission3: {
        missName: "В тишине и спокойствии",
        missAbout: "Арендуйте домик в горах/лесу",
      },
      mission4: {
        missName: "Знакомство с Факерами",
        missAbout: "Съездите к родителям своей половинки",
      },
      mission5: {
        missName: "Спокойная ночь",
        missAbout: "Переночуйте в палатке на природе",
      },
      mission6: {
        missName: "Неизвестность вблизи",
        missAbout: "Съездите в ближайший город/село, где вы никогда не были",
      },
      mission7: {
        missName: "Прекрасное далёко...",
        missAbout: "Запланируйте поездку в дальнюю страну",
      },
      mission8: {
        missName: "Привет, сосед",
        missAbout: "Запланируйте поездку в ближайшую страну",
      },
      mission9: {
        missName: "Прекрасное так близко...",
        missAbout: "Устройте поездку по крупным городам России на выбор: Казань, Москва, Санкт-Петербург, Владивосток, Калининград, Сочи, Камчатка, Сахалин, Дагестан, Байкал, Алтай",
      },
      mission10: {
        missName: "Прокат",
        missAbout: "Прокатитесь на лодке/катере/яхте/сапе/снегоходе",
      },
    },
    [genCriteries[4]]: {
      mission1: {
        missName: "Мафиози в большом городе",
        missAbout: "Посетите мафию-клуб",
      },
      mission2: {
        missName: "Как кафе, но анти",
        missAbout: "Посетите антиКафе",
      },
      mission3: {
        missName: "Тур по турам",
        missAbout: "Сходите в групповой тур",
      },
      mission4: {
        missName: "По интересам",
        missAbout: "Найдите чат/канал в вашем городе с вашими увлечениями и познакомьтесь там с кем-нибудь (парочкой)",
      },
      mission5: {
        missName: "Здесь я работаю",
        missAbout: "Познакомьте вторую половинку с коллегами по работе/хобби",
      },
      mission6: {
        missName: "Вечеринка!",
        missAbout: "Устройте дома вечеринку, на которую позовете друзей, а они того, с кем вы не знакомы, но знакомы они",
      },
      mission7: {
        missName: "По пути",
        missAbout: "Познакомьтесь с попутчиками",
      },
      mission8: {
        missName: "Рулетка",
        missAbout: "Посидите в чат-рулетке",
      },
      mission9: {
        missName: "Ты как я",
        missAbout: "Посетите форум/конференцию по интересу",
      },
    },
  };

  const pickRandomMission = (hObj) => {
    const keys = Object.keys(hObj);
    return hObj[keys[ keys.length * Math.random() << 0]];
  };
  const generateMission = () => {
    console.log("GEN");
    const getSubTheme = genMissions[selTheme];
    console.log(getSubTheme);
    console.log("BEGIN SET");
    const randomItem = pickRandomMission(getSubTheme);
    console.log(randomItem);
    setMissName(randomItem.missName);
    setMissAbout(randomItem.missAbout);
    return;
  };

  return ( <div style={{
    height: 200,
    width: 400,
  }}>
    <List>
      <Section>
        <Cell>
          <Modal
          header={<ModalHeader></ModalHeader>}
          trigger={<Button size="m" aria-describedby={missName}>Свидание по предпочтениям</Button>}
          >
            <div
              style={{
                height: '100vh'
              }}>
                <List>
                  <Cell>
                    <Select header="Тематика" placeholder="Выбирай)" value={selTheme} onChange={e => setSelTheme(e.target.value)}>
                      {genCriteries.map((criteriesName, criteriesVal) => (
                        <option key={criteriesVal}>{criteriesName}</option>
                      ))}
                    </Select>
                  </Cell>

                  <Cell>
                    <Button
                      mode="filled"
                      size="s"
                      onClick={generateMission}
                    >
                      Мне повезёт!
                    </Button>
                  </Cell>
                    
                  <Cell>
                      <Placeholder
                        description={missAbout}
                        header={missName}
                      >
                      </Placeholder>
                  </Cell>
                </List>
            </div>
          </Modal>
        </Cell>

        <Cell>
          <Modal
          trigger={<Button size="m" onClick={generateMission} aria-describedby={missName}>Случайное свидание</Button>}
          >
          <Placeholder id="showDescr"
            description={missName}
            header={missAbout}
          >

            <Caption>
            \U00002764
            </Caption>
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

        <Cell>
          <Modal
          header={<ModalHeader></ModalHeader>}
          trigger={<Button size="m" onClick={generateMission} aria-describedby={missName}>Сгенерировать с ИИ</Button>}
          >
          <Placeholder id="showDescr"
            description={missName}
            header={missAbout}
          >
            
          </Placeholder>
          </Modal>
        </Cell>
      </Section>

      <Section header="Если такая вредина и хочешь уточнить запрос)">
             <Section>
              <SectionHeader>
                Тематика: {selTheme}
              </SectionHeader>
              
              </Section> 
      </Section>
    </List>

    <Tabbar>
      {tabs.map(({
        id,
        text,
      }) => <Tabbar.Item key={id} text={text} selected={id === currTab} onClick={() => setCurrTab(id)}>
      </Tabbar.Item>)}
    </Tabbar>
    </div>);
}
