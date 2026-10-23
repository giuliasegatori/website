import Link from 'next/link'
import { useT } from '../lib/i18n'

export default function PostList ({ posts }) {
  const t = useT()
  return (
    <div className='posts'>
      {posts.map(p => (
        <Link key={p.slug} className='post-link' href={`/diario/${p.slug}`}>
          <span className='pm'><b>{p.tag}</b><span>{p.minutes} min{t('', ' · IT')}</span></span>
          <span>
            <h3>{p.title}</h3>
            <p className='ex'>{p.excerpt}</p>
          </span>
          <span className='open'>{t('Leggi →', 'Read →')}</span>
        </Link>
      ))}
    </div>
  )
}
