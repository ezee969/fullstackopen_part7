import React from 'react';
import { Link } from 'react-router-dom';

export default function Anecdote({ id, content }) {
  return (
    <li key={id}>
      <Link to={`/anecdotes/${id}`}>{content}</Link>
    </li>
  );
}
