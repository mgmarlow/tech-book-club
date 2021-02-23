import classnames from 'classnames'
import { useEffect, useState, Children } from 'react'
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
  const [index, { numPages, increment, decrement }] = useVisibleBooks(
    5,
    Children.count(children),
  )

  const showNav = numPages > 0

  // TODO: Consider using width=% if we want a number shown different from 5.
  const contents = Children.map(children, child => {
    return <li className="column is-one-fifth">{child}</li>
  })

  return (
    <div>
      {/* TODO: make these look nicer! */}
      {showNav && <button onClick={decrement}>prev</button>}

      <div className="is-clipped">
        <ul
          style={{ transform: `translateX(${index * -100}%)` }}
          className={classnames('columns is-mobile', styles.transition)}
        >
          {contents}
        </ul>
      </div>

      {showNav && <button onClick={increment}>next</button>}
    </div>
  )
}
