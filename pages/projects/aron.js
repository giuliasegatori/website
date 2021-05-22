import * as React from 'react'
import Layout from '../../components/Layout'

const Aron = () => (
  <Layout>
    <img src='/aron_mioassicuratore_gs.png' alt='immagine aron' className='mx-auto mt-20' />
    <div className='text-center mt-8'>
      <a href='https://www.aroninsurtech.com/' target='_blank' rel='noreferrer'><div className='text-giulia font-bold'>Aron</div></a>
      <div className='font-light italic text-gray-500 mt-2'>Highly Technological Structured Microservices Insurtech Platform</div>
    </div>

    <div className='mt-8 text-center lg:px-32'>
      <div className='font-bold'>Challenge:</div> My boss wanted a cool website with micro-animations and a powerful
      visual impact. Real challange was that he wanted it to be done really fast.
      <div>
        <div className='font-bold mt-4'>Solution:</div> I’ve created from scratch (I never use any template!) a black and white
        high contrast design with micro-animated geometric shapes made with Adobe Illustrator.
      </div>

      <div className='lg:hidden font-bold text-xl text-center mt-10'>Intuitive navigation and high visual impact design.</div>
      <div className='lg:flex lg:w-full lg:mt-32'>
        <img src='/aron_mobile_gs.png' className='mt-8 lg:w-64' alt='mobile aron' />
        <div className='lg:w-3/4'>
          <div className='lg:block hidden lg:font-bold lg:text-4xl lg:text-left mt-10 lg:mt-20 lg:px-28'>Intuitive navigation and high visual impact design.</div>
          <div className='mt-8 text-center lg:px-28 lg:text-left'>Using a headless CMS such as Strapi I’ve been able to optimize the time of the web development.
            There a three major components for the pages of this website: Payoff, Sections and Meta.
          </div>
        </div>

      </div>

      <div className='mt-14 text-giulia font-bold'>Prototype made with Figma. Developed with React.js, Gatsby and Strapi</div>

    </div>
  </Layout>
)
export default Aron
