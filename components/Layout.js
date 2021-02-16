import Head from 'next/head'
import Nav from './Nav'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="A community of software engineers looking to improve their craft."
        />

        <meta property="og:title" content="Tech Book Club" key="ogtitle" />
        <meta
          property="og:description"
          content="A community of software engineers looking to improve their craft."
          key="ogdesc"
        />
        <title>Tech Book Club</title>
      </Head>

      <div>
        <Nav />
        {children}
        <Footer />
      </div>
    </>
  )
}
