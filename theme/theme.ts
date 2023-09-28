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
    h3: {
      fontFamily: "FuturaStdCondensedBold, sans-serif",
      fontSize: "51px",
      letterSpacing: "-0.15rem",
    },
  },
});

export default theme;