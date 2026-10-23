import '../styles/global.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { LangProvider } from '../lib/i18n'
import { pageview } from '../lib/gtm'

export default function App ({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    router.events.on('routeChangeComplete', pageview)
    return () => router.events.off('routeChangeComplete', pageview)
  }, [router.events])

  return (
    <LangProvider>
      <Component {...pageProps} />
    </LangProvider>
  )
}
