import remark from 'remark'
import html from 'remark-html'
import { getAllBooks, getBookBySlug } from '../../lib/books'
import { getNotesBySlug } from '../../lib/notes'

export async function getStaticProps({ params }) {
  const book = getBookBySlug(params.slug)
  const notes = getNotesBySlug(params.slug)

  const markdown = await remark()
    .use(html)
    .process(notes?.content || '')

  return {
    props: {
      book,
      notesContent: markdown.toString(),
    },
  }
}

export async function getStaticPaths() {
  const books = getAllBooks()
  const paths = books.map(b => ({
    params: {
      slug: b.slug,
    },
  }))

  return { paths, fallback: false }
}

export default function Notes({ book, notesContent }) {
  return (
    <>
      <h1>{book.title}</h1>
      {notesContent && (
        <div dangerouslySetInnerHTML={{ __html: notesContent }}></div>
      )}
    </>
  )
}
