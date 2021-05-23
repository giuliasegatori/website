import Typewriter from 'typewriter-effect'
import Image from 'next/image'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import Layout from '../components/Layout'

const PayOff = () => (
  <div className='h-payoff relative'>
    <div className='absolute lg:bottom-2/5 bottom-1/2 lg:px-8 w-full'>
      <h1 className='font-bold lg:text-7xl text-center text-3xl'>👋 Hey there, I’m Giulia!</h1>
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
    <a href='#projects'>
      <ArrowDownwardIcon className='text-7xl inset-x-0 mx-auto bottom-0 absolute pb-4 animate-bounce' />
    </a>
  </div>
)

const Content = () => (
  <div id='projects' className='pt-24'>
    <div className='lg:flex lg:flex-row lg:justify-center'>
      <a href='/projects/mioassicuratore' className='block mt-8 lg:mr-4'>
        <Image
          src='/sitogs_mioass.png'
          alt='mioassicuratore project'
          width={600}
          height={397}
          layout='intrinsic'
          className='rounded object-cover'
        />
      </a>
      <a href='/projects/aron' className='block mt-8 lg:ml-4'>
        <Image
          src='/aron_sitomio.png'
          alt='aron project'
          width={600}
          height={397}
          layout='intrinsic'
          className='rounded object-cover'
        />
      </a>
    </div>
    <div className='lg:flex lg:flex-row lg:justify-center'>
      <a href='/projects/mioassicuratore_app' className='block mt-8 lg:mr-4'>
        <Image
          src='/mioapp.png'
          alt='mioassicuratore app project'
          width={600}
          height={397}
          layout='intrinsic'
          className='rounded object-cover'
        />
      </a>
      <a href='/projects/drawithme' className='block mt-8 lg:ml-4'>
        <Image
          src='/drawithme.png'
          alt='drawithme project'
          width={600}
          height={397}
          layout='intrinsic'
          className='rounded object-cover'
        />
      </a>
    </div>
  </div>

)

const Index = () => (
  <Layout>
    <PayOff />
    <Content />
  </Layout>
)

export default Index
