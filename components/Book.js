import classnames from 'classnames'
import Image from 'next/image'
import styles from './Book.module.sass'

const FALLBACK_URL = 'https://bulma.io/images/placeholders/320x480.png'

export default function Book({ book }) {
  return (
    <div className={classnames('is-inline-block', styles.book)}>
      <div className="has-text-centered">
        <Image height={240} width={160} src={book.img || FALLBACK_URL} />
      </div>

      <div className="content is-small">
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
