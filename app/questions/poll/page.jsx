"use client"
import Questionshome from '../../../components/processpoll/questionhome'
import Pollask from '../../../components/processpoll/pollask'
import React, { useEffect } from 'react'

const poll = () => {
  useEffect(() =>{

  })
  return (
  	<div className=' flex flex-row'>
		  <div className='h-[1160px]  w-[560px] '>			
	   	<img src='/image/step2.png' className='h-[1160px]  w-[560px] ' /> 
	 	  </div>
		    <div className='flex flex-col'>
		      <Questionshome  />
		       <Pollask />     
		  </div>
	  </div>
  )
}

export default poll
