import React from 'react';
import { AddBlogWindow } from './components';
import { Backdrop } from 'components';

export default function AddBlogModal({ handleClose }) {
  return (
    <Backdrop onClick={handleClose}>
      <AddBlogWindow />
    </Backdrop>
  );
}
