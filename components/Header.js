import Link from 'next/link'
import CloseIcon from '@material-ui/icons/Close'
import MenuIcon from '@material-ui/icons/Menu'

const pages = [
  { path: '/projects/*', label: 'Projects', link: '/#projects', scroll: '#projects' },
  { path: '/about', label: 'About', link: '/about' },
  { path: '/contact', label: 'Contact', link: '/contact' }

]

const Menu = ({ pageSelected, setIsMenuOpen }) => (
  <div className='h-payoff mt-24 w-screen bg-white absolute left-0 z-50 flex justify-center'>
    <div className='flex flex-col mt-8'>
      {pages.map(p => (
        <Link
          id={p.path}
          href={p.link}
        >
          <div
            role='button'
            className='cursor-pointer'
            onClick={() => (p.path === pageSelected || (pageSelected === '/' && p.path === '/projects/*') ? setIsMenuOpen(false) : undefined)}
          >
            <div className='text-2xl mt-8'>{p.label}</div>
          </div>
        </Link>
      ))}
    </div>
  </div>
)

const Header = ({ isMenuOpen, setIsMenuOpen, pageSelected }) => (
  <div className='flex px-12 w-full justify-between h-header sticky top-0 bg-white z-50 border-b'>
    <Link href='/'><img src='/logo-gs.png' className='w-16 object-contain cursor-pointer' alt='logo giulia segatori' /></Link>
    {isMenuOpen && <Menu pageSelected={pageSelected} setIsMenuOpen={setIsMenuOpen} /> }
    <div className='hidden lg:flex pt-8'>
      {pages.map(p => (
        <Link id={p.path} href={pageSelected === '/' && p.path === '/projects/*' ? p.scroll : p.link}>
          <div className={`mx-4 cursor-pointer ${pageSelected.match(p.path) ? 'font-bold' : ''}`}>
            {p.label}
          </div>
        </Link>
      ))}
    </div>
    <div className='lg:hidden mt-8'>
      {isMenuOpen
        ? <div role='button' onClick={() => setIsMenuOpen(false)}><CloseIcon /></div>
        : <div role='button' onClick={() => setIsMenuOpen(true)}><MenuIcon /></div>}
    </div>

  </div>
)

export default Header
