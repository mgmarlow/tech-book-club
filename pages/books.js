import Layout from '../components/Layout'
import { getAllBooks } from '../lib/books'
import Book from '../components/Book'

export async function getStaticProps() {
  const books = getAllBooks()

  return {
    props: {
      books,
    },
  }
}

function BookList({ books }) {
  return (
    <ul>
      <div className="columns is-multiline">
        {books.map(book => (
          <div className="column is-one-fifth" key={book.id}>
            <li className="mb-6">
              <Book book={book} />
            </li>
          </div>
        ))}
      </div>
    </ul>
  )
}

export default function Books({ books }) {
  const completedBooks = books.filter(book => book.state === 'completed')
  const newBooks = books.filter(book => book.state === 'new')

  return (
    <Layout>
      <main>
        <div className="container">
          <section className="section">
            <h1 className="is-size-1 title">Books</h1>

            <div className="my-3">
              <h2 className="is-size-2">Completed</h2>
              <hr />
              <BookList books={completedBooks} />
            </div>

            <div>
              <h2 className="is-size-2">Queued</h2>
              <hr />
              <BookList books={newBooks} />
            </div>
          </section>
        </div>
      </main>
    </Layout>
  )
}
