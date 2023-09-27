import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Nunito Sans',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

export default theme;