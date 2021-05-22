import axios from 'axios'
import Layout from '../components/Layout'

const Contact = () => (
  <Layout>
    <form
      className='flex flex-col'
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
      <input required type='text' name='name' placeholder='Your name' />
      <input required type='email' name='email' placeholder='Your email' />
      <input required type='text' name='message' placeholder='Your message' />
      <input type='submit' value='Submit' />
    </form>
  </Layout>
)

export default Contact
