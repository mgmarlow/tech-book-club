import Nav from './Nav'
import Footer from './Footer'
import SEO from './SEO'

export default function Layout({ children }) {
  return (
    <>
      <SEO />

      <div>
        <Nav />
        {children}
        <Footer />
      </div>
    </>
  )
}
