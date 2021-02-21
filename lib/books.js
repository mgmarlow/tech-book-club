import kebabCase from 'lodash/kebabCase'
import books from './books.json'

export function getAllBooks() {
  return books.map(b => ({
    ...b,
    slug: kebabCase(b.title),
  }))
}

export function getBookBySlug(slug) {
  return getAllBooks().find(book => book.slug === slug)
}
