import matter from 'gray-matter'
import fs from 'fs'
import { join } from 'path'

const notesDirectory = join(process.cwd(), 'content', 'notes')

// Note: this slug must match the kebab-cased version of
// the book title.
export function getNotesBySlug(slug) {
  try {
    const fileName = `${slug}.md`
    const fullPath = join(notesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return { slug, meta: data, content }
  } catch {
    return null
  }
}
