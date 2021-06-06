import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      common: {
        black: string;
        white: string;
      };
      grey: {
        soft: string;
        medium: string;
        hard: string;
      };
      accent: {
        soft: string;
        hard: string;
      };
      primary: {
        main: string;
        light: string;
        contrastText: string;
      };
      secondary: {
        main: string;
        light: string;
        contrastText: string;
      };
    };
    shape: {
      borderRadius: string;
    };
    shadows: {
      soft: string;
      medium: string;
      hard: string;
    };
  }
}

export const lightTheme: DefaultTheme = {
  palette: {
    common: {
      black: '#030A12',
      white: '#ffffff',
    },
    grey: {
      soft: '#E1E2E1',
      medium: '#BDBDBD',
      hard: '#494949',
    },
    accent: {
      soft: '#079FEA',
      hard: '#066371',
    },
    primary: {
      main: '#E3207C',
      light: '#EA5A9E',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#00A0E6',
      light: '#21bbgg',
      contrastText: '#000000',
    },
  },
  shape: {
    borderRadius: '5px',
  },
  shadows: {
    soft:
      '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    medium: '',
    hard: '',
  },
};
