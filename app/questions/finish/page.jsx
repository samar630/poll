import Finish from '../../../components/processpoll/finish'
import Questionshome from '../../../components/processpoll/questionhome'
import React from 'react'

const page = () => {
  return (
  	<div className=' flex flex-row'>
		  <div className='h-[1160px]  w-[560px] '>			
	   	<img src='/image/step3.png' className='h-[1160px]  w-[560px] ' /> 
	 	  </div>
		    <div className='flex flex-col'>
		      <Questionshome  />
		       <Finish />     
		  </div>
	  </div>
  )
}

export default page
