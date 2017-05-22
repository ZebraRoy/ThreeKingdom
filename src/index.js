// Setup basic express server
import {
  game
} from './game/index';
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;

server.listen(port, function () {
  console.log('Server listening at port %d', port); // eslint-disable-line
});

// Routing
app.use(express.static(__dirname + '\\..\\public'));

game(io);
