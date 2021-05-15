import { useState } from 'react'

import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className='bg-main bg-repeat bg-contain'>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {!isMenuOpen && (
      <>
        {children}
        <Footer />
      </>
      )}
    </div>
  )
}

export default Layout
