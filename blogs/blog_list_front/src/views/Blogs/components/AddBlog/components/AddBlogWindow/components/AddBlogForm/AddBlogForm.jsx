import React, { useState } from 'react';
import { InputTextBox, BlogButton } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { hideAddBlogPanel } from 'app/slices/addBlogPanelSlice';
import { addBlog } from 'app/slices/blogsSlice';
import { selectUserSession } from 'app/slices/sessionSlice';

export default function AddBlogForm() {
  const [blogTitle, setBlogTitle] = useState('');
  const [blogAuthor, setBlogAuthor] = useState('');
  const [blogUrl, setBlogUrl] = useState('');
  const dispatch = useDispatch();
  const userSession = useSelector(selectUserSession);

  const handleFormSubmit = () => {
    const { token } = userSession;
    const newBlog = {
      title: blogTitle,
      url: blogUrl,
      author: blogAuthor,
    };

    setBlogTitle('');
    setBlogAuthor('');
    setBlogUrl('');
    dispatch(addBlog({ newBlog, token }));
    dispatch(hideAddBlogPanel());
  };

  return (
    <>
      <form
        name="addBlogform"
        className="flex flex-col gap-4 px-3 pt-3 mb-3 xl:px-4 2xl:px-6"
        action=""
      >
        <InputTextBox
          value={blogTitle}
          onChange={({ target }) => {
            setBlogTitle(target.value);
          }}
          type="text"
          name="Blog title"
          placeholder="Blog title"
          id="title-input"
        />
        <InputTextBox
          value={blogAuthor}
          onChange={({ target }) => {
            setBlogAuthor(target.value);
          }}
          type="text"
          name="Blog author"
          placeholder="Blog author"
          id="author-input"
        />
        <InputTextBox
          value={blogUrl}
          onChange={({ target }) => {
            setBlogUrl(target.value);
          }}
          type="text"
          name="Blog url"
          placeholder="Blog url"
          id="url-input"
        />
      </form>
      <BlogButton
        id={'save-blog-button'}
        text="Save blog"
        onClick={handleFormSubmit}
      />
    </>
  );
}
