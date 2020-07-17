const Airtable = require('airtable')
const path = require('path')

const getBooks = async () => {
  const { AT_API_KEY, AT_BASE_ID, AT_API_URL } = process.env

  Airtable.configure({
    endpointUrl: AT_API_URL,
    apiKey: AT_API_KEY,
  })

  const base = Airtable.base(AT_BASE_ID)

  const result = await base('Tech Books')
    .select({
      view: 'Grid view',
    })
    .all()

  return result.map(book => ({
    id: book.id,
    ...book.fields,
  }))
}

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions

  const books = await getBooks()

  books.forEach(book => {
    createNode({
      ...book,
      id: createNodeId(`Book-${book.id}`),
      parent: null,
      children: [],
      internal: {
        type: 'Book',
        content: JSON.stringify(book),
        contentDigest: createContentDigest(book),
      },
    })
  })

  return
}

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql(`
    query {
      allBook {
        edges {
          node {
            id
          }
        }
      }
    }
  `)

  result.data.allBook.edges.forEach(({ node }) => {
    createPage({
      path: node.id,
      component: path.resolve('./src/templates/book.js'),
      context: { id: node.id },
    })
  })
}
