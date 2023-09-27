import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      "Nunito Sans",
      "Arial",
      "sans-serif",
    ].join(','),
    h2: {
      fontFamily: "FuturaStdExtraBoldOblique, sans-serif",
      fontSize: "32px",
      letterSpacing: "-0.05rem",
    },
  },
});

export default theme;