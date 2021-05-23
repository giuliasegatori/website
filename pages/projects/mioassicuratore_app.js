import * as React from 'react'
import Layout from '../../components/Layout'
import Breadcrumbs from '../../components/Breadcrumbs'

const Mioassicuratore_app = () => (
  <Layout>
    <Breadcrumbs page='MIO' />
    <img src='/banner_app.png' alt='banner app MIO' className='mt-8 mx-auto' />
    <div className='max-w-screen-lg mx-auto'>
      <div className='text-center font-bold text-giulia mt-8'>MIO - Gestione Assicurazioni</div>
      <div className='font-light italic text-gray-500 mt-2 text-center'>MioAssicuratore's App</div>
      <div className='mt-8 text-center'>
        <div className='mt-8 text-center'>
          <div className='font-bold'>Challenge:</div> MioAssicuratore.it provides insurance policies and quotes for 44.780 users
          every year, but it doesn’t have an area where the user can find all the documents.
          <div>
            <div className='font-bold mt-4'>Solution:</div> The solution is to project a mobile app where the users can get quotes from
            different companies, purchase an insurance and also manage all the insurance
            portfolio of the user.
          </div>
        </div>

        <div className='font-bold text-2xl mt-8'>Meet the Users</div>
        <div className='lg:flex text-center lg:text-left lg:mt-8 lg:max-w-screen-lg lg:mx-auto'>
          <img src='/anna_mio.png' alt='immagine Anna MIO app' className='mt-8 lg:mt-0 mx-auto object-contain lg:px-4' />
          <div className='lg:px-4 lg:my-auto'>
            <div className='font-bold text-giulia mt-4 lg:mt-0'>PRIMARY</div>
            <div className='lg:flex lg:mt-2'>
              <div className='font-bold'>Name:</div>
              <div className='lg:ml-2'>Anna</div>
            </div>
            <div className='lg:flex lg:mt-2'>
              <div className='font-bold'>Age:</div>
              <div className='lg:ml-2'>43</div>
            </div>
            <div className='lg:flex lg:mt-2'>
              <div className='font-bold'>Family:</div>
              <div className='lg:ml-2 lg:w-44'>Married, 2 children</div>
            </div>
            <div className='lg:flex lg:mt-2'>
              <div className='font-bold'>Occupation:</div>
              <div className='lg:ml-2'>Accountant</div>
            </div>
          </div>
          <div>
            <div className='border-t lg:border-t-0 lg:border-l h-full lg:text-left lg:px-4 border-giulia mt-6 lg:mt-0 lg:align-middle lg:inline-block'>
              <div className='mt-6'>Anna is a hard-working married mother of 2 children. She cares about the safety of her family and wants an easy way to buy a health insurance for all the family. She wants someone who can give her the right assistance about the coverages.</div>
            </div>
          </div>
        </div>
        <div className='lg:flex text-center lg:text-left lg:mt-16 lg:max-w-screen-lg lg:mx-auto'>
          <img src='/paolo_mio.png' alt='immagine Paolo MIO app' className='mt-8 lg:mt-0 mx-auto object-contain lg:px-4' />
          <div className='lg:px-4 lg:my-auto'>
            <div className='font-bold text-giulia mt-4 lg:mt-0'>SECONDARY</div>
            <div className='lg:flex lg:mt-2'>
              <div className='font-bold'>Name:</div>
              <div className='lg:ml-2'>Paolo</div>
            </div>
            <div className='lg:flex lg:mt-2'>
              <div className='font-bold'>Age:</div>
              <div className='lg:ml-2'>56</div>
            </div>
            <div className='lg:flex lg:mt-2'>
              <div className='font-bold'>Family:</div>
              <div className='lg:ml-2 lg:w-44'>Single</div>
            </div>
            <div className='lg:flex lg:mt-2'>
              <div className='font-bold'>Occupation:</div>
              <div className='lg:ml-2'>Insurance Broker</div>
            </div>
          </div>
          <div>
            <div className='border-t lg:border-t-0 lg:border-l h-full lg:text-left lg:px-4 border-giulia mt-6 lg:mt-0 lg:align-middle lg:inline-block'>
              <div className='mt-6'>Paolo is a well-established insurance broker who loves to have all his documents well organized. He has a lot of folders where he keeps the documents of the insurances of his clients.
                He wants to add them on MIO so he can check on the expiring dates easily.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center text-2xl mt-8 lg:mt-16'>
        <div className='font-normal'>(Part of the)</div>
        <div className='font-bold'>Wireflow</div>
        <img src='/wireflow_mio.png' alt='wireflow mio' className='mt-8 lg:max-w-screen-lg lg:mx-auto' />
      </div>

    </div>
  </Layout>
)
export default Mioassicuratore_app
