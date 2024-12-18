"use client"
import React, { useState, useEffect, useRef } from 'react'
import Process from './step_proccess';

const Stepper = ({ steps, currentStepNumber, handleClick}) => {
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
	 console.log(currentStepNumber , "currentStepNumber")
	 },[currentStepNumber])
	return (
		<div className=' flex flex-row'>
		  <div className='flex flex-col'>
		  <Process 
				steps={steps}
				currentStepNumber={currentStepNumber}
				handleClick={handleClick}
			 />
		  </div>
		</div>
	
       
	
	)
}
export default Stepper