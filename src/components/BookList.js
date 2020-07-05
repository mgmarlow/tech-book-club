import React from 'react'
import { useQuery } from 'react-query'

const requestBooks = async () => {
  const response = await fetch('/.netlify/functions/getBooks')
  return await response.json()
}

const useBooks = () => {
  const state = useQuery('books', requestBooks)

  return {
    ...state,
    books: state.data || [],
  }
}

const BookList = () => {
  const { isFetching, books } = useBooks()

  const current = books.find(book => book.Status === 'In Progress')

  const onDeck = books
    .filter(book => book.Status === 'On Deck')
    .map(book => <li key={book.id}>{book.Title}</li>)

  const completed = books
    .filter(book => book.Status === 'Completed')
    .map(book => <li key={book.id}>{book.Title}</li>)

  return (
    <div>
      {current && (
        <div>
          <h2>Currently Reading</h2>
          <p>{current.Title}</p>
        </div>
      )}

      <div>
        <h2>On Deck</h2>
        <ul>{onDeck}</ul>
      </div>

      <div>
        <h2>Completed</h2>
        <ul>{completed}</ul>
      </div>
    </div>
  )
}

export default BookList
