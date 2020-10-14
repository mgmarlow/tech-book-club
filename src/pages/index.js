import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />

      <section className="section pl-0 pt-0 pb-2">
        <div className="content is-medium">
          <h2>Let's talk about what we've read.</h2>
          <p>
            Tech Book Club is an opportunity for us to read, practice, and learn
            new techniques to better our craft. Join our meetings every other{' '}
            <b>Monday</b> at <b>7:00PM PST</b>.
          </p>
        </div>
      </section>

      <section className="section pl-0 pb-2">
        <div className="content is-medium">
          <h2>What goes into a discussion?</h2>
          <p>
            Book club discussions are aimed at asking questions rather than
            summarizing the reading. Keep these questions in mind when reading:
          </p>

          <ul>
            <li>What is the central idea of the material?</li>
            <li>How does the material affect our practice?</li>
            <li>Do you agree or disagree with the author's perspective?</li>
            <li>
              What arguments support or detract from the material's premise?
            </li>
          </ul>

          <p>
            An assigned leader kicks off a session with a question to spark
            discussion. New leaders are assigned every session to help guide
            participation from all club members.
          </p>
        </div>
      </section>

      <section className="section pl-0 pb-2">
        <div className="content is-medium">
          <h2>Want to add a book?</h2>
          <p>
            Here are some guidelines for choosing a book (or article, paper,
            talk):
          </p>
          <ul>
            <li>
              Choose books that relate to software development: either the
              practice of programming itself or techniques and ideas that play a
              role in our careers.
            </li>
            <li>
              Consider choosing books that are available on{' '}
              <a href="https://learning.oreilly.com/home/">O'Reilly</a>.
            </li>
            <li>
              It's helpful to consider what chapters of a book you'd like to
              focus on to guide the structure of discussion sessions.
            </li>
          </ul>
          <p>
            Fill out{' '}
            <a
              className="has-text-primary"
              href="https://airtable.com/shrzcKGXYVJOqeJRD"
            >
              this form
            </a>{' '}
            to request a book.
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
