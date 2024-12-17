"use client"
import { solvepoll } from '../../redux/api/auth';
import { title } from 'process';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
const initialQuestions  = {
    title: "Math Poll",
    description: "this poll is Math exam",
    questions: [
        {
            text: "3 + 3 * 2",
            answers: [
                {
                    text: "12",
                    points: 0
                },
                {
                    text: "9",
                    points: 3
                },
                {
                    text: "6",
                    points: 0
                },
                {
                    text: "5",
                    points: 0
                }
            ],
            selectedAnswer: null, 
            points: 0 
        },
        {
            text: "3 * 10 / (10 - 5)",
            answers: [
                {
                    text: "6",
                    points: 3
                },
                {
                    text: "5",
                    points: 0
                },
                {
                    text: "8",
                    points: 0
                },
                {
                    text: "1",
                    points: 0
                }
            ],
            selectedAnswer: null, 
            points: 0
        },
        {
            text: "log(0)",
            answers: [
                {
                    text: "undefined",
                    points: 4
                },
                {
                    text: "0",
                    points: 0
                },
                {
                    text: "1",
                    points: 0
                },
                {
                    text: "2",
                    points: 0
                }
            ],
            selectedAnswer: null, 
            points: 0
        },
        {
            text: "1+5 * 9",
            answers: [
                {
                    text: "undefined",
                    points: 0
                },
                {
                    text: "0",
                    points: 0
                },
                {
                    text: "46",
                    points: 5
                },
                {
                    text: "2",
                    points: 0
                }
            ],
            selectedAnswer: null, 
            points: 0
        },
        {
            text: "3 + 3 * 2",
            answers: [
                {
                    text: "12",
                    points: 0
                },
                {
                    text: "9",
                    points: 3
                },
                {
                    text: "6",
                    points: 0
                },
                {
                    text: "5",
                    points: 0
                }
            ],
            selectedAnswer: null, 
            points: 0 
        },
        {
            text: "3 * 10 / (10 - 5)",
            answers: [
                {
                    text: "6",
                    points: 3
                },
                {
                    text: "5",
                    points: 0
                },
                {
                    text: "8",
                    points: 0
                },
                {
                    text: "1",
                    points: 0
                }
            ],
            selectedAnswer: null, 
            points: 0
        },
        {
            text: "log(0)",
            answers: [
                {
                    text: "undefined",
                    points: 4
                },
                {
                    text: "0",
                    points: 0
                },
                {
                    text: "1",
                    points: 0
                },
                {
                    text: "2",
                    points: 0
                }
            ],
            selectedAnswer: null, 
            points: 0
        },
        {
            text: "1+5 * 9",
            answers: [
                {
                    text: "undefined",
                    points: 0
                },
                {
                    text: "0",
                    points: 0
                },
                {
                    text: "46",
                    points: 5
                },
                {
                    text: "2",
                    points: 0
                }
            ],
            selectedAnswer: null, 
            points: 0
        }
    ] 
}
const Pollask = () => {
    const [questions, setQuestions] = useState(initialQuestions.questions);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const handleOptionChange = (index, selectedOption) => {
      const updatedQuestions = [...questions];
      const currentQuestion = updatedQuestions[index];
      currentQuestion.selectedAnswer = selectedOption;
      currentQuestion.points = currentQuestion.answers.find(answer => answer.text === selectedOption).points;
      setQuestions(updatedQuestions);
    };
    const dispatch = useDispatch()
    const submitHandler = async (e) => {
  e.preventDefault();
  try{
    dispatch(solvepoll(initialQuestions))
  }
  catch{
    console.log("error solve")
  }
    }
   const [currentQuestionIndexbutton, setCurrentQuestionIndexbutton] = useState(0);
   const handleNext = () => {
      if (currentQuestionIndexbutton + 4 < initialQuestions.questions.length) {
        setCurrentQuestionIndexbutton(currentQuestionIndexbutton + 4);
      }
  };
  useEffect(() =>{
    console.log(initialQuestions, "initialQuestions")
   },[initialQuestions])
  return (
    <> 
    <div className='relative w-[100%]'>
      <div className='w-[809px] h-[769px] top-[170px] left-[560px] absolute'>
          {questions.slice(currentQuestionIndex, currentQuestionIndex + 4).map((q, index) => (
         <div key={index}>
        <div className='w-[809px] h-[121px] flex flex-col p-2'>
          <p className='w-[105px] h-[45px] text-[24px] font-[700] ml-[88%] mb-[1.5rem]'>{q.text}</p>
          <div className='border-t h-[1px] w-[809px] mb-2' />
          <div className='flex flex-col'>
            <div className='flex flex-row gap-[20%] w-[809px]'>
              {q.answers.map((option, optionIndex) => (
                <div key={optionIndex} className='flex ml-[5%] mb-[2rem]'>
                  <label className='w-[36px] h-[30px] font-[500] text-[16px] flex flex-row-reverse gap-[1.2rem]'>
                    <input
                      type="radio"
                      name={`question${currentQuestionIndex + index}`}
                      value={option.text}
                      checked={q.selectedAnswer === option.text}
                      onChange={() => handleOptionChange(currentQuestionIndex + index, option.text)}
                      className='w-[28px] h-[28px] border-[2px]'
                    />
                    {option.text}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ))}
       
      </div> 
      <div className='absolute left-0 bottom-0 top-[1092px]  w-[1840px] h-[68px]  bg-[#008F9C] text-[#FFFFFF] text-center'>
              {currentQuestionIndexbutton + 4 < initialQuestions.questions.length && (
                  <button className='text-[32px] font-[600]' onClick={handleNext}>Next</button>
              )}
              {currentQuestionIndexbutton + 4 >= initialQuestions.questions.length && (
                  <button className='text-[32px] font-[600]' onClick={submitHandler}>Submit</button>
              )}
          </div>
           
    </div>
   
    </>

     
  );
};

export default Pollask;