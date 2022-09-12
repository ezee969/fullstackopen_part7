import React from 'react';
import Logo from 'utils/images/logo.webp';

export default function LoginHeader() {
  return (
    <div className="flex flex-col w-full items-center gap-4">
      <img
        className=" h-auto w-3/5
                    sm:w-1/5
                    md:w-3/5
                    xl:w-3/5 "
        src={Logo}
        alt="logo"
      />
      <h4 className="text-2xl text-center font-semibold">
        Welcome to the Blog saver
      </h4>
    </div>
  );
}
