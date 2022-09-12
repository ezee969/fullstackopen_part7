import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import AnecdoteList from './components/AnecdoteList';
import About from './components/About';
import Footer from './components/Footer';
import CreateNew from './components/CreateNew';
import Anecdotes from './components/Anecdotes';
import anecdotesList from './utils/anecdotes/anecdotes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const [anecdotes, setAnecdotes] = useState(anecdotesList);
  const [notification, setNotification] = useState('');

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000);
    setAnecdotes(anecdotes.concat(anecdote));
  };

  const anecdoteById = (id) => anecdotes.find((a) => a.id === id);

  const vote = (id) => {
    const anecdote = anecdoteById(id);

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1,
    };

    setAnecdotes(anecdotes.map((a) => (a.id === id ? voted : a)));
  };

  return (
    <div>
      <BrowserRouter>
        <ToastContainer />
        <h1>Software anecdotes</h1>
        <Menu />
        <Routes>
          <Route path={'/'} element={<AnecdoteList anecdotes={anecdotes} />} />
          <Route path={'/about'} element={<About />} />
          <Route path={'/create'} element={<CreateNew addNew={addNew} />} />
          <Route
            path={'anecdotes/:id'}
            element={<Anecdotes anecdotes={anecdotes} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
