import Layout from '../components/Layout'
import { getAllBooks } from '../lib/books'
import BookList from '../components/BookList'
import { BOOK_REQUEST_URL, DISCUSSIONS_URL } from '../constants/env'

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
      <main className="pb-6">
        <div className="container">
          <section className="section">
            <div className="content is-medium">
              <h2>Completed</h2>

              <p>
                Take a look at what we've been up to. More{' '}
                <a href={DISCUSSIONS_URL}>discussion notes</a> coming soon!
              </p>
            </div>

            <BookList books={completedBooks} />
          </section>

          <section className="section">
            <div className="content is-medium">
              <h2>Up next</h2>

              <p>
                We use this list to vote on what we're reading next. Want to add
                a book? Fill out the{' '}
                <a href={BOOK_REQUEST_URL}>book request form</a>.
              </p>
            </div>

            <BookList books={newBooks} />
          </section>
        </div>
      </main>
    </Layout>
  )
}
