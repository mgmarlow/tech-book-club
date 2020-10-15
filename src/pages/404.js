import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <section>
      <div className="content is-medium">
        <h2>Woops!</h2>
        <p>This page only exists in your imagination.</p>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
