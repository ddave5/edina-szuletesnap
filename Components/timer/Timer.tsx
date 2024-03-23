import React from 'react'
import style from '@/styles/Timer/Timer.module.css'

const Timer = (param: {days: number , hours: number, minutes: number, seconds: number}) => {
  return (
    <div className="flex justify-center flex-col mb-8">
      <h2 className='text-center mb-8 font-semibold text-sm sm:text-base md:text-lg lg:text-xl'>Hiszen már nem lesz csak a húsz éveseké a világ...</h2>
      <div className="flex justify-center mb-8">
        <div className="flex flex-col justify-center align-center bg-slate-50 mr-1 lg:w-[200px] lg:h-[200px] w-[75px] h-[75px] sm:w-[100px] sm:h-[100px] md:w-[150px] md:h-[150px] lg:mr-2">
          <span className={`${style.poppins} text-xs lg:p-6 text-center p-2 lg:text-7xl sm:text-xl md:text-3xl`}>{param.days}</span>
          <span className={`${style.poppins} text-center text-[10px] sm:text-sm md:text-lg`}>Nap</span>
        </div>
        <div className="flex flex-col justify-center align-center bg-slate-50 mr-1 lg:w-[200px] lg:h-[200px] w-[75px] h-[75px] sm:w-[100px] sm:h-[100px] md:w-[150px] md:h-[150px] lg:mr-2">
          <span className={`${style.poppins} text-center text-xs p-2 lg:text-7xl lg:p-6 sm:text-xl md:text-3xl`}>{param.hours}</span>
          <span className={`${style.poppins} text-center text-[10px] sm:text-sm md:text-lg`}>Óra</span>
        </div>
        <div className="flex flex-col justify-center align-center bg-slate-50 mr-1 lg:w-[200px] lg:h-[200px] w-[75px] h-[75px] sm:w-[100px] sm:h-[100px] md:w-[150px] md:h-[150px] lg:mr-2">
          <span className={`${style.poppins} text-center text-xs p-2 lg:text-7xl lg:p-6 sm:text-xl md:text-3xl`}>{param.minutes}</span>
          <span className={`${style.poppins} text-center text-[10px] sm:text-sm md:text-lg`}>Perc</span>
        </div>
        <div className="flex flex-col justify-center align-center bg-slate-50 lg:w-[200px] lg:h-[200px] w-[75px] h-[75px] sm:w-[100px] sm:h-[100px] md:w-[150px] md:h-[150px]">
          <span className={`${style.poppins} text-center text-xs p-2 lg:text-7xl lg:p-6 sm:text-xl md:text-3xl`}>{param.seconds}</span>
          <span className={`${style.poppins} text-center text-[10px] sm:text-sm md:text-lg`}>Másodperc</span>
        </div>
      </div>
      <h2 className='text-center font-semibold text-sm sm:text-base md:text-lg lg:text-xl'>Addig is egy kis ízelítő ebből a csodás 30 évből:</h2>
    </div>
  )
}

export default Timer