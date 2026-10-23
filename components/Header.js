import Link from 'next/link'
import { useLang, useT } from '../lib/i18n'

export default function Header () {
  const { lang, setLang } = useLang()
  const t = useT()
  return (
    <header className='top'>
      <div className='wrap'>
        <Link className='mark' href='/'><span className='cap'>Giulia</span><span className='it'>Segatori</span></Link>
        <nav className='links'>
          <Link href='/#lavoro'>{t('Lavoro', 'Work')}</Link>
          <Link href='/#progetti'>{t('Progetti', 'Projects')}</Link>
          <Link href='/#diario'>{t('Diario', 'Journal')}</Link>
          <Link href='/#chi-sono'>{t('Chi sono', 'About')}</Link>
          <Link href='/#contatti'>{t('Contatti', 'Contact')}</Link>
        </nav>
        <div className='lang' role='group' aria-label='Lingua / Language'>
          <button type='button' aria-pressed={lang === 'it'} onClick={() => setLang('it')}>IT</button>
          <button type='button' aria-pressed={lang === 'en'} onClick={() => setLang('en')}>EN</button>
        </div>
      </div>
    </header>
  )
}
