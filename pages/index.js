import Layout from '../components/Layout'

const PayOff = () => (
  <div className='h-payoff relative'>
    <div className='absolute bottom-2/5'>
      <div className='font-bold text-7xl px-8'>👋 Hey there, I’m Giulia!</div>
      <div className='text-3xl px-16 font-thin mt-12'>I am passionate about UX design</div>

    </div>
    <img src='/right-arrow.png' className='inset-x-0 mx-auto bottom-0 absolute pb-4' />
  </div>
)

const Content = () => (
  <div>
    <div className='w-64 h-64 bg-mio hover:bg-mio-hover' />
  </div>
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
