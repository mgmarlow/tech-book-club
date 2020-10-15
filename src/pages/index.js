import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />

      <section className="section pl-0 pt-0 pb-2">
        <div className="content is-medium">
          <h2>Let's talk about what we're reading.</h2>
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
            Tech Book Club discussions are focused on asking questions rather
            than summarizing the reading. Keep the following in mind when
            reading:
          </p>

          <ul>
            <li>What is the central idea of the material?</li>
            <li>What arguments support or detract from the material?</li>
            <li>How does the material affect our craft?</li>
            <li>Do you agree or disagree with the author's perspective?</li>
          </ul>

          <p>
            Discussion leaders kick off each session with a question to spark
            conversation. New leaders are assigned every session to help
            encourage participation from all club members.
          </p>
        </div>
      </section>

      <section className="section pl-0 pb-2">
        <div className="content is-medium">
          <h2>Want to add a book?</h2>
          <p>
            Take a look at the{' '}
            <Link className="has-text-primary" to="/books">
              book list
            </Link>{' '}
            to see if your book has already been added. Here are some guidelines
            when choosing a book (or article, paper, talk):
          </p>
          <ul>
            <li>
              Choose books that relate to software development, whether that be
              the practice of programming itself or techniques that play a role
              in our careers.
            </li>
            <li>
              Consider choosing books that are available on{' '}
              <a href="https://learning.oreilly.com/home/">O'Reilly</a>.
            </li>
            <li>
              Consider how you might structure the book into discussion
              sessions. Will there be three sections for three parts, or will we
              pick and choose specific chapters?
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
