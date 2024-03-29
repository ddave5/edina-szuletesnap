import React, { useState, ReactNode } from 'react'
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";

interface Props {
  children?: ReactNode,
  slides: Array<any>
}

const ImageCarousel = ({children: slides}: any) => {

  const [curr, setCurr] = useState(0);
  const prev = () => setCurr( (curr) => (slides != null && curr === 0 ? slides.length - 1 : curr - 1));
  const next = () => setCurr( (curr) => (slides != null && curr === slides.length - 1 ? 0 : curr + 1));
  const moveToImage = (index: number) => setCurr(index);
  return (
    <div className='overflow-hidden relative w-5/6 md:w-4/5 lg:w-3/4 xl:w-1/2' >
      <div className='flex transition-transform ease-out duration-1000 select-none' 
      style={{transform: `translateX(-${curr * 100}%)`}}>{slides}</div>
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
          {/* {
            slides.map( (_: any, i: number) => (
              <button className={`
                transition-all w-3 h-3 bg-white rounded-full aspect-square
                ${curr === i ? "p-2" : "bg-opacity-50"}
              `} onClick={() => moveToImage(i)}
              key={i}/>
            ))
          } */}
        </div>
      </div>
    </div>
  )
}

export default ImageCarousel