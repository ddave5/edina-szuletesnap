import React from 'react'
import HappyBirthdayText from '../happyBirthdayText/HappyBirthdayText'
import styles from '@/styles/BeforeBirthday/beforeBirthday.module.css';
import Timer from '../timer/Timer';
import ImageCarousel from '../imageCarousel/ImageCarousel';

const BeforeBirthday = (param: {days: number , hours: number, minutes: number, seconds: number}) => {

  return (
    <>
      <div className={`flex flex-col bg-orange-50 rounded lg:m-12 lg:p-6 md:m-8 md:p-4 m-4 p-2 ${styles.uniqueBackground}`}>
         <div className='flex justify-center'>
          <HappyBirthdayText />
        </div>
         <Timer days={param.days} hours={param.hours} minutes={param.minutes} seconds={param.seconds} />
        <div className='flex justify-center'>
          <ImageCarousel />
        </div>
      </div>
    </>
  )
}

export default BeforeBirthday