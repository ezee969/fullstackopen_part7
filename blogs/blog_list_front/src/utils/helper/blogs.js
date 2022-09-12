/* eslint-disable import/no-anonymous-default-export */

const handleLike = jest.fn();

const handleDelete = jest.fn();

const handleNewBlog = jest.fn();

const user = {
  username: 'user1',
};

const blogUser = {
  username: 'user1',
};

const blog = {
  title: 'TESTBLOGE',
  author: 'AUTORTESTE',
  likes: 0,
  url: 'www.google.com.ar',
};

export default {
  handleDelete,
  handleLike,
  user,
  blogUser,
  blog,
  handleNewBlog,
};
