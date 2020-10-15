import React from 'react'
import { Link } from 'gatsby'

const SidebarItem = ({ children, to }) => (
  <li className="has-text-right is-inline-block-mobile mr-4">
    <Link
      activeClassName="has-text-primary"
      className="has-text-weight-bold is-size-5"
      to={to}
    >
      {children}
    </Link>
  </li>
)

const Sidebar = () => {
  return (
    <div>
      <ul>
        <SidebarItem to="/">About</SidebarItem>
        <SidebarItem to="/books">Books</SidebarItem>
        <SidebarItem to="/recipes">Recipes</SidebarItem>
      </ul>
    </div>
  )
}

export default Sidebar
