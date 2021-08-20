import Book from './Book'
import Carousel from './Carousel'
import { useMediaQuery } from '../hooks/useMediaQuery'

const MobileBookList = ({ books }) => {
  // #slice here breaks reusability
  const bookItems = books.slice(0, 2).map(book => (
    <li className="column is-3-tablet is-6-mobile" key={book.id}>
      <Book key={book.id} book={book} />
    </li>
  ))

  return <ul className="columns is-mobile is-multiline">{bookItems}</ul>
}

function DesktopBookList({ books }) {
  const bookItems = books.map(book => <Book key={book.id} book={book} />)

  return <Carousel>{bookItems}</Carousel>
}

export default function BookList({ books }) {
  const isDesktop = useMediaQuery('(min-width: 767px)')

  return isDesktop ? (
    <DesktopBookList books={books} />
  ) : (
    <MobileBookList books={books} />
  )
}
