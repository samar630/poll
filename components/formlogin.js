
"use client"
import { Postauthlogin } from '../redux/api/auth'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation';
const Formlogin = () => {
   const router = useRouter(); 
  const [values, setValues] = useState({
    username: "",
    password:"",
  })
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
 
  const dispatch = useDispatch()

const submitHandler = async (e) => {
  e.preventDefault();
  try{
    dispatch(Postauthlogin(values))
    router.push('/questions')
  }
  catch{
    console.log("fix")
  }
}

  return (
    <div className='flex  w-full relative'> 
    <div className='top-[82px] left-[1056px] absolute text-right' >
    <div className='text-[96px] w-[308px] h-[92px]   font-[300] text-[#3F3F44] flex flex-row-reverse gap-2'> <span>أهلن</span> <span>بك</span> </div>
    </div>
     <form onSubmit={submitHandler} className='flex flex-col  absolute w-[788px] h-[595px] top-[257px] left-[576px] text-right'  >
           <div className="w-[788px] h-[192.35px] ">
           <label  className="right-0 text-[32px]  font-[400] text-[#3F3F44] w-[377px] h-[62px] top-[257px] left-[987px]">أسم المستخدم او الإيميل</label>
            <input onChange={onChange} value={values.username} type="text" placeholder='youremail@gmail.com' name="username" className="w-[787.88px] h-[108.41px] top-[340.95px] left-[576px] rounded-[8px]  bg-[#F6F6F6] border-none focus:border-transparent focus:outline-none p-2"   />
           </div>   
          <div className="w-[788px] h-[192.35px] ">
              <div className='flex gap-[50%] '>
              <span className='w-[157px] h-[31px] top-[530px] left-[576px] text-[14px] font-[400] '>نسيت كلمة المرور ؟</span>
              <label  className=" right-0 text-[32px]  font-[400] text-gray-900 w-[377px] h-[62px] top-[257px] left-[987px]  text-right">كلمة المرور</label>   
              </div>
            <input  type="text" placeholder='أدخل كلمة المرور' name="password" className="w-[787.88px] h-[108.41px] top-[340.95px] left-[576px] rounded-[8px] bg-[#F6F6F6] border-none focus:border-transparent focus:outline-none p-2" value={values.password} onChange={onChange} />
          </div> 
        <button  className='w-[787.88px] text-[32px] text-[#FFFFFF]  font-[700] h-[108.41px] top-[743.59px] left-[576px] rounded-[8px] bg-[#007B8D]' > تسجيل دخول</button> 
      </form>  
      <div className='w-[393px] h-[60px]  top-[807px] left-[973px] absolute text-right flex flex-col gap-[18px]'> 
        <div className='flex flex-row gap-[1rem] text-[18px] font-[400] align-center relative'>
          <div className='absolute align-right flex flex-row top-[3rem] left-[30%] '>
          <button className='w-[393px] h-[60px] font-[400]  text-[#007B8D] flex flex-row gap-2'> <span>تواصل معنا  </span> <p className='font-[400] text-[#474747] '>ليس لديك حساب ؟  </p>  </button>
          </div>
          </div>
      </div>
      <div className='text-[18px] text-[#474747] flex flex-row-reverse gap-[12px]   absolute top-[990px] left-[576px] '>
       <span className='w-[125px] h-[34px]'>شروط الخصوصية</span>
       <span className='w-[125px] h-[34px]'>الدعم الفني</span>
      </div>
  </div>
  )
}

export default Formlogin
