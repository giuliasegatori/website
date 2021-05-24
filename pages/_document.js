import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

import { GTM_ID } from '../services/GoogleTagManager'

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html lang='it'>
        <Head>
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='true'
          />
          <link
            rel='preload'
            as='style'
            href='https://fonts.googleapis.com/css2?family=Poppins&display=swap'
          />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css2?family=Poppins&display=swap'
            media='print'
            onLoad="this.media='all'"
          />
          <noscript>
            <link
              rel='stylesheet'
              href='https://fonts.googleapis.com/css2?family=Poppins&display=swap'
            />
          </noscript>
          {/* Google Tag Manager */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`
            }}
          />
          {/* End Google Tag Manager */}
          <meta name="description" content="Giulia Segatori, UX/UI Designer, based in Rome, Italy."/>
<meta property="og:site_name" content="Giulia Segatori"/>
  		<meta property="og:locale" content="en_EN"/>
  		<meta property="og:locale_alternate" content="en_EN"/>
  		<meta property="og:type" content="website"/>
  		<meta property="og:title" content="Giulia Segatori - UX & UI Designer"/>
  		<meta property="og:description" content="Giulia Segatori, UX/UI Designer, based in Rome, Italy."/>
  		<meta property="og:url" content="https://www.giuliasegatori.com"/>
  		<meta property="twitter:site" content="https://www.giuliasegatori.com"/>
  		<meta property="twitter:title" content="Giulia Segatori, UX/UI Designer, based in Rome, Italy."/>
  		<meta property="twitter:description" content="Giulia Segatori, UX/UI Designer, based in Rome, Italy."/>
  		<meta property="twitter:creator" content="Giulia Segatori"/>
  		<meta property="og:image:width" content="1200"/>
  		<meta property="og:image:height" content="627"/>
  		<meta property="og:image:alt" content="Giulia Segatori, UX/UI Designer, based in Rome, Italy."/>
  		<meta property="og:image" content="/metaimage.png"/>
  		<meta property="twitter:image" content="/metaimage.png"/>
        </Head>
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
