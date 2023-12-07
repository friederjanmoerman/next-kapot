import { Html, Head, Main, NextScript } from 'next/document'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Analytics />
        <SpeedInsights />
      </body>
    </Html>
  )
}
