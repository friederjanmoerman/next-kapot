import { createTheme } from '@mui/material/styles'

let theme = createTheme()

theme = createTheme(theme, {
  palette: {
    common: {
      black: '#000000',
      white: '#ffffff',
    },
    primary: {
      main: '#fee502',
    },
  },
  typography: {
    fontFamily: ['Nunito Sans', 'Arial', 'sans-serif'].join(','),
    h1: {
      fontFamily: 'AnotherDanger, serif',
      fontSize: '100px',
      letterSpacing: '-0.2rem',
    },
    h2: {
      fontFamily: 'FuturaStdCondExtraBoldObl, sans-serif',
      fontSize: '62px',
      letterSpacing: '-0.2rem',
    },
    h3: {
      fontFamily: 'FuturaStdCondensedBold, sans-serif',
      fontSize: '51px',
      letterSpacing: '-0.15rem',
      textTransform: 'uppercase',
    },
    h4: {
      fontFamily: 'FuturaStdHeavy, sans-serif',
      fontSize: '26px',
      letterSpacing: '-0.04rem',
      [theme.breakpoints.down('lg')]: {
        fontSize: '20px',
      },
    },
    h5: {
      fontSize: '15px',
      fontWeight: '800',
      lineHeight: '1.4em',
    },
  },
})

export default theme
