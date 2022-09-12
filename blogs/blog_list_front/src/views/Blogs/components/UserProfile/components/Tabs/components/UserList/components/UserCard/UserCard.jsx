import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//components/ui
import { BlogButton } from 'components';
import userIcon from 'utils/images/user2.png';

const UserCard = ({ data }) => {
  const [show, setShow] = useState(false);
  const lorem =
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus veniam quam assumenda dolorum aut.';

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <Link to={`/blogs/users/${data.username}`}>
      <div
        className={`flex flex-row gap-4 md:gap-6 p-3 bg-white
      rounded-md shadow-md min-h-20 hover:shadow-slate-400 hover:shadow
      transition-all duration-200 ${show ? 'opacity-100' : 'opacity-0'} `}
      >
        <div className="flex flex-col items-center w-20 md:w-28 gap-2">
          <img src={userIcon} alt="" className="w-5/6" />
          <BlogButton text={'View profile'} />
        </div>
        <div className="flex flex-col gap-2 ">
          <div className="flex gap-1">
            <span className="font-semibold text-lg md:text-xl ">{data.name}</span>
            <span className="self-center text-sm md:text-base text-slate-600">{`@${data.username}`}</span>
          </div>
          <span className="text-sm md:text-base">{`Blogs: ${data.blogs.length}`}</span>
          <span className="text-xs md:text-sm">{lorem}</span>
        </div>
      </div>
    </Link>
  );
};

export default UserCard;
