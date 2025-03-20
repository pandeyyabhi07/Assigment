import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = ({ img, name, content }) => {
  const [buttonText, setButtonText] = useState("Add");

  const handleButton = () => {
    if (buttonText === "Add") {
      setButtonText("Added");
      toast(`${name} added`);
    } else {
      setButtonText("Add");
    toast(`${name} removed`);
    }
  };

  return (
    <div>
      <div className='bg-white shadow-xl flex  p-4 rounded-xl hover:scale-105 hover:shadow-3xl transition-transform duration-300'>
        <div className='flex items-center gap-5'>
          <div className='flex flex-col gap-5'>
            <h2 className='text-4xl'>{name}</h2>
            <p>{content}</p>
          </div>
          <div className='relative'>
            <img src={img} alt={name} className='h-60 w-60 object-cover rounded' />
            <button 
              onClick={handleButton} 
              className={`absolute rounded-2xl px-4 shadow-2xl p-2 bottom-2 right-2 ${buttonText === 'Added' ? 'bg-green-400 text-white' : 'bg-gray-300 text-black'}`}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
// done