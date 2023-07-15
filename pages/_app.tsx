// UI
import { ChakraProvider } from "@chakra-ui/react"

// Types
import type { AppProps } from "next/app"

// Styles
import "@/styles/globals.css"

import theme from "../theme/theme"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
