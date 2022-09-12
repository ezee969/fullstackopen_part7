import React from 'react';
import LoginSection from './login_section';
import SidePresentation from './side_presentation';

export default function LoginBox() {
  return (
    <div
      className='flex flex-grow flex-wrap 
                  box-border
                  xl:flex-nowrap xl:rounded 
                  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                  shadow-lg
                  '
    >
      <LoginSection />
      <SidePresentation />
    </div>
  );
}
