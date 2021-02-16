import books from './books.json'

export function getBookById(id) {
  return books.find(book => book.id === id)
}

export function getAllBooks() {
  return books
}
