import { useReducer } from 'react'

const encode = data =>
  Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')

const initialState = {
  subject: '',
  email: '',
  message: '',
}

const useForm = () => {
  const [state, dispatch] = useReducer((state, action) => {
    if (action.type === 'update_field') {
      const { field, value } = action.payload
      return { ...state, [field]: value }
    }

    if (action.type === 'reset') {
      return initialState
    }

    return state
  }, initialState)

  const onChange = (name, e) => {
    dispatch({
      type: 'update_field',
      payload: { field: name, value: e.target.value },
    })
  }

  return { ...state, onChange }
}

const ContactForm = () => {
  const { subject, email, message, onChange } = useForm()

  const handleSubmit = e => {
    e.preventDefault()
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': event.target.getAttribute('name'),
        subject,
        email,
        message,
      }),
    })
  }

  return (
    <form
      onSubmit={handleSubmit}
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />

      <div className="field">
        <label htmlFor="subject" className="label">
          Subject
        </label>
        <div className="control">
          <input
            className="input"
            value={subject}
            onChange={e => onChange('subject', e)}
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
            value={email}
            onChange={e => onChange('email', e)}
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
            value={message}
            onChange={e => onChange('message', e)}
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
