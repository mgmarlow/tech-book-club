import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import BookList from '../components/BookList'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <BookList />
  </Layout>
)

export default IndexPage
