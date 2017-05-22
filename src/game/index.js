import reducer from './reducers/index';
import {
  Actions
} from './actions';
import {
  joinGameController
} from './controller/join-game-controller';
import {
  createStore
} from 'redux';

export function game (io, gameId, hostName, userCount) {
  const store = createStore(reducer);
  store.subscribe(function onStateChange () {
    const state = store.getState();
    joinGameController(state, store);
  });
  store.dispatch({
    type: Actions.CreateGame,
    playerName: hostName,
    userCount
  });
  io.on('connection', function onSocketConnected (socket) {
    socket.on('joinGame', function (playerName, joinGameId) {
      if (joinGameId === gameId) {
        store.dispatch({
          type: Actions.AddPlayer,
          playerName
        });
        socket.join(`room${ gameId }`)
      }
    });
  });
}
