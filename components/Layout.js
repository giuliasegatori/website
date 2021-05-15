import { useState } from 'react'

import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className='bg-main bg-repeat bg-contain'>
      <div className='max-w-screen-2xl mx-auto'>
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        {!isMenuOpen && (
        <>
          <div className='px-8'>
            {children}
          </div>
          <Footer />
        </>
        )}
      </div>
    </div>
  )
}

export default Layout
