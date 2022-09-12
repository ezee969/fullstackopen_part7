import React from 'react';
import { useParams } from 'react-router-dom';
import { useField } from 'hooks/useField/useField';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { selectBlog, addComment } from 'app/slices/blogsSlice';

//components/ui

const BlogView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const blog = useSelector((state) => selectBlog(state, id));
  const commentField = useField('text');
  const comments = blog?.comments.map((comment, i) => (
    <span key={i}>-{comment}</span>
  ));

  const handleFormSubmit = (event) => {
    event.preventDefault();

    dispatch(addComment({ comment: commentField.value, id }));
  };

  return (
    <div className="flex flex-col items-center gap-8 py-4 px-2 md:px-4 lg:px-8 xl:px-10 2xl:px-12">
      <div className="flex flex-col gap-4">
        <span>blog by: {blog?.author}</span>
        <span>number of likes: {blog?.likes}</span>
        <span>blog url: {blog?.url}</span>
        <div className="flex flex-col max-w-xs">
          <span>comentarios:</span>
          {comments}
        </div>
      </div>
      <div>
        <form
          className="flex flex-col gap-2"
          onSubmit={(event) => handleFormSubmit(event)}
        >
          <input
            placeholder="Comment"
            className="border rounded p-2 text-sm lg:text-base"
            {...commentField}
          />
          <button
            className="py-2 bg-blue-500 text-white text-sm lg:text-base cursor-pointer rounded"
            type="submit"
          >
            Post comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogView;
