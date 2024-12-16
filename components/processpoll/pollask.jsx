import React, { useEffect, useRef, useState } from 'react'



 
//   const [answers, setAnswers] = useState({
//     question1: '',
//     question2: '',
//     question3: ''
//   });

//   const handleOptionChange = (question, option) => {
//     setAnswers({ ...answers, [question]: option });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(answers, "answers");
//   };
 

//   return (
//       <form onSubmit={handleSubmit}> 
//       <div> 
//         <label>Question 1:</label> <div> 
//       <input type="radio" name="question1" value="option1" onChange={handleChange} /> 
//        Option 1
//        </div> 
//        <div> <input type="radio" name="question1" value="option2" onChange={handleChange} /> Option 2 </div> 
//        <div> <input type="radio" name="question1" value="option3" onChange={handleChange} /> Option 3 </div>
//         <div> <input type="radio" name="question1" value="option4" onChange={handleChange} /> Option 4 </div> 
//         </div>
//          <div> 
//           <label>Question 2:</label> 
//          <div> <input type="radio" name="question2" value="option1" onChange={handleChange} /> Option 1 </div>
//           <div> <input type="radio" name="question2" value="option2" onChange={handleChange} /> Option 2 </div> 
//           <div> <input type="radio" name="question2" value="option3" onChange={handleChange} /> Option 3 </div>
//            <div> <input type="radio" name="question2" value="option4" onChange={handleChange} /> Option 4 </div> 
//            </div>
//             <button type="submit">Submit</button> </form>

//   )
// }

// export default Pollask
const Pollask = () => {
  const questions = [
      {
          question: "What is the capital of France?",
          options: ["Berlin", "Madrid", "Paris", "Lisbon"],
          answer: "Paris"
      },
      {
          question: "Which planet is known as the Red Planet?",
          options: ["Earth", "Mars", "Jupiter", "Saturn"],
          answer: "Mars"
      },
      {
          question: "What is the largest ocean on Earth?",
          options: ["Atlantic", "Indian", "Arctic", "Pacific"],
          answer: "Pacific"
      },
      {
          question: "Who wrote 'Hamlet'?",
          options: ["Charles Dickens", "Mark Twain", "William Shakespeare", "Jane Austen"],
          answer: "William Shakespeare"
      },
      {
          question: "What is the smallest country in the world?",
          options: ["Monaco", "Vatican City", "Nauru", "Tuvalu"],
          answer: "Vatican City"
      },
      {
          question: "What year did the Titanic sink?",
          options: ["1912", "1905", "1898", "1920"],
          answer: "1912"
      },
      {
          question: "Which gas do plants absorb from the atmosphere?",
          options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
          answer: "Carbon Dioxide"
      },
      {
          question: "What is the hardest natural substance on Earth?",
          options: ["Gold", "Iron", "Diamond", "Quartz"],
          answer: "Diamond"
      }
  ];

  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleOptionChange = (index, value) => {
      const updatedAnswers = [...userAnswers];
      updatedAnswers[currentQuestionIndex + index] = value;
      setUserAnswers(updatedAnswers);
  };

  const handleNext = () => {
      if (currentQuestionIndex + 4 < questions.length) {
          setCurrentQuestionIndex(currentQuestionIndex + 4);
      }
  };

  const handleSubmit = async () => {
      const correctAnswers = questions.map(q => q.answer);
      try {
          const response = await fetch('/api/submit', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  userAnswers,
                  correctAnswers
              })
          });
          const data = await response.json();
          console.log('Response:', data);
      } catch (error) {
          console.error('Error:', error);
      }
  };

  return (
    <>
    <div className='relative w-[100%]'>
      <div className='w-[809px] h-[769px] top-[170px] left-[560px] absolute'>
          {questions.slice(currentQuestionIndex, currentQuestionIndex + 4).map((q, index) => (
              <div key={index} className="">
                <div className='w-[809px] h-[121px] flex flex-col p-2'>
                <p className='w-[75px] h-[45px] text-[24px] font-[700] ml-[90%] mb-[1.5rem]'>السؤال</p>
                <div className='border-t h-[1px] w-[809px] mb-2' />
                 <div className='flex flex-row gap-[20%]  w-[809px]'>
                  {q.options.map(option => (
                      <div className='flex ml-[5%] mb-[2rem]'>
                        <label key={option}  className='w-[36px] h-[30px] font-[500] text-[16px] flex flex-row-reverse gap-[1.2rem]'>
                          <input
                              type="radio"
                              name={`question${currentQuestionIndex + index}`}
                              value={option}
                              checked={userAnswers[currentQuestionIndex + index] === option}
                              onChange={() => handleOptionChange(index, option)}
                              className='w-[28px] h-[28px] border-[2px]'
                          />
                          {option}
                      </label>
                      </div>
                  ))}
              </div>
                </div>
             </div>
          ))}
       
      </div>
      <div className='absolute left-0 bottom-0 w-[1570px] h-[68px] top-[962px] bg-[#008F9C] text-[#FFFFFF] text-center'>
              {currentQuestionIndex + 4 < questions.length && (
                  <button className='text-[32px] font-[600]' onClick={handleNext}>Next</button>
              )}
              {currentQuestionIndex + 4 >= questions.length && (
                  <button onClick={handleSubmit}>Submit</button>
              )}
          </div>
    </div>
   
    </>

     
  );
};

export default Pollask;