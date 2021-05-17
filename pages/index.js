import Layout from '../components/Layout'

const PayOff = () => (
  <div className='h-payoff relative'>
    <div className='absolute bottom-2/5 lg:px-8 px-2'>
      <div className='font-bold lg:text-7xl text-center text-2xl'>👋 Hey there, I’m Giulia!</div>
      <div className='lg:text-3xl lg:text-left text-center text-lg font-thin mt-12'>I am passionate about UX design</div>

    </div>
    <img src='/right-arrow.png' alt='go down' className='inset-x-0 mx-auto bottom-0 absolute pb-4' />
  </div>
)

const Content = () => (
  <>
    <div className='flex lg:flex-row flex-col items-center justify-around mt-16'>
      <a href='/projects/mioassicuratore'><div className='bg-contain w-4/5 h-projects lg:w-projects bg-mio hover:bg-mio-hover bg-no-repeat cursor-pointer' /></a>
      <div className=' lg:mt-0 bg-contain h-projects w-4/5 lg:w-projects bg-aron hover:bg-aron-hover bg-no-repeat cursor-pointer' />
    </div>
    <div className='flex lg:flex-row flex-col items-center justify-around lg:mt-8'>
      <div className='bg-contain w-4/5 h-projects lg:w-projects bg-drawithme hover:bg-drawithme-hover bg-no-repeat cursor-pointer' />
      <div className='bg-contain lg:mt-0 h-projects w-4/5 lg:w-projects bg-mioapp hover:bg-mioapp-hover bg-no-repeat cursor-pointer' />
    </div>
  </>

)

const Index = () => {
  console.log('index')
  return (
    <Layout>
      <PayOff />
      <Content />
    </Layout>
  )
}

export default Index
