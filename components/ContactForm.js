const ContactForm = () => {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <p class="is-hidden">
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>

      <div className="field">
        <label for="subject" className="label">
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
        <label for="email" className="label">
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
        <label for="message" class="label">
          Message
        </label>
        <div class="control">
          <textarea
            id="message"
            name="message"
            className="textarea"
            placeholder="Good vibes only"
          ></textarea>
        </div>
      </div>

      <div class="control">
        <button type="submit" className="button is-link">
          Submit
        </button>
      </div>
    </form>
  )
}

export default ContactForm
