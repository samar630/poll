import Stepper from '../../../components/processpoll/stepper'
import Info from '../../../components/processpoll/info'
import React from 'react'
import Questionshome from '../../../components/processpoll/questionhome'

const page = () => {
  return (
    <div className='flex flex-row'>
          <div className='h-[1160px]  w-[560px] '>
			    <img src='/image/questions.png' className='h-[1160px]  w-[560px] ' /> 
          </div>
          <div className='felx flex col'>
            <Questionshome  />
              <Info />
          </div>       
    </div>
  )
}

export default page
