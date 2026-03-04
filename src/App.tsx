import '@mantine/core/styles.css';
import './styles/fonts.css';

import { MantineProvider } from '@mantine/core';
import { GoogleAnalytics } from './components/GoogleAnalytics';
import { Router } from './Router';
import { theme } from './theme';

export default function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <GoogleAnalytics />
      <Router />
    </MantineProvider>
  );
}
