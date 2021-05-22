import Typewriter from 'typewriter-effect'
import Layout from '../components/Layout'

const PayOff = () => (
  <div className='h-payoff relative'>
    <div className='absolute lg:bottom-2/5 bottom-1/2 lg:px-8 w-full'>
      <h1 className='font-bold lg:text-7xl text-center text-2xl'>👋 Hey there, I’m Giulia!</h1>
      <h2 className='lg:text-3xl  text-center text-lg font-thin mt-12'>
        <Typewriter
          onInit={typewriter => {
            typewriter
              .typeString("I am passionate about <span class='text-giulia font-normal'>UX design</span>")
              .pauseFor(1000)
              .deleteChars(9)
              .typeString("<span class='text-giulia font-normal'>UI design</span>")
              .pauseFor(1000)
              .deleteChars(9)
              .typeString("<span class='text-giulia font-normal'>Interaction design</span>")
              .pauseFor(1000)
              .deleteChars(18)
              .typeString("<span class='text-giulia font-normal'>UX writing</span>")
              .start()
          }}
          options={{
            delay: 75
          }}
        />
      </h2>

    </div>
    <img src='/right-arrow.png' alt='go down' className='inset-x-0 mx-auto bottom-0 absolute pb-4 animate-bounce' />
  </div>
)

const Content = () => (
  <>
    <div className='flex lg:flex-row flex-col items-center justify-around mt-16'>
      <a href='/projects/mioassicuratore'><div className='bg-contain w-4/5 h-projects lg:w-projects bg-mio hover:bg-mio-hover bg-no-repeat cursor-pointer' /></a>
      <a href='/projects/aron'> <div className=' lg:mt-0 bg-contain h-projects w-4/5 lg:w-projects bg-aron hover:bg-aron-hover bg-no-repeat cursor-pointer' /></a>
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
