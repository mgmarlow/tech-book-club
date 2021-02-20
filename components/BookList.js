import Book from './Book'
import Carousel from './Carousel'

export default function BookList({ books }) {
  // TODO: Carousel is desktop-only, or make 3 books for mobile
  return (
    <Carousel>
      {books.map(book => (
        <Book key={book.id} book={book} />
      ))}
    </Carousel>
  )
}
