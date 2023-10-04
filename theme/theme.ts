import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      "Nunito Sans",
      "Arial",
      "sans-serif",
    ].join(','),
    h1: {
      fontFamily: "AnotherDanger, serif",
      fontSize: "62px",
      letterSpacing: "-0.2rem",
    },
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
    h4: {
      fontFamily: "FuturaStdHeavy, sans-serif",
      fontSize: "26px",
      letterSpacing: "-0.04rem",
      textTransform: "uppercase",
    },
    h5: {
      fontSize: "17px",
      fontWeight: "800",
      lineHeight: "1.4em",
      letterSpacing: "-0.04rem",
    },
  },
});

export default theme;