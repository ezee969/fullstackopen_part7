import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { removeLike, addLike, deleteBlog } from 'app/slices/blogsSlice';
import { selectUserSession } from 'app/slices/sessionSlice';

//components/ui
import {
  BlogDescription,
  BlogIcon,
  BlogTitle,
  DeleteButton,
  ExpandButton,
  LikeButton,
} from './components';

export default function Blog({ blog }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(selectUserSession);
  const { title, author, likes, url, id } = blog;
  const blogUserUsername = blog.user.username;
  const [selected, setSelected] = useState(null);
  const [liked, setLiked] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const handleLikeButton = () => {
    if (liked) {
      setLiked(false);
      dispatch(removeLike({ ...blog, user: blog.user.id }));
    } else {
      setLiked(true);
      dispatch(addLike({ ...blog, user: blog.user.id }));
    }
  };

  const handleDeleteButton = () => {
    dispatch(deleteBlog({ blogId: id, token: sessionUser.token }));
  };

  return (
    <Link to={`/blogs/blog/${blog.id}`}>
      <div
        className={`flex flex-col gap-1 p-3 bg-white cursor-pointer
       rounded-md shadow-md min-h-20 hover:shadow-slate-400 hover:shadow
       transition-all duration-200 ${show ? 'opacity-100' : 'opacity-0'} `}
      >
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <BlogIcon />
            <BlogTitle title={title} />
          </div>
          <div className="flex items-center gap-3 ">
            <LikeButton handleLikeButton={handleLikeButton} liked={liked} />
            {sessionUser.username === blogUserUsername && (
              <DeleteButton handleDeleteButton={handleDeleteButton} />
            )}
            <ExpandButton selected={selected} setSelected={setSelected} />
          </div>
        </div>
        <BlogDescription
          url={url}
          likes={likes}
          author={author}
          selected={selected}
        />
      </div>
    </Link>
  );
}
