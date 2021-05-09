import * as React from 'react'

import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => (
  <div className='bg-main bg-repeat bg-contain'>
    <Header />
    <>
      {children}
    </>
    <Footer />
  </div>
)

export default Layout
