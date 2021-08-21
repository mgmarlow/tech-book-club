import Head from 'next/head'

export default function SEO({
  title = 'tech book club',
  description = 'A newsletter that explores classic computer science literature and applies it to the everyday.',
}) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />

      <meta name="description" content={description} />

      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />

      <title>{title}</title>
    </Head>
  )
}
