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
            In general, sessions will begin with a question or comment from a
            voluntary leader, aimed at inspiring conversation.
          </p>
          <ul>
            <li>
              Discussions should be aimed at learning and discussing new ideas
            </li>
            <li>
              Avoid talking about problems specific to work to avoid making the
              book club a work meeting
            </li>
            <li>
              Feel free to reference code or visual aids as long as everyone can
              participate and understand the material
            </li>
          </ul>
        </div>
      </section>

      <section className="section pl-0 pb-2">
        <div className="content is-medium">
          <h2>Want to add a book?</h2>
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
