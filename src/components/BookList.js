import React from 'react'
import { useQuery } from 'react-query'

const requestBooks = async () => {
  const response = await fetch('/.netlify/functions/getBooks')
  return await response.json()
}

const useBooks = () => {
  const state = useQuery('books', requestBooks, {
    refetchOnWindowFocus: false,
  })

  return {
    ...state,
    books: state.data || [],
  }
}

const BookItem = ({ book }) => (
  <span>
    {book.URL ? (
      <a href={book.URL}>
        <i>{book.Title}</i>
      </a>
    ) : (
      <i>{book.Title}</i>
    )}{' '}
    by {book.Author}
  </span>
)

const BookList = ({ books }) => (
  <ul>
    {books.map(book => (
      <li key={book.id}>
        <BookItem book={book} />
      </li>
    ))}
  </ul>
)

const BookListContainer = () => {
  const { isFetching, books } = useBooks()

  const current = books.filter(book => book.Status === 'In Progress')

  const onDeck = books.filter(book => book.Status === 'On Deck')

  const completed = books.filter(book => book.Status === 'Completed')

  if (isFetching) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h2>Books</h2>
      <hr />
      <div>
        <h3>Currently Reading</h3>
        <BookList books={current} />
      </div>

      <div>
        <h3>On Deck</h3>
        <BookList books={onDeck} />
      </div>

      <div>
        <h3>Completed</h3>
        <BookList books={completed} />
      </div>
    </div>
  )
}

export default BookListContainer
