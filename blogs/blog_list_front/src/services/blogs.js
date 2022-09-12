/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
const URL = 'http://localhost:3001/api/blogs';

const getAll = async () => {
  const response = await axios.get(URL);
  response.data.sort((a, b) => b.likes - a.likes);

  return response.data;
};

const postComment = async (comment, blogId) => {
  const response = await axios.post(`${URL}/${blogId}/comments`, comment);
  console.log(response);

  return response.data;
};

const create = async (newObject, token) => {
  const config = {
    headers: { Authorization: `bearer ${token}` },
  };
  console.log(config);

  const response = await axios.post(URL, newObject, config);
  return response.data;
};

const replace = async (newBlog, blogId) => {
  const response = await axios.put(`${URL}/${blogId}`, newBlog);
  return response.data;
};

const del = async (blogId, token) => {
  const config = {
    headers: { Authorization: `bearer ${token}` },
  };

  const response = await axios.delete(`${URL}/${blogId}`, config);
  return response.data;
};

export default { getAll, create, replace, del, postComment };
