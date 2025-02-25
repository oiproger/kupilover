import { Section, Textarea, Cell, Modal, Button, Placeholder, List, Chip, Image, Avatar, IconButton, SegmentedControl, Text, Timeline, Info, ButtonCell, Title } from '@telegram-apps/telegram-ui';
import React, { useState, useRef } from 'react';
import { MdFavoriteBorder } from "react-icons/md";
import { BsShare } from "react-icons/bs";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { shareURL } from '@telegram-apps/sdk';

// Homes
import chessImg from "./Homes/chess.jpg";
import unoImg from "./Homes/uno.png";
import monopolyImg from "./Homes/monopoly.jpg";
import kinopoiskImg from "./Homes/kinopoisk.jpg";
import slivpivoImg from "./Homes/slivpivo.jpg";
import bookreadImg from "./Homes/bookread.png";
import puzzlesImg from "./Homes/puzzles.jpg";
import cleaningImg from "./Homes/cleaning.jpg";
import telegaPresentImg from "./Homes/telegapresent.jpg";

// Progul
import stenpadImg from "./Progul/stendap.jpg";
import pigeonfoodImg from "./Progul/pigeonfood.jpg";
import icerunnerImg from "./Progul/icerunner.jpg";
import questourImg from "./Progul/questour.jpg";
import drawlessonImg from "./Progul/drawlesson.jpg";
import musictutImg from "./Progul/musictut.jpg";
import artistgoImg from "./Progul/artistgo.jpg";
import theaterImg from "./Progul/theater.png";
import photosessionImg from "./Progul/photosession.jpg";

// Poznav
import museumgoImg from "./Poznav/museumgo.png";
import picturesgoImg from "./Poznav/picturesgo.png";
import citylearnImg from "./Poznav/citylearn.png";
import travelshowImg from "./Poznav/travelshow.jpg";
import docfilmImg from "./Poznav/docfilm.png";
import natalcardImg from "./Poznav/natalcard.png";
import familytreeImg from "./Poznav/familytree.png";
import planetgoImg from "./Poznav/planetgo.png";
import quizzImg from "./Poznav/quizz.jpg";

// Vuezd
import kraylearnImg from "./Vuezd/kraylearn.jpg";
import meetmeatImg from "./Vuezd/meetmeat.jpg";
import naturehomeImg from "./Vuezd/naturehome.jpg";
import naturepalatImg from "./Vuezd/naturepalat.png";
import nearcityImg from "./Vuezd/nearcity.jpg";
import nearcountryImg from "./Vuezd/nearcountry.jpg";
import blizcountryImg from "./Vuezd/blizcountry.jpg";
import russianImg from "./Vuezd/russian.jpg";
import runbyImg from "./Vuezd/runby.jpg";

import { ModalHeader } from '@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader';
import { ModalClose } from '@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalClose/ModalClose';
import { SegmentedControlItem } from '@telegram-apps/telegram-ui/dist/components/Navigation/SegmentedControl/components/SegmentedControlItem/SegmentedControlItem';
import { TimelineItem } from '@telegram-apps/telegram-ui/dist/components/Blocks/Timeline/components/TimelineItem/TimelineItem';

/**
 * @return {JSX.Element}
 */
export function DatesBase({ hTheme, hNumber }) {
  let tmpName = "";
  let tmpAbout = "";
  let tmpImage = null;
  let tmpFullAbout = null;
  let tmpSteps = null;
  let refId = null;

  const modalRef = useRef(null);
  const [segmIndx, setSegmIndx] = useState(1);
  const [modalShow, setModalShow] = useState(false);
  const tTheme = hTheme;
  const hIndx = hNumber;
  const genCriteries = [
    "Выберите",
    "Домашний",
    "Прогулочный",
    "Познавательный",
    "Выездной",
    "Знакомство в компании",
  ];

  const testSteps = ["lala", "haha", "ahahahah"];

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
              [
                `Купить (например на одном из маркетплейсов) или взять на вечер у знакомых`, 
                `Изучить правила игры и объяснить их второй половинке`,
                `На счёт  uno, dos, tres приступить к игре`
              ],
              [],
              [
                `Купить (например на одном из маркетплейсов) или взять на вечер у знакомых. Так же можно рассмотреть вариант игры на компьютере или телефоне`, 
                `Изучить правила игры и объяснить их второй половинке.`,
                `Важно! Выбрать фигурку/фишку, которой вы будете играть. У каждого она индивидуальная`,
                `Бросайте кубики и игра началась`
              ],
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
              [],
              [`Купить (например на одном из маркетплейсов) или взять на вечер у знакомых. Также можно рассмотреть вариант игры на компьютере или телефоне`,
              `Изучить правила игры и объяснить их второй половинке.`,
              `Запастись терпением, приступить к совместной партии`],
              [],
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
          missSteps: [
            `Выбрать сериал`, 
            `Закупиться едой или приготовить её`,
            `Подготовить ваше рабочее.. место для просмотра к уютному вечеру`,
            `Убрать в сторону телефоны и нажать кнопку «плэй»`
          ],
        },
        mission4: {
          missName: "Магия вне Хогвартса",
          missAbout: `Приготовьте вместе сливочное пиво под первый фильм Гарри Поттера.
          `,
          missImg: slivpivoImg,
          missFullAbout: `Сливочное пиво – это придуманный напиток, который пьют персонажи книг о Гарри Поттере. Но оказывается, безалкогольное сливочное пиво можно приготовить и в нашем магловском мире. `,
          missSteps: [
            `Найти рецепт сливочного пива в интернете, предварительно определиться — алкогольное или безалкогольное `,
            `Купить/заказать продукты `,
            `Приготовить сливочное пиво строго по рецепту! `,
            `Включить ту самую серию фильмов о Гарри Поттере`,
          ],
        },
        mission5: {
          missName: "Чтение",
          missAbout: "Возьмите книгу и читайте второй половинке вслух (по очереди каждую главу)",
          missImg: bookreadImg,
          missFullAbout: `Знаете, почему пары, в которых принято читать друг другу вслух, чаще обнимаются по вечерам? Совместное чтение дает особое ощущение близости, похожее на то, которое испытывают дети рядом с заботливыми родителями, когда те читают им сказку.

А ещё это развивает ваши ораторские навыки.`,
          missSteps: [
            `Выберите жанр книги, которую вы вместе хотите прочитать, а затем и саму книгу`,
            `Устройтесь поудобнее и начните чтение вслух по очереди (по абзацу или по странице)`,
            `Можно составить примерный график, когда будете повторять подобный ритуал, чтобы дочитать книгу`,
          ],
        },
        mission6: {
          missName: "Пазлы",
          missAbout: "Соберите вместе паззл",
          missImg: puzzlesImg,
          missFullAbout: `Сборка пазлов это отличный способ релаксации. 
Пазлы - объединяющий процесс, так как пара заинтересована в общем результате, а ещё в процессе сборки можно обсуждать общие темы, делиться впечатлениями от прошедшего дня и строить планы.`,
          missSteps: [
            `Закажите на любом маркетплейсе пазлы`,
            `Положите перед собой картинку, по которой будете собирать пазл, и можете начинать`,
            `Конечный результат сборки можно повесить в квартире/дома в виде картины`,
          ],
        },
        mission7: {
          missName: "Вопрос-ответ ",
          missAbout: "Зайдите на сайт 'Вопросы для парочек', чтобы узнать друг друга получше",
          missFullAbout: `Сайты с готовыми вопросами для парочек — это хороший способ лучше узнать свою вторую половинку и, возможно, себя самого. Один легкий вопрос может создать рассуждение длинной 15-20 минут или раскроет то, чего вы не знали друг о друге.`,
          missSteps: [
            `Найдите сайт с вопросами для парочек (например 👇🏻)
https://couplejoyapp.com/ru/blog/questions-for-couples`,
            `Уберите в сторону всё, что может отвлекать от важного диалога и можете приступать`,
          ],
        },
        mission8: {
          missName: "Уборочка ",
          missAbout: "Устройте совместную уборку",
          missImg: cleaningImg,
          missFullAbout: `Ну согласитесь очень приятно находиться в чистом пространстве, особенно когда оба к этому причастны. 

Совместная уборка —прекрасный способ по практиковаться в переговорах, делегировании и тд. 
 
P.S. 
Если вы еще не живете вместе, то это будет очень интересным опытом уборки в квартире у другого человека 😅`,
          missSteps: [
            `Распределите, кто в какой комнате и что именно будет убирать `,
            `Включите любимый плейлист или выберите темы для обсуждения `,
            `Начните уборку`,
            `Получите наслаждение от проделанной работы и от себя самих, ведь вы большие молодцы`,
          ]
        },
        mission9: {
          missName: "Подарки",
          missAbout: "Создайте канал и напишите в нём, какие подарки вы хотели бы получить",
          missImg: telegaPresentImg,
          missFullAbout: `Подарки всегда приятны, а если это еще то то, что ты давно хотел — well done! 

Создать совместную группу/канал хороший лайфхак для любой пары. Этот список можно пополнять всегда в моменте и добавлять к подарку любое описание `,
          missSteps: [
            `Создайте совместную группу в телеграме `,
            `Обязательно убедитесь, что у второго участника есть возможность писать в эту группу`,
            `Используйте максимум креатива для визуального оформления  `,
            `Пополняйте ваши вишлисты`,
          ],
        },
    },
    [genCriteries[2]]: {
      mission1: {
        missName: "Смех смехом",
        missAbout: "Сходите на стендап",
        missImg: stenpadImg,
        missFullAbout: `Партнеры, способные шутить вместе, делиться веселыми моментами, часто чувствуют себя ближе друг к другу.

Предлагаем вам посетить стендап мероприятие в вашем городе`,
        missSteps: [
          `загуглите, когда и где проходят стендап концерты`,
          `выберете комиков, на которых хотели бы пойти, и заранее забронируйте места `,
          `важно! — не играйте с комиком в игру «меня не рассмешить». Отдохните и посмейтесь вдвоем на maximum`,
        ],
      },
      mission2: {
        missName: "Братьям нашим полётным",
        missAbout: "Купите семечек и покормите голубей",
        missImg: pigeonfoodImg,
        missFullAbout: `Иногда просто хочется насладиться природой и её спокойствием. 
Покормить голубей, сидя на лавочке в парке с любимым человеком.. в этом есть свой шарм, особенно с термосом и душевными разговорами`,
        missSteps: [
          `сходите в магазин за семечками`,
          `выберите парк, в который хотели бы сходить `,
          `приманивайте голубей и наслаждайтесь процессом`,
        ],
      },
      mission3: {
        missName: "По конькам!",
        missAbout: "Сходите вместе на каток",
        missImg: icerunnerImg,
        missFullAbout: `Катание на коньках очень романтическое времяпровождения, к тому же оно полезно для здоровья.

Каток может подарить незабываемые эмоции и в многих городах есть крытые катки, которые работают даже летом.`,
        missSteps: [
          `Найдите каток (открытый/закрытый по вкусу)`,
          `Возьмите с собой теплую и удобную одежду для катания `,
          `Коньки можете купить или взять в аренду на самом катке`,
          `*Если кто-то из вас не умеет кататься, то задача второго научить. Это будет очень весело`,
        ],
      },
      mission4: {
        missName: "Questионария",
        missAbout: "Сходите на квест",
        missImg: questourImg,
        missFullAbout: `Квест – это интерактивная игра с сюжетной линией, которая заключается в решении различных головоломок и логических заданий. 

Развеем миф —  квесты бывают не только страшными. 
Так же можете попробовать квесты в виртуальной реальности.`,
        missSteps: [
          `найдите в вашем городе место, где проводят квесты `,
          `выберете квест по описанию, типу и сложности`,
          `забронируйте игру/комнату`,
          `оденьтесь соответствующе и let’s go решать квест`,
        ],
      },
      mission5: {
        missName: "Ча-ча-ча",
        missAbout: "Сходите на занятия по парным танцам",
        missFullAbout: `Необязательно обладать выдающимися талантами, чтобы научиться танцевать со своей половинкой. Парные занятия сближают и улучшают координацию в паре. 

Можете для начала записаться на пробное занятие вдвоем. Даже если вы поймете, что это не для вас — вы хорошо проведете время вместе`,
        missSteps: [
          `Загуглите школы танцев в вашем городе `,
          `Выберете удобную для вас школу и запишитесь на пробное занятие `,
          `Возьмите удобную сменную одежду. Желаем удачи 🍀`,
        ],
      },
      mission6: {
        missName: "Как тот Австрийский",
        missAbout: "Сходите на пробный урок по рисованию",
        missImg: drawlessonImg,
        missFullAbout: `Рисование помогает передать на бумагу то, что ты чувствуешь. 
На пробных занятиях по рисованию пары лучше узнают себя с творческой стороны. 

Обычно на уроках рисуют на одну тему, но у каждого ученика всегда свое видение на это.
Будет классно после урока разобрать отличия и схожести ваших рисунков `,
        missSteps: [
          ` Загуглите школы рисования в вашем городе `,
          `выберете удобную для вас школу и запишитесь на пробный урок `,
          `рекомендуем взять с собой ту одежду, которую будет не жалко испачкать, т к краски могут летать)`,
        ],
      },
      mission7: {
        missName: "Одержимость",
        missAbout: "Сходите на пробный урок по барабанам",
        missImg: musictutImg,
        missFullAbout: `Урок игры на музыкальном инструменте, особенно на барабанах, помогает выплеснуть накопившееся эмоции в музыку. 

Готовьтесь, будет громко и очень весело. Возможно, у вас получится сыграть в дуэте. `,
        missSteps: [
          `Загуглите музыкальные школы в вашем городе `,
          `выберете удобную для вас школу и запишитесь на пробный урок (определитесь с инструментом)`,
          `рекомендуем взять с собой спортивную футболку, ведь вы точно дадите жару`,
        ],
      },
      mission8: {
        missName: "Это будет хит!",
        missAbout: "Сходите на концерт артиста",
        missImg: artistgoImg,
        missFullAbout: `Большой эмоциональный окрас несут большие концерты артистов. 

Такие мероприятия надолго остаются в памяти, особенно если вы сделаете пару совместных фотографий во время выступления`,
        missSteps: [
          `загуглите ближайшие концерты в вашем городе `,
          `выберите артиста`,
          `заранее забронируйте места `,
          `во время концерта сделайте пару совместных фотографий на память`,
        ],
      },
      mission9: {
        missName: "Прекрасное на фоне красивого",
        missAbout: "Устройте фотосессию в красивых местах города",
        missImg: photosessionImg,
        missFullAbout: `Парная фотосессия — это творческий процесс, который позволяет раскрыть чувства и показать всю красоту отношений. Спустя время снимки станут добрым напоминанием о романтике влюблённой пары и проведённых вместе моментах.`,
        missSteps: [
          `Выбрать несколько красивых локаций в городе или те, которые вам нравятся // выбрать студию для фото`,
          `Выбрать подходящую стильную одежду (можно парные луки)`,
          `Взять с собой фотографа/друга или штатив для телефона, чтоб самим сделать фото `,
          `Устроить фотосессию`,
          `Выложить или распечатать фотки`,
        ],
      },
    },
    [genCriteries[3]]: {
      mission2: {
        missName: "День в музее",
        missAbout: "Сходите в музей",
        missImg: museumgoImg,
        missFullAbout: `Посещение музея — это возможность погрузиться в мир прошлого, получить новые знания, вдохновение и эмоциональное удовлетворение
Музеи бывают разными: естественнонаучные, исторические, художественные, архитектурные, литературные, театральные, музыкальные, музеи науки и техники, промышленные, сельскохозяйственные, краеведческие. `,
        missSteps: [
          `Выберите какой из разновидностей музеев хотите посетить `,
          `Выбрать музей в вашем городе `,
          `Купить билеты`,
          `Доехать до музея и получить впечатления`,
        ],
      },
      mission3: {
        missName: "Пикасо... Или Пикасо?",
        missAbout: "Посетите выставку картин",
        missImg: picturesgoImg,
        missFullAbout: `Выставка картин — это публичный показ произведений искусства в живописи, с целью ознакомления зрителей с художественным наследием и современным искусством.`,
        missSteps: [
          `Выберите выставку, которую хотите посетить `,
          `Купите билеты или узнайте можно ли приобрести на месте`,
          `Посетите выставку и наполняйтесь искусством`,
        ],
      },
      mission4: {
        missName: "Я и так знаю",
        missAbout: "Запишитесь на экскурсию по вашему городу",
        missImg: citylearnImg,
        missFullAbout: `Экскурсии с гидом - это когда организационными моментами (как доехать до места, маршрут поездки, время и т. д.) и информационной составляющей (интересными фактами и рассказом о достопримечательности) занимается гид. Остаётся лишь выбрать экскурсию, прибыть на место встречи с экскурсоводом и погрузиться в познавательное путешествие.
Экскурсии с гидом бывают групповые и индивидуальные.`,
        missSteps: [
          `Выберите экскурсию, созвонитесь с гидом. Если вам понравится голос и разговорные манеры гида, то можно смело бронировать экскурсию`,
          `Рассчитайте сколько добираться до места встречи с гидом и выезжайте пораньше`,
          `Побывайте на экскурсии и задавайте по ней вопросы гиду, если они будут`,
        ],
      },
      mission5: {
        missName: "Отлёт и вылет",
        missAbout: "Посмотрите трэвел-шоу и распишите, какие страны вы хотели бы посетить",
        missImg: travelshowImg,
        missFullAbout: `Шоу и видео про путешествия в разные города и страны помогут вам определиться куда вы хотите полететь в первую очередь, а куда вообще никогда бы не отправились. `,
        missSteps: [
          `Выбрать тревел в шоу/видео с ведущими, которые вам по душе (по типу «Орел и решка» и т.д.)`,
          `Посмотреть выпуски с интересными городами и странами `,
          `Выбрать куда бы вы хотели поехать или полететь прямо сейчас`,
        ],
      },
      mission6: {
        missName: "[засекречено]",
        missAbout: `Посмотрите документальный фильм про ${["маньяка", "происшествие", "компанию"].at(Math.floor(Math.random() * 3))}`,
        missImg: docfilmImg,
        missFullAbout: `Многие представляют себе документальное кино как фильмы про исчезающих животных или про исторические события со скучным закадровым голосом. Однако документальные фильмы могут быть интересными или даже смешными и рассказывать про видеоигры, космос или, например, динозавров.`,
        missSteps: [
          `Выберите интересующий документальный фильм `,
          `Возьмите вкусняшки по необходимости`,
          `Пополняйте свою копилку знаний просмотром документалки`,
        ],
      },
      mission7: {
        missName: "Как скажут звёзды",
        missAbout: "Посмотрите натальные карты друг друга",
        missImg: natalcardImg,
        missFullAbout: `Натальная карта — это персональный гороскоп, который рассчитывается по дате, времени и месту рождения. Это своего рода рисунок положения планет в момент рождения. Считается, что это и определяет индивидуальность личности и ключевые события в его биографии.`,
        missSteps: [
          `Узнать время рождения `,
          `Найти сайт с расчетом натальных карт `,
          `Изучить натальные карты и узнать что-то новое друг о друге`,
        ],
      },
      mission8: {
        missName: "Корни",
        missAbout: "Постройте семейное древо настолько, насколько помните",
        missImg: familytreeImg,
        missFullAbout: `Семейное (генеалогическое) древо — это схема, отображающая родственные связи одной семьи в рамках нескольких поколений.
В такой схеме есть отдельное поле для каждого родственника, и каждое связано с другим: так обозначены связи и степени  родства. Вместе с именем в каждой ячейке могут быть указаны даты жизни и смерти, место рождения.
`,
        missSteps: [
          `Впишите в древо тех, кого знаете сами`,
          `Спросите у родителей, бабушек и дедушек насчет остальных родственников `,
          `Посмотрите вместе снимки из семейного архива. Так вы сможете узнать не только факты, но и забавные случаи из жизни`,
          `Заполните древо`,
        ],
      },
      mission9: {
        missName: "Миллионы световых лет",
        missAbout: "Сходите в планетарий",
        missImg: planetgoImg,
        missFullAbout: `В планетарии демонстрируется небесная сфера со звёздами, планетами и спутниками, кометами и метеорами. А также  солнечные и лунные затмения, панорамы Луны, Марса, Венеры и климатических поясов земного шара.`,
        missSteps: [
          `Выберите планетарий в вашем или ближайшем городе `,
          `Купите билеты или узнайте по поводу приобретения на месте `,
          `Изучайте и разглядывайте космос`,
        ],
      },
      mission10: {
        missName: "Квиз-плиз",
        missAbout: "Устройте вечер квизов (перейдите на сайт Кинопоиск - раздел игры)",
        missImg: quizzImg,
        missFullAbout: `Квиз или викторина — это интеллектуально-развлекательная игра, которая проверяет знания по определенной тематике. Темы бывают разные: история, география, кино, литература и многие другие.`,
        missSteps: [
          `Зайдите на сайт с квизами с ноутбука или телевизора (например на Кинопоиск в разделе «Игры»)`,
          `Каждый подключитесь как игроки с телефонов`,
          `Выберите квизы на интересующую тематику `,
          `Соревнования начинаются!`,
        ],
      },
    },
    [genCriteries[4]]: {
      mission1: {
        missName: "От края до края",
        missAbout: "Купите экскурсию по местным достопримечательностям вашего края",
        missImg: kraylearnImg,
        missFullAbout: `Путешествия продлевают нашу жизнь. Они не обязательно должны быть в далекое и дорогое место. Думаем, что в вашем родном крае тоже есть увлекательные места, куда можно отправиться с гидом`,
        missSteps: [
          `Определитесь, на сколько далеко территориально вы готовы поехать `,
          `загуглите в выбранном районе “экскурсии”`,
          `забронируйте понравившуюся экскурсию`,
          `оденьтесь «по погоде» и вперед!`,
        ],
      },
      mission2: {
        missName: "Шашлычки",
        missAbout: "Устройте пикник с шашлыком на природе!",
        missImg: meetmeatImg,
        missFullAbout: `Бесконечно можно смотреть: как горит огонь, течет вода.. как кто-то жарит вкусный шашлык 
Можно арендовать специальную беседку в городе для этого либо уехать за пределы города — решать вам. `,
        missSteps: [
          `найдите место, где можно пожарить шашлык `,
          `выберете дату, когда будет отличная погода`,
          `отправляйтесь в магазин за необходимым и посмотрите «лайфхаки для жарки мяса»`,
        ],
      },
      mission3: {
        missName: "В тишине и спокойствии",
        missAbout: "Арендуйте домик в горах/лесу",
        missImg: naturehomeImg,
        missFullAbout: `Отличный вариант свидания для тех, кто живет в городе. Свежий воздух, отсутствие городского шума и толп людей, отдых от телефона и соцсетей. `,
        missSteps: [
          `Найдите в интернете «аренда домиков» в вашем округе`,
          `забронируйте нужные для вас даты `,
          ` возьмите с собой теплые вещи, продукты, настольные игры`,
          `предупредите родных/друзей, чтобы вас не теряли`,
          `по приезде отключите уведомления и уберите телефоны`,
        ],
      },
      mission4: {
        missName: "Знакомство с Факерами",
        missAbout: "Съездите к родителям своей половинки",
      },
      mission5: {
        missName: "Спокойная ночь",
        missAbout: "Переночуйте в палатке на природе",
        missImg: naturepalatImg,
        missFullAbout: `Данное свидание можно реализовать как в горах, как в лесной зоне, так и у моря. 
Настоятельно рекомендуем для первого похода использовать обособленные места `,
        missSteps: [
          `загуглить места в вашем крае, где разрешены остановки с палатками (глемпинг)`,
          `выбрать даты, заранее посмотрев погоду на эти дни `,
          ` собрать всё необходимое и перепроверить вдвоем по списку (рекомендуем обратиться к Гуглу)`,
          `по прибытию на место — снять совместное видео «сбор палатки»`,
        ],
      },
      mission6: {
        missName: "Неизвестность вблизи",
        missAbout: "Съездите в ближайший город/село, где вы никогда не были",
        missImg: nearcityImg,
        missFullAbout: `Для получений эмоций «путешественника» необязательно улетать на другой континент. Уверены, что в вашем крае есть много красочный мест и городов, где вы еще не бывали`,
        missSteps: [
          `Составьте список всех ближайших городов, где вы еще не были `,
          `Спланируйте поездку от и до (бюджет, даты, план и тд)`,
        ],
      },
      mission7: {
        missName: "Прекрасное далёко...",
        missAbout: "Запланируйте поездку в дальнюю страну",
        missImg: nearcountryImg,
        missFullAbout: `В мире более 190 стран (признанных), хорошая цель посетить хотя бы 10% от этого вместе. 
Можно рассмотреть отдых «all-inclusive» или просто взять билеты туда+обратно и быть «пешим туристом». `,
        missSteps: [
          `Составьте список стран, в которые хотели бы посетить вместе `,
          `Опираясь на свои финансовые возможности, выберете 1-2 страны, в которую можно отправиться в этом/следующем году `,
          `Выберете даты, подучите иностранный язык, начинайте откладывать деньги на свое путешествие `,
          `С каждого такого путешествия привозите маленький сувенир. Таким образом у вас будет свой собственный международный музей`,
        ],
      },
      mission8: {
        missName: "Привет, сосед",
        missAbout: "Запланируйте поездку в ближайшую страну",
        missImg: blizcountryImg,
        missFullAbout: `Наша страна до такой степени большая, что кому-то быстрее отправиться в Абхазию или Китай, чем добраться до Санкт-Петербурга. 
Небольшой список для вас:
Абхазия, Китай, Грузия, Армения, Казахстан, Турция`,
        missSteps: [
          `Составьте список близлежащих стран `,
          `Выберете даты поездки `,
          `Заранее узнайте, какие документы потребуются на границе`,
          `Отправляйтесь в путешествие к нашим соседям`,
        ],
      },
      mission9: {
        missName: "Прекрасное так близко...",
        missAbout: "Устройте поездку по крупным городам России на выбор: Казань, Москва, Санкт-Петербург, Владивосток, Калининград, Сочи, Камчатка, Сахалин, Дагестан, Байкал, Алтай",
        missImg: russianImg,
        missFullAbout: `Вам предстоят выбрать из списка культурных мест, куда вы поедете в ближайшее время: Казань, Москва, Санкт-Петербург, Владивосток, Калининград, Сочи, Камчатка, Сахалин, Дагестан, Байкал, Алтай`,
        missSteps: [
          `Выберете (или путем лотереи) из списка место, куда поедете`,
          `Спланируйте ваше путешествие (даты, маршрут, бюджет и тд)`,
        ],
      },
      mission10: {
        missName: "Прокат",
        missAbout: "Прокатитесь на лодке/катере/яхте/сапе/снегоходе",
        missImg: runbyImg,
        missFullAbout: `В зависимости от места и времени года выберете транспорт, на котором вы можете покататься вдвоем. `,
        missSteps: [
          `выбрать транспорт`,
          `выбрать место `,
          `пройти инструктаж по управлению `,
          `насладиться совместными «покатушками»`,
        ],
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
      tmpImage = randomItem.missImg ?? null;
      tmpFullAbout = randomItem.missFullAbout ?? null;
      tmpSteps = randomItem.missSteps ?? null;
    }
    
    console.log(tmpName, tmpAbout, tmpImage);
  }

  const onceGen = genNewCard(tTheme);

  const shareTxt = () => {
    if (shareURL.isAvailable()) {
      const newTxt = `Смотри, что придумал!\n
      ${tmpName}\n${tmpAbout}\n\nСгенерировано в @kupilover_bot`;
      shareURL('https://t.me/kupilover_bot?startapp', newTxt);
    }
  };

  const openMdl = () => {
    console.log(modalRef.current);
    const tmpModal = modalRef.props;
    console.log(tmpModal);
    // tmpModal.open = true;
  };

  const DateModal = () => {
    return (
    <Modal
      id={`dateModal${hIndx}`}
      header={<ModalHeader></ModalHeader>}
      trigger={<Button size="s"
      >
        Подробнее
      </Button>}
    >
      <Placeholder
      >
        <List >
          <div style={{
            display: "flex",
            justifyContent: "flex-end",
            flexDirection: "row",
          }}>
            <IconButton mode="plain" size="l" style={{
              marginLeft: "5ch",
            }} onClick={shareTxt}>
              <BsShare />
            </IconButton>
          </div>

          <Section>
          <Placeholder>
            <Image
              size={256}
              src={tmpImage}
              fallbackIcon={<span>😕</span>}
            />
            </Placeholder>
          </Section>
          <div style={{
            textAlign: "center"
          }}>
            <Text weight='1'>
              {tmpName}
            </Text>
          </div>
          <div style={{
            textAlign: "center"
          }}>
          <Text weight='3'>
              {tmpAbout}
            </Text>
          </div>
          
          { tmpFullAbout !== null ? 
            <Section
            header="О занятии"
            >
              <Placeholder>
              <Text disabled weight='3'>{tmpFullAbout}</Text>
              </Placeholder>
          </Section>
          
          : null }
          
          { tmpSteps !== null ? 
          
           <Section
             header="Шаги"
             >

             <Timeline active={testSteps.length}>
             {tmpSteps.map((
               itm, indx
             ) => 
               <TimelineItem header={`Шаг ${indx+1}`}>{itm}</TimelineItem>
             )}
             </Timeline>
           </Section> 
         
         : null }


        </List>
      </Placeholder>
    </Modal>
  )}

  return (
    <Section>
      <Cell
        before={
          <Image
          size={40}
          src={tmpImage}
          fallbackIcon={<span>?</span>}
        />
        }
        after={
          <DateModal />
        }
        subtitle={tmpAbout}>
        {tmpName}
      </Cell>
    </Section>
  )
}
