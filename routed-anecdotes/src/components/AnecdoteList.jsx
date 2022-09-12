import React from 'react';
import Anecdote from './Anecdote';

const AnecdoteList = ({ anecdotes }) => (
  <div>
    <h2>Anecdotes</h2>
    <ul>
      {anecdotes.map((anecdote) => (
        <Anecdote id={anecdote.id} content={anecdote.content} />
      ))}
    </ul>
  </div>
);

export default AnecdoteList;
