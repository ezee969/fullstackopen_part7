import React from 'react';
import { useParams } from 'react-router-dom';

export default function Anecdotes({ anecdotes }) {
  const id = useParams().id;
  const anecdote = anecdotes.find((anecdote) => anecdote.id === Number(id));
  return (
    <div>
      <h2>
        {anecdote.content} by {anecdote.author}
      </h2>
      <div>Has {anecdote.votes} votes</div>
      <div>
        For more info see <a href={anecdote.info}>{anecdote.info}</a>
      </div>
    </div>
  );
}
