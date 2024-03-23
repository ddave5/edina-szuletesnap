import React from 'react'
import styles from '@/styles/HappyBirthdayText/happyBirtdayText.module.css'

const HappyBirthdayText = () => {
  return (
    <div className='w-full flex justify-center flex-col p-6'>
      <p className={`${styles.gradientText} mb-8`}>Boldog születésnapot!</p>
    </div>
  )
}

export default HappyBirthdayText