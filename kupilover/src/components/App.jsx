import WebApp from '@twa-dev/sdk';
import { AppRoot } from '@telegram-apps/telegram-ui';
import { init, themeParams, backButton } from '@telegram-apps/sdk';
import { useEffect } from 'react';
import {
  Navigate,
  Route,
  BrowserRouter,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';

import { routes } from '@/navigation/routes.jsx';

function BackButtonManipulator() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    function onClick() {
      navigate(-1);
    }
    backButton.onClick(onClick);

    return () => backButton.offClick(onClick);
  }, [navigate]);

  useEffect(() => {
    if (location.pathname === '/') {
      if (backButton.mount.isAvailable()) {
        backButton.hide();
        backButton.unmount();
        backButton.isMounted(); // true
      }
    } else {
      if (backButton.mount.isAvailable()) {
        backButton.mount();
        backButton.show();
        backButton.isMounted(); // true
      }
    }
  }, [location]);

  return null;
}

/**
 * @return {JSX.Element}
 */
export function App() {
  init();
  if (themeParams.mount.isAvailable()) {
    themeParams.mount();
    themeParams.isMounted();
  }
  if (backButton.mount.isAvailable()) {
    backButton.mount();
    backButton.isMounted(); // true
  }
  if (themeParams.bindCssVars.isAvailable()) {
    themeParams.bindCssVars();
  }
  return (
    <AppRoot
      appearance={WebApp.colorScheme}
      platform={['macos', 'ios'].includes(WebApp.platform) ? 'ios' : 'base'}
    >
      <BrowserRouter>
        <BackButtonManipulator/>
        <Routes>
          {routes.map((route) => <Route key={route.path} {...route} />)}
          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
      </BrowserRouter>
    </AppRoot>
  );
}
