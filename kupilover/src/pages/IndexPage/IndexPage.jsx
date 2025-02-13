import WebApp from '@twa-dev/sdk';
import { Section, List, Button, Placeholder, Text, Info, Modal, Timeline} from '@telegram-apps/telegram-ui';
import { ModalHeader } from '@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader';
import { ModalClose } from '@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalClose/ModalClose';
import { TimelineItem } from '@telegram-apps/telegram-ui/dist/components/Blocks/Timeline/components/TimelineItem/TimelineItem';
import React from 'react';
import Particles from 'react-particles';

import { Link } from '@/components/Link/Link.jsx';

import './IndexPage.css';

/**
 * @returns {JSX.Element}
 */
export function IndexPage() {
  
  const MainPage = () => (
    <Section>
      <div className={(WebApp.colorScheme == "light" ? "background" : "background-d")}>
          <div className="emoji">💌</div>
          <div className="emoji">💜</div>
          <div className="emoji">💛</div>
          <div className="emoji">💌</div>
          <div className="emoji">🥰</div>
          <div className="emoji">💌</div>
          <div className="emoji">💙</div>
          <div className="emoji">💌</div>
          <div className="emoji">💜</div>
          <div className="emoji">💛</div>
          <div className="emoji">💌</div>
          <div className="emoji">🧡</div>
          <div className="emoji">💌</div>
          <div className="emoji">💙</div>
          
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
          {/* <Placeholder>
            <Info
              subtitle="Если вам понравилось приложение или хотите оставить отзыв, то напишите в чате приложения /rate"
              type="text"
            >
              Отзыв v1.0
            </Info>
          </Placeholder> */}
      
        </div>

        <Modal
          header={<ModalHeader 
          ></ModalHeader>}
          open
        >
          <Placeholder
          >
            <div style={{
              textAlign: "center"
            }}>
              <Text weight='1'>
                {`Kupilover`}
              </Text>
            </div>
            <div style={{
              textAlign: "center"
            }}>
            <Text weight='3'>
                {`Подари любовь, даже не зная как <3`}
              </Text>
            </div>
            <Timeline active={3}>
              <TimelineItem header="💛 Выбери">
                4 случайных идеи или в одной из категорий
              </TimelineItem>
              <TimelineItem header="💌 Прочитай">
                Описание и шаги для воплощения идеи
              </TimelineItem>
              <TimelineItem header="🧡 И не только партнёру">
                Также можешь сгенерировать идею для времяпровождения с друзьями или в компании
              </TimelineItem>
            </Timeline>
          </Placeholder>
        </Modal>
    </Section>
  )

  return ( <div>
    <List>
      { <MainPage />}
    </List>
    </div>);
}
