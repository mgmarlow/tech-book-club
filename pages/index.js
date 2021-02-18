import Image from 'next/image'
import Link from 'next/link'
import SEO from '../components/SEO'
import Footer from '../components/Footer'

const AboutSection = () => {
  return (
    <section className="section is-medium">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column">
            <div className="content is-medium">
              <h2>What's it all about?</h2>
              <p>todos!</p>
            </div>
          </div>

          <div className="column">todo book image here</div>
        </div>
      </div>
    </section>
  )
}

const AddBookSection = () => {
  return (
    <section className="section is-medium">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column">
            <Image src="/assets/book_lover_flat.svg" height={500} width={500} />
          </div>

          <div className="column is-half-desktop is-two-thirds-tablet">
            <div className="content is-medium">
              <h2>Want to add a book?</h2>
              <p>
                Submit a pull request to{' '}
                <a href="#">
                  <code>books.json</code>
                </a>
                . Here are some guidelines for picking books well-suited to the
                club:
              </p>
              <ul>
                <li>
                  <p>choose books that relate to software development</p>
                </li>
                <li>
                  <p>
                    consider books that are available on{' '}
                    <a href="https://learning.oreilly.com/home/">O'Reilly</a>
                  </p>
                </li>
                <li>
                  <p>
                    read the table of contents to get an idea for the outline
                  </p>
                </li>
              </ul>
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
            <button className="button has-text-weight-bold is-primary">
              Join the discord
            </button>

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
        <AboutSection />
        <AddBookSection />
      </main>

      <Footer />
    </>
  )
}
