import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import blogService from 'services/blogs';

const blogsAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.likes - a.likes,
});

const initialState = blogsAdapter.getInitialState({
  status: {
    blogs: 'idle',
    addBlog: 'idle',
    likeBlogs: 'idle',
    deleteBlog: 'idle',
    addComment: 'idle',
  },
  error: {
    blogs: null,
    addBlog: null,
    likeBlogs: null,
    deleteBlog: null,
    addComment: null,
  },
});

export const addBlog = createAsyncThunk('blogs/addBlog', async (data) => {
  const { newBlog, token } = data;
  const response = await blogService.create(newBlog, token);

  return response;
});

export const addComment = createAsyncThunk('blogs/addComment', async (data) => {
  const { comment, id } = data;
  console.log({ comment }, id);
  const response = await blogService.postComment({ comment }, id);

  return response;
});

export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
  const blogs = await blogService.getAll();

  return blogs;
});

export const replaceBlog = createAsyncThunk('blogs/replaceBlog', async (newBlog) => {
  const blogId = newBlog.id;

  await blogService.replace(newBlog, blogId);

  return newBlog;
});

export const deleteBlog = createAsyncThunk('blogs/deleteBlog', async (data) => {
  const { blogId, token } = data;
  await blogService.del(blogId, token);

  return blogId;
});

const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBlogs.pending, (state, action) => {
        state.status.blogs = 'loading';
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        const blogs = action.payload;

        state.status.blogs = 'succeeded';
        blogsAdapter.upsertMany(state, blogs);
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.status.blogs = 'failed';
        state.error = action.error.message;
      })
      .addCase(replaceBlog.fulfilled, (state, action) => {
        const newBlog = action.payload;

        blogsAdapter.upsertOne(state, newBlog);
      })
      .addCase(replaceBlog.rejected, (state, action) => {
        state.error.likeBlogs = action.error;
      })
      .addCase(addBlog.pending, (state, action) => {
        state.status.addBlog = 'loading';
      })
      .addCase(addBlog.fulfilled, (state, action) => {
        const blogs = action.payload;

        state.status.addBlog = 'succeeded';
        blogsAdapter.addOne(state, blogs);
      })
      .addCase(addBlog.rejected, (state, action) => {
        state.status.addBlog = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteBlog.pending, (state, action) => {
        state.status.deleteBlog = 'loading';
      })
      .addCase(deleteBlog.fulfilled, (state, action) => {
        const id = action.payload;
        // const blogIndex = state.blogs.findIndex((blog) => blog.id === id);

        blogsAdapter.removeOne(state, id);
        state.status.deleteBlog = 'succeeded';
      })
      .addCase(deleteBlog.rejected, (state, action) => {
        const error = action.error.message;

        state.status.deleteBlog = 'failed';
        state.error.deleteBlog = error;
      })
      .addCase(addComment.pending, (state, action) => {
        state.status.addComment = 'loading';
      })
      .addCase(addComment.fulfilled, (state, action) => {
        const newBlog = action.payload;

        blogsAdapter.upsertOne(state, newBlog);
        state.status.addComment = 'succeeded';
      })
      .addCase(addComment.rejected, (state, action) => {
        const error = action.error.message;

        state.status.addComment = 'failed';
        state.error.addComment = error;
      });
  },
});

export const addLike = (newBlog) => {
  return async (dispatch) => {
    newBlog.likes += 1;

    dispatch(replaceBlog(newBlog));
  };
};

export const removeLike = (newBlog) => {
  return async (dispatch) => {
    newBlog.likes -= 1;

    dispatch(replaceBlog(newBlog));
  };
};

export const { selectAll: selectAllBlogs, selectById: selectBlog } =
  blogsAdapter.getSelectors((state) => state.blogs);
export const getBlogsStatus = (state) => state.blogs.status.blogs;
export const getBlogsError = (state) => state.blogs.error.blogs;

export default blogsSlice.reducer;
