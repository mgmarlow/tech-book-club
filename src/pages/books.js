import React from 'react'
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

const BooksPage = ({ data }) => {
  const books = data.allBook.edges.map(edge => edge.node)

  return (
    <Layout>
      <SEO title="All Books" />
      <h1>All Books</h1>
      <BookList books={books} />
    </Layout>
  )
}

export default BooksPage
