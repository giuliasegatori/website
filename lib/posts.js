import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const DIR = path.join(process.cwd(), 'content', 'diario')

// Front matter dates can arrive as Date objects or strings: always return YYYY-MM-DD
const isoDate = d => (d instanceof Date ? d.toISOString().slice(0, 10) : String(d).slice(0, 10))

// Each post is a Markdown file in content/diario. The file name is the URL: /diario/<file-name>
export function getAllPosts () {
  return fs.readdirSync(DIR)
    .filter(f => f.endsWith('.md'))
    .map(f => {
      const slug = f.replace(/\.md$/, '')
      const { data } = matter(fs.readFileSync(path.join(DIR, f), 'utf8'))
      return { slug, ...data, date: isoDate(data.date) }
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPost (slug) {
  const { data, content } = matter(fs.readFileSync(path.join(DIR, `${slug}.md`), 'utf8'))
  return { slug, ...data, date: isoDate(data.date), html: marked.parse(content) }
}
