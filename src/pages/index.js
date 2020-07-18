import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import BookList, { BookListItem } from '../components/bookList'

const Container = ({ children }) => (
  <div style={{ margin: '3rem 0' }}>{children}</div>
)

export const query = graphql`
  query BookQuery {
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

const Books = ({ books }) => {
  const current = books.find(book => book.Status === 'In Progress')
  const completed = books.filter(book => book.Status === 'Completed')

  const next = current && current['Completed_On']

  return (
    <div>
      {next && (
        <div
          style={{
            padding: '1rem',
            margin: '2rem 0',
            backgroundColor: '#eee',
          }}
        >
          <h4 style={{ margin: '0' }}>
            <span role="img" aria-label="calendar">
              📅
            </span>{' '}
            Next Meeting: {next}
          </h4>
        </div>
      )}

      {/* <h2>Books</h2> */}
      {/* <hr /> */}

      {current && (
        <div style={{ margin: '1rem 0 2rem 0' }}>
          <h3>Currently Reading</h3>
          <BookListItem book={current} />
        </div>
      )}

      <div style={{ margin: '2rem 0' }}>
        <h3>Completed</h3>
        <BookList books={completed} />
      </div>
    </div>
  )
}

const IndexPage = ({ data }) => {
  const books = data.allBook.edges.map(edge => edge.node)
  return (
    <Layout>
      <SEO title="Home" />

      <p style={{ fontSize: '20px' }}>
        Let's talk about what we've been reading.
      </p>

      <Container>
        <Books books={books} />
      </Container>

      {/* <Container>
        <h2>Resources</h2>
        <hr />
        <ul>
          <li>
            <a href="https://airtable.com/shrOb5oCTEnakggR4">
              Add a book to the reading list
            </a>
          </li>
        </ul>
      </Container> */}
    </Layout>
  )
}

export default IndexPage
