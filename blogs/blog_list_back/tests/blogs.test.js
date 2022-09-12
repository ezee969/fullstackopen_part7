/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
const mongoose = require('mongoose');
const supertest = require('supertest');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = require('../app');
const Blog = require('../models/blog');
const User = require('../models/user');
const helper = require('./helper');

const api = supertest(app);

beforeEach(async () => {
  await Blog.deleteMany({});
  await User.deleteMany({});

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash('password', saltRounds);

  const newUser = new User({
    username: 'user1',
    name: 'ezequiel',
    passwordHash,
  });

  await newUser.save();

  const newBlogs = helper.someBlogs.map((blog) => new Blog(blog));
  const savedBlogs = newBlogs.map((blog) => blog.save());

  await Promise.all(savedBlogs);
});

describe('Blog API route', () => {
  test('returns all its data in json format', async () => {
    const blogs = await api.get('/api/blogs');

    expect(blogs.type).toBe('application/json');
  });

  test('returns all the blogs', async () => {
    const blogs = await api.get('/api/blogs');

    expect(blogs.body).toHaveLength(helper.someBlogs.length);
  });

  test('returns one blog', async () => {
    const blogs = await api.get('/api/blogs');
    const blog = await api.get(`/api/blogs/${blogs.body[0].id}`);

    expect(blog.body).toEqual(blogs.body[0]);
  });

  test('edits one blog', async () => {
    const blogs = await api.get('/api/blogs');

    await api
      .put(`/api/blogs/${blogs.body[0].id}`)
      .send({ ...helper.aBlog })
      .expect(200);
  });

  test('saves blogs with an "id" prop', async () => {
    const blogs = await api.get('/api/blogs');

    blogs.body.forEach((blog) => expect(blog.id).toBeDefined());
  });

  test('saves a new blog', async () => {
    const user = await User.findOne({ username: 'user1' });
    const userForToken = {
      username: user.username,
      id: user._id,
    };

    const token = jwt.sign(userForToken, process.env.SECRET);

    await api
      .post('/api/blogs')
      .set('Authorization', `bearer ${token}`)
      .send(helper.aBlog)
      .expect(201)
      .expect('Content-Type', /application\/json/);

    const getBlogs = await api.get('/api/blogs');
    const blogsTitles = getBlogs.body.map((blog) => blog.title);

    expect(getBlogs.body).toHaveLength(helper.someBlogs.length + 1);
    expect(blogsTitles).toContain(helper.aBlog.title);
  });

  test('adding a blog fails with 401 when token invalid', async () => {
    await api
      .post('/api/blogs')
      .set('Authorization', '')
      .send(helper.aBlog)
      .expect(401);
  });

  test('deletes an existing blog', async () => {
    const blogs = await api.get('/api/blogs');
    const firstBlogID = blogs.body[0].id;

    await api.delete(`/api/blogs/${firstBlogID}`).expect(204);
  });

  test('asigns 0 as a default "likes" value', async () => {
    delete helper.aBlog.likes;
    await api.post('/api/blogs').send(helper.aBlog);

    const getBlogs = await api.get('/api/blogs');
    const result = getBlogs.body.map((e) => e.likes);

    expect(result).toHaveLength(3);
    expect(result).toContain(0);
  });

  test('sends response status 400 when blog validation fails', async () => {
    await api.post('/api/blogs').send(helper.anIncompleteBlog).expect(400);
  });
});

afterAll(() => {
  mongoose.connection.close();
});
