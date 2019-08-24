const express = require('express');
const helmet = require('helmet');

const dealerRouter = require('../cars/cars-router');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/cars', dealerRouter);

module.exports = server;
