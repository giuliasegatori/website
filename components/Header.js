import Link from 'next/link'
import { useLang, useT } from '../lib/i18n'

// Light/dark: follows the system until the visitor picks one, then remembers the choice
function toggleTheme () {
  const root = document.documentElement
  const current = root.getAttribute('data-theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  const next = current === 'dark' ? 'light' : 'dark'
  root.setAttribute('data-theme', next)
  try { window.localStorage.setItem('gs-theme', next) } catch (e) {}
}

export default function Header () {
  const { lang, setLang } = useLang()
  const t = useT()
  return (
    <header className='top'>
      <div className='wrap'>
        <Link className='mark' href='/' aria-label='Giulia Segatori'>
          <img src='/logo.png' alt='' width='240' height='217' />
          <span className='name'><span className='cap'>Giulia</span><span className='it'>Segatori</span></span>
        </Link>
        <nav className='links'>
          <Link href='/#lavoro'>{t('Lavoro', 'Work')}</Link>
          <Link href='/#progetti'>{t('Progetti', 'Projects')}</Link>
          <Link href='/#diario'>{t('Diario', 'Journal')}</Link>
          <Link href='/#chi-sono'>{t('Chi sono', 'About')}</Link>
          <Link href='/#contatti'>{t('Contatti', 'Contact')}</Link>
        </nav>
        <div className='tools'>
          <button className='theme' type='button' onClick={toggleTheme} aria-label={t('Cambia tema chiaro/scuro', 'Switch light/dark theme')} title={t('Chiaro / scuro', 'Light / dark')}>
            <svg className='moon' viewBox='0 0 24 24' aria-hidden='true'><path d='M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z' /></svg>
            <svg className='sun' viewBox='0 0 24 24' aria-hidden='true'><circle cx='12' cy='12' r='4' /><path d='M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4' /></svg>
          </button>
          <div className='lang' role='group' aria-label='Lingua / Language'>
            <button type='button' aria-pressed={lang === 'it'} onClick={() => setLang('it')}>IT</button>
            <button type='button' aria-pressed={lang === 'en'} onClick={() => setLang('en')}>EN</button>
          </div>
        </div>
      </div>
    </header>
  )
}
