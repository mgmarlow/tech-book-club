import Footer from '../../components/Footer'
import Nav from '../../components/Nav'
import SEO from '../../components/SEO'
import { getArticleData, getArticleIds } from '../../lib/articles'

export async function getStaticPaths() {
  const paths = getArticleIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const articleData = await getArticleData(params.id, true)

  return {
    props: {
      articleData,
    },
  }
}

export default function Article({ articleData }) {
  return (
    <>
      <Nav />
      <SEO title={articleData.title} description={articleData.description} />

      <div className="container is-thin">
        <section className="section">
          <div className="content is-medium">
            <h1>{articleData.title}</h1>

            <p className="subtitle is-size-6">
              <em>
                Posted: <time>{articleData.date}</time> by {articleData.author}
              </em>
            </p>

            <div
              className="py-4"
              dangerouslySetInnerHTML={{ __html: articleData.contentHtml }}
            />
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}
