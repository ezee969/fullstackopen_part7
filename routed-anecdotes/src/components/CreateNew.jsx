import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useField } from '../hooks';
import Input from './Input';

const CreateNew = (props) => {
  const content = useField('text');
  const author = useField('text');
  const info = useField('text');
  const navigate = useNavigate();

  const notify = () => {
    toast.success('Success!!', { position: toast.POSITION.TOP_CENTER });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0,
    });
    notify();
    navigate('/');
  };

  const handleReset = (event) => {
    event.preventDefault();
    content.reset();
    author.reset();
    info.reset();
  };

  return (
    <div>
      <h2>Create a new anecdote</h2>
      <form>
        <div>
          content
          <Input {...content} />
        </div>
        <div>
          author
          <Input {...author} />
        </div>
        <div>
          url for more info
          <Input {...info} />
        </div>
        <button onClick={handleSubmit}>create</button>
        <button onClick={handleReset}>reset</button>
      </form>
    </div>
  );
};

export default CreateNew;
