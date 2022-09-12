/* eslint-disable comma-dangle */
/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
const blogRouter = require('express').Router();
const jwt = require('jsonwebtoken');
const middleware = require('../utils/middleware');
const Blog = require('../models/blog');

blogRouter.get('/', async (req, res) => {
  const blogs = await Blog.find({}).populate('user', { username: 1, name: 1 });

  res.json(blogs);
});

blogRouter.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);

    res.json(blog);
  } catch (error) {
    next(error);
  }
});

blogRouter.post(
  '/',
  middleware.tokenExtractor,
  middleware.userExtractor,
  async (req, res, next) => {
    try {
      const { body, user } = req;

      const blog = new Blog({
        title: body.title,
        url: body.url,
        author: body.author,
        likes: body.likes,
        user: user._id,
      });
      const savedBlog = await blog.save();
      user.blogs = user.blogs.concat(savedBlog._id);

      await user.save();

      res.status(201).json(savedBlog);
    } catch (error) {
      next(error);
    }
  }
);

blogRouter.post('/:id/comments', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const blog = await Blog.findById(id);

    blog.comments = blog.comments.concat(body.comment);
    const savedBlog = await blog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    next(error);
  }
});

blogRouter.delete('/:id', middleware.tokenExtractor, async (req, res, next) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    const decodedToken = jwt.verify(req.token, process.env.SECRET);

    if (!req.token || !decodedToken.id) {
      return res.status(401).json({ error: 'token missing or invalid' });
    }

    if (blog.user.toString() === decodedToken.id) {
      await Blog.deleteOne({ _id: id });
      res.status(204).end();
    } else {
      res.status(404).end();
    }
  } catch (error) {
    next(error);
  }
});

blogRouter.put('/:id', async (req, res, next) => {
  const { id } = req.params;
  const newBlog = { ...req.body };

  try {
    await Blog.findByIdAndUpdate(id, newBlog);
    res.status(200).end();
  } catch (error) {
    next(error);
  }
});

module.exports = blogRouter;
