import { useEffect, useState, Children } from 'react'
import classnames from 'classnames'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import styles from './Carousel.module.sass'

const useVisibleBooks = (numVisible, numChildren) => {
  const numPages = Math.ceil(numChildren / numVisible) - 1
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(0)
  }, [numChildren])

  const increment = () => {
    // Clamp value to # of pages
    const next = Math.min(index + 1, numPages)
    setIndex(next)
  }

  const decrement = () => {
    const next = Math.max(index - 1, 0)
    setIndex(next)
  }

  return [index, { numPages, increment, decrement }]
}

export default function Carousel({ children }) {
  // TODO: Update this to set # elements via props
  const [index, { numPages, increment, decrement }] = useVisibleBooks(
    3,
    Children.count(children),
  )

  const showNav = numPages > 0

  // Consider using width=% for numbers different from 5.
  const contents = Children.map(children, child => {
    return <li className="column is-one-third">{child}</li>
  })

  return (
    <div className={styles.container}>
      {showNav && (
        <FiChevronLeft
          className={classnames(styles.icon, {
            [styles.disabled]: index === 0,
          })}
          onClick={decrement}
        />
      )}

      <div className="is-clipped">
        <ul
          style={{ transform: `translateX(${index * -100}%)` }}
          className={classnames('columns is-mobile', styles.transition)}
        >
          {contents}
        </ul>
      </div>

      {showNav && (
        <FiChevronRight
          className={classnames(styles.icon, {
            [styles.disabled]: index === numPages,
          })}
          onClick={increment}
        />
      )}
    </div>
  )
}
