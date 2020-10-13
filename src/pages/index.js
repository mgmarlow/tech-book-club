import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

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
          Summary
          URL
        }
      }
    }
  }
`

const Feature = ({ book }) => (
  <section className="section is-large">
    <div className="content is-large">
      <h1>Currently Reading</h1>

      <hr />

      {book ? (
        <div className="columns">
          <div className="column is-one-third">
            <div>
              <p>
                <Link
                  className="has-text-weight-bold has-text-dark"
                  target="__blank"
                  to={book.URL}
                >
                  <i>{book.Title}</i>
                </Link>
              </p>
              <p>by {book.Author}</p>
            </div>
          </div>
          <div className="column">
            <blockquote>{book.Summary}</blockquote>
          </div>
        </div>
      ) : (
        <p>Voting in progress</p>
      )}
    </div>
  </section>
)

const IndexPage = ({ data }) => {
  const books = data.allBook.edges.map(edge => edge.node)
  const current = books.find(book => book.Status === 'In Progress')

  return (
    <Layout>
      <SEO title="Home" />

      {/* <Feature book={current} /> */}

      <section className="section mb-6">
        <div className="columns">
          <div className="column is-4">
            <div>Home</div>
            <div>Books</div>
            <div>Resources</div>
          </div>
          <div className="column is-6">
            <h1 className="title is-size-1">Tech Book Club</h1>
            <div className="content is-medium">
              <h2>Let's talk about what we've read.</h2>
              <p>
                Tech Book Club is an opportunity for us to read, practice, and
                learn new techniques to better our craft. Join our meetings
                every other <b>Monday</b> at <b>7:00PM PST</b>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
