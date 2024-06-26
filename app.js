//const path = require('path');

const http = require('http');
const express = require('express');

const app = express();

const taskRouter = require('./routes/taskRouter.js');

app.use(taskRouter);

const server = http.createServer(app);

server.listen(3000);