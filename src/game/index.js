import reducer from './reducers/index';
import {
  Actions
} from './actions';
import {
  createStore
} from 'redux';

export class Game {

  constructor (hostName, socket) {
    const store = createStore(reducer);
    const socketMap = [];
    socketMap.push({
      name: hostName,
      socket
    });
    this.socketMap = socketMap;
    this.store = store;
    store.subscribe(() => {
      const state = store.getState();
      const currentSocketMap = this.socketMap;
      for (let i = 0, len = currentSocketMap.length; i < len; i++) {
        const playerSocket = currentSocketMap[i].socket;
        if (playerSocket) {
          playerSocket.emit('gameUpdate', state);
        }
      }
    });
    store.dispatch({
      type: Actions.CreateGame,
      playerName: hostName
    });
  }

  joinGame (playerName, socket) {
    const socketMap = this.socketMap;
    const me = socketMap.find((user) => (user.name === playerName));
    const store = this.store;
    if (me) {
      me.socket = socket;
    } else {
      socketMap.push({
        name: playerName,
        socket
      });
    }
    store.dispatch({
      type: Actions.JoinGame,
      playerName
    });
  }

  socketDisconnect (socket) {
    const socketMap = this.socketMap;
    const me = socketMap.find((user) => (user.socket === socket));
    if (me) {
      me.socket = null;
    }
  }

}
