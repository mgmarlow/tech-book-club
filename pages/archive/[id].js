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
  const articleData = getArticleData(params.id)
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
      <SEO />

      <div className="content is-medium">
        {articleData.title}
        {articleData.date}
      </div>
    </>
  )
}
