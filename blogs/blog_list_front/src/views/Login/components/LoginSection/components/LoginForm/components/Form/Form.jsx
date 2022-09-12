import React from 'react';
import { useField } from 'hooks/useField/useField';
import { InputTextBox, Button } from 'components';
import { LoginError } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, getSessionStatus } from 'app/slices/sessionSlice';

export default function Form() {
  const dispatch = useDispatch();
  const usernameInput = useField('text');
  const passwordInput = useField('password');
  const sessionStatus = useSelector(getSessionStatus);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin();
  };

  const handleLogin = async () => {
    const username = usernameInput.value;
    const password = passwordInput.value;

    dispatch(logIn({ username, password }));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <InputTextBox {...usernameInput} placeholder="Username" />
      <InputTextBox {...passwordInput} placeholder="Password" />
      <LoginError show={sessionStatus === 'failed'} />
      {sessionStatus === 'loading' ? (
        <Button loading={true} text="Processing..." />
      ) : (
        <Button id={'login-button'} text="LOGIN" />
      )}
    </form>
  );
}
