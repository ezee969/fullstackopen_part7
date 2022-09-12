import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from 'app/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Login from './views/Login';
import Blogs from './views/Blogs';
import { BlogView, UserProfile } from 'views/Blogs/components';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/blogs" element={<Blogs />}>
          <Route path="users/:username" element={<UserProfile />} />
          <Route path="blog/:id" element={<BlogView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
