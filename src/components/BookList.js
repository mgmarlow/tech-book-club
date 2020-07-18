import React from 'react'

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

const BookListContainer = ({ books }) => {
  const current = books.find(book => book.Status === 'In Progress')
  const completed = books.filter(book => book.Status === 'Completed')

  const next = current && current['Completed_On']

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

      {current && (
        <div style={{ margin: '1rem 0 2rem 0' }}>
          <h3>Currently Reading</h3>
          <BookItem book={current} />
        </div>
      )}

      <div style={{ margin: '2rem 0' }}>
        <h3>Completed</h3>
        <BookList books={completed} />
      </div>
    </div>
  )
}

export default BookListContainer
