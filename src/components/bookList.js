import React from 'react'
import { Link } from 'gatsby'

export const BookListItem = ({ book }) => (
  <Link to={`/books/${book.id}`}>
    <i>{book.Title}</i> by {book.Author}
  </Link>
)

const BookList = ({ books }) => (
  <ul>
    {books.map(book => (
      <li key={book.id}>
        <BookListItem book={book} />
      </li>
    ))}
  </ul>
)

export default BookList
