import kebabCase from 'lodash/kebabCase'
import books from './books.json'

export function getSlug(book) {
  return kebabCase(book.title)
}

export function getAllBooks() {
  return books.map(b => ({
    ...b,
    slug: getSlug(b),
  }))
}

export function getBookBySlug(slug) {
  return getAllBooks().find(book => book.slug === slug)
}
