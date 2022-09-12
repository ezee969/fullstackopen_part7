import React from 'react';
import closeBut from 'utils/images/cancel.png';
import { useDispatch } from 'react-redux';
import { hideAddBlogPanel } from 'app/slices/addBlogPanelSlice';

export default function CloseBut() {
  const dispatch = useDispatch();

  return (
    <img
      className="h-auto w-7 rounded-full border-2 border-slate-200 
                hover:border-blue-400
                active:border-blue-500 transition-all
                cursor-pointer"
      onClick={() => dispatch(hideAddBlogPanel())}
      src={closeBut}
      alt="close button"
    />
  );
}
