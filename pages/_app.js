import 'tailwindcss/tailwind.css'
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
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
