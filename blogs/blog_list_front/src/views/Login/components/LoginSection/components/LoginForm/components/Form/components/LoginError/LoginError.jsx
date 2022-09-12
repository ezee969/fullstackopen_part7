import React from 'react';

export default function LoginError({ show }) {
  return (
    <p
      className={`text-red-600 font-medium text-sm delay-150 transition-all ease-in-out ${
        show ? 'opacity-100' : 'opacity-0'
      }`}
    >
      Invalid username or password
    </p>
  );
}
