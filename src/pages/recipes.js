import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Image from '../components/image'

const Recipes = () => {
  return (
    <Layout>
      <SEO title="Recipes" />

      <section>
        <div className="content is-medium">
          <h2>Reading Lists with Notion</h2>
          <Image />
          <p className="mt-4">
            <a href="https://notion.so">Notion</a> is a phenomenal tool for
            notetaking and I've been singing its praises for the better part of
            a year. Zoe Chew has a great guide on{' '}
            <a href="https://hackernoon.com/track-everything-you-read-and-your-notes-with-this-notion-template-x6u53wfc">
              setting up a Notion reading list
            </a>{' '}
            to keep track of your Tech Book Club notes.
          </p>
          <p>
            Here's a link to the{' '}
            <a
              className="has-text-primary"
              href="https://www.notion.so/ba973ec2f0b84818bf9862257f70d463?v=1ace0dd4f57c4bfca8cb5bc4562eec5e"
            >
              finished template
            </a>{' '}
            if you don't want to set it up yourself. Just open up the link and
            hit "Duplicate" in the upper-right corner.
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default Recipes
