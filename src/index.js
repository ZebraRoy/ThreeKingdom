// Setup basic express server
import {
  Game
} from './game/index';
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;
let gameId = 0;
const gameMap = {};

server.listen(port, function () {
  console.log('Server listening at port %d', port); // eslint-disable-line
});

// Routing
app.use(express.static(__dirname + '\\..\\public'));

io.on('connection', function onSocketConnected (socket) {

  socket.on('syncGameList', function onSyncGameList () {
    socket.emit('gameList', Object.keys(gameMap));
  });

  socket.on('createGame', function (playerName) {
    const newGameId = gameId;
    const game = new Game(playerName, socket, newGameId);
    gameMap[newGameId] = game;
    gameId++;
    io.emit('gameList', Object.keys(gameMap));
  });

  socket.on('joinGame', function onJoinGame (playerName, gameId) {
    const game = gameMap[gameId];
    if (game) {
      game.joinGame(playerName, socket);
    }
  });

  socket.on('startGame', function onStartGame (gameId) {
    const game = gameMap[gameId];
    if (game) {
      game.startGame(socket);
    }
  });

  socket.on('chooseGenerals', function onChooseGenerals (gameId, generalNames) {
    const game = gameMap[gameId];
    if (game) {
      game.chooseGenerals(generalNames, socket);
    }
  });

  socket.on('disconnect', function onDisconnect () {
    const keys = Object.keys(gameMap);
    for (let i = 0, len = keys.length; i < len; i++) {
      const game = gameMap[keys[i]];
      if (game) {
        game.socketDisconnect(socket);
      }
    }
  });
});
