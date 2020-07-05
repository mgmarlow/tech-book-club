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
    <i>{book.Title}</i> by {book.Author}
  </span>
)

const BookList = () => {
  const { isFetching, books } = useBooks()

  const current = books.find(book => book.Status === 'In Progress')

  const onDeck = books
    .filter(book => book.Status === 'On Deck')
    .map(book => (
      <li key={book.id}>
        <BookItem book={book} />
      </li>
    ))

  const completed = books
    .filter(book => book.Status === 'Completed')
    .map(book => (
      <li key={book.id}>
        <BookItem book={book} />
      </li>
    ))

  if (isFetching) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h2>Books</h2>
      <hr />
      <div>
        <h3>Currently Reading</h3>
        <p>
          <BookItem book={current} />
        </p>
      </div>

      <div>
        <h3>On Deck</h3>
        <ul>{onDeck}</ul>
      </div>

      <div>
        <h3>Completed</h3>
        <ul>{completed}</ul>
      </div>
    </div>
  )
}

export default BookList
