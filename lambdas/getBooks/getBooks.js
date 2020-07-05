/* eslint-disable */
const Airtable = require('airtable')

exports.handler = async function (event, context) {
  const { AT_API_KEY, AT_BASE_ID, AT_API_URL } = process.env

  const send = (body) => ({
    statusCode: 200,
    body: JSON.stringify(body),
  })

  Airtable.configure({
    endpointUrl: AT_API_URL,
    apiKey: AT_API_KEY,
  })

  const base = Airtable.base(AT_BASE_ID)

  const titles = []

  base('Tech Books')
    .select({
      maxRecords: 12,
      view: 'Grid view',
    })
    .eachPage(
      (records, fetchNextPage) => {
        records.forEach((record) => {
          titles.push(record.get('Title'))
        })

        fetchNextPage()
      },
      (err) => {
        if (err) {
          console.log(err)
        }
      },
    )

  return send(titles)
}
