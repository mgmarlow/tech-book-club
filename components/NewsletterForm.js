import classnames from 'classnames'

export default function NewsletterForm() {
  return (
    <section className="section" id="newsletter">
      <div className="content is-medium">
        <h2>Join the newsletter</h2>

        <p>
          <b>tech book club</b> explores classic computer science literature and
          applies it to the everyday craft. Each newsletter is packed full of
          notes, code samples, and analysis related to that month's book.
        </p>

        <p>Read along or just tune in to learn something new:</p>

        <div>
          <form
            action="https://buttondown.email/api/emails/embed-subscribe/techbookclub"
            method="post"
            target="popupwindow"
            onSubmit={() =>
              window.open(
                'https://buttondown.email/techbookclub',
                'popupwindow',
              )
            }
            className="field has-addons"
          >
            <div className={classnames('control', styles.newsletterInput)}>
              <input
                placeholder="your@email.com"
                className="input is-medium"
                type="email"
                name="email"
                id="bd-email"
              />
            </div>
            <input type="hidden" value="1" name="embed" />
            <div className="control">
              <input
                className="button is-primary is-medium"
                type="submit"
                value="Subscribe"
              />
            </div>
          </form>

          <p className="is-size-6 has-text-centered">
            No spam, no trackers, unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  )
}
