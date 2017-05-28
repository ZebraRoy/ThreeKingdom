import {
  GameScene
} from '../constants';
import {
  Actions
} from '../actions';

export function SocketController (store) {

  const socket = window.io();
  let unsubscribe;

  socket.on('connect', function onConnect () {
    setTimeout(() => {
      socket.emit('syncGameList');
    }, 1000);
  });

  socket.on('gameList', function onGameListUpdate (gameList) {
    store.dispatch({
      type: Actions.UpdateGameList,
      gameList
    });
  });

  socket.on('gameUpdate', function onGameUpdate (gameInstance) {
    const state = store.getState();
    store.dispatch({
      type: Actions.UpdateGame,
      name: state.name,
      gameInstance
    });
  });

  function enterRoomMessage (state) {
    if (!state.isEnteredRoom && state.gameScene !== GameScene.Naming && state.gameScene !== GameScene.ChoosingAction) {
      if (state.isHost) {
        socket.emit('createGame', state.name);
      } else {
        socket.emit('joinGame', state.name, state.gameId);
      }
      store.dispatch({
        type: Actions.SendedConfirmName
      });
    }
  }

  function fireMessage () {
    const state = store.getState();
    enterRoomMessage(state);
  }

  return {
    start: function start () {
      if (unsubscribe) {
        unsubscribe();
      }
      unsubscribe = store.subscribe(fireMessage);
    },
    stop: function stop () {
      if (unsubscribe) {
        unsubscribe();
        unsubscribe = null;
      }
    }
  };
}
