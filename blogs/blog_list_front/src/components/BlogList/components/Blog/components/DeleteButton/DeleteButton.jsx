import React from 'react';
import deleteImg from 'utils/images/delete.png';

export default function DeleteButton({ handleDeleteButton }) {
  return (
    <img
      onClick={handleDeleteButton}
      className="h-auto cursor-pointer delete-button w-7 hover:scale-105 transition-al"
      src={deleteImg}
      alt="delete blog button"
    />
  );
}
