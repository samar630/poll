
import React, { useEffect, useRef, useState } from 'react'
const Process= ({ steps, currentStepNumber, handleClick}) => {
    const [stepperSteps, setStep] = useState([]);
	const stepsStateRef = useRef();
	const array_image = ['/image/questions.png','/image/poll.png', '/image/finish.png']
   useEffect(() => {
		const stepsState = steps.map((step, index) => {
			const stepObj = {};
			stepObj.description = step;
			stepObj.completed = false;
			stepObj.highlighted = index === 0 ? true : false;
			stepObj.selected = index === 0 ? true : false;
			return stepObj;
		});
		stepsStateRef.current = stepsState;
		const currentSteps = updateStep(currentStepNumber - 1, stepsState)
		setStep(currentSteps)
	}, []);
	useEffect(() => {
		const currentSteps = updateStep(currentStepNumber - 1, stepsStateRef.current)
		setStep(currentSteps)
        console.log(currentStepNumber, 'currentStepNumber')
	}, [currentStepNumber]);
	function updateStep(stepNumber, steps) {
		const newSteps = [...steps];
		let stepCounter = 0;
		while (stepCounter < newSteps.length) {
			//current step 
			if (stepCounter === stepNumber) {
				newSteps[stepCounter] = {
					...newSteps[stepCounter],
					highlighted: true,
					selected: true,
					completed: false
				};
				stepCounter++;
			}
			// Past step
			else if (stepCounter < stepNumber) {
				newSteps[stepCounter] = {
					...newSteps[stepCounter],
					highlighted: false,
					selected: true,
					completed: true
				};
				stepCounter++;
			}
			// Future steps 
			else {
				newSteps[stepCounter] = {
					...newSteps[stepCounter],
					highlighted: false,
					selected: false,
					completed: false
				}
				stepCounter++;
			}
		}
		return newSteps
	}

	useEffect(() =>{
		console.log(steps, "steps")
	 },[])
  return (
    <div className='flex flex-row relative'>
           <div className='flex flex-col top-[62px] left-[645px] gap-[6rem] absolute'>
		   <div className='flex  w-[708.39px]  h-[60px] flex-row  gap-[2rem]'>
		      <div className='w-[20rem] h-[61px] gap-[1rem]' >
              <button onClick={() => handleClick("next")} className="flex flex-row  gap-[1rem] transition duration-300 ease-in-out  text-black  font-normal rounded focus:text-[#008E9B]"> 
			   <img className='w-[58px] h-[58px] ' src='/image/info.png' alt='info' /> 
			   <span className='mt-[1.2rem] text-[17.78px] font-[600]'>{steps[0]}</span>
		      </button>
			  </div>
			  <svg className='ml-[-2.2rem] mt-[2rem]' width="41" height="2" viewBox="0 0 41 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M41 0H0V2H41V0Z" fill="#008897"/>
              </svg>
			  <div className='w-[14rem] h-[61px] gap-[1rem]' >
              <button onClick={() => handleClick("next")} className="flex flex-row  gap-[1rem] transition duration-300 ease-in-out  text-black  font-normal rounded focus:text-[#008E9B]"> 
			   <img className='w-[58px] h-[58px] ' src='/image/poll.png' alt='info' /> 
			   <span className='mt-[1.2rem] text-[17.78px] font-[600]'>{steps[1]}</span>
		      </button>
			  </div>
			  <svg className='ml-[-2.2rem] mt-[2rem]' width="41" height="2" viewBox="0 0 41 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M41 0H0V2H41V0Z" fill="#008897"/>
              </svg>
			  <div className='w-[14rem] h-[61px] gap-[1rem]' >
              <button onClick={() => handleClick("next")} className="flex flex-row  gap-[1rem] transition duration-300 ease-in-out  text-black  font-normal rounded focus:text-[rgb(0,142,155)]"> 
			   <img className='w-[58px] h-[58px] ' src='/image/finish.png' alt='info' /> 
			   <span className='mt-[1.2rem] text-[17.78px] font-[600]'>{steps[2]}</span>
		      </button>
			  </div>
		   </div>
           </div>
    </div>
  )
}

export default Process
