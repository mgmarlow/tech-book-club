import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import BookList from '../components/BookList'

const Container = ({ children }) => (
  <div style={{ margin: '3rem 0' }}>{children}</div>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <BookList />
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

export default IndexPage
