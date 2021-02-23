import Book from './Book'

export default function BookList({ books }) {
  const bookItems = books.map(book => (
    <li className="column is-2-desktop is-3-tablet is-4-mobile" key={book.id}>
      <Book key={book.id} book={book} />
    </li>
  ))

  return <ul className="columns is-mobile is-multiline">{bookItems}</ul>
}
