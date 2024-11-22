import { Section, Textarea, Cell, Modal, Button, Placeholder, List, Chip, Image, Avatar, IconButton, SegmentedControl } from '@telegram-apps/telegram-ui';
import React, { useState } from 'react';
import { MdFavoriteBorder } from "react-icons/md";
import { BsShare } from "react-icons/bs";
import { IoIosInformationCircleOutline } from "react-icons/io";

import chessImg from "./chess.jpg";
import unoImg from "./uno.png";
import monopolyImg from "./monopoly.jpg";
import kinopoiskImg from "./kinopoisk.jpg";

import { ModalHeader } from '@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader';
import { ModalClose } from '@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalClose/ModalClose';
import { SegmentedControlItem } from '@telegram-apps/telegram-ui/dist/components/Navigation/SegmentedControl/components/SegmentedControlItem/SegmentedControlItem';

/**
 * @return {JSX.Element}
 */
export function DatesBase({ hTheme }) {
  let tmpName = "";
  let tmpAbout = "";
  let tmpImage = null;
  let tmpFullAbout = null;
  let tmpSteps = null;

  const [segmIndx, setSegmIndx] = useState(1);
  const tTheme = hTheme;
  const genCriteries = [
    "Выберите",
    "Домашний",
    "Прогулочный",
    "Познавательный",
    "Выездной",
    "Знакомство в компании",
  ];

  const genMissions = {
    [genCriteries[1]]: {
        mission1: {
          missName: "Игра!",
          missAbout: (
            genArr = ["UNO", "свинтус", "монополию"],
            genArrImgs = [
              unoImg,
              null,
              monopolyImg,
            ],
            genArrFullAbout = [
              "Настольная игра «Уно» — классическая игра, в которой нужно использовать карты действий против своих соперников по игре. Цель игры состоит в том, чтобы первым избавиться от всех своих карт в каждом раунде и набрать очки за карты, которые остались на руках у других игроков. ",
              "",
              `Вы берете на себя роль финансиста, путешествующего по улицам, городам или странам (в зависимости от версии игры) в поисках выгодного вложения денег
Цель каждого игрока — стать «номером 1» по количеству денег в игре.

Победитель в этой игре всегда остается один – тот игрок, который остался при деньгах последним, когда остальные участники разорились и обанкротились.`,
            ],
            genArrTmpSteps = [
              `1) Купить (например на одном из маркетплейсов) или взять на вечер у знакомых 
2) изучить правила игры и объяснить их второй половинке 
3) на счет  uno, dos, tres приступить к игре`,
              "",
              `1) Купить (например на одном из маркетплейсов) или взять на вечер у знакомых. 
Так же можно рассмотреть вариант игры на компьютере или телефоне 

2) изучить правила игры и объяснить их второй половинке. 

3) Важно! Выбрать фигурку/фишку, которой вы будете играть. У каждого она индивидуальная 

4) Бросайте кубики и игра началась`,
            ],
          ) => {
            const newIndx = Math.floor(Math.random() * genArr.length);
            const newItm = genArr[newIndx];
            const newImg = genArrImgs[newIndx];
            const newFullAbout = genArrFullAbout[newIndx];
            const newArrSteps = genArrTmpSteps[newIndx];
            return [`Поиграйте в ${newItm}`, newImg, newFullAbout, newArrSteps];
          },
        },
        mission2: {
          missName: "Настолки!",
          missAbout: (
            genArr = ["шашки", "шахматы", "нарды"], 
            genArrImgs = [
              null,
              chessImg,
              null,
            ],
            genArrFullAbout = [
              "",
              `Шахматы — древнейшая игра и издавна она сравнивалась с военным сражением. По одной из легенд даже изобретение шахмат связывают с заказом одного правителя-полководца, который хотел получить игру, так сказать, симулятор реальной битвы двух армий.

В классические шахматы играют две стороны: черные и белые. Цель игры — поставить мат, то есть захватить вражеского короля.`,
              "",
            ],
            genArrTmpSteps = [
              "",
              `1) Купить (например на одном из маркетплейсов) или взять на вечер у знакомых. 
Так же можно рассмотреть вариант игры на компьютере или телефоне 

2) изучить правила игры и объяснить их второй половинке. 

3) запастись терпением, приступить к совместной партии`,
              "",
            ],
          ) => {
            const newIndx = Math.floor(Math.random() * genArr.length);
            const newItm = genArr[newIndx];
            const newImg = genArrImgs[newIndx];
            const newFullAbout = genArrFullAbout[newIndx];
            const newArrSteps = genArrTmpSteps[newIndx];
            return [`Поиграйте в ${newItm}`, newImg, newFullAbout, newArrSteps];
          },
        },
        mission3: {
          missName: "Сериал",
          missAbout: `Выберите сериал на Кинопоиске, приготовьте вкусное и завернитесь в пледик`,
          missImg: kinopoiskImg,
          missFullAbout: `Самое сложное в «Вечер сериалов» это выбрать то, что вы оба хотите посмотреть. 
Один хороший лайфхак — написать на маленьких бумажках 4-6 сериалов, которые вы хотели бы посмотреть. Смять их, бросить в шапку и кто-то один вытаскивает сериал на вечер. 

Далее все просто, закупаемся едой в доставке или начинаем готовить любимые вкусности под просмотр.  

Можете предупредить близких, чтобы не теряли вас `,
          missSteps: `1) Выбрать сериал 
2) Закупиться едой или приготовить её
3) Подготовить ваше рабочее.. место для просмотра к уютному вечеру 
4) Убрать в сторону телефоны и нажать кнопку «плэй»`,
        },
        mission4: {
          missName: "Магия вне Хогвартса",
          missAbout: `Приготовьте вместе сливочное пиво под первый фильм Гарри Поттера.
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
    [genCriteries[2]]: {
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
    [genCriteries[3]]: {
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
    [genCriteries[4]]: {
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
    [genCriteries[5]]: {
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

  const genNewCard = (xTheme) => {
    const getSubTheme = genMissions[xTheme];
    let randomItem = pickRandomMission(getSubTheme);
    while (tmpName === randomItem.missName) {
      console.log(tmpName, randomItem.missName);
      randomItem = pickRandomMission(getSubTheme);
    }
    tmpName = randomItem.missName;
    if (typeof(randomItem.missAbout) == 'function') {
      const getNewItm = randomItem.missAbout();
      tmpAbout = getNewItm[0];
      tmpImage = getNewItm[1];
      tmpFullAbout = getNewItm[2];
      tmpSteps = getNewItm[3];
    } else {
      tmpAbout = randomItem.missAbout;
      if (randomItem.missImg !== null) {
        tmpImage = randomItem.missImg;
      }
      if (randomItem.missFullAbout !== null) {
        tmpFullAbout = randomItem.missFullAbout;
      }
      if (randomItem.missSteps !== null) {
        tmpSteps = randomItem.missSteps;
      }
    }
    
    console.log(tmpName, tmpAbout, tmpImage);
  }

  const onceGen = genNewCard(tTheme);

  const DateModal = () => (
    <Modal
      header={<ModalHeader>Only iOS header</ModalHeader>}
      trigger={<IconButton size="s"><IoIosInformationCircleOutline /></IconButton>}
    >
      <Placeholder
        description={tmpName}
        header={tmpAbout}
      >
        <List>
          <div style={{
            display: "flex",
            justifyContent: "flex-end",
            flexDirection: "row",
          }}>
            <IconButton mode="plain" size="l" style={{
              marginLeft: "5ch",
            }}
            >
              <MdFavoriteBorder />
            </IconButton>
            <IconButton mode="plain" size="l" style={{
              marginLeft: "5ch",
            }}>
              <BsShare />
            </IconButton>
          </div>

          <Section>
            <Image
              size={512}
              src={tmpImage}
            />
          </Section>
          
          <Section>
            <Textarea>{tmpFullAbout}</Textarea>
            <Modal
              header={<ModalHeader>Only iOS header</ModalHeader>}
              trigger={<Button size="m">Шаги</Button>}
            >
              <Placeholder
                description={tmpSteps}
                header="Шаги"
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
          </Section>
        </List>
      </Placeholder>
    </Modal>
  )

  return (
    <Section>
      <Cell
        before={
          <DateModal />
        }
        subtitle={tmpAbout}>
        {tmpName}
      </Cell>
    </Section>
  )
}
