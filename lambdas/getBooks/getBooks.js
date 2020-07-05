/* eslint-disable */
const Airtable = require('airtable')

exports.handler = async function (event, context) {
  const { AT_API_KEY, AT_BASE_ID, AT_API_URL } = process.env

  const send = body => ({
    statusCode: 200,
    body: JSON.stringify(body),
  })

  Airtable.configure({
    endpointUrl: AT_API_URL,
    apiKey: AT_API_KEY,
  })

  const base = Airtable.base(AT_BASE_ID)

  const titles = []

  const result = await base('Tech Books')
    .select({
      view: 'Grid view',
    })
    .all()

  const books = result.map(book => ({
    id: book.id,
    ...book.fields,
  }))

  return send(books)
}
