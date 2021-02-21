import { getAllBooks, getBookBySlug } from '../../lib/books'

export async function getStaticProps({ params }) {
  const book = getBookBySlug(params.slug)

  return {
    props: {
      book,
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

export default function Notes({ book }) {
  return <h1>{book.title}</h1>
}
