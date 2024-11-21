import { Section, Textarea } from '@telegram-apps/telegram-ui';

/**
 * @return {JSX.Element}
 */
export function DatesBase({ hTheme }) {
  let tmpName = "";
  let tmpAbout = "";

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

  const genNewCard = (xTheme) => {
    const getSubTheme = genMissions[xTheme];
    let randomItem = pickRandomMission(getSubTheme);
    while (tmpName === randomItem.missName) {
      console.log(tmpName, randomItem.missName);
      randomItem = pickRandomMission(getSubTheme);
    }
    tmpName = randomItem.missName;
    tmpAbout = randomItem.missAbout;
    console.log(tmpName, tmpAbout);
  }

  const onceGen = genNewCard(tTheme);

  return (
    (
    <Section>
      <Textarea header={tmpName} disabled>{tmpAbout}</Textarea>
    </Section>)
  )
}
