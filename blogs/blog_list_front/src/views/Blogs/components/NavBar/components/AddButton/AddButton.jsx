import React from 'react';

//redux
import { useDispatch } from 'react-redux';
import { showAddBlogPanel } from 'app/slices/addBlogPanelSlice';

//components/ui
import plusIcon from 'utils/images/plus.png';

const AddButton = () => {
  const dispatch = useDispatch();

  return (
    <div className="w-7">
      <img
        className="h-auto cursor-pointer "
        src={plusIcon}
        alt="add blog"
        onClick={() => dispatch(showAddBlogPanel())}
      />
    </div>
  );
};

export default AddButton;
