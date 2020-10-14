import React from 'react'
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

const IndexPage = ({ data }) => {
  // TODO: Move these to the /books tab
  // const books = data.allBook.edges.map(edge => edge.node)
  // const current = books.find(book => book.Status === 'In Progress')

  return (
    <Layout>
      <SEO title="Home" />

      <section>
        <h1 className="title is-size-1">Tech Book Club</h1>

        <div className="content is-medium">
          <h2>Let's talk about what we've read.</h2>
          <p>
            Tech Book Club is an opportunity for us to read, practice, and learn
            new techniques to better our craft. Join our meetings every other{' '}
            <b>Monday</b> at <b>7:00PM PST</b>.
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
