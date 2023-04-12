import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { GlobalStyles } from './view/styles/global';
import { baseTheme } from './view/styles/theme';
import { store } from './business/store';
import { BonusInfo } from './view/organisms/BonusInfo';
import type { FC } from 'react';

export const App: FC = () => (
  <Provider store={store}>
    <ThemeProvider theme={baseTheme}>
      <GlobalStyles />
      <BonusInfo />
    </ThemeProvider>
  </Provider>
);
