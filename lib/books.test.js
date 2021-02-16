import uniqBy from 'lodash/uniqBy'
import { getAllBooks, getBookById } from './books'

describe('#getAllBooks', () => {
  it('should have a unique ID for each book', () => {
    const books = getAllBooks()
    expect(uniqBy(books, book => book.id).length).toEqual(books.length)
  })
})

describe('#getBookById', () => {
  it('should retrieve a book by ID', () => {
    expect(getBookById(1)).toMatchInlineSnapshot(`
      Object {
        "Author": "Robert C. Martin",
        "Completed On": "",
        "Rating": "",
        "Status": "New",
        "Summary": "",
        "Tags": "Book",
        "Title": "Clean Agile: Back to Basics",
        "URL": "https://learning.oreilly.com/library/view/clean-agile-back/9780135782002/",
        "id": 1,
      }
    `)
  })

  it("should return undefined if id isn't found", () => {
    expect(getBookById('foo-1234')).toEqual(undefined)
  })
})
