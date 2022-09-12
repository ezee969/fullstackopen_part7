/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const logger = require('./logger');

const tokenExtractor = (request, response, next) => {
  const authorization = request.get('authorization');
  request.token = authorization.substring(7);

  next();
};

const userExtractor = async (request, response, next) => {
  const decodedToken = jwt.verify(request.token, process.env.SECRET);
  if (!request.token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' });
  }
  const user = await User.findById(decodedToken.id);

  request.user = user;

  next();
};

const errorHandler = (error, req, res, next) => {
  console.log(error);
  if (error.name === 'CastError') {
    return res.status(400).send({
      error: 'malformatted id',
    });
  }

  if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.message });
  }

  if (error.name === 'MongoServerError' && error.code === 11000) {
    return res
      .status(500)
      .send({ success: false, message: 'Username already exists!' });
  }

  if (error.name === 'JsonWebTokenError') {
    return res.status(401).json({
      error: 'invalid token',
    });
  }
  logger.error(error.message);

  next(error);
};

module.exports = { errorHandler, tokenExtractor, userExtractor };
