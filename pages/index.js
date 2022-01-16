import classnames from 'classnames'
import Link from 'next/link'
import Book from '../components/Book'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import SEO from '../components/SEO'
import BookList from '../components/BookList'
import { getAllBooks } from '../lib/books'
import { CONTACT_US_URL } from '../constants/env'

export async function getStaticProps() {
  const currentBook = getAllBooks().find(book => book.state === 'in_progress')

  return {
    props: {
      currentBook,
    },
  }
}

export default function Home({ currentBook, articleData }) {
  return (
    <>
      <Nav />
      <SEO />

      <main>
        <div className="container is-thin mb-6">
          <Hero currentBook={currentBook} />
          <RecentEpisodes />
          <Story />
          <ComingUpNext />
        </div>
      </main>

      <Footer />
    </>
  )
}

function RecentEpisodes() {
  return (
    <section className="section" id="podcast">
      <div className="content is-medium">
        <h2 className="is-header-2">Recent Episodes</h2>
      </div>
      todo
    </section>
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
              <blockquote className="has-background-white is-size-6">
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

function ComingUpNext() {
  return (
    <section className="section" id="books">
      <div className="content is-medium">
        <h2 className="is-header-2">Coming up next</h2>
        <p>Take a look at what's in store for the future.</p>
      </div>

      <BookList books={getAllBooks().filter(b => b.state === 'new')} />
    </section>
  )
}

function Story({ className }) {
  return (
    <section className={classnames(className, 'section')} id="story">
      <div className="content is-medium">
        <h2>The Story</h2>
        <p>
          Tech book club started in 2020 to help reestablish a sense of
          community when all things went to crazy town. We were a small group of
          software engineers deeply interested in learning more about our craft.
        </p>
        <p>
          What we discovered in our weekly meetings is that active,
          community-driven discussion is so much more satisfying than
          independent study. Listening to other opinions and experiences adds a
          new level of insight to already great computer science literature.
        </p>
        <p>
          After the book club disbanded, Nolan and I decided to keep the
          discussion alive in the form of this podcast. We hope you find our
          discussions entertaining. If you'd like to leave feedback,
          <a href={CONTACT_US_URL}> contact us</a>.
        </p>
      </div>
    </section>
  )
}
