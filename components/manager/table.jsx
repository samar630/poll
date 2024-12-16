import React from 'react'

const Managertable = () => {
  return (
    <div className='flex flex-row w-full h-full relative'>
      <div className=''>
        <img src='/image/imageoftable.png' className='w-[358.73px] h-[1030px]'/>
      </div>
     <div className='card'>
          <div className='flex flex-col absolute top-[36px] left-[380px] '>
        <div className='relative w-[737px] h-[44px]'>
        <input placeholder='البحث' className='p-1 absolute text-right w-[737px] h-[44px] border-[1px] border-[#D7DBE7]  rounded-[28px] focus:border-[#D7DBE7] focus:outline-none' />
        <img className=' absolute w-[16px] h-[16px] items-start mt-[1rem] ml-[1rem]' src='image/search.png' />
         </div> 
          </div>
          <div className='absolute top-[36] right-[10%] flex flex-row gap-[4rem] '>
            <img className='w-[44px] h-[44px]' src='image/natification.png' />
            <div className='flex flex-col text-center items-center   '>
              <span className='w-[107px] h-[38px] text-[24px] font-[600] text-[#14213D]'>اسم المدير</span>
              <span className='w-[55px] h-[24px] font-[400] text-[16px] text-[#71778E]'>مرحبا بك</span>
            </div>
          </div> 
          <div className='flex flex-col absolute top-[158px] left-[420px]'>
          <div className='flex flex-row  w-[1108px] h-[707px] gap-[25%]'>
          <div className=' relative'>
            <div className=' relative flex flex-col rounded-[20px] bg-[#007B8D] text-[#FFFFFF] w-[320px] h-[140px] gap-[50%] p-[1rem]'>
               <div className='flex flex-row gap-[50%]'>
               <sapn className='flex flex-row gap-1' > <img className='w-[13.33px] h-[13.33px] mt-2' src='image/time.png' /> <p className='w-[34px] h-[20px] font-[400]'>التاريخ</p></sapn>
               <span className=''>نسبة النتائج</span>  
               </div>
                <div className='flex flex-col absolute right-0 bottom-3 p-3 gap-2'>
                <p className='text-[14px] font-[400]'>10% زيادة أسبوعية</p>
                <img className='w-[31px] h-[26px]' src='image/card1.png' />
                </div>
            </div>
          </div>
          <div className=' relative'>
            <div className=' relative flex flex-col rounded-[20px] bg-[#2A2828] text-[#FFFFFF] w-[320px] h-[140px] gap-[50%] p-[1rem]'>
               <div className='flex flex-row gap-[50%]'>
               <sapn className='flex flex-row gap-1' > <img className='w-[13.33px] h-[13.33px] mt-2' src='image/note.png' /> </sapn>
               <span className=''>عدد الأستطلاعات المنتهية</span>  
               </div>
                <div className='flex flex-col absolute right-0 bottom-3 p-3 gap-2'>
                <sapn className='flex flex-row gap-1' > <img className='w-[13.33px] h-[13.33px] mt-2' src='image/time.png' /> <p className='w-[34px] h-[20px] font-[400]'>التاريخ</p></sapn>
                <sapn className='flex flex-row gap-1' > <img className='w-[13.33px] h-[13.33px] mt-2' src='image/person.png' /> <p className='w-[34px] h-[20px] font-[400]'>2344</p></sapn>
                </div>
            </div>
          </div>
          <div className=' relative'>
            <div className=' relative flex flex-col rounded-[20px] bg-[#E9EDF5] text-[#007B8D] w-[320px] h-[140px] gap-[50%] p-[1rem]'>
               <div className='flex flex-row gap-[50%]'>
               <sapn className='flex flex-row gap-1' > <img className='w-[13.33px] h-[13.33px] mt-2' src='image/note.png' /> </sapn>
               <span className=''>عدد المشاركين</span>  
               </div>
                <div className='flex flex-col absolute right-0 bottom-3 p-3 gap-2'>
                <sapn className='flex flex-row gap-1' > <img className='w-[13.33px] h-[13.33px] mt-2' src='image/time.png' /> <p className='w-[34px] h-[20px] font-[400]'>التاريخ</p></sapn>
                <sapn className='flex flex-row gap-1' > <img className='w-[13.33px] h-[13.33px] mt-2' src='image/person.png' /> <p className='w-[34px] h-[20px] font-[400]'>2344</p></sapn>
                </div>
            </div>
          </div>
          </div>
          <div>
    <div className="bg-gray-100  absolute top-[260px] w-[1560px]">
    <div className="">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className=" justify-between items-center flex flex-row ">
                <div className="fkex flex-col items-center text-center "><span className='bg-[#007B8D] text-white w-[76px] h-[36px]  rounded-[12px] font-[600] text-[12px] p-2'>اضافة</span> <button className='w-[110px] h-[36px] font-[600] text-[12px] bg-[#E7E9ED] text-[#007B8D]  rounded-[12px] p-2'>تصدير الأكسل</button></div>
                <button className="bg-white text-blue-500 py-2 px-4 rounded hover:bg-gray-200">
                الأستطلاعات 
                </button>
            </div>
            <table className="w-full divide-y divide-gray-200">
                <thead className="">
                    <tr>
                        <th className="px-6 py-3 text-left text-[12px] text-[#71778E] font-[400] uppercase tracking-wider">تفاصيل</th>
                        <th className="px-6 py-3 text-left text-[12px] text-[#71778E] font-[400]  uppercase tracking-wider"> وصف بسيط</th>
                        <th className="px-6 py-3 text-left text-[12px] text-[#71778E] font-[400]  uppercase tracking-wider">النتائج</th>
                        <th className="px-6 py-3 text-left text-[12px] text-[#71778E] font-[400]  uppercase tracking-wider">عدد الأسئلة</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap font-[400] text-[14px] text-[#007B8D]">عرض</td>
                        <td className="px-6 py-4 whitespace-nowrap font-[400] text-[14px] text-[#14213D] flex flex-row gap-1"><img src='image/pollgreen.png' className='w-[12px] h-[12px] mt-[2px]'/><span>21.33%</span></td>
                        <td className="px-6 py-4 whitespace-nowrap font-[400] text-[14px] text-[#14213D]">Kathryn Murphy</td>
                        <td className="px-6 py-4 whitespace-nowrap font-[400] text-[14px] text-[#14213D]">Kathryn Murphy</td>
                    </tr>
                    <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-[400] text-[14px] text-[#007B8D]">عرض</td>
                    <td className="px-6 py-4 whitespace-nowrap font-[400] text-[14px] text-[#14213D] flex flex-row gap-1"><img src='image/pollgreen.png' className='w-[12px] h-[12px] mt-[2px]'/><span>21.33%</span></td>
                        <td className="px-6 py-4 whitespace-nowrap">Kathryn Murphy</td>
                        <td className="px-6 py-4 whitespace-nowrap font-[400] text-[14px] text-[#14213D]">Kathryn Murphy</td>
                    </tr>
                    <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-[400] text-[14px] text-[#007B8D]">عرض</td>
                    <td className="px-6 py-4 whitespace-nowrap font-[400] text-[14px] text-[#14213D] flex flex-row gap-1"><img src='image/pollgreen.png' className='w-[12px] h-[12px] mt-[2px]'/><span>21.33%</span></td>
                        <td className="px-6 py-4 whitespace-nowrap">Kathryn Murphy</td>
                        <td className="px-6 py-4 whitespace-nowrap font-[400] text-[14px] text-[#14213D]">Kathryn Murphy</td>
                    </tr>
                    <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-[400] text-[14px] text-[#007B8D]">عرض</td>
                    <td className="px-6 py-4 whitespace-nowrap font-[400] text-[14px] text-[#14213D] flex flex-row gap-1"><img src='image/pollgreen.png' className='w-[12px] h-[12px] mt-[2px]'/><span>21.33%</span></td>
                        <td className="px-6 py-4 whitespace-nowrap">Kathryn Murphy</td>
                        <td className="px-6 py-4 whitespace-nowrap font-[400] text-[14px] text-[#14213D]">Kathryn Murphy</td>
                    </tr>
                    <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-[400] text-[14px] text-[#007B8D]">عرض</td>
                    <td className="px-6 py-4 whitespace-nowrap font-[400] text-[14px] text-[#14213D] flex flex-row gap-1"><img src='image/pollgreen.png' className='w-[12px] h-[12px] mt-[2px]'/><span>21.33%</span></td>
                        <td className="px-6 py-4 whitespace-nowrap">Kathryn Murphy</td>
                        <td className="px-6 py-4 whitespace-nowrap font-[400] text-[14px] text-[#14213D]">Kathryn Murphy</td>
                    </tr>
                    <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-[400] text-[14px] text-[#007B8D]">عرض</td>
                    <td className="px-6 py-4 whitespace-nowrap font-[400] text-[14px] text-[#14213D] flex flex-row gap-1"><img src='image/pollgreen.png' className='w-[12px] h-[12px] mt-[2px]'/><span>21.33%</span></td>
                        <td className="px-6 py-4 whitespace-nowrap">Kathryn Murphy</td>
                        <td className="px-6 py-4 whitespace-nowrap font-[400] text-[14px] text-[#14213D]">Kathryn Murphy</td>
                    </tr>
                    <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-[400] text-[14px] text-[#007B8D]">عرض</td>
                    <td className="px-6 py-4 whitespace-nowrap font-[400] text-[14px] text-[#14213D] flex flex-row gap-1"><img src='image/pollgreen.png' className='w-[12px] h-[12px] mt-[2px]'/><span>21.33%</span></td>
                        <td className="px-6 py-4 whitespace-nowrap">Kathryn Murphy</td>
                        <td className="px-6 py-4 whitespace-nowrap font-[400] text-[14px] text-[#14213D]">Kathryn Murphy</td>
                    </tr>
                    <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-[400] text-[14px] text-[#007B8D]">عرض</td>
                    <td className="px-6 py-4 whitespace-nowrap font-[400] text-[14px] text-[#14213D] flex flex-row gap-1"><img src='image/pollgreen.png' className='w-[12px] h-[12px] mt-[2px]'/><span>21.33%</span></td>
                        <td className="px-6 py-4 whitespace-nowrap">Kathryn Murphy</td>
                        <td className="px-6 py-4 whitespace-nowrap font-[400] text-[14px] text-[#14213D]">Kathryn Murphy</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>
   </div>
  </div>
         
      </div>
    </div>
  )
}

export default Managertable
