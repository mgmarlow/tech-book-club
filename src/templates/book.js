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
        <h1>{book.Title}</h1>
        <p>by {book.Author}</p>
      </div>
      {book.Summary && (
        <section>
          <h2>Summary</h2>
          <blockquote>{book.Summary}</blockquote>
        </section>
      )}
    </Layout>
  )
}

export default BookTemplate
