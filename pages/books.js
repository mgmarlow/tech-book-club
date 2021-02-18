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

// TODO:
export default function Books({ books }) {
  return (
    <Layout>
      <main>
        <ul>
          {books.map(book => (
            <li>{book.title}</li>
          ))}
        </ul>
      </main>
    </Layout>
  )
}
