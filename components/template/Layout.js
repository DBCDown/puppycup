import Link from 'next/link'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Logo from '../header/Logo'
import NavMain from '../navigation/NavMain'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="wrapper">
        <NavMain />
      </div>
      <div className={`wrapper -mx-5`}>{children}</div>

      <Footer />
    </>
  )
}
