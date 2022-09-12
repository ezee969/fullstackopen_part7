/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable import/no-anonymous-default-export */
import { toast } from 'react-toastify';

const Success = () => {
  toast.success('Saved blog', { position: toast.POSITION.TOP_CENTER });
};

const Error = () => {
  toast.error('Error while saving the blog', {
    position: toast.POSITION.TOP_CENTER,
  });
};

export default { Success, Error };
