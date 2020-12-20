import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const FAQ_ITEMS = [
  {
    question:
      "Can I still attend the discussion session if I didn't read the material?",
    answer:
      "Yes! Please attend the discussion session, even if you didn't have time to read the assigned material. Your contributions are still valuable!",
  },
  {
    question:
      "I'm not comfortable leading a discussion session. Can I skip my turn?",
    answer:
      "Absolutely. Discussion leaders are a volunteered position. That said, leading a session helps you get the most out of the club. I encourage you to give it a try before deciding it's not for you.",
  },
]

const FAQItem = ({ question, children }) => (
  <section className="mb-6">
    <div className="content is-medium">
      <h2 className="is-size-5">{question}</h2>
      {children}
    </div>
  </section>
)

const FAQ = () => {
  return (
    <Layout>
      <SEO title="FAQ" />

      <h1 className="title">FAQ</h1>

      {FAQ_ITEMS.map(({ question, answer }) => (
        <FAQItem question={question}>
          <p>{answer}</p>
        </FAQItem>
      ))}

      <FAQItem question="A billion note-taking apps came out in 2020. What do the cool kids use?">
        <p>
          <a className="has-text-weight-bold" href="https://notion.so/">
            Notion
          </a>{' '}
          is my personal favorite, but some other great alternatives are{' '}
          <a className="has-text-weight-bold" href="https://obsidian.md/">
            Obsidian
          </a>
          ,{' '}
          <a
            className="has-text-weight-bold"
            href="https://foambubble.github.io/foam/"
          >
            Foam
          </a>
          , and{' '}
          <a className="has-text-weight-bold" href="https://www.zettlr.com/">
            Zettlr
          </a>
          .
        </p>
      </FAQItem>
    </Layout>
  )
}

export default FAQ
