import Link from 'next/link'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import SEO from '../components/SEO'
import { getArticleDataByDate } from '../lib/articles'
import styles from './archive.module.sass'

export async function getStaticProps() {
  const articleData = await getArticleDataByDate()

  return {
    props: {
      articleData,
    },
  }
}

export default function Archive({ articleData }) {
  const previews = articleData.map(a => (
    <Link href={`/archive/${a.id}`} key={a.id}>
      <li className="is-clickable">
        <span>
          {a.date} <strong>{a.title}</strong>
        </span>
      </li>
    </Link>
  ))

  return (
    <>
      <Nav />
      <SEO />

      <main className={styles.container}>
        <div className="container is-thin">
          <section className="section">
            <div className="content is-medium">
              <h1>Archive</h1>

              <ul>{previews}</ul>
            </div>
          </section>
        </div>

        <div className="has-text-centered py-6">
          <img width="400" height="400" src="/assets/book_lover_flat.svg" />
        </div>
      </main>

      <Footer />
    </>
  )
}
