
import Formlogin from '../../../components/formlogin'
import React from 'react'

const index = () => {
  return (
    <div className='flex flex-row h-full w-full'>
      <div className='flex flex-row justify-center w-[492px] h-[1160px] text-white relative' style={{ backgroundImage: `url('/image/login.png')` }}>
        <p className='text-[62.24px]
        w-[373px] h-[117px] top-[832px] left-[50px]
         font-[600] leading-[116pxs] absolute'>تسجيل دخول</p>
         <p className='w-[89.06px] h-[34px] top-[973px]  Left-[191px] text-[#C9C9C9] absolute '>شرح بسيط</p>
      </div>
      <div className=''>
          <Formlogin/>
      </div>
      
    </div>
  )
}

export default index
