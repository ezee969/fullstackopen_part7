import React from 'react';

export default function BlogTitle({ title }) {
  return (
    <p className='font-medium text-slate-900 md:text-lg xl:text-xl'>{`${title}`}</p>
  );
}
