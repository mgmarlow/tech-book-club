import Image from 'next/image'

const FAQSection = () => {
  return (
    <section className="section has-background-dark is-medium">
      <div className="container">
        <div className="content is-medium has-text-white">
          <h2 className="has-text-white">FAQ</h2>

          <div className="columns">
            <div className="column is-two-thirds">
              <h3 className="has-text-white">
                Can I attend if I didn't read the material?
              </h3>
              <p>
                Yes! Please attend the discussion, even if you didn't have time
                to read the assigned material. Your contributions are still
                valuable!
              </p>

              <h3 className="has-text-white">
                Can I skip leading a discussion?
              </h3>
              <p>Absolutely. Discussion leaders are volunteers.</p>

              <h3 className="has-text-white">
                What notetaking apps do the cool kids use?
              </h3>
              <p>
                <a href="https://notion.so">Notion</a> is my personal favorite,
                but some other great alternatives are{' '}
                <a href="https://obsidian.md">Obsidian</a>,{' '}
                <a href="https://foambubble.github.io/foam/">Foam</a>, and{' '}
                <a href="https://www.zettlr.com/">Zettlr</a>.
              </p>
            </div>
          </div>
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
      </div>
    </section>
  )
}

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

      <FAQSection />
      <AddBookSection />
    </main>
  )
}
