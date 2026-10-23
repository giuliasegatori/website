import { useEffect, useState } from 'react'
import Seo from '../components/Seo'
import Header from '../components/Header'
import Contact from '../components/Contact'
import PostList from '../components/PostList'
import { useT, useLang } from '../lib/i18n'
import { getAllPosts } from '../lib/posts'

const BRUNO = {
  it: ['dorme (finalmente)', 'ha rubato un calzino', 'vuole uscire', 'scava in giardino', 'fissa la pizza', 'ha trovato una pozzanghera'],
  en: ['asleep (finally)', 'stole a sock', 'wants to go out', 'digging in the garden', 'staring at the pizza', 'found a puddle']
}

// Current time in Rome, refreshed every 30 seconds
function useRomeTime () {
  const [now, setNow] = useState(null)
  useEffect(() => {
    const read = () => {
      try {
        const parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Rome', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date())
        const h = +parts.find(p => p.type === 'hour').value % 24
        const m = +parts.find(p => p.type === 'minute').value
        setNow({ h, m })
      } catch (e) {
        const d = new Date()
        setNow({ h: d.getHours(), m: d.getMinutes() })
      }
    }
    read()
    const id = setInterval(read, 30000)
    return () => clearInterval(id)
  }, [])
  return now || { h: 21, m: 40 }
}

function Telemetry ({ now }) {
  const t = useT()
  const { lang } = useLang()
  const { h, m } = now
  const x = h + m / 60
  const day = x >= 9 && x < 18
  const songs = x < 6.5 ? 0 : Math.round((x - 6.5) * 4.2)
  const awake = x >= 6.5 && x < 21.75
  const b = BRUNO[lang]
  const bruno = (x < 7 || x >= 23) ? b[0] : b[1 + (h % (b.length - 1))]
  const burn = x < 6.5 ? 9 : Math.min(97, Math.round(14 + (x - 6.5) * 5.6))
  const pad = n => (n < 10 ? '0' : '') + n

  return (
    <div className='telemetry' aria-label={t('Telemetria', 'Telemetry')}>
      <div className='wrap'>
        <span className='live'><i />{t('Telemetria live', 'Live telemetry')}</span>
        <span><span className='lbl'>{t('Roma', 'Rome')}</span>{pad(h)}:{pad(m)}</span>
        <span><span className='lbl'>{t('Modalità', 'Mode')}</span>{day ? t('Utenti', 'Users') : t('Bambini', 'Kids')}</span>
        <span><span className='lbl'>{t('Brani ascoltati', 'Songs played')}</span>{songs}</span>
        <span><span className='lbl'>{t('Figli svegli', 'Kids awake')}</span>{awake ? '3/3' : t('0/3 (forse)', '0/3 (maybe)')}</span>
        <span><span className='lbl'>Bruno</span>{bruno}</span>
        <span><span className='lbl'>{t('Esaurimento', 'Burnout')}</span>{burn}%<span className='bar'><span style={{ width: `${burn}%` }} /></span></span>
      </div>
    </div>
  )
}

function Hero ({ now }) {
  const t = useT()
  const x = now.h + now.m / 60
  const day = x >= 9 && x < 18
  return (
    <section className='hero'>
      <div className='wrap hero-grid'>
        <div className='hero-text'>
          <div className='who'>
            <span className='eyebrow'>Giulia Segatori</span>
            <span className='eyebrow'>{t('Product designer · Roma', 'Product designer · Rome')}</span>
          </div>
          <h1 className='cap'>
            {t(<>Risolvo<span className='it'>problemi.</span></>, <>I solve<span className='it'>problems.</span></>)}
          </h1>
          <div className='shift' aria-live='polite'>
            <div className={`shift-row${day ? ' on' : ''}`}>
              <span className='h'>09–18</span>
              <span className='w'>{t(<>Degli <span className='it'>utenti</span></>, <>For <span className='it'>users</span></>)}</span>
              <span className='pill'>{t('In corso', 'Live')}</span>
            </div>
            <div className={`shift-row${day ? '' : ' on'}`}>
              <span className='h'>18–09</span>
              <span className='w'>{t(<>Di <span className='it'>tre bambini</span></>, <>For <span className='it'>three kids</span></>)}</span>
              <span className='pill'>{t('In corso', 'Live')}</span>
            </div>
          </div>
          <p className='lede'>{t(
            "Parlo con le persone, capisco cosa non va e lo trasformo in prodotto. Product designer a MioAssicuratore dal 2015, oggi lavoro con l'AI.",
            "I talk to people, figure out what's wrong and turn it into product. Product designer at MioAssicuratore since 2015, now working with AI."
          )}</p>
        </div>

        <figure className='photo'>
          <div className='frame'>
            <img src='/giulia-mare.jpg' alt={t('Giulia in acqua cristallina, sorride e si ripara gli occhi dal sole', 'Giulia in crystal-clear water, smiling and shading her eyes from the sun')} width='1200' height='1595' />
            <div className='hud' aria-hidden='true'>
              <div className='tl'><i />REC</div>
              <div className='tr'>CAM 01</div>
              <span className='corner c1' /><span className='corner c2' />
              <div className='bl'>
                <div><b>{t('STATO', 'STATUS')}</b>OFFLINE</div>
                <div><b>{t('NOTIFICHE', 'NOTIFICATIONS')}</b>0</div>
                <div><b>TICKET</b>{t('non pervenuti', 'none received')}</div>
                <div><b>{t('ESAURIMENTO', 'BURNOUT')}</b>3%</div>
              </div>
            </div>
          </div>
          <figcaption>{t('Prova fotografica rarissima: nessun ticket aperto.', 'Extremely rare footage: zero open tickets.')}</figcaption>
        </figure>
      </div>
    </section>
  )
}

function Work () {
  const t = useT()
  const steps = [
    ['Ascolto', 'Listen', "Ticket, chiamate, interviste, dati d'uso. Raccolgo quello che dicono gli utenti e soprattutto quello che fanno.", 'Tickets, calls, interviews, usage data. I gather what users say and, above all, what they do.'],
    ['Capisco', 'Understand', 'Dietro "non funziona" c\'è sempre un problema più preciso. Lo trovo e decido con il team cosa vale la pena costruire.', 'Behind "it doesn\'t work" there\'s always a more precise problem. I find it and decide with the team what\'s worth building.'],
    ['Miglioro', 'Improve', "Interfacce e funzionalità, progettate e costruite con l'AI. Poi si torna al punto 01, con chi aveva chiesto.", 'Interfaces and features, designed and built with AI. Then back to step 01, with the people who asked.']
  ]
  return (
    <section className='chapter' id='lavoro'>
      <div className='wrap'>
        <div className='ch-head'>
          <span className='num'>{t('Capitolo 01 · Il lavoro', 'Chapter 01 · The job')}</span>
          <h2 className='cap'>{t(<>Dal feedback <span className='it'>al prodotto</span></>, <>From feedback <span className='it'>to product</span></>)}</h2>
          <p>{t(
            "Sono a MioAssicuratore, il broker assicurativo online, dal 2015. Il mio mestiere è ascoltare gli utenti, capire cosa c'è dietro una richiesta e trasformarlo in un prodotto migliore. Oggi lo facciamo con l'AI, e dal feedback al rilascio passano giorni.",
            "I've been at MioAssicuratore, the online insurance broker, since 2015. My job is to listen to users, work out what's behind a request and turn it into a better product. Today we do it with AI, and feedback to release takes days."
          )}</p>
        </div>

        <ol className='steps'>
          {steps.map(([itH, enH, itP, enP], i) => (
            <li key={itH}>
              <span className='sn'>0{i + 1}</span>
              <h3 className='cap'>{t(itH, enH)}</h3>
              <p>{t(itP, enP)}</p>
            </li>
          ))}
        </ol>

        <div className='team'>
          <div className='big'>5–6<small>{t('funzionalità a settimana', 'features a week')}</small></div>
          <div>
            <p>{t(
              'Il team prodotto di MioAssicuratore oggi è piccolissimo: uno sviluppatore, il CEO, una product designer (ciao) e gli agenti AI che scrivono il codice. Le persone decidono cosa costruire e controllano che sia fatto bene.',
              "MioAssicuratore's product team is tiny now: one developer, the CEO, a product designer (hi) and AI agents writing the code. People decide what to build and check it's done right."
            )}</p>
            <a className='tlink' href='https://pasqualinosorice.com' target='_blank' rel='noopener noreferrer'>{t('Come lavoriamo, raccontato dal nostro CTO ↗', 'How we work, told by our CTO ↗')}</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Projects () {
  const t = useT()
  const pasqualino = <a href='https://pasqualinosorice.com' target='_blank' rel='noopener noreferrer'>Pasqualino Sorice</a>
  return (
    <section className='chapter' id='progetti'>
      <div className='wrap'>
        <div className='ch-head'>
          <span className='num'>{t('Capitolo 02 · Progetti con Pasqualino', 'Chapter 02 · Projects with Pasqualino')}</span>
          <h2 className='cap'>{t(<>Side project <span className='it'>di coppia</span></>, <>Side projects <span className='it'>as a couple</span></>)}</h2>
          <p>{t(
            <>Con mio marito {pasqualino}, CTO di MioAssicuratore, ogni tanto costruiamo cose insieme. Lui scrive di sviluppo con gli agenti AI, io mi occupo del prodotto.</>,
            <>With my husband {pasqualino}, CTO of MioAssicuratore, we build things together now and then. He writes about building with AI agents, I take care of the product.</>
          )}</p>
        </div>
        <div className='duo'>
          <article className='card'>
            <span className='eyebrow'>Web app · 2024</span>
            <h3 className='cap'>Examinator<span className='it'>AI</span></h3>
            <p>{t(
              "Una web app per prepararsi agli esami, costruita in 12 ore con l'AI. Io ho lavorato al prodotto: per chi è, cosa deve fare e in che ordine.",
              "A web app for exam prep, built in 12 hours with AI. I worked on the product: who it's for, what it does and in what order."
            )}</p>
            <div className='specs'><span>Product</span><span>AI</span><span>12h build</span></div>
            <a className='tlink' href='https://examinatorai.com' target='_blank' rel='noopener noreferrer'>examinatorai.com ↗</a>
          </article>
          <article className='card feature'>
            <span className='eyebrow'>{t('Progetto principale · in produzione', 'Main project · in production')}</span>
            <h3 className='cap'>{t(<>Tre <span className='it'>figli</span></>, <>Three <span className='it'>kids</span></>)}</h3>
            <p>{t(
              'Nessuna documentazione, aggiornamenti continui, rollback impossibile. Feedback degli utenti: molto diretto.',
              'No documentation, constant updates, rollback impossible. User feedback: very direct.'
            )}</p>
            <div className='changelog'>
              <div><b>v1.0</b>{t('rilascio iniziale, notti insonni incluse', 'initial release, sleepless nights included')}</div>
              <div><b>v2.0</b>{t('aggiunta funzione "fratello", conflitti frequenti', '"sibling" feature added, frequent conflicts')}</div>
              <div><b>v3.0</b>{t('scalabilità testata al limite', 'scalability tested to the limit')}</div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

function Archive () {
  const t = useT()
  const rows = [
    ['MioAssicuratore.it', 'Nuova identità di marca, sito ottimizzato SEO e un CRM ripensato per far emettere polizze più in fretta al team operativo.', 'New brand identity, an SEO-optimised website and a CRM redesigned so the operations team could issue policies faster.', 'Brand · Web · CRM'],
    ['Aron', 'Sito per una piattaforma insurtech: bianco e nero, forme geometriche animate, consegnato in tempi strettissimi grazie a un CMS headless.', 'Website for an insurtech platform: black and white, animated geometric shapes, shipped on a very tight deadline thanks to a headless CMS.', 'React · Gatsby · Strapi'],
    ['MIO', 'App per confrontare preventivi e gestire tutte le proprie polizze. Persona, wireflow e tanta pazienza.', 'App to compare quotes and manage all your policies. Personas, wireflows and lots of patience.', 'App · UX research'],
    ['Drawith.me', 'Editor di disegno per creare, condividere e vendere illustrazioni. Dagli schizzi su carta alla style guide.', 'Drawing editor to create, share and sell illustrations. From paper sketches to a style guide.', 'App · Style guide']
  ]
  return (
    <section className='chapter' id='archivio'>
      <div className='wrap'>
        <div className='ch-head'>
          <span className='num'>{t('Capitolo 03 · Archivio', 'Chapter 03 · Archive')}</span>
          <h2 className='cap'>{t(<>Quando disegnavo <span className='it'>i bottoni a mano</span></>, <>Back when I drew <span className='it'>buttons by hand</span></>)}</h2>
          <p>{t(
            'Prima di diventare product designer ho fatto la UX/UI designer. Questi sono i progetti di quel periodo, fino al 2021.',
            'Before becoming a product designer I worked as a UX/UI designer. These are projects from that time, up to 2021.'
          )}</p>
        </div>
        <div className='archive'>
          {rows.map(([name, it, en, tags]) => (
            <div className='arow' key={name}>
              <h3>{name}</h3>
              <p>{t(it, en)}</p>
              <span className='t'>{tags}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Journal ({ posts }) {
  const t = useT()
  return (
    <section className='chapter' id='diario'>
      <div className='wrap'>
        <div className='ch-head'>
          <span className='num'>{t('Capitolo 04 · Diario', 'Chapter 04 · Journal')}</span>
          <h2 className='cap'>{t(<>Lavoro, figli <span className='it'>e altri bug</span></>, <>Work, kids <span className='it'>and other bugs</span></>)}</h2>
        </div>
        {t(null, <p className='fn lang-note'>Posts are in Italian for now. English versions are on the way.</p>)}
        <PostList posts={posts} />
      </div>
    </section>
  )
}

function About () {
  const t = useT()
  const obsessions = [
    ['The Office', 'The Office', 100, t('Ogni episodio, più volte di quante sia sano ammettere.', 'Every episode, more times than is healthy to admit.')],
    [t('Musica', 'Music'), t('Music', 'Music'), 100, t('Non posso vivere senza. Letteralmente: vedi telemetria.', "Can't live without it. Literally: see telemetry.")],
    [t('Pizza fatta in casa', 'Homemade pizza'), '', 95, t('Con forno Effeuno P134HA. Non è un hobby, è un impegno.', 'With an Effeuno P134HA oven. Not a hobby, a commitment.')],
    [t('Libri', 'Books'), '', 90, t('Li mangio come patatine. Spazio in casa: esaurito.', 'I eat them like crisps. Shelf space: sold out.')],
    ['Hip hop', '', 75, t('Una volta a settimana, come a 12 anni. Il ginocchio non ha più 12 anni.', 'Once a week, like when I was 12. My knees are no longer 12.')],
    [t('Talento nel canto', 'Singing talent'), '', 3, t('Mi sarebbe piaciuto tanto. Per il bene di tutti, resta un sogno.', 'I would have loved it. For everyone\'s sake, it stays a dream.')]
  ]
  const sheet = [
    [t('Ruolo', 'Role'), t('Product designer a MioAssicuratore, dal 2015.', 'Product designer at MioAssicuratore, since 2015.')],
    [t('Studi', 'Studies'), t('Laureanda in Comunicazione, tecnologie e culture digitali alla Sapienza. Quasi dottoressa.', 'Graduating in Communication, Technologies and Digital Cultures at Sapienza University of Rome. Almost there.')],
    [t('Figli', 'Kids'), t('3. Vedi foto. Le identità sono protette.', '3. See photo. Identities protected.')],
    [t('Cane', 'Dog'), t('Bruno, Lagotto romagnolo. Il quarto figlio, il meno obbediente.', 'Bruno, a Lagotto Romagnolo. The fourth child, the least obedient.')],
    [t('Caffè', 'Coffee'), t('Zero. Mai. Funziono a musica.', 'Zero. Never. I run on music.')]
  ]
  return (
    <section className='chapter' id='chi-sono'>
      <div className='wrap'>
        <div className='ch-head'>
          <span className='num'>{t('Capitolo 05 · Fuori orario', 'Chapter 05 · Off the clock')}</span>
          <h2 className='cap'>{t(<>Scheda tecnica <span className='it'>non ufficiale</span></>, <>Spec sheet <span className='it'>(unofficial)</span></>)}</h2>
          <p>{t(
            "Product designer, laureanda, mamma di tre, proprietaria di un cane ingestibile. L'esaurimento nervoso è di serie, non un optional.",
            'Product designer, graduating student, mum of three, owner of an unmanageable dog. The nervous breakdown comes as standard, not as an extra.'
          )}</p>
        </div>

        <div className='album'>
          <figure className='polaroid p1'>
            <img src='/giulia-sposa.jpg' alt={t('Giulia in abito da sposa, seduta in giardino, ride', 'Giulia in her wedding dress, sitting in a garden, laughing')} width='900' height='900' loading='lazy' />
            <figcaption>{t('Il giorno in cui ho detto sì al CTO.', 'The day I said yes to the CTO.')}</figcaption>
          </figure>
          <figure className='polaroid p2'>
            <img src='/figli.jpg' alt={t('I tre figli di Giulia in mare, con i volti sostituiti da quelli di tre celebrità', "Giulia's three kids in the sea, with their faces swapped for three celebrities")} width='900' height='1188' loading='lazy' />
            <figcaption>{t('Gli stakeholder di casa. Volti protetti per privacy.', 'The stakeholders at home. Faces protected for privacy.')}</figcaption>
          </figure>
          <div className='sticker' aria-hidden='true'>{t(<>3 figli<br />1 cane<br />0 caffè</>, <>3 kids<br />1 dog<br />0 coffee</>)}</div>
        </div>

        <div className='about'>
          <div className='obsessions'>
            <div className='eyebrow'>{t('Livelli di fissazione', 'Obsession levels')}</div>
            <ul>
              {obsessions.map(([name, , pct, note]) => (
                <li key={pct + String(name)}>
                  <div className='ob-top'><span className='ob-name'>{name}</span><span className='ob-pct'>{pct}%</span></div>
                  <div className='meter' role='img' aria-label={`${pct}%`}><span style={{ width: `${pct}%` }} /></div>
                  <p className='fn'>{note}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className='side'>
            <dl className='sheet'>
              {sheet.map(([k, v], i) => <div key={i}><dt>{k}</dt><dd>{v}</dd></div>)}
            </dl>
            <aside className='tracks'>
              <div className='head'>
                <span className='eyebrow'>{t('In cuffia, sempre', 'Always in my headphones')}</span>
                <span className='eq' aria-hidden='true'><i /><i /><i /><i /></span>
              </div>
              <ol>
                <li>Tame Impala</li>
                <li>Thundercat</li>
                <li>Hayley Williams</li>
                <li>Marco Castello</li>
                <li>The Reign of Kindo<sup className='star'>*</sup></li>
              </ol>
              <p className='fn' style={{ margin: '12px 0 0' }}>{t('* Sì, li conosco solo io.', "* Yes, I'm the only one who knows them.")}</p>
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home ({ posts }) {
  const now = useRomeTime()
  return (
    <div id='site'>
      <Seo
        title='Giulia Segatori · Product designer'
        description="Giulia Segatori, product designer a Roma. Ascolto gli utenti e trasformo i loro feedback in prodotto. Lavoro, progetti, diario e scheda tecnica."
      />
      <Header />
      <main id='top'>
        <Hero now={now} />
        <Telemetry now={now} />
        <Work />
        <Projects />
        <Archive />
        <Journal posts={posts} />
        <About />
      </main>
      <Contact />
    </div>
  )
}

export async function getStaticProps () {
  const posts = getAllPosts().map(({ slug, title, excerpt, tag, minutes, date }) => ({ slug, title, excerpt, tag, minutes, date }))
  return { props: { posts } }
}
