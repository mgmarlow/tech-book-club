import Layout from '../components/Layout'
import { getAllBooks } from '../lib/books'

export async function getStaticProps() {
  const books = getAllBooks()

  return {
    props: {
      books,
    },
  }
}

function BookItem({ book }) {
  return (
    <div>
      <h3 className="is-size-4">
        <i>{book.title}</i>
      </h3>
      <p className="subtitle">{book.author}</p>
    </div>
  )
}

function BookList({ books }) {
  return (
    <ul>
      {books.map(book => (
        <li className="mb-6" key={book.id}>
          <BookItem book={book} />
        </li>
      ))}
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
              <h2 className="is-size-2">New</h2>
              <hr />
              <BookList books={newBooks} />
            </div>
          </section>
        </div>
      </main>
    </Layout>
  )
}
