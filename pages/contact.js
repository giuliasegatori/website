import axios from 'axios'
import Layout from '../components/Layout'

const Contact = () => (
  <Layout>
    <div className='text-center mt-4 text-xl font-bold'>💬 Hey there, let&lsquo;s chat!</div>
    <div className='border-4 p-16 rounded border-giulia mt-8'>
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
