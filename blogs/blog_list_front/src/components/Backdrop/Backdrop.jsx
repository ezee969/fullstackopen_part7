import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Backdrop = ({ onClick, children }) => {
  return (
    <motion.div
      className=' absolute top-0 left-0 h-full w-full 
                bg-black bg-opacity-60
                flex items-center justify-center'
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

Backdrop.propTypes = {
  children: PropTypes.element,
};

export default Backdrop;
