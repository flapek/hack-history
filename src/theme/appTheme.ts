import { createTheme, Theme } from '@mui/material';

const appTheme: Theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
      contrastText: 'white',
    },
  },
});

export default appTheme;
