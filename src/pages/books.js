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

/* <Container>
        <h2>Resources</h2>
        <hr />
        <ul>
          <li>
            <a href="https://airtable.com/shrOb5oCTEnakggR4">
              Add a book to the reading list
            </a>
          </li>
        </ul>
      </Container> */

const BooksPage = ({ data }) => {
  const books = data.allBook.edges.map(edge => edge.node)

  return (
    <Layout>
      <SEO title="All Books" />

      <section className="section">
        <div className="content is-medium">
          <h1 className="is-marginless">All Books</h1>

          <hr />

          <BookList books={books} />
        </div>
      </section>
    </Layout>
  )
}

export default BooksPage
