import Head from 'next/head'

const SITE = 'https://www.giuliasegatori.com'

export default function Seo ({ title, description, path = '/', type = 'website' }) {
  const url = SITE + path
  return (
    <Head>
      <title>{title}</title>
      <meta name='viewport' content='width=device-width, initial-scale=1, viewport-fit=cover' />
      <meta name='description' content={description} />
      <link rel='canonical' href={url} />
      <meta property='og:site_name' content='Giulia Segatori' />
      <meta property='og:locale' content='it_IT' />
      <meta property='og:locale:alternate' content='en_GB' />
      <meta property='og:type' content={type} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:url' content={url} />
      <meta property='og:image' content={`${SITE}/og-image.jpg`} />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={`${SITE}/og-image.jpg`} />
    </Head>
  )
}
