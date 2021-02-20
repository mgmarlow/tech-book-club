import classnames from 'classnames'
import styles from './Book.module.sass'

const FALLBACK_URL = 'https://bulma.io/images/placeholders/320x480.png'

export default function Book({ className, book }) {
  return (
    <div className={className}>
      <div className="has-text-centered">
        <figure className="image is-2by3">
          <img src={book.img || FALLBACK_URL} alt="cover image" />
        </figure>
      </div>

      <div className="content is-small py-1">
        <h5 title={book.title} className={classnames('m-0', styles.overflow)}>
          <i>{book.title}</i>
        </h5>

        <p className={styles.overflow} title={book.author}>
          {book.author}
        </p>
      </div>
    </div>
  )
}
