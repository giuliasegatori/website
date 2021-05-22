import Link from 'next/link'

const pages = [
  { label: 'Projects', link: '/' },
  { label: 'About', link: '/about' },
  { label: 'Contact', link: '/contact' }

]

const Menu = () => (
  <div className='h-payoff mt-24 w-screen  bg-white absolute left-0 z-50 flex justify-center'>
    <div className='flex flex-col mt-8'>
      {pages.map((p, index) => (
        <Link id={index} href={p.link}>
          <div className='cursor-pointer'>
            <div className='text-2xl mt-8'>{p.label}</div>
          </div>
        </Link>
      ))}
    </div>
  </div>
)

const Header = ({ isMenuOpen, setIsMenuOpen }) => (
  <div className='flex px-12 w-full justify-between h-header'>
    <Link href='/'><img src='/logo-gs.png' className='w-16 object-contain cursor-pointer' alt='logo giulia segatori' /></Link>
    {isMenuOpen && <Menu /> }
    <div className='hidden lg:flex pt-8'>
      {pages.map((p, index) => (
        <Link id={index} href={p.link}>
          <div className='mx-4 cursor-pointer'>
            {p.label}
          </div>
        </Link>
      ))}
    </div>
    <div className='lg:hidden mt-10'>
      {isMenuOpen
        ? <div role='button' onClick={() => setIsMenuOpen(false)}><img src='/clear.png' alt='open menu' /></div>
        : <div role='button' onClick={() => setIsMenuOpen(true)}><img src='/menu.png' alt='open menu' /></div>}
    </div>

  </div>
)

export default Header
