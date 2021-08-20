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

      <div className="columns is-centered">
        <div className="column is-narrow mr-5 has-text-centered">
          Check out the{' '}
          <FooterLink href={NEWSLETTER_URL}>newsletter ↗</FooterLink>
        </div>
        <div className="column is-narrow has-text-centered">
          <a href="https://www.buymeacoffee.com/mgmarlow" target="_blank">
            <img
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              alt="Buy Me A Coffee"
              style={{ height: '60px', width: '217px' }}
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
