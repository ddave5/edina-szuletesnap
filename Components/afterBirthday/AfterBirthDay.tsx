import React from 'react'
import Confetti from 'react-confetti-boom';
import styles from '@/styles/AfterBirthday/afterBirthday.module.css'
import Image from 'next/image';
import Balloon from '@/assets/images/balloon/balloon.svg'
import BalloonMirror from '@/assets/images/balloon/balloon_mirror.svg'

const AfterBirthDay = () => {
  return (
    <>
      <div className={`${styles.pattern__background} relative h-screen`}>
        <div className={`${styles.mid} ${styles.linear__gradient} ${styles.box__shadow}
        absolute aspect-square w-1/4 border-2 z-20 
        flex items-center rounded-[50%] text-white`}>
          <p className='text-6xl text-center leading-normal font-medium'> Boldog Születésnapot!</p>
        </div>
        <Image src={BalloonMirror} alt="balloon" className={`absolute h-1/2 ${styles.left__balloon} z-10`} />
        <Image src={Balloon} alt="balloon" className={`absolute h-1/2 ${styles.right__balloon} z-10`}/>
      </div>
      <Confetti mode='fall' particleCount={100} colors={['#717FAF', '#9293BA']}/>
    </>
    
  )
}

export default AfterBirthDay