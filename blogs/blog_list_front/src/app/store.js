import { configureStore } from '@reduxjs/toolkit';
import sessionSlice from './slices/sessionSlice';
import blogsSlice from './slices/blogsSlice';
import addBlogPanelSlice from './slices/addBlogPanelSlice';
import usersSlice from './slices/usersSlice';

export const store = configureStore({
  reducer: {
    session: sessionSlice,
    blogs: blogsSlice,
    addBlogPanel: addBlogPanelSlice,
    users: usersSlice,
  },
});
