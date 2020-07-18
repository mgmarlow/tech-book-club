import React from 'react'
import { Link } from 'gatsby'

export const BookListItem = ({ book }) => (
  <div>
    <h4>
      <Link to={`/books/${book.id}`}>
        <i>{book.Title}</i>
      </Link>
    </h4>
    <p className="pl-4 subtitle">by {book.Author}</p>
  </div>
)

const BookList = ({ books }) => (
  <ul>
    {books.map(book => (
      <li className="mb-6" key={book.id}>
        <BookListItem book={book} />
      </li>
    ))}
  </ul>
)

export default BookList
