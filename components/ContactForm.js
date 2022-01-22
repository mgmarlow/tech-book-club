const ContactForm = () => {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <p className="is-hidden">
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>

      <div className="field">
        <label htmlFor="subject" className="label">
          Subject
        </label>
        <div className="control">
          <input
            className="input"
            type="text"
            name="subject"
            id="subject"
            required
            placeholder="Sending good vibes"
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="email" className="label">
          Email
        </label>
        <div className="control">
          <input
            id="email"
            className="input"
            type="text"
            name="email"
            required
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="message" className="label">
          Message
        </label>
        <div className="control">
          <textarea
            id="message"
            name="message"
            className="textarea"
            placeholder="Good vibes only"
          ></textarea>
        </div>
      </div>

      <div className="control">
        <button type="submit" className="button is-link">
          Submit
        </button>
      </div>
    </form>
  )
}

export default ContactForm
