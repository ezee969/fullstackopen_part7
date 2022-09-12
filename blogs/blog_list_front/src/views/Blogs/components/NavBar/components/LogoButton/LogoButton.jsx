import React from 'react';
import { useNavigate } from 'react-router-dom';

//redux
import { useSelector } from 'react-redux';
import { selectUserSession } from 'app/slices/sessionSlice';

//components/ui
import logoImg from 'utils/images/logo.svg';

const LogoButton = () => {
  const navigate = useNavigate();
  const session = useSelector((state) => selectUserSession(state));

  return (
    <img
      className="h-auto w-auto cursor-pointer"
      src={logoImg}
      alt="logo"
      onClick={() => navigate(`/blogs/users/${session.username}`)}
    />
  );
};

export default LogoButton;
