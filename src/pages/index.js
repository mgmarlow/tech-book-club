import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import BookList from '../components/BookList'

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

const IndexPage = ({ data }) => {
  const books = data.allBook.edges.map(edge => edge.node)
  return (
    <Layout>
      <SEO title="Home" />

      <p style={{ fontSize: '20px' }}>
        Let's get together to talk about what we've been reading.
      </p>

      <Container>
        <BookList books={books} />
      </Container>

      <Container>
        <h2>Resources</h2>
        <hr />
        <ul>
          <li>
            <a href="https://airtable.com/shrOb5oCTEnakggR4">
              Add a book to the reading list
            </a>
          </li>
        </ul>
      </Container>
    </Layout>
  )
}

export default IndexPage
