import React from 'react'
import { Link } from 'gatsby'

export const BookListItem = ({ book }) => (
  <span>
    <Link to={`/books/${book.id}`}>
      <i>{book.Title}</i>
    </Link>{' '}
    by {book.Author}
  </span>
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
