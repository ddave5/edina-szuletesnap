import React from 'react'
import Confetti from 'react-confetti-boom';
import styles from '@/styles/AfterBirthday/afterBirthday.module.css'
import Image from 'next/image';

const AfterBirthDay = () => {
  return (
    <>
      <div className={`${styles.pattern__background} relative h-screen`}>
        <div className='flex justify-center items-center w-full min-h-60'>
          <p className={`relative text-7xl tracking-widest text-orange-400 uppercase w-full text-center ${styles.letter} `}>Boldog születésnapot! </p>
        </div>
        
      </div>
      <Confetti mode='fall' particleCount={50} colors={['#717FAF', '#9293BA']}/> 
    </>
    
  )
}

export default AfterBirthDay