import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ name, status, onClick }) => {
  const selectedStyle = status
    ? 'font-bold text-gray-900 bg-neutral-100 hover:bg-neutral-200 '
    : 'font-medium text-gray-700 bg-neutral-300 hover:bg-neutral-400 ';

  return (
    <div
      onClick={onClick}
      className={`h-10 cursor-pointer flex px-6 items-center transition-all text-sm rounded-t-md  tracking-tight ${selectedStyle}`}
    >
      {name}
    </div>
  );
};

Tab.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Tab;
