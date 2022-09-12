import { createSlice } from '@reduxjs/toolkit';

const addBlogPanelSlice = createSlice({
  name: 'addBlogPanel',
  initialState: false,
  reducers: {
    show: () => {
      return true;
    },
    hide: () => {
      return false;
    },
  },
});

export const showAddBlogPanel = () => {
  return async (dispatch) => {
    dispatch(show());
  };
};

export const hideAddBlogPanel = () => {
  return async (dispatch) => {
    dispatch(hide());
  };
};

export const selectAddBlogPanelState = (state) => state.addBlogPanel;
export const { show, hide } = addBlogPanelSlice.actions;

export default addBlogPanelSlice.reducer;
