import React, { useState, ReactNode, useEffect } from 'react'
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import { MdFullscreen } from "react-icons/md";
import {images} from '@/assets/images/Edina/images';
import { MdClose } from "react-icons/md";
import Image from 'next/image';
import Modal from 'react-modal';

const ImageCarousel = (param: {modalOpen: boolean, changeModalOpen: any}) => {

  const [curr, setCurr] = useState(0);
  const prev = () => setCurr( (curr) => (images != null && curr === 0 ? images.length - 1 : curr - 1));
  const next = () => setCurr( (curr) => (images != null && curr === images.length - 1 ? 0 : curr + 1));
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    param.changeModalOpen();
  }
  const closeModal = () => {
    setIsOpen(false);
    param.changeModalOpen();
  }

  const modalStyle = {
    content: {
      backgroundColor: 'transparent',
      border: 'none',
      padding: 0,
      inset: 0,
    },
  }

  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <div className='overflow-hidden relative w-5/6 md:w-4/5 lg:w-3/4 xl:w-1/2' >
          <div className={'flex transition-transform ease-out duration-1000 select-none'} 
          style={{transform: `translateX(-${curr * 100}%)`}}> 
            {[
              ...images.map((image, index) => <Image src={image} alt={`${index}`} key={index} />)
            ]}
          </div>
          <div className='absolute inset-0 flex items-center justify-between p-4 opacity-50'>
            <button className='p-1 h-fit rounded-full shadow bg-red-100 text-gray-800 hover:bg-white' onClick={prev}>
              <MdNavigateBefore/>
            </button>
            <button className='p-1 h-fit rounded-full shadow bg-red-100 text-gray-800 hover:bg-white' onClick={next}>
              <MdNavigateNext />
            </button>
          </div>
          <div className='absolute bottom-1 right-3 opacity-50'>
            <button className='p-1 h-fit text-xl bg-red-100 text-gray-800 shadow rounded-full' onClick={openModal} onAuxClick={() => console.log('macska')}>
              <MdFullscreen /> 
            </button>
          </div>
        </div>
        <div className='flex justify-center mt-2 '>
          <div className='text-center text-xl sm:text-2xl border-2 rounded border-solid bg-white w-fit p-1 select-none'>
            {1994+curr}
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={modalStyle}>
        <div className='absolute left-0 top-0 h-full w-full flex justify-center items-center'>
          <Image src={images[curr]} alt='fullImage' className='aspect-[3/2] max-h-[90vh] w-auto'/>
        </div>
        <div className='absolute inset-0 flex justify-between items-center p-4 '>
          <button className='p-1 h-fit rounded-full shadow bg-red-500 text-gray-800 hover:bg-white' onClick={prev}>
            <MdNavigateBefore/>
          </button>
          <button className='p-1 h-fit rounded-full shadow bg-red-500 text-gray-800 hover:bg-white' onClick={next}>
            <MdNavigateNext />
          </button>
        </div>
        <button onClick={closeModal} className='absolute right-0 text-3xl'>
            <MdClose/>
        </button>
      </Modal>
    </>
    
  )
}

export default ImageCarousel
