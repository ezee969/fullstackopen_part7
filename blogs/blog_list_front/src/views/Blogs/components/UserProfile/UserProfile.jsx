import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

//redux
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectUsers, getUsersStatus, fetchUsers } from 'app/slices/usersSlice';
import { getBlogsStatus, fetchBlogs, selectAllBlogs } from 'app/slices/blogsSlice';
import { selectUserSession, setSession } from 'app/slices/sessionSlice';

//components/ui
import { UserCard, BlogsTab, Tabs } from './components';

const UserProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { username } = useParams();
  const userSession = useSelector((state) => selectUserSession(state));
  const blogsStatus = useSelector(getBlogsStatus);
  const usersStatus = useSelector(getUsersStatus);
  const users = useSelector((state) => selectUsers(state));
  const blogs = useSelector((state) => selectAllBlogs(state));
  const user = users.find((user) => user.username === username);
  const userBlogs = blogs.filter((blog) => blog.user.id === user?.id);
  const BlogsUsersTab =
    userSession.username === username ? <Tabs /> : <BlogsTab blogs={userBlogs} />;

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser');

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);

      dispatch(setSession(user));

      if (blogsStatus === 'idle') dispatch(fetchBlogs());
      if (usersStatus === 'idle') dispatch(fetchUsers());
    } else {
      navigate('/');
    }
  }, [dispatch, blogsStatus, usersStatus, navigate]);

  return (
    <div className="flex flex-col gap-6 h-full py-4 px-2 md:px-4 lg:px-8 xl:px-10 2xl:px-12">
      <UserCard user={user} />
      {BlogsUsersTab}
    </div>
  );
};

export default UserProfile;
