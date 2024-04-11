import React, { Suspense, useEffect, useState } from 'react'
import HappyBirthdayText from '../happyBirthdayText/HappyBirthdayText'
import styles from '@/styles/BeforeBirthday/beforeBirthday.module.css';
import Timer from '../timer/Timer';
import ImageCarousel from '../imageCarousel/ImageCarousel';
import LoadingScreen from '../loadingScreen/LoadingScreen';

const BeforeBirthday = (param: {days: number , hours: number, minutes: number, seconds: number}) => {

  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className={`flex flex-col bg-orange-50 rounded lg:m-12 lg:p-6 md:m-8 md:p-4 m-4 p-2 ${styles.uniqueBackground} ${isModalOpen ? 'hidden': ''}`} >
        <div className='flex justify-center'>
          <HappyBirthdayText />
        </div>
        <Timer days={param.days} hours={param.hours} minutes={param.minutes} seconds={param.seconds} />
        <Suspense fallback={<LoadingScreen />}>
          <div className='flex justify-center'>
            <ImageCarousel modalOpen={isModalOpen} changeModalOpen={() => setModalOpen(!isModalOpen)}/>
          </div>
        </Suspense>
      </div>
    </>
  )
}

export default BeforeBirthday
