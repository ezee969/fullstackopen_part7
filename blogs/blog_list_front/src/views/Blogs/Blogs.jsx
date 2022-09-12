import React, { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAddBlogPanelState } from 'app/slices/addBlogPanelSlice';
import { getBlogsStatus, fetchBlogs } from 'app/slices/blogsSlice';
import { getUsersStatus, fetchUsers } from 'app/slices/usersSlice';
import { setSession } from 'app/slices/sessionSlice';
import { AddBlog, NavBar } from './components';
import { ToastContainer } from 'react-toastify';
import { motion, AnimatePresence } from 'framer-motion';
import 'react-toastify/dist/ReactToastify.css';

export default function Blogs() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addBlogPanelVisibility = useSelector(selectAddBlogPanelState);
  const blogsStatus = useSelector(getBlogsStatus);
  const usersStatus = useSelector(getUsersStatus);
  const AddBlogPanel = addBlogPanelVisibility ? <AddBlog /> : null;

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-screen w-screen grid grid-cols-1 grid-rows-[0fr_1fr_11fr]"
    >
      <ToastContainer />
      <NavBar />
      <Outlet />
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {AddBlogPanel}
      </AnimatePresence>
    </motion.div>
  );
}
