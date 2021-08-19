import classNames from 'classnames'
import Link from 'next/link'
import { LICENSE_URL, NEWSLETTER_URL } from '../constants/env'

const FooterLink = ({ className, href, children }) => (
  <Link href={href}>
    <a className={classNames(className, 'has-text-dark')}>{children}</a>
  </Link>
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
          Check out the{' '}
          <FooterLink href={NEWSLETTER_URL}>newsletter ↗</FooterLink>
        </div>
      </div>
    </footer>
  )
}
