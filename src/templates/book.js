import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export const query = graphql`
  query($id: String!) {
    book(id: { eq: $id }) {
      Title
      Author
      Summary
      URL
    }
  }
`

const BookTemplate = ({ data: { book } }) => {
  return (
    <Layout>
      <div>
        <h1 className="title">{book.Title}</h1>
        <h2 className="subtitle">by {book.Author}</h2>
      </div>
      {book.Summary && (
        <section className="section">
          <div className="content">
            <h3>Summary</h3>
            <blockquote>{book.Summary}</blockquote>
          </div>
        </section>
      )}
    </Layout>
  )
}

export default BookTemplate
