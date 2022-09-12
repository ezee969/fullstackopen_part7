import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginSection, SideHero } from './components';
import { useSelector } from 'react-redux';
import { getSessionStatus } from 'app/slices/sessionSlice';

const Login = () => {
  const navigate = useNavigate();
  const sessionStatus = useSelector(getSessionStatus);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser');
    const loggedUser = JSON.parse(loggedUserJSON);

    if (loggedUserJSON || sessionStatus === 'succeeded') {
      navigate(`/blogs/users/${loggedUser.username}`);
    }
  }, [navigate, sessionStatus]);

  return (
    <section
      className="h-screen w-screen
                grid grid-cols-1 grid-rows-[9fr_2fr] 
                lg:grid-cols-[6fr_5fr] lg:grid-rows-none
                "
    >
      <LoginSection />
      <SideHero />
    </section>
  );
};

export default Login;
