import { Section, Cell, Image, List, Button } from '@telegram-apps/telegram-ui';
import { popup } from '@telegram-apps/sdk';

import { Link } from '@/components/Link/Link.jsx';

import tonSvg from './ton.svg';

import './IndexPage.css';

/**
 * @returns {JSX.Element}
 */
export function IndexPage() {

  async function testClick() {
    console.log("KILL NIGGERSZ");

    if (popup.open.isAvailable()) {
      // popup.isOpened() -> false
      const promise = popup.open({
        title: 'Hello!',
        message: 'KILL NIGGERS',
        buttons: [{ id: 'my-id', type: 'default', text: 'Default text' }],
      });
      // popup.isOpened() -> true
      const buttonId = await promise;
      // popup.isOpened() -> false
    }
  };

  return (
    <List>
      <Section
        header="Features"
        footer="You can use these pages to learn more about features, provided by Telegram Mini Apps and other useful projects"
      >
        <Link to="/ton-connect">
          <Cell
            before={<Image src={tonSvg} style={{ backgroundColor: '#007AFF' }}/>}
            subtitle="Connect your TON wallet"
          >
            TON Connect
          </Cell>
        </Link>
      </Section>

      <Section>
        <Cell>
        <Button mode="filled" size="s" onClick={testClick}>Click me</Button>
        </Cell>
      </Section>

      <Section
        header="Application Launch Data"
        footer="These pages help developer to learn more about current launch information"
      >
        <Link to="/init-data">
          <Cell subtitle="User data, chat information, technical data">Init Data</Cell>
        </Link>
        <Link to="/launch-params">
          <Cell subtitle="Platform identifier, Mini Apps version, etc.">Launch Parameters</Cell>
        </Link>
        <Link to="/theme-params">
          <Cell subtitle="Telegram application palette information">Theme Parameters</Cell>
        </Link>
      </Section>
    </List>
  );
}
