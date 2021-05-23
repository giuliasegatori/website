import Image from 'next/image'
import Layout from '../components/Layout'

const Title = ({ isMobile }) => (
  <div className={`${isMobile ? 'lg:hidden text-center' : 'hidden lg:block text-left ml-6'} font-bold text-3xl mt-8`}> 👋 Hey there, I&lsquo;m Giulia!</div>
)

const About = () => (
  <Layout>
    <Title isMobile />
    <div className='lg:flex lg:max-w-screen-lg lg:justify-center lg:mx-auto'>
      <div className='mt-8 flex justify-center'>
        <Image
          src='/giulia_linkedin.jpeg'
          alt='Photo of Giulia Segatori'
          width={250}
          height={250}
          layout='intrinsic'
          className='rounded'
        />
      </div>
      <div className='lg:w-2/3 mt-8'>
        <Title />
        <div className='text-center lg:text-left px-8 lg:mt-8'>When I was 6 years old I’ve reached one of my biggest achievements.
          Teachers asked the class to doodle something for the Elementary School Journal during the School Olympics and my “Girl that hugs a big trophy”, was chosen for the front page.

          I live in Rome and I currently work as UX & UI Designer and Junior Frontend Developer at MioAssicuratore.it, trying to make insurances more understable for users.
        </div>
      </div>
    </div>
    <div className='text-center font-bold text-3xl mt-20'>📝 Resume</div>
    <div className='shadow-2xl mt-10 mx-auto lg:w-1/2 bg-white'>
      <Image
        src='/resume.jpg'
        alt='Resume of Giulia Segatori'
        width='901'
        height='1280'
        layout='responsive'
      />
    </div>
    <form method='get' action='resume.pdf' className='w-full lg:w-1/3 mx-auto text-center mt-8 px-8 py-4 border-4 border-giulia text-giulia cursor-pointer bg-white'>
      <button type='submit'>Download resume</button>
    </form>
  </Layout>
)

export default About
