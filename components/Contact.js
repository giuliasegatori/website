import { useState } from 'react'
import { useT } from '../lib/i18n'

const EMAIL = 'giulia.segatori@gmail.com'

export default function Contact () {
  const t = useT()
  const [copied, setCopied] = useState(false)

  const copy = () => {
    const done = () => { setCopied(true); setTimeout(() => setCopied(false), 1800) }
    try {
      navigator.clipboard.writeText(EMAIL).then(done, () => {})
    } catch (e) {}
  }

  return (
    <>
      <section className='contact' id='contatti'>
        <div className='wrap'>
          <span className='eyebrow'>{t('Capitolo 06 · Contatti', 'Chapter 06 · Contact')}</span>
          <h2 className='cap'>{t(<>Scrivimi. <span className='it'>Rispondo, giuro.</span></>, <>Write to me. <span className='it'>I reply, promise.</span></>)}</h2>
          <p>{t(
            'Recruiter, persone che fanno prodotto, curiosi e fan di The Office: la mail è questa. Tempi di risposta variabili in base alla modalità attiva.',
            'Recruiters, product people, the curious and fellow fans of The Office: this is the address. Response times vary with the active mode.'
          )}</p>
          <div className='mailrow'>
            <a className='mail' href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <button className='btn' type='button' onClick={copy}>
              {copied ? t('Copiata', 'Copied') : t('Copia email', 'Copy email')}
            </button>
          </div>
          <div className='clinks'>
            <a href='https://www.linkedin.com/in/giulia-segatori' target='_blank' rel='noopener noreferrer'>LinkedIn ↗</a>
            <a href='https://pasqualinosorice.com' target='_blank' rel='noopener noreferrer'>Pasqualino Sorice ↗</a>
            <a href='https://examinatorai.com' target='_blank' rel='noopener noreferrer'>ExaminatorAI ↗</a>
          </div>
        </div>
      </section>
      <footer>
        <div className='wrap'>
          <span>© {new Date().getFullYear()} Giulia Segatori</span>
          <span>{t("Fatto con l'AI. Ovviamente.", 'Built with AI. Obviously.')}</span>
        </div>
      </footer>
    </>
  )
}
