import { Html, Head, Main, NextScript } from 'next/document'
import icon from '@/assets/icon/birthdayIcon.ico'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <title>Boldog születésnapot!</title>
          <meta name="description" content="Electro Netics Kft. Home page" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" type="image/x-icon" href="./favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
