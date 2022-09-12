import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BlogButton } from 'components';
import { useDispatch } from 'react-redux';
import { signOut } from 'app/slices/sessionSlice';

export default function ConfigPanel({ isVisible }) {
  const invisibleStyle = 'max-h-0 ';
  const visibleStyle = 'h-auto max-h-screen py-2 px-4 lg:px-6 lg:py-3';
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch(signOut());
    navigate('/');
  };

  return (
    <div
      className={`${isVisible ? visibleStyle : invisibleStyle}
                absolute top-16 flex overflow-hidden
                shadow rounded bg-slate-200 transition-all`}
    >
      <BlogButton text="Sign out" onClick={handleSignOut} />
    </div>
  );
}
