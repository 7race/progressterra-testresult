export interface BaseTheme {
  colors: {
    primary: string;
    secondary: string;
    bg: string;
    bg2: string;
  };

  fonts: {
    primary: string;
  };
}

export const baseTheme: BaseTheme = {
  colors: {
    primary: '#000000',
    secondary: '#979797',
    bg: 'linear-gradient(180deg, #D2333E 0%, #F54B55 100%)',
    bg2: '#FFFFFF',
  },

  fonts: {
    primary: 'Open Sans, sans-serif',
  },
};
