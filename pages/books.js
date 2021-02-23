import Layout from '../components/Layout'
import { getAllBooks } from '../lib/books'
import BookList from '../components/BookList'

export async function getStaticProps() {
  const books = getAllBooks()

  return {
    props: {
      books,
    },
  }
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
          </section>

          <section className="section">
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
