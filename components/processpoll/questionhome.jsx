'use client'
import Step from './step';
import Stepper from './stepper'
import React, { useEffect, useState } from 'react'

const Questionshome = () => {
    const stepArray = [
		"المعلومات الخاصة بك",
		"الاسئلة",
		"الموافقة"
	];

    const [currentStep, setCurrentStep] = useState(1);
    const handleClick = (clickType) => {
		let newStep = currentStep;
		(clickType == "next") ? newStep++ : newStep--;
		// Check if steps are within the boundary
		if (newStep > 0 && newStep <= stepArray.length) {
			setCurrentStep(newStep)
		}
	}
  const prient = () =>{
    console.log(currentStep, "currentStep")
  }
  useEffect(() =>{
    prient(                                                                                                                                                                                   )
  },)
  return (
   
   <div className=''>  
   <Stepper
		steps={stepArray}
		currentStepNumber={currentStep}
        handleClick={handleClick}
	/>
   </div>
 
    
 
  )
}

export default Questionshome