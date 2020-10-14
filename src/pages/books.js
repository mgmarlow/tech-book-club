import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import BookList from '../components/bookList'

export const query = graphql`
  query AllBooksQuery {
    allBook {
      edges {
        node {
          id
          Title
          Author
          Status
          Completed_On
          URL
        }
      }
    }
  }
`

const BookSection = ({ items, title }) => (
  <section className="mb-6">
    <div className="content is-medium">
      <h2 className="is-marginless is-size-3">{title}</h2>
      <BookList books={items} />
    </div>
  </section>
)

const BooksPage = ({ data }) => {
  const books = data.allBook.edges.map(edge => edge.node)
  const reading = books.filter(book => book.Status === 'In Progress')
  const completed = books.filter(book => book.Status === 'Completed')
  const shelved = books.filter(book => book.Status === 'New')

  return (
    <Layout>
      <SEO title="Books" />

      <BookSection title="Reading" items={reading} />
      <BookSection title="Completed" items={completed} />
      <BookSection title="Shelved" items={shelved} />
    </Layout>
  )
}

export default BooksPage
