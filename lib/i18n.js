import { createContext, useContext, useEffect, useState } from 'react'

const LangContext = createContext({ lang: 'it', setLang: () => {} })

export function LangProvider ({ children }) {
  const [lang, setLangState] = useState('it')

  useEffect(() => {
    let start = null
    if (window.location.hash === '#en' || window.location.hash === '#it') start = window.location.hash.slice(1)
    if (!start) {
      try { start = window.localStorage.getItem('gs-lang') } catch (e) {}
    }
    if (start === 'en' || start === 'it') setLangState(start)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = l => {
    setLangState(l)
    try { window.localStorage.setItem('gs-lang', l) } catch (e) {}
  }

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
}

// t('testo italiano', 'english text') — accepts strings or JSX
export function useT () {
  const { lang } = useContext(LangContext)
  return (it, en) => (lang === 'en' ? en : it)
}

export function useLang () {
  return useContext(LangContext)
}
