import React from 'react'
import { graphql } from 'gatsby'

export const query = graphql`
  query($id: String!) {
    book(id: { eq: $id }) {
      Title
      Author
    }
  }
`

const BookTemplate = ({ data }) => {
  console.log(data)
  return <h1>test</h1>
}

export default BookTemplate
