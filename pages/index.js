import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container">
            <p className="title">Let's talk about what we're reading.</p>
            <p className="subtitle">Better your software engineering skills.</p>
          </div>
        </div>
      </section>

      <div className="container">
        <section className="section is-medium">
          <div className="columns is-vcentered">
            <div className="column">
              <Image
                src="/assets/book_lover_flat.svg"
                height={500}
                width={500}
              />
            </div>

            <div className="column is-half">
              <div className="content is-medium">
                <h2>Want to add a book?</h2>
                <p>
                  Submit a pull request to{' '}
                  <a href="#">
                    <code>books.json</code>
                  </a>{' '}
                  to. Here are some guidelines for picking books well-suited to
                  the club:
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
        </section>
      </div>
    </main>
  )
}
