"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
const Finish = () => {
    const router = useRouter(); 
    const handlesumbit = () =>{
      router.push('/manager')
    }
  return (
    <div className='relative'>
     <div className=' absolute w-[456px] h-[456px] top-[197px] left-[813px]'>
      <img src='/image/finishstep.png' />
     </div>
     <div className=' absolute top-[653px] left-[892px] flex flex-col '>
      <span className='w-[205px] h-[90px] font-[600] text-[48px] text-[#007B8D]'>تم الإنتهاء </span>
      <p className='w-[134px] h-[34px] font-[400] text-[18px] text-[#000000] ml-[2rem]'>شرح عن الأستطلاع</p>
     </div>
     <div>
      <button onClick={handlesumbit} className='absolute left-0 bottom-0 w-[1570px] h-[68px] top-[962px] bg-[#008F9C] text-[#FFFFFF] text-center'>تم</button>
     </div>
    </div>
  )
}

export default Finish
