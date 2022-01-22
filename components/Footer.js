import classNames from 'classnames'
import Link from 'next/link'
import {
  ANCHOR_URL,
  LICENSE_URL,
  GRAHAM_HOME_URL,
  NOLAN_HOME_URL,
} from '../constants/env'

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
          <strong>tech book club</strong> by{' '}
          <FooterLink href={GRAHAM_HOME_URL}>Graham Marlow</FooterLink> and{' '}
          <FooterLink href={NOLAN_HOME_URL}>Nolan Sedley</FooterLink>. Source
          code licensed by{' '}
          <a className="has-text-dark" href={LICENSE_URL}>
            GPL v3.0
          </a>
          .
        </p>
      </div>

      <div className="columns is-centered">
        <div className="column is-narrow">
          <FooterLink href={ANCHOR_URL}>All episodes ↗</FooterLink>
        </div>
      </div>
    </footer>
  )
}
