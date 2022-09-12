import React from 'react';
import { Form } from './components';

export default function LoginForm() {
  return (
    <div className="flex flex-col justify-center">
      <p className="mb-5">Please login to your account</p>
      <Form />
      <p className="mb-5">
        Dont have an account?{' '}
        <a className="font-semibold text-red-600 ml-1" href="http://www.google.com">
          Sing in
        </a>
      </p>
    </div>
  );
}
