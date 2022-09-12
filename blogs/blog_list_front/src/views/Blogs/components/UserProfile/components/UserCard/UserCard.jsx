import React from 'react';
import PropTypes from 'prop-types';

//components/ui
import userImg from 'utils/images/user2.png';

const UserCard = ({ user }) => {
  const amountOfBlogs = user?.blogs.length;

  return (
    <div className="h-40 py-4 px-8 flex gap-10 bg-neutral-50 shadow rounded">
      <div className="w-32 self-center">
        <img src={userImg} className="h-auto w-5/6" alt="user profile" />
      </div>
      <div className="flex flex-col gap-3">
        <span className="font-medium text-xl">{user?.name}</span>
        <span className="font-medium text-base">
          {amountOfBlogs} <span className="font-normal">blogs</span>
        </span>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.object,
};

export default UserCard;
