import React from 'react';
import { CloseBut } from './components';

export default function AddBlogHeader() {
  return (
    <div
      className="flex justify-between
                w-full 
                p-3
                bg-gradient-to-r from-purple-500 to-pink-500 
                rounded-t
                "
    >
      <p className=" text-white font-medium text-md tracking-tight lg:text-md">
        New blog
      </p>
      <CloseBut />
    </div>
  );
}
