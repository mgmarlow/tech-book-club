import books from './books.json'

export function getAllBooks() {
  return books
}

export function getBookById(id) {
  return getAllBooks().find(book => book.id === id)
}
