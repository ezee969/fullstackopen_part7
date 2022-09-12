import React from 'react';
import { AddBlogForm, AddBlogHeader } from './components';
import { motion } from 'framer-motion';

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};

export default function AddBlogWindow() {
  return (
    <motion.div
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-5/6
        pb-3
        flex flex-col 
        bg-slate-100 
        rounded
        md:w-4/6
        lg:w-2/5 
        xl:w-2/5  
        2xl:w-2/6 "
      onClick={(e) => e.stopPropagation()}
    >
      <AddBlogHeader />
      <AddBlogForm />
    </motion.div>
  );
}
