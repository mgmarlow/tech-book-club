import { getAllBooks } from '../lib/books'

export async function getStaticProps() {
  const books = getAllBooks()

  return {
    props: {
      books,
    },
  }
}

export default function Books({ books }) {
  return (
    <main>
      <ul>
        {books.map(book => (
          <li>{book.title}</li>
        ))}
      </ul>
    </main>
  )
}
