import Image from 'next/image'
import classnames from 'classnames'
import styles from './Book.module.sass'

export default function Book({ className, book }) {
  return (
    <a href={book.url}>
      <div className={classnames(className, styles.pointer)}>
        <div className="has-text-centered">
          <Image src={book.img} height="280" width="190" alt={book.title} />
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
