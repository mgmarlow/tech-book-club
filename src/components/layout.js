/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import './theme.scss'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}

      <div style={{ minHeight: '70vh' }} className="container is-max-desktop">
        <main>{children}</main>
      </div>

      <footer className="footer has-background-light">
        <div className="content is-medium has-text-centered mt-6">
          Tech Book Club by{' '}
          <a
            className="has-text-dark has-text-weight-bold"
            href="https://mgmarlow.github.io"
          >
            Graham Marlow
          </a>
          . Check out the{' '}
          <a
            className="has-text-dark has-text-weight-bold"
            href="https://github.com/mgmarlow/tech-book-club/"
          >
            source code
          </a>
          .
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
