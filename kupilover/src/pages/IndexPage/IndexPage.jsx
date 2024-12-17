import { Section, List, Button, Placeholder, } from '@telegram-apps/telegram-ui';
import React from 'react';

import { Link } from '@/components/Link/Link.jsx';

import './IndexPage.css';

/**
 * @returns {JSX.Element}
 */
export function IndexPage() {
  const MainPage = () => (
    <Section>
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
        </Section>
  )

  return ( <div>
    <List>
      { <MainPage />}
    </List>
    </div>);
}
