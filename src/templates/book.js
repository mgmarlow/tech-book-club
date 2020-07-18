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
      <section className="section">
        <div className="content is-large">
          <h1>{book.Title}</h1>
          <p className="is-size-3 subtitle">by {book.Author}</p>
        </div>
      </section>

      <section className="section">
        <div className="content is-large mb-6">
          <div className="columns">
            <div className="column is-one-third">
              <h3>Metadata</h3>
              <hr />
              <a href={book.URL}>Get the book here.</a>
            </div>
            {book.Summary && (
              <div className="column">
                <h3>Description</h3>
                <hr />
                <p>{book.Summary}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default BookTemplate
