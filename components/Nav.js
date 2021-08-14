import classnames from 'classnames'
import Link from 'next/link'
import { useState } from 'react'
import {
  DISCORD_INVITE_URL,
  DISCUSSIONS_URL,
  STUDY_GROUP_URL,
} from '../constants/env'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link href="/">
          <a className="navbar-item">📚 tech book club</a>
        </Link>

        <a
          role="button"
          className={classnames('navbar-burger', { 'is-active': isOpen })}
          aria-label="menu"
          aria-expanded={isOpen ? 'true' : 'false'}
          data-target="mainnav"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="mainnav"
        className={classnames('navbar-menu', { 'is-active': isOpen })}
      >
        <div className="navbar-start">
          <Link href="/books">
            <a className="navbar-item has-text-weight-bold">books</a>
          </Link>

          <Link href={DISCUSSIONS_URL}>
            <a className="navbar-item has-text-weight-bold">discussions ↗</a>
          </Link>

          <Link href={STUDY_GROUP_URL}>
            <a className="navbar-item has-text-weight-bold">study groups ↗</a>
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a href={DISCORD_INVITE_URL} className="button is-primary">
                <strong>discord ↗</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
