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
const gameMap = new Map();

server.listen(port, function () {
  console.log('Server listening at port %d', port); // eslint-disable-line
});

// Routing
app.use(express.static(__dirname + '\\..\\public'));

io.on('connection', function onSocketConnected (socket) {
  socket.on('createGame', function (playerName, userCount) {
    const newGameId = gameId;
    const game = new Game(playerName, userCount);
    gameMap.set(newGameId, game);
    gameId++;
  });

  socket.on('joinGame', function onJoinGame (gameId, playerName) {
    const game = gameMap.get(gameId);
    if (game) {
      game.joinGame(playerName);
    }
  });

  socket.on('clientAction', function onGameAction (gameId, playerName, actionName, param) {
    const game = gameMap.get(gameId);
    if (game) {
      game.clientAction(playerName, actionName, param);
    }
  });
});
