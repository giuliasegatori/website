import 'tailwindcss/tailwind.css'
import '../styles/global.css'

import Head from 'next/head'

import '@fontsource/poppins/100.css'
import '@fontsource/poppins/200.css'
import '@fontsource/poppins/300.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/800.css'
import '@fontsource/poppins/900.css'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Giulia Segatori</title>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
        <link href='https://fonts.googleapis.com/css2?family=Poppins&display=swap' rel='stylesheet' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='apple-mobile-web-app-title' content='Giulia Segatori' />
        <meta name='application-name' content='Giulia Segatori' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
