import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Cards = ({ img, name, price }) => {
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
    <div className='shadow-2xl hover:scale-105 hover:shadow-3xl transition-transform duration-300'>
      <div className='relative'>
        <img src={img} alt="" className='h-80 w-80 object-cover rounded ' />
        <button 
              onClick={handleButton} 
              className={`absolute rounded-2xl px-4 shadow-2xl p-2 mr-12 bottom-2 right-2 ${buttonText === 'Added' ? 'bg-green-400 text-white' : 'bg-gray-300 text-black'}`}
            >
              {buttonText}
            </button>
      </div>
      <div className='flex flex-col gap-5'>
        <h2 className='text-2xl'>{name}</h2>
        <h5 className='text-xl'>${price}</h5>
      </div>
    </div>
  )
}

export default Cards
