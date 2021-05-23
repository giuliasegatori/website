import * as React from 'react'
import LinkIcon from '@material-ui/icons/Link'
import Layout from '../../components/Layout'
import Breadcrumbs from '../../components/Breadcrumbs'

const Mioassicuratore = () => (
  <Layout>
    <Breadcrumbs page='MioAssicuratore' />
    <img src='/mioassicuratore_gs_slider.png' alt='immagine mioassicuratore' className='mx-auto mt-4' />
    <div className='text-center mt-8'>
      <div className='flex justify-center text-giulia'>
        <LinkIcon />
        <a href='https://www.mioassicuratore.it' rel='noreferrer' target='_blank'><div className='font-bold ml-1'>MioAssicuratore.it</div></a>
      </div>
      <div className='font-light italic text-gray-500 mt-2'>1st Italian Insurance Online Broker</div>

      <div className='mt-8 text-center'>
        <div className='font-bold'>Challenge:</div> Let’s get really honest, insurances are boring and difficult to understand.
        <div>
          <div className='font-bold mt-4'>Solution:</div> Users need to feel confident and secure about what they’re going to buy.
        </div>

      </div>

      <div className='lg:flex lg:w-full lg:px-40 lg:mt-20'>
        <div className='font-bold lg:hidden block text-center mt-14'>A brand new identity</div>
        <img src='/wireframe_mioassicuratore_gs.png' alt='wireframe mioassicuratore' className='w-96 mx-auto lg:w-1/2 mt-4' />
        <div className='lg:text-left lg:w-1/2 lg:ml-12'>
          <div className='font-bold lg:block hidden lg:mt-14'>A brand new identity</div>
          <div className='mt-4'>The starting point was to create
            a new brand identity for the website
            with a good user experience
            but also with the best SEO
            metrics optimizations.
          </div>
        </div>

      </div>

      <div className='lg:flex lg:flex-row-reverse lg:w-full lg:px-40 lg:mt-20'>
        <div className='font-bold lg:hidden block text-center mt-14'>User experience starts from within</div>
        <img src='/crm_mioassicuratore_giulia.png' alt='crm mioassicuratore' className='w-96 mt-4 mx-auto lg:w-1/2 lg:ml-20' />
        <div className='lg:text-left lg:w-1/2 lg:ml-12'>
          <div className='font-bold lg:block hidden lg:text-3xl lg:text-left lg:mt-12'>User experience starts from within</div>
          <div className='mt-4 lg:text-left'>
            <div className='font-bold'>Challenge:</div>
            MioAssicuratore.it’s operations
            team want to sell and issue insurance
            policies in the easiest and  fastest way.
            <div className='font-bold mt-8'>Solution:</div>
            Research of the needs of the users
            that use our CRM. Implementation of the
            features with UX metrics.
          </div>
        </div>
      </div>

      <div className='font-bold text-gray-500 mt-14'>Prototypes and Wireframes made with Figma.
        Developed with HTML, SASS and React.js
      </div>

    </div>

  </Layout>

)

export default Mioassicuratore
