import classnames from 'classnames'
import styles from './Book.module.sass'

export default function Book({ className, book }) {
  return (
    <a href={book.url}>
      <div className={classnames(className, styles.pointer)}>
        <div className="has-text-centered">
          <figure className="image is-2by3">
            <img src={book.img || FALLBACK_URL} alt={book.title} />
          </figure>
        </div>

        <div className="content is-small py-1">
          <h5 title={book.title} className={classnames('m-0', styles.overflow)}>
            <i>{book.title}</i>
          </h5>

          <p
            className={classnames(styles.overflow, 'has-text-grey')}
            title={book.author}
          >
            {book.author}
          </p>
        </div>
      </div>
    </a>
  )
}
