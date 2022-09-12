/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const URL = 'http://localhost:3001/api/users';

const getAll = async () => {
  const response = await axios.get(URL);

  return response;
};

export default { getAll };
