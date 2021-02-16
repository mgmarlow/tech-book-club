import uniqBy from 'lodash/uniqBy'
import { getAllBooks, getBookById } from './books'

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

describe('#getBookById', () => {
  it('should retrieve a book by ID', () => {
    expect(getBookById(1)).toMatchInlineSnapshot(`
      Object {
        "author": "Robert C. Martin",
        "id": 1,
        "state": "new",
        "summary": "",
        "title": "Clean Agile: Back to Basics",
        "url": "https://learning.oreilly.com/library/view/clean-agile-back/9780135782002/",
      }
    `)
  })

  it("should return undefined if id isn't found", () => {
    expect(getBookById('foo-1234')).toEqual(undefined)
  })
})
