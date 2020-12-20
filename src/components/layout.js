/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'

import Sidebar from './sidebar'
import './theme.scss'
import styles from './layout.module.scss'

const Layout = ({ children }) => {
  return (
    <>
      <div className="container is-max-desktop px-3 py-3">
        <main className={styles.mainContainer}>
          <div className="columns">
            <div className="column is-offset-3-desktop is-offset-2-tablet">
              <h1 className="title is-size-1">Tech Book Club</h1>
            </div>
          </div>

          <div className="columns">
            <div className="column is-3-desktop is-2-tablet">
              <Sidebar />
            </div>

            <div style={{ maxWidth: '700px' }} className="column">
              {children}
            </div>
          </div>
        </main>
      </div>

      <footer className="footer has-background-dark">
        <div className="content is-medium has-text-centered mt-6">
          Tech Book Club by{' '}
          <a
            className="has-text-light has-text-weight-bold"
            href="https://mgmarlow.github.io"
          >
            Graham Marlow
          </a>
          . Check out the{' '}
          <a
            className="has-text-light has-text-weight-bold"
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
