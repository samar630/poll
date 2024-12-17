import React from 'react';

const Modal = ({ isOpen, onClose, question }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 ">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white rounded-lg p-[10rem] relative z-10">
        <h2 className="text-lg font-bold mb-[2rem]">Row Information</h2>
        <div className='flex flex-col gap-[3rem]'>
        <p><strong>معلومات:</strong> {question.info}</p>
        <p><strong>percentage:</strong> {question.percentage}</p>
        <p><strong>numberofquestion:</strong> {question.numberofquestion}</p>
        <p><strong>nickname:</strong> {question.nickname}</p>
        </div>
        <button className=" bg-blue-500 text-white px-4 py-2 rounded mt-[4rem]" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
