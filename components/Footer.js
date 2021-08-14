import Link from 'next/link'
import {
  DISCORD_INVITE_URL,
  DISCUSSIONS_URL,
  LICENSE_URL,
  SOURCE_URL,
} from '../constants/env'

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
          <strong>tech book club</strong> by Graham Marlow. Source code licensed
          by{' '}
          <a className="has-text-dark" href={LICENSE_URL}>
            GPL v3.0
          </a>
          .
        </p>
      </div>

      <div className="columns is-centered is-mobile">
        <div className="column is-narrow mr-5">
          <ul>
            <FooterLink href="/books">books</FooterLink>
            <FooterLink href={DISCUSSIONS_URL}>discussions ↗</FooterLink>
          </ul>
        </div>
        <div className="column is-narrow">
          <ul>
            <FooterLink href={SOURCE_URL}>source ↗</FooterLink>
            <FooterLink href={DISCORD_INVITE_URL}>discord ↗</FooterLink>
          </ul>
        </div>
      </div>
    </footer>
  )
}
