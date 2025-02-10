import WebApp from '@twa-dev/sdk';
import { Section, List, Button, Placeholder, Text, Info} from '@telegram-apps/telegram-ui';
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
          <div className="emoji">🩷</div>
          <div className="emoji">🥰</div>
          <div className="emoji">🩶</div>
          <div className="emoji">💙</div>
          <div className="emoji">💌</div>
          <div className="emoji">💜</div>
          <div className="emoji">💛</div>
          <div className="emoji">🫰</div>
          <div className="emoji">🧡</div>
          <div className="emoji">🩶</div>
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
          <Placeholder>
            <Info
              subtitle="Если вам понравилось приложение или хотите оставить отзыв, то напишите в чате приложения /rate"
              type="text"
            >
              Отзыв v1.0
            </Info>
          </Placeholder>
      
        </div>
    </Section>
  )

  return ( <div>
    <List>
      { <MainPage />}
    </List>
    </div>);
}
