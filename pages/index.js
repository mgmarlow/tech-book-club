import Link from 'next/link'
import SEO from '../components/SEO'
import Footer from '../components/Footer'
import { DISCORD_INVITE_URL } from '../constants/env'
import Nav from '../components/Nav'
import Book from '../components/Book'
import { getAllBooks } from '../lib/books'

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
          <AboutSection />
          <AddBookSection />
          <FAQ />
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
            <h1>tech book club</h1>

            {currentBook ? (
              <p>
                Currently reading: <em>{currentBook.title}</em>
              </p>
            ) : (
              <p>Let's talk about what we're reading.</p>
            )}

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

        {currentBook && (
          <div className="column is-one-quarter is-hidden-touch">
            <Book book={currentBook} />
          </div>
        )}
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section className="section">
      <div className="content is-medium">
        <h2>What's it all about?</h2>
        <p>
          Learning is more fun with friends. Book club is an opportunity to
          apply theory, challenge ideas, and study in a friendly environment.
        </p>
        <p>
          Join our weekly discussion sessions held on{' '}
          <strong>Wednesdays at 4:30 PST</strong>. All you need to get started
          is a few questions and a copy of the book.
        </p>
      </div>
    </section>
  )
}

function FAQ() {
  return (
    <section className="section">
      <div className="content is-medium">
        <h2 id="faq">FAQ</h2>

        <div className="mt-3 mb-6">
          <h5>What goes into a discussion?</h5>
          <p>
            We begin discussions with a brief (5-10 minutes) summary of the
            reading. Afterwards, we ask questions aimed at improving our
            understanding of the author's main points.
          </p>
          <p>
            For more technical books, we use{' '}
            <a href="https://gist.github.com/">gists</a> to review code and
            discuss practical applications. Check out{' '}
            <a href="https://gist.github.com/mgmarlow/1bc04546aba5e71508fb5a916560e5e1">
              some
            </a>{' '}
            <a href="https://gist.github.com/mgmarlow/b2cc4a07349ed1e67b44f0f17a815a0b">
              examples
            </a>{' '}
            from past discussions.
          </p>
        </div>

        <div className="my-6">
          <h5>Can I still attend the discussion if I missed the reading?</h5>
          <p>
            Yes! Your contributions are still valuable even if you missed a
            chapter or two.
          </p>
        </div>

        <div className="my-6">
          <h5>
            A billion note-taking apps came out in 2020. What do the cool kids
            use?
          </h5>
          <p>
            <a href="https://notion.so/">Notion</a> is my personal favorite, but
            some other great alternatives are{' '}
            <a href="https://obsidian.md/">Obsidian</a>,{' '}
            <a href="https://foambubble.github.io/foam/">Foam</a>, and{' '}
            <a href="https://www.zettlr.com/">Zettlr</a>.
          </p>
        </div>
      </div>
    </section>
  )
}

function AddBookSection() {
  return (
    <section className="section">
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
    </section>
  )
}
