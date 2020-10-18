import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Image from '../components/image'

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          html
        }
      }
    }
  }
`

const Recipes = ({ data }) => {
  const postNodes = data.allMarkdownRemark.edges

  const posts = postNodes.map(({ node: post }) => (
    <section key={post.id}>
      <div className="content is-medium">
        <h2>{post.frontmatter.title}</h2>

        {post.frontmatter.featuredImage && (
          <Image fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
        )}

        <div className="mt-5" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </section>
  ))

  return (
    <Layout>
      <SEO title="Recipes" />

      {posts}
    </Layout>
  )
}

export default Recipes
