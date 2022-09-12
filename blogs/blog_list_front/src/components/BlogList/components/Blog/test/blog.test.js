/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import React from 'react';
import { blogContext } from 'utils/context';
import blogHelper from 'utils/helper/blogs';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, screen } from '@testing-library/react';
import Blog from '../Blog';

const { user, handleDelete, handleLike, blog, blogUser } = blogHelper;

describe('<Blog />', () => {
  beforeEach(() => {});

  test('Only shows title by default', () => {
    const view = render(
      <blogContext.Provider value={{ user, handleDelete, handleLike }}>
        <Blog
          title={blog.title}
          author={blog.author}
          likes={blog.likes}
          url={blog.url}
          blogUser={blogUser}
        />
      </blogContext.Provider>
    );

    const blogDescription = view.container.querySelector('.blog-description');

    expect(blogDescription).toHaveClass('max-h-0');
  });

  test('Shows description when "expand" button is clicked', () => {
    const view = render(
      <blogContext.Provider value={{ user, handleDelete, handleLike }}>
        <Blog
          title={blog.title}
          author={blog.author}
          likes={blog.likes}
          url={blog.url}
          blogUser={blogUser}
        />
      </blogContext.Provider>
    );

    const blogDescription = view.container.querySelector('.blog-description');
    const expandButton = screen.getByAltText('expand blog info');

    fireEvent.click(expandButton);

    expect(blogDescription).toHaveClass('h-auto');
    // expect(mockHandler.mock.calls).toHaveLength(1);
  });

  test('Like button is working', () => {
    render(
      <blogContext.Provider value={{ user, handleDelete, handleLike }}>
        <Blog
          title={blog.title}
          author={blog.author}
          likes={blog.likes}
          url={blog.url}
          blogUser={blogUser}
        />
      </blogContext.Provider>
    );

    const likeButton = screen.getByAltText('like-button');

    fireEvent.click(likeButton);
    fireEvent.click(likeButton);

    expect(handleLike.mock.calls).toHaveLength(2);
  });
});
