import { createMuiTheme } from '@material-ui/core';

const lightTheme = createMuiTheme({
  spacing: 12,
  palette: {
    type: 'light',
    primary: {
      light: '#ff9e00',
      main: '#ff9100',
      dark: '#ff6d00',
    },
    secondary: {
      main: '#D4D4D4',
      dark: '#7b2cbf',
    },
    text: {
      primary: '#1E1E1E',
      secondary: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: "'Roboto', 'verdana', 'sans-serif'",
    fontSize: '14',
    h1: {
      fontSize: '3rem',
    },
    h2: {
      fontSize: '2.5rem',
    },
    h3: {
      fontSize: '2rem',
    },
    h4: {
      fontSize: '1.5rem',
    },
    h5: {
      fontSize: '1rem',
    },
    h6: {
      fontSize: '0.5rem',
    },
  },
});

export default lightTheme;
