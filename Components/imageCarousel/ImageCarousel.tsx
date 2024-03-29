import React, { useState, useEffect } from 'react'
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import { images } from '@/assets/images/Edina/images';
import Image from 'next/image';

const ImageCarousel = () => {

  const [curr, setCurr] = useState(0);
  const prev = () => setCurr( (curr) => (images != null && curr === 0 ? images.length - 1 : curr - 1));
  const next = () => setCurr( (curr) => (images != null && curr === images.length - 1 ? 0 : curr + 1));

  return (
    <div className='overflow-hidden relative w-5/6 md:w-4/5 lg:w-3/4 xl:w-1/2' >
      <div className='flex transition-transform ease-out duration-1000 select-none' 
      style={{transform: `translateX(-${curr * 100}%)`}}>
        {images.map( (image, index) => 
          <Image
          src={image} 
          alt="image" 
          key={index}/> 
        )}
      </div>
      <div className='absolute inset-0 flex items-center justify-between p-4 '>
        <button className='p-1 h-fit rounded-full shadow bg-red-100 text-gray-800 hover:bg-white' onClick={prev}>
          <MdNavigateBefore/>
        </button>
        <button className='p-1 h-fit rounded-full shadow bg-red-100 text-gray-800 hover:bg-white' onClick={next}>
          <MdNavigateNext />
        </button>
      </div>
      <div className='absolute bottom-4 right-0 left-0'>
        <div className='flex items-center justify-center gap-2'>
        </div>
      </div>
    </div>
  )
}

export default ImageCarousel