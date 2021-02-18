import classnames from 'classnames'
import Image from 'next/image'
import styles from './Book.module.sass'

export default function Book({ book }) {
  return (
    <div className={classnames('is-inline-block', styles.book)}>
      <div className="has-text-centered">
        <Image
          height={240}
          width={160}
          src="https://bulma.io/images/placeholders/320x480.png"
        />
      </div>

      <div className="content is-small">
        <h5 className={classnames('m-0', styles.title)}>
          <i>{book.title}</i>
        </h5>

        <p>{book.author}</p>
      </div>
    </div>
  )
}
