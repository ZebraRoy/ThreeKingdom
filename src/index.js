// Setup basic express server
import {
  game
} from './game/index';
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;
let gameId = 0;

server.listen(port, function () {
  console.log('Server listening at port %d', port); // eslint-disable-line
});

// Routing
app.use(express.static(__dirname + '\\..\\public'));

io.on('connection', function onSocketConnected (socket) {
  socket.on('createGame', function (playerName, userCount) {
    const newGameId = gameId;
    game(io, newGameId, playerName, userCount);
    socket.join(`room${ newGameId }`);
    gameId++;
  });
});
