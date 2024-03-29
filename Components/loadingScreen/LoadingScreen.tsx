import React from 'react'
import {BounceLoader} from 'react-spinners'

const LoadingScreen = () => {
  return (
    <div className='w-full flex justify-center '>
      <div className='flex items-center justify-center flex-col w-[200px] h-[140px] bg-orange-400 rounded-md'>
        <h1 className='inline-block text-lg font-semibold	text-white'>Töltés...</h1>
        <BounceLoader color="#ffffff"/>
      </div>
    </div>
  )
}

export default LoadingScreen