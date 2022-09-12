import React from 'react';

export default function BlogButton({ text, onClick, id }) {
  return (
    <button
      className="px-6 py-2 m-auto  
       text-white duration-150 bg-blue-500 rounded text-xs md:text-sm 
        hover:bg-blue-700 active:bg-blue-400 active:shadow-md"
      onClick={onClick}
      id={id}
    >
      {text}
    </button>
  );
}
