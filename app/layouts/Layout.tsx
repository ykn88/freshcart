import { ReactNode } from "react"
import { Head } from "blitz"
import Header from "app/products/components/Header"
import Footer from "app/products/components/Footer"

type LayoutProps = {
  title?: string
  children: ReactNode
}

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
    
      <Head>
        <title>{title || "freshcart"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {children}
      <Header />
      
      <div style={{backgroundColor:'#F3FCF8'}}></div>
      <Footer />
    </>
  )
}

export default Layout
