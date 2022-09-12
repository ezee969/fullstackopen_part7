import React from 'react';
import { useNavigate } from 'react-router-dom';

//redux
import { useSelector } from 'react-redux';
import { selectUserSession } from 'app/slices/sessionSlice';

//components/ui
import homeIcon from 'utils/images/home.png';

const HomeButton = () => {
  const navigate = useNavigate();
  const session = useSelector((state) => selectUserSession(state));

  return (
    <div className="w-7">
      <img
        className="h-auto cursor-pointer"
        src={homeIcon}
        alt="home"
        onClick={() => navigate(`/blogs/users/${session.username}`)}
      />
    </div>
  );
};

export default HomeButton;
