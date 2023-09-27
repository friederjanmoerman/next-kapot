import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      "Nunito Sans",
      "Arial",
      "sans-serif",
    ].join(','),
    h2: {
      fontFamily: "FuturaStdCondExtraBoldOblique, sans-serif",
      fontSize: "62px",
      letterSpacing: "-0.2rem",
    },
  },
});

export default theme;