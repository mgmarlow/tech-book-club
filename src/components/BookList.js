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

  const next = current[0] && current[0]['Completed On']

  const onDeck = books.filter(book => book.Status === 'On Deck')

  const completed = books.filter(book => book.Status === 'Completed')

  if (isFetching) {
    return <p>Shelving books...</p>
  }

  return (
    <div>
      {next && (
        <div
          style={{
            padding: '1rem',
            margin: '2rem 0',
            backgroundColor: '#eee',
          }}
        >
          <h4 style={{ margin: '0' }}>
            <span role="img" aria-label="calendar">
              📅
            </span>{' '}
            Next Meeting: {next}
          </h4>
        </div>
      )}

      <h2>Books</h2>
      <hr />

      <div style={{ margin: '1rem 0 2rem 0' }}>
        <h3>Currently Reading</h3>
        <BookList books={current} />
      </div>

      <div style={{ margin: '2rem 0' }}>
        <h3>On Deck</h3>
        <BookList books={onDeck} />
      </div>

      <div style={{ margin: '2rem 0' }}>
        <h3>Completed</h3>
        <BookList books={completed} />
      </div>
    </div>
  )
}

export default BookListContainer
