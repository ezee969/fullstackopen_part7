import React, { useState } from 'react';
import { UserList } from './components';
import { BlogList, Tab } from 'components';
import { useSelector } from 'react-redux';
import { selectAllBlogs } from 'app/slices/blogsSlice';

const Tabs = () => {
  const blogs = useSelector((state) => selectAllBlogs(state));
  const [blogTabStatus, setblogTabStatus] = useState(true);
  const [userTabStatus, setuserTabStatus] = useState(false);
  const Tabs = blogTabStatus ? <BlogList blogs={blogs} /> : <UserList />;

  const handleBlogTabClick = () => {
    setblogTabStatus(true);
    setuserTabStatus(false);
  };

  const handleUserTabClick = () => {
    setblogTabStatus(false);
    setuserTabStatus(true);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex gap-2 ">
        <Tab name="Blogs" status={blogTabStatus} onClick={handleBlogTabClick} />
        <Tab name="Users" status={userTabStatus} onClick={handleUserTabClick} />
      </div>
      <div
        className=" bg-neutral-100 grow
  flex flex-col overflow-auto rounded px-1 md:px-2 lg:px-4 xl:px-6  py-1 md:py-2
  scrollbar-thin scrollbar-thumb-purple-700 scrollbar-track-blue-300"
      >
        {Tabs}
      </div>
    </div>
  );
};

export default Tabs;
