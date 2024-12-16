"use client"
import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
import Info from './info';
import Pollask from './pollask';
import Finish from './finish';

const Step = (props) => {
   
  
  useEffect(() =>{
  console.log(props.currentStepNumber, "props")
  },[props.currentStepNumber])
 
   
  return (
    <div className='flex flex-col '> 
       {props.currentStepNumber === 1 ?
           <Info currentStepNumber={props?.currentStepNumber}/> :
              props.currentStepNumber === 2 ?
              <Pollask
              currentStepNumber={props?.currentStepNumber}
              /> : <Finish />
 
       }  
    </div>
  )
}

export default Step
