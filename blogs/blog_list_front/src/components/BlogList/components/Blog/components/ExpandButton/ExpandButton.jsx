import React from 'react';
import { motion } from 'framer-motion';
import expandIcon from 'utils/images/down.png';

export default function ExpandButton({ selected, setSelected }) {
  const animate = { rotate: selected ? 180 : 0 };

  return (
    <motion.img
      onClick={() => setSelected(!selected)}
      animate={animate}
      className="h-auto cursor-pointer expand-button w-7"
      src={expandIcon}
      alt="expand blog info"
    />
  );
}
