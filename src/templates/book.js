import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

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
  return (
    <Layout>
      <h1>test</h1>
    </Layout>
  )
}

export default BookTemplate
