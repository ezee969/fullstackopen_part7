import React from 'react';
import { LoginHeader, LoginForm } from './components';

export default function LoginSection() {
  return (
    <div
      className=" flex gap-8 flex-col justify-center
                  px-5
                  md:px-12
                  lg:px-24"
    >
      <LoginHeader />
      <LoginForm />
    </div>
  );
}
