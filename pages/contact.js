import axios from 'axios'
import Layout from '../components/Layout'

const Contact = () => (
  <Layout>
    <div className='text-center lg:text-left mt-4 lg:mt-8 text-xl lg:text-6xl lg:ml-16 font-bold'>💬 Hey there, let&lsquo;s chat!</div>
    <div className='border-4 p-16 rounded border-giulia mt-8 lg:mt-16 lg:max-w-screen-md lg:mx-auto'>
      <div className='font-bold text-2xl text-center'>Reach out to me!</div>
      <form
        className='flex flex-col mt-4'
        method='POST'
        onSubmit={e => {
          e.preventDefault()
          axios.post('api/send_email', {
            name: e.target[0].value,
            email: e.target[1].value,
            message: e.target[2].value
          })
        }}
      >
        <input className='border-b p-2 mt-4' required type='text' name='name' placeholder='Your name' />
        <input className='border-b p-2 mt-4' required type='email' name='email' placeholder='Your email' />
        <textarea className='border-b p-2 mt-4 text-sm' rows='3' required type='text' name='message' placeholder='Message' />
        <input className='mt-16 bg-giulia text-white p-4 text-lg font-semibold' type='submit' value='Submit' />
      </form>
    </div>
  </Layout>
)

export default Contact
