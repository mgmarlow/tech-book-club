import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export const query = graphql`
  query($id: String!) {
    book(id: { eq: $id }) {
      Title
      Author
      Summary
      URL
    }
  }
`

const DESCRIPTION_MAX = 200

const Summary = ({ summary }) => {
  const [showAll, setShowAll] = React.useState(false)
  const needsShowAll = summary.length > DESCRIPTION_MAX

  return (
    <>
      <p>
        {summary.substring(0, showAll ? summary.length : DESCRIPTION_MAX)}
        {needsShowAll && !showAll && '...'}
      </p>

      {needsShowAll && (
        <button type="button" onClick={() => setShowAll(!showAll)}>
          {showAll ? 'less' : 'more'}
        </button>
      )}
    </>
  )
}

const useComments = commentsRef => {
  React.useEffect(() => {
    const instance = commentsRef.current

    if (!instance) {
      return
    }

    const script = document.createElement('script')

    script.setAttribute('src', 'https://utteranc.es/client.js')
    script.setAttribute('async', true)
    script.setAttribute('repo', 'mgmarlow/comments')
    script.setAttribute('issue-term', 'pathname')
    script.setAttribute('theme', 'dark-blue')
    script.setAttribute('crossorigin', 'anonymous')

    instance.appendChild(script)
  }, [commentsRef])
}

const BookTemplate = ({ data: { book } }) => {
  const commentsRef = React.useRef(null)

  useComments(commentsRef)

  return (
    <Layout>
      <section>
        <div className="content">
          <h2 className="is-size-4">{book.Title}</h2>
          <h3 className="is-marginless is-size-5">by {book.Author}</h3>
          <div className="mt-5">
            <p>
              <a className="has-text-primary" href={book.URL}>
                Get the book
              </a>
            </p>

            {book.Summary && (
              <>
                <h3>Synopsis</h3>
                <Summary summary={book.Summary} />
              </>
            )}
          </div>
        </div>
      </section>

      <div ref={commentsRef} className="mt-6" />
    </Layout>
  )
}

export default BookTemplate
