// MUI
import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"

// Theme
import theme from "../theme/theme"

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
