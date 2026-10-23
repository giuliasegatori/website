import Link from 'next/link'
import Seo from '../../components/Seo'
import Header from '../../components/Header'
import Contact from '../../components/Contact'
import PostList from '../../components/PostList'
import { useT } from '../../lib/i18n'
import { getAllPosts, getPost } from '../../lib/posts'

function formatDate (iso) {
  try {
    return new Intl.DateTimeFormat('it-IT', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(iso))
  } catch (e) {
    return iso
  }
}

export default function Post ({ post, others }) {
  const t = useT()
  return (
    <div id='site'>
      <Seo title={`${post.title} · Giulia Segatori`} description={post.excerpt} path={`/diario/${post.slug}`} type='article' />
      <Header />
      <main className='post-page'>
        <div className='wrap'>
          <Link className='back' href='/#diario'>{t('← Tutto il diario', '← Back to the journal')}</Link>
          <header>
            <div className='pm'><b>{post.tag}</b><span>{formatDate(post.date)}</span><span>{post.minutes} min</span></div>
            <h1>{post.title}</h1>
          </header>
          {t(null, <p className='fn lang-note'>This post is in Italian. An English version is on the way.</p>)}
          <article className='prose' dangerouslySetInnerHTML={{ __html: post.html }} />
          {others.length > 0 && (
            <div className='more-posts'>
              <div className='eyebrow' style={{ marginBottom: 14 }}>{t('Altro dal diario', 'More from the journal')}</div>
              <PostList posts={others} />
            </div>
          )}
        </div>
      </main>
      <Contact />
    </div>
  )
}

export async function getStaticPaths () {
  return { paths: getAllPosts().map(p => ({ params: { slug: p.slug } })), fallback: false }
}

export async function getStaticProps ({ params }) {
  const post = getPost(params.slug)
  const others = getAllPosts()
    .filter(p => p.slug !== params.slug)
    .map(({ slug, title, excerpt, tag, minutes, date }) => ({ slug, title, excerpt, tag, minutes, date }))
  return { props: { post, others } }
}
