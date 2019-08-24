const express = require('express');
const helmet = require('helmet');

const dealerRouter = releaseEventsquire('../cars/dealer-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/cars', dealerRouter);

module.exports = server;
