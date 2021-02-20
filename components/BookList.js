import Book from './Book'

export default function BookList({ books }) {
  return (
    <ul className="columns">
      {books.slice(0, 5).map(book => (
        <li className="column is-one-fifth" key={book.id}>
          <Book book={book} />
        </li>
      ))}
    </ul>
  )
}
