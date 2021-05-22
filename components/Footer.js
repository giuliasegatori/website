import * as React from 'react'

const Footer = () => (
  <div className='p-8 mt-2'>
    <div className='flex justify-center'>
      <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/giulia-segatori' className='mr-2'><img src='/linkedin_icon.png' alt='linkedin profile' /></a>
      <a href='mailto:giulia.segatori@gmail.com' className='ml-2'><img src='/envelope.png' alt='send email' /></a>
    </div>
    <div className='mt-8 text-xs text-center font-extralight text-gray-400'>© 2021 - All rights reserved to Giulia Segatori</div>
  </div>

)

export default Footer
