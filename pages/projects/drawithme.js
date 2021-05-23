import * as React from 'react'
import Layout from '../../components/Layout'
import Breadcrumbs from '../../components/Breadcrumbs'

const Drawithme = () => (
  <Layout>
    <Breadcrumbs page='Drawithme' />
    <img src='/drawithme_giulia.png' alt='immagine drawithme' className='mx-auto mt-4' />
    <div className='text-center mt-8 max-w-screen-lg mx-auto'>
      <div className='font-bold text-giulia'>Drawith.me</div>
      <div className='font-light italic text-gray-500 mt-2'>“Una sola app per creare, condividere e vendere disegni”</div>
      <div className='text-2xl lg:text-4xl font-bold mt-8'>Starting point</div>
      <div className='font-normal mt-4'>Drawith.me’s founder had crystal clear ideas about the functionalities
        that he wanted inside his app. He just didn’t know how to fit them inside the
        interface. Infact, a drawing editor isn’t an easy thing to ideate.
      </div>
      <div className='lg:flex lg:p-16'>
        <div className='text-xl font-extrabold mt-8 lg:hidden'>Ideate, prototype, iterate
          & repeat.
        </div>
        <img src='/drawithme_paper.png' alt='drawith.me paper project' className='mt-4 lg:mt-0 lg:w-1/2' />
        <div className='lg:flex lg:flex-col lg:ml-16'>
          <div className='hidden lg:text-left lg:font-extrabold lg:text-4xl lg:block'>Ideate, prototype, iterate
            & repeat.
          </div>
          <div className='font-normal mt-4 lg:w-1/2 lg:text-left'>Drawith.me’s users are mostly artists that want to draw, share and sell their creations, all in one place.
            Also, it had to include a section that allows the users to draw in one project at the same time.
          </div>
        </div>

      </div>

    </div>
    <div className='bg-giulia mt-8 -mx-8'>
      <div className='lg:flex lg:p-16'>
        <img src='/drawithme_folder.png' alt='immagine interfaccia drawithme' className='mx-auto mt-4 px-8 pt-8 lg:pt-0 lg:px-0 lg:w-1/2 lg:pr-8' />
        <img src='/drawithme_sendlink.png' alt='immagine interfaccia manda link drawithme' className='mx-auto mt-4 px-8 pb-8 lg:pb-0 lg:px-0 lg:w-1/2 lg:pl-8' />
      </div>

    </div>
    <div className='font-bold text-4xl mt-8 text-center'>Style guide</div>
    <div className='lg:flex lg:justify-center'>
      <div>
        <div className='text-giulia text-2xl mt-8 font-bold text-center'>Colors</div>
        <img src='/drawithme_palette.png' alt='drawithme palette' className='mx-auto mt-8 px-28 lg:h-64' />
      </div>
      <div>
        <div className='text-giulia text-2xl mt-8 font-bold text-center lg:text-left'>Typography</div>
        <div className='font-bold text-center lg:text-left mt-4'>Poppins</div>
        <div className='text-center lg:text-left mt-4'>ABCDEFGHIJKLMNOPQRSTUWYZ
          abcdefghijklmnopqrstuvwxyz
          1234567890
        </div>
        <div className='text-center lg:text-left mt-6'>
          <div className='font-thin'>Poppins thin</div>
          <div className='font-extralight'>Poppins extralight</div>
          <div className='font-light'>Poppins light</div>
          <div className='font-regular'>Poppins regular</div>
          <div className='font-medium'>Poppins medium</div>
          <div className='font-semibold'>Poppins semibold</div>
          <div className='font-bold'>Poppins bold</div>
          <div className='font-extrabold'>Poppins extrabold</div>
          <div className='font-black'>Poppins black</div>
        </div>
      </div>
    </div>
    <div className='text-giulia text-2xl mt-8 font-bold text-center'>Buttons</div>
    <img src='/drawithme_buttons.png' alt='drawithme pulsanti' className='mx-auto mt-8 lg:w-1/3' />
    <div className='text-center font-bold text-gray-500 mt-8'>Mockups made with Figma</div>
  </Layout>
)

export default Drawithme
