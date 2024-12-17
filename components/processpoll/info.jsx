"use client"
import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation';
const Info = ( handleClick, currentStepNumber ) => {
  const router = useRouter(); 
 const [values, setValues] = useState({
    name: "",
    email:"",
    employment_status:"",
    teaching:"",
    date_of_birth:"",
    address:"",
    gender:""
  })
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }


  const handlesumbit = async (e) =>{
    e.preventDefault();
    console.log(values,"valuessssss")
   
  }

  return (
    <>
   <form onSubmit={handlesumbit}  className='flex flex-col'>
    <div className='relative'>
      <div className='absolute left-[645px]  top-[213px] flex flex-col  h-full  gap-[1.2rem]'>
       <div className='flex flex-row-reverse gap-[2rem]  w-[662px]  h-[68px] '>
     <label className=' h-[34px] text-[18.11px] font-[700] '>الأسم</label>
     <div className=''>
      <input onChange={onChange} name='name' value={values.name} className=' w-[587px]  h-[68px] bg-[#F5F7F8]   rounded-[8px]  border-none focus:border-transparent focus:outline-none' />
     </div>
    </div>
    <div className='flex flex-row-reverse gap-1 w-[762px]  h-[68px] ml-[-3rem]'>
     <label className=' mt-2 h-[34px] text-[18.11px] font-[700] w-[8rem] '>البريد الالكتروني</label>
     <div className=''>
      <input onChange={onChange} name='email' value={values.email} className=' w-[587px]  h-[68px] bg-[#F5F7F8]   rounded-[8px]  border-none focus:border-transparent focus:outline-none' />
     </div>
    </div>
    <div  className='border-t-2 w-[581px] ml-[2rem] h-[3px] bg-[#F1F1F2] '/>
    <div className='flex flex-row-reverse gap-1 w-[725px] h-[38px] '>
    <label className='w-[202px] h-[33px]  font-[700] text-[17.54px] mt-2 mr-[-3rem]'> الحالة الوظيفية</label>
    <div className='mt-[1.2rem] mr-[5rem] flex flex-row gap-[15rem]'>
    <div className="flex items-center ">
    <input onChange={onChange} name='employment_status' value="طالب"  id="default-radio-1" type="radio"  className="w-[21px] h-[21px] text-blue-600 bg-[#D4DCE4] border-[2px] border-gray-300   dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 ">طالب</label>
    </div>
    <div className="flex items-center ">
    <input  onChange={onChange} name='employment_status' value="موظف" id="default-radio-1" type="radio" className="w-[21px] h-[21px] text-blue-600 bg-[#D4DCE4]  border-gray-300   dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 ">موظف</label>
    </div>
    </div>
    </div>
    <div className='flex flex-row-reverse gap-1 w-[662px]  h-[68pxs]'>
     <label className=' h-[34px] text-[18.11px] font-[700] mt-[0.5rem] ml-[2rem]'>التعليم</label>
     <div className=''>
      <input onChange={onChange} name='teaching' value={values.teaching}  className='  w-[587px]  h-[68px] bg-[#F5F7F8]   rounded-[8px]  border-none focus:border-transparent focus:outline-none' />
     </div>
    </div>
   <div className='flex flex-row'>
   <div className='w-[387px] h-[68px] flex flex-row-reverse gap-2'>
   <label className='w-[98px] h-[33px] text-[17.54px] font-[600]  mt-[0.5rem]  '> تاريخ ولادة</label>
   <input onChange={onChange} name='date_of_birth' value={values.date_of_birth}  className='w-[300px] h-[68px] bg-[#F5F7F8]  top-[340.95px] left-[576px] rounded-[8px]  border-none focus:border-transparent focus:outline-none' />
   </div>
   <div className='w-[268px] h-[68px] flex flex-row-reverse gap-2'>
   <label className='w-[39px] h-[33px] text-[17.54px] font-[600]   mt-[0.5rem] ml-[2rem]'>العمر</label>
   <input onChange={onChange} name='date_of_birth' value={values.date_of_birth}  className='w-[188px] h-[68px] bg-[#F5F7F8]   rounded-[8px]  border-none focus:border-transparent focus:outline-none' />
   </div>
    </div>
    <div className='flex flex-row-reverse gap-1 w-[662px]  h-[68pxs]'>
     <label className=' h-[34px] text-[18.11px] font-[700] '>عنوان السكن</label>
     <div className=''>
      <input onChange={onChange} name='address' value={values.address}  className=' w-[587px]  h-[68px] bg-[#F5F7F8]   rounded-[8px]  border-none focus:border-transparent focus:outline-none' />
     </div>
    </div>   
    <div  className='border-t-2 w-[581px] ml-[2rem] h-[3px] bg-[#F1F1F2] '/>
    <div className='flex flex-row-reverse gap-1 w-[725px] h-[38px] '>
    <label className='w-[102px] h-[33px]  font-[700] text-[17.54px] mt-[0.5rem] ml-[2rem]'> الجنس </label>
    <div className='mt-[1.2rem] mr-[5rem] flex flex-row gap-[15rem]'>
    <div className="flex items-center ">
    <input id="default-radio-1" type="radio" onChange={onChange} name='gender' value="ذكر"  className="w-[21px] h-[21px] text-blue-600 bg-[#D4DCE4] border-[2px] border-gray-300   dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 ">ذكر</label>
    </div>
    <div className="flex items-center ">
    <input id="default-radio-1" type="radio"  className="w-[21px] h-[21px] text-blue-600 bg-[#D4DCE4]  border-gray-300   dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600" onChange={onChange} name='أنثى' value={values.gender}/>
    <label for="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 ">أنثى</label>
    </div>
    </div>
    </div>
     </div>
      </div> 
    <button onClick={() => handleClick("next")} className='h-[68px] bg-[#008F9C] absolute top-[1092px]  w-[1840px] text-[32px] font-[600] text-white'>التالي</button>
    </form>
    </>
  
   
 
  )
}

export default Info
