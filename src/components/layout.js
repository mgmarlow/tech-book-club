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
import './layout.css'
import './theme.css'

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
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          minHeight: '80vh',
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <footer>
        <div
          style={{
            // backgroundColor: '#e4f1fe',
            backgroundColor: '#eee',
            borderTop: '1px solid rgba(0, 0, 0, 0.125)',
            padding: '4rem',
            textAlign: 'center',
          }}
        >
          Tech Book Club by{' '}
          <a href="https://mgmarlow.github.io">Graham Marlow</a>. Check out the{' '}
          <a href="https://github.com/mgmarlow/tech-book-club/">source code</a>.
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
