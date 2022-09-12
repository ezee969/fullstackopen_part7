import blogHelper from '../../../utils/helper/blogs';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { blogContext } from '../../../utils/context';
import { render, fireEvent, screen } from '@testing-library/react';
import AddBlogForm from '../add_blog_form';
import userEvent from '@testing-library/user-event';

const { handleNewBlog } = blogHelper;

describe('<AddBlogForm />', () => {
  test('Calls the handle function when button is clicked', () => {
    render(
      <blogContext.Provider value={{ handleNewBlog }}>
        <AddBlogForm />
      </blogContext.Provider>
    );

    const titleInput = screen.getByPlaceholderText('Blog title');
    const urlInput = screen.getByPlaceholderText('Blog url');
    const authorInput = screen.getByPlaceholderText('Blog author');
    const formButton = screen.getByText('Save blog');

    userEvent.type(titleInput, 'titleTest');
    userEvent.type(urlInput, 'urlTest');
    userEvent.type(authorInput, 'authorTest');

    fireEvent.click(formButton);

    expect(handleNewBlog.mock.calls).toHaveLength(1);
    expect(handleNewBlog.mock.calls[0][0].title).toBe('titleTest');
    expect(handleNewBlog.mock.calls[0][0].url).toBe('urlTest');
    expect(handleNewBlog.mock.calls[0][0].author).toBe('authorTest');
    expect(handleNewBlog).toHaveBeenCalled();
  });
});
