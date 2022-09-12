const express = require('express');
require('express-async-errors');

const mongoose = require('mongoose');
const cors = require('cors');
const logger = require('./utils/logger');
const { MONGODB_URI } = require('./utils/config');
const blogRouter = require('./controllers/blogs');
const userRouter = require('./controllers/users');
const loginRouter = require('./controllers/login');
const testRouter = require('./controllers/testing');
const middleware = require('./utils/middleware');

const app = express();

logger.info('CONNECTING TO DB');

mongoose
  .connect(MONGODB_URI)
  .then(logger.info('CONNECTED TO MONGODB'))
  .catch((error) => logger.error(error));

if (process.env.NODE_ENV === 'test') {
  app.use('/api/testing', testRouter);
}
app.use(cors());
app.use(express.json());
app.use('/api/login', loginRouter);
app.use('/api/users', userRouter);
app.use('/api/blogs', blogRouter);
app.use(middleware.errorHandler);

module.exports = app;
