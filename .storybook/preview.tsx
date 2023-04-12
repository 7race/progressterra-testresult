import React from 'react';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { GlobalStyles } from '../src/view/styles/global';
import { baseTheme } from '../src/view/styles/theme';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from '../src/business/store';

import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'fullscreen',
  },
};

export default preview;

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles,
    Provider: ThemeProvider,
    themes: {
      baseTheme,
    },
  }),
  (Story) => (
    <Provider store={store}>
      <Story />
    </Provider>
  ),
];
