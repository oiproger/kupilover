import { Section, List, Button, Placeholder, } from '@telegram-apps/telegram-ui';
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
      <div className="background">
          <div className="emoji">❤️</div>
          <div className="emoji">💜</div>
          <div className="emoji">💛</div>
          <div className="emoji">🩷</div>
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
      
        </div>
    </Section>
  )

  return ( <div>
    <List>
      { <MainPage />}
    </List>
    </div>);
}
