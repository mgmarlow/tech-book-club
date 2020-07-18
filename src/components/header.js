import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header
    style={{
      backgroundColor: '#e4f1fe',
      borderBottom: '1px solid rgba(0, 0, 0, 0.125)',
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0, marginRight: '2rem', display: 'inline-block' }}>
        <Link
          to="/"
          style={{
            color: '#000',
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <Link
        to="/books"
        style={{
          color: '#000',
          marginRight: '2rem',
        }}
      >
        Books
      </Link>
      {/* <Link
        to="/about"
        style={{
          color: '#000',
          textDecoration: `none`,
          marginRight: '2rem',
        }}
      >
        About
      </Link> */}
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
