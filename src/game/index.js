import reducer from './reducers/index';
import {
  Actions
} from './actions';
import {
  joinGameController
} from './controller/join-game-controller';

export function game (io) {
  const store = Redux.createStore(reducer);
  store.subscribe(function onStateChange () {
    const state = store.getState();
    joinGameController(state, store);
  });
  io.on('connection', function onSocketConnected (socket) {
    socket.on('join', function (playerName) {
      store.dispatch({
        type: Actions.AddPlayer,
        playerName
      });
    });
  });
}
