import Link from 'next/link'
import Book from '../components/Book'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import SEO from '../components/SEO'
import { DISCORD_INVITE_URL } from '../constants/env'
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

function ToggleSection({ className, header, children }) {
  return (
    <details className={className}>
      <summary>
        <span className="has-text-weight-bold">{header}</span>
      </summary>

      <div className="py-2">{children}</div>
    </details>
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

        <ToggleSection className="my-2" header="What goes into a discussion?">
          <p>
            tech book club is built on community discussions. Here are some tips
            to help you contribute to our weekly sessions:
          </p>
          <ul>
            <li>Don't summarize the reading, we all read the chapter!</li>
            <li>
              Come prepared with a questions you'd like to ask the group, or a
              code snippet you'd like to demo.
            </li>
            <li>
              Expand on the book content by applying it to your personal
              experience. Think about where you've seen the techniques work or
              fail, alternatives that you've considered, or examples of how
              you've applied similar methods.
            </li>
            <li>
              Note areas where the author explained something well, or wrote
              something that resonated with you.
            </li>
          </ul>
        </ToggleSection>

        <ToggleSection
          className="my-2"
          header="Can I still attend if I missed the reading?"
        >
          <p>
            Yes! Your contributions are still valuable even if you missed a
            chapter or two.
          </p>
        </ToggleSection>

        <ToggleSection
          className="my-2"
          header="There are billions of note-taking apps. What do the cool kids
            use?"
        >
          <p>
            <a href="https://notion.so/">Notion</a> is my personal favorite, but
            some other great alternatives are{' '}
            <a href="https://obsidian.md/">Obsidian</a>,{' '}
            <a href="https://foambubble.github.io/foam/">Foam</a>, and{' '}
            <a href="https://www.zettlr.com/">Zettlr</a>.
          </p>
        </ToggleSection>
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
              Suggest books you <em>want</em> to read, not ones you{' '}
              <em>should</em> read.
            </p>
          </li>
          <li>
            <p>
              Choose books that relate to the field of software development.
              Books don't need to be about programming, but they should be
              applicable to the field.
            </p>
          </li>
          <li>
            <p>
              Help the voting process by listing a few reasons you want to read
              the book.
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}
