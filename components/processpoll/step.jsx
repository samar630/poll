"use client"
import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
import Info from './info';
import Pollask from './pollask';
import Finish from './finish';

const Step = (props) => {

useEffect(() =>{

},[props.currentStepNumber, "props.currentStepNumber11"])
 
   
  return (
    <div className='flex flex-col '> 
    {props.currentStepNumber === 1 ? 
    <Info currentStepNumber={props.currentStepNumber} handleClick={props.handleClick()} /> : 
    props.currentStepNumber === 2 ? 
     <Pollask />  :  
     <Finish />  }
 
    </div>
  )
}

export default Step
