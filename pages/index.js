import classnames from 'classnames'
import Book from '../components/Book'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import SEO from '../components/SEO'
import { getAllBooks } from '../lib/books'
import styles from './index.module.sass'

export async function getStaticProps() {
  const currentBook = getAllBooks().find(book => book.state === 'in_progress')

  return {
    props: {
      currentBook,
    },
  }
}

export default function Home({ currentBook }) {
  return (
    <>
      <Nav />
      <SEO />

      <main>
        <div className="container is-thin mb-6">
          <Hero currentBook={currentBook} />
          <NewsletterForm />
        </div>
      </main>

      <Footer />
    </>
  )
}

function Hero({ currentBook }) {
  return (
    <section className="section">
      <div className="columns">
        <div className="column">
          <div className="content is-medium">
            <h1 className="is-size-1">tech book club</h1>

            <>
              <p>
                Currently reading: <em>{currentBook.title}</em>
              </p>
              <blockquote className="has-background-white">
                <em>{currentBook.summary}</em>
              </blockquote>
            </>
          </div>
        </div>

        {currentBook && (
          <div className="column is-one-quarter is-hidden-touch">
            <Book book={currentBook} />
          </div>
        )}
      </div>
    </section>
  )
}

function NewsletterForm() {
  return (
    <section className="section" id="newsletter">
      <div className="content is-medium">
        <h2>Join the newsletter</h2>

        <p>
          <b>tech book club</b> explores classic computer science literature and
          applies it to the everyday craft. Each newsletter is packed full of
          notes, code samples, and analysis related to that month's book.
        </p>

        <p>Read along or just tune in to learn something new:</p>

        <div>
          <form
            action="https://buttondown.email/api/emails/embed-subscribe/techbookclub"
            method="post"
            target="popupwindow"
            onSubmit={() =>
              window.open(
                'https://buttondown.email/techbookclub',
                'popupwindow',
              )
            }
            className="field has-addons"
          >
            <div className={classnames('control', styles.newsletterInput)}>
              <input
                placeholder="your@email.com"
                className="input is-medium"
                type="email"
                name="email"
                id="bd-email"
              />
            </div>
            <input type="hidden" value="1" name="embed" />
            <div className="control">
              <input
                className="button is-primary is-medium"
                type="submit"
                value="Subscribe"
              />
            </div>
          </form>

          <p className="is-size-6 has-text-centered">
            No spam, no trackers, unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  )
}
