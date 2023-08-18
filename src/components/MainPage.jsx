import  { useState, useEffect} from 'react'
import mobileHero from '../assets/images/image-hero-mobile.png'
import desktopHero from '../assets/images/image-hero-desktop.png'
import audophile from '../assets/images/client-audiophile.svg'
import databiz from '../assets/images/client-databiz.svg'
import maker from '../assets/images/client-maker.svg'
import meet from '../assets/images/client-meet.svg'

const MainPage = ({ isMobile }) => {

  return (
    <div className='flex flex-col md:flex-row gap-8 mt-2 justify-between px-4 sm:w-2/3 md:w-5/6 lg:w-6/7 mx-auto'>
      <div className='flex md:order-1'>
        {isMobile ? <img src={mobileHero} alt='hero' /> : <img src={desktopHero} alt='hero'/>}
      </div>
      <div className='flex flex-col justify-between gap-12 p-3 md:p-0 md:mr-5 lg:md-10'>
        <div className='flex flex-1 flex-col gap-5 md:gap-10 items-center md:items-start justify-center'>
          <h1 className='text-almost-black text-4xl font-bold md:text-6xl'>Make remote work</h1>
          <p className='text-medium-gray text-center md:text-left'>Get your team in sync, no matter what your location. Streamline
            processses, create team rituals, and watch productivity soar.
          </p>
          <button className='bg-almost-black py-2.5 px-5 rounded-xl border border-almost-black text-almost-white curosr-pointer hover:bg-almost-white hover:text-almost-black'>
            Learn more
          </button>
        </div>
        <div className='flex justify-between items-center'>
          <span className='w-[85px] flex items-center'>
            <img src={databiz} alt='databiz' />
          </span>
          <span className='w-[55px] flex items-center'>
            <img src={audophile}  alt='audiophile'/>
          </span>
          <span className='w-[70px] flex items-center '>
            <img src={meet} alt='meet'/>
          </span>
          <span className='w-[70px] flex items-center'>
            <img src={maker}  alt='maker'/>
          </span>
        </div>
      </div>
    </div>
  )
}

export default MainPage