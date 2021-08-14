import uniqBy from 'lodash/uniqBy'
import { getSlug, getAllBooks, getBookBySlug } from './books'

describe('#getAllBooks', () => {
  const books = getAllBooks()

  it('should have a unique ID for each book', () => {
    expect(uniqBy(books, book => book.id).length).toEqual(books.length)
  })

  const VALID_STATES = ['new', 'in_progress', 'completed']
  books.forEach(b => {
    describe(b.title, () => {
      it('should have a state of VALID_STATES', () => {
        expect(VALID_STATES.includes(b.state)).toBeTruthy()
      })
    })
  })
})

describe('#getBookBySlug', () => {
  it('should retrieve a book by ID', () => {
    expect(getBookBySlug('clean-agile-back-to-basics')).toMatchInlineSnapshot(`
      Object {
        "author": "Robert C. Martin",
        "id": 1,
        "img": "/books/martin_clean_agile.jpg",
        "slug": "clean-agile-back-to-basics",
        "state": "completed",
        "summary": "",
        "title": "Clean Agile: Back to Basics",
        "url": "https://learning.oreilly.com/library/view/clean-agile-back/9780135782002/",
      }
    `)
  })

  it("should return undefined if id isn't found", () => {
    expect(getBookBySlug('foo-1234')).toEqual(undefined)
  })
})

describe('#getSlug', () => {
  it('should return kebab-case', () => {
    const mockBook = { title: 'Foo Bar' }
    expect(getSlug(mockBook)).toEqual('foo-bar')
  })

  it('should handle special characters', () => {
    const mockBook = { title: 'Foo: Bar, and bAz123' }
    expect(getSlug(mockBook)).toEqual('foo-bar-and-b-az-123')
  })
})
