import Link from 'next/link'
import { DISCORD_INVITE_URL } from '../constants/env'

const FooterLink = ({ href, children }) => (
  <li>
    <Link href={href}>
      <a className="has-text-dark">{children}</a>
    </Link>
  </li>
)

export default function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>Tech Book Club</strong> by Graham Marlow. Source code licensed
          by{' '}
          <a
            className="has-text-dark"
            href="https://github.com/mgmarlow/tech-book-club/blob/master/LICENSE"
          >
            GPL v3.0
          </a>
          .
        </p>
      </div>

      <div className="columns is-centered">
        <div className="column is-narrow mr-5">
          <ul>
            <FooterLink href="/about">about</FooterLink>
            <FooterLink href="/books">books</FooterLink>
          </ul>
        </div>
        <div className="column is-narrow">
          <ul>
            <FooterLink href="https://github.com/mgmarlow/tech-book-club">
              source ↗
            </FooterLink>
            <FooterLink href={DISCORD_INVITE_URL}>discord ↗</FooterLink>
          </ul>
        </div>
      </div>
    </footer>
  )
}
