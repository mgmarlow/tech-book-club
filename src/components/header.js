import { Link } from 'gatsby'
import classnames from 'classnames'
import React from 'react'

const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link
          className="is-size-3 navbar-item has-text-dark has-text-weight-bold"
          to="/"
        >
          {siteTitle}
        </Link>

        <a
          onClick={() => setIsOpen(!isOpen)}
          role="button"
          className={classnames('navbar-burger burger', {
            'is-active': isOpen,
          })}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBookClub"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBookClub"
        className={classnames('navbar-menu', {
          'is-active': isOpen,
        })}
      >
        <div className="navbar-end">
          <Link
            className="navbar-item has-text-dark has-text-weight-bold is-size-5"
            to="/books"
          >
            Books
          </Link>
          <Link
            className="navbar-item has-text-dark has-text-weight-bold is-size-5"
            to="/about"
          >
            About
          </Link>
          <Link
            className="navbar-item has-text-dark has-text-weight-bold is-size-5"
            to="/resources"
          >
            Resources
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header
