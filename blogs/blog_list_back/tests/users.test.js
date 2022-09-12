/* eslint-disable no-undef */
const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const helper = require('./helper');
const User = require('../models/user');

const api = supertest(app);

describe('User API route', () => {
  beforeEach(async () => {
    await User.deleteMany({});

    const user = new User(helper.users[0]);

    await user.save();
  });

  test('creation of a new user success', async () => {
    const usersAtStart = await api.get('/api/users');

    await api
      .post('/api/users')
      .send(helper.users[1])
      .expect(200)
      .expect('Content-Type', /application\/json/);

    const usersAtEnd = await api.get('/api/users');
    expect(usersAtEnd.body).toHaveLength(usersAtStart.body.length + 1);
  });

  test('throws error when new user validation fails', async () => {
    const usersAtStart = await api.get('/api/users');

    await api.post('/api/users').send(helper.invalidUser).expect(400);
    const usersAtEnd = await api.get('/api/users');

    expect(usersAtEnd.body).toHaveLength(usersAtStart.body.length);
  });

  afterAll(() => {
    mongoose.connection.close();
  });
});
