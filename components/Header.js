import Link from 'next/link'

const pages = [
  { label: 'Projects', link: '/' },
  { label: 'About', link: '/about' },
  { label: 'Contact', link: '/contact' }
]

const Menu = () => (
  <div className='h-payoff mt-24 w-screen bg-white absolute left-0 z-50'>
    {pages.map((p, index) => (
      <Link id={index} href={p.link}>
        <div className=''>
          <div className='mt-4'>{p.label}</div>
        </div>
      </Link>
    ))}
  </div>
)

const Header = ({ isMenuOpen, setIsMenuOpen }) => (
  <div className='flex px-12 w-full justify-between h-header'>
    <Link href='/'><img src='/logo-gs.png' className='w-16 object-contain' /></Link>
    {isMenuOpen && <Menu /> }
    <div className='hidden lg:flex pt-8'>
      {pages.map((p, index) => (
        <Link id={index} href={p.link}>
          <div className='mx-4'>
            {p.label}
          </div>
        </Link>
      ))}
    </div>
    <div className='lg:hidden'>
      {isMenuOpen
        ? <div role='button' onClick={() => setIsMenuOpen(false)}>X</div>
        : <div role='button' onClick={() => setIsMenuOpen(true)}>M</div>}
    </div>

  </div>
)

export default Header
