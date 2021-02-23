import classnames from 'classnames'
import Link from 'next/link'
import SEO from '../components/SEO'
import Footer from '../components/Footer'
import { DISCORD_INVITE_URL } from '../constants/env'
import styles from './index.module.sass'

const AboutSection = () => {
  return (
    <section className="section is-large">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column is-half-desktop is-two-thirds-tablet">
            <div className="content is-medium">
              <h2>What's it all about?</h2>
              <p>
                Learning is more fun with friends. Tech Book Club is an
                opportunity to apply theory, challenge ideas, and study in a
                friendly environment.
              </p>
              <p>
                Join our weekly discussion sessions held on{' '}
                <strong>Wednesdays at 4:30 PST</strong>. All you need to get
                started is a few questions and a copy of the book.
              </p>
            </div>
          </div>

          <div className="column has-text-centered">
            <img src="/assets/book_lover_flat.svg" height={500} width={500} />
          </div>
        </div>
      </div>
    </section>
  )
}

const AddBookSection = () => {
  return (
    <section className="section is-large is-mobile">
      <div className="container">
        <div className="columns is-vcentered">
          {/* Flip the image order on mobile to prevent back-to-back images */}
          <div className="column is-hidden-mobile">
            <img src="/assets/bookshelves.svg" height={500} width={500} />
          </div>

          <div className="column is-half-desktop is-two-thirds-tablet">
            <div className="content is-medium">
              <h2>Want to suggest a book?</h2>
              <p>
                Submit a pull request to{' '}
                <a href="https://github.com/mgmarlow/tech-book-club/blob/master/lib/books.json">
                  books.json
                </a>
                . Here are some guidelines:
              </p>
              <ul>
                <li>
                  <p>
                    suggest books you <em>want</em> to read, not ones you{' '}
                    <em>should</em> read
                  </p>
                </li>
                <li>
                  <p>choose books that relate to software development</p>
                </li>
                <li>
                  <p>
                    consider free books, or ones available on{' '}
                    <a href="https://learning.oreilly.com/home/">O'Reilly</a>
                  </p>
                </li>
              </ul>
            </div>

            {/* Flip the image order on mobile to prevent back-to-back images */}
            <div className="column is-hidden-tablet has-text-centered">
              <img src="/assets/bookshelves.svg" height={500} width={500} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Hero = () => {
  return (
    <section className="hero is-large">
      <div className="hero-body">
        <div className="container">
          <p className="title is-size-1-desktop">
            Let's talk about what we're reading.
          </p>
          <p className="subtitle">
            Join a group of engineers and better your software skills.
          </p>

          <div>
            <Link href={DISCORD_INVITE_URL}>
              <button className="button has-text-weight-bold is-primary">
                Join the discord
              </button>
            </Link>

            <Link href="/books">
              <button className="button is-ghost has-text-dark">
                Browse the books
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <SEO />

      <main>
        <Hero />
        <hr className={classnames('is-hidden-touch', styles.hr)} />
        <AboutSection />
        <hr className={classnames('is-hidden-touch', styles.hr)} />
        <AddBookSection />
      </main>

      <Footer />
    </>
  )
}
