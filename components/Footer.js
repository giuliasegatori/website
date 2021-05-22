import LinkedInIcon from '@material-ui/icons/LinkedIn'
import MailIcon from '@material-ui/icons/Mail'

const Footer = () => (
  <div className='p-8 mt-2 lg:flex lg:flex-row-reverse lg:justify-between'>
    <div className='flex justify-center'>
      <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/giulia-segatori' className='mr-2'><LinkedInIcon /></a>
      <a href='mailto:giulia.segatori@gmail.com' className='ml-2'><MailIcon /></a>
    </div>
    <div className='mt-8 lg:mt-1 text-xs text-center font-extralight text-gray-400'>© 2021 - All rights reserved to Giulia Segatori</div>
  </div>

)

export default Footer
