import 'styled-components';

import type { BaseTheme } from './view/styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends BaseTheme {}
}
