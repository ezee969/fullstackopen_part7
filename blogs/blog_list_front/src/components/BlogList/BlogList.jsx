import React from 'react';
import { Blog } from './components';
import PropTypes from 'prop-types';

const BlogList = ({ blogs }) => {
  const blogList = blogs?.map((blog) => (
    <Blog key={blogs.findIndex((ablog) => ablog === blog)} blog={blog} />
  ));

  return <div className="flex flex-col gap-2 border-t">{blogList}</div>;
};

BlogList.propTypes = {
  blogs: PropTypes.array.isRequired,
};

export default BlogList;
