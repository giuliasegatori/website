import Link from 'next/link'

const Header = () => (
  <div className='flex px-12 w-full justify-between h-header'>
    <Link href='/'><img src='/logo-gs.png' className='w-16 object-contain' /></Link>

    <div className='flex pt-8'>
      <Link href='/'>
        Projects
      </Link>
      <Link href='/about'>
        <div className='mx-8'>About</div>
      </Link>
      <Link href='/contact'>
        Contact
      </Link>
    </div>
  </div>
)

export default Header
