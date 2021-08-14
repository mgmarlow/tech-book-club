import Book from './Book'
import Carousel from './Carousel'

export default function BookList({ books }) {
  const bookItems = books.map(book => <Book key={book.id} book={book} />)

  return <Carousel>{bookItems}</Carousel>
}
