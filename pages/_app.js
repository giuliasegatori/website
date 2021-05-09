import 'tailwindcss/tailwind.css'
import Head from 'next/head'

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
