import React from 'react'
import Confetti from 'react-confetti-boom';
import styles from '@/styles/AfterBirthday/afterBirthday.module.css'
import Image from 'next/image';
import CardBackground from '@/assets/images/afterbirthday/watercolor_full_scaled.jpg'

const AfterBirthDay = () => {
  return (
    <>
      <div className={`flex justify-center items-center h-screen`}>
        <div className='relative flex justify-center h-full w-full'>
          <Image src={CardBackground} alt='background' className='w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%] mt-4 mb-4'/>
          <div className={`absolute bottom-1/4 w-full flex justify-center text-center ${styles.unique__font} text-6xl lg:text-7xl`}>
            <p className='w-fit text-center'>Boldog születésnapot!</p>
          </div>
          <div className={`absolute bottom-10 w-full flex justify-center text-center ${styles.unique__font} text-2xl`}>
            <p className='w-fit text-center'>A legjobb testvérnek! </p>
          </div>
        </div>
      </div>
      <Confetti mode='fall' particleCount={50} colors={['#717FAF', '#9293BA']}/> 
    </>
    
  )
}

export default AfterBirthDay