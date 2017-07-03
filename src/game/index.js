import reducer from './reducers/index';
import {
  Actions
} from './actions';
import {
  createStore
} from 'redux';
import {
  GameState
} from './constants';
import {
  shuffle
} from './helper';

export class Game {

  constructor (hostName, socket, gameId) {
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
        //TODO: filter player information
        if (playerSocket) {
          playerSocket.emit('gameUpdate', state);
        }
      }
    });
    store.dispatch({
      type: Actions.CreateGame,
      playerName: hostName,
      gameId: gameId
    });
  }

  joinGame (playerName, socket) {
    const socketMap = this.socketMap;
    const me = socketMap.find((user) => (user.name === playerName));
    const store = this.store;
    const state = store.getState();
    let isJoinSuccess = false;
    if (me) {
      me.socket = socket;
      isJoinSuccess = true;
    } else if (state.users.length < state.gameSetting.maxPlayer) {
      socketMap.push({
        name: playerName,
        socket
      });
      isJoinSuccess = true;
    }
    if (isJoinSuccess) {
      store.dispatch({
        type: Actions.JoinGame,
        playerName
      });
    }
  }

  startGame (socket) {
    const socketMap = this.socketMap;
    const me = socketMap.find((user) => (user.socket === socket));
    const store = this.store;
    if (me) {
      const userName = me.name;
      const state = store.getState();
      const users = state.users;
      const host = users.find((user) => (user.isHost));
      // const readyUser = users.filter((user) => (user.isReady));
      // if (state.gameState === GameState.WaitingPlayer && host.name === userName && readyUser.length > 1 && readyUser.length === users.length) {
      if (state.gameState === GameState.WaitingPlayer && host.name === userName) {
        const playerOrder = shuffle(users.map((user) => (user.name)));

        store.dispatch({
          type: Actions.StartGame,
          playerOrder
        });
      }
    }
  }
  chooseGenerals (generalNames, socket) {
    const socketMap = this.socketMap;
    const me = socketMap.find((user) => (user.socket === socket));
    const store = this.store;
    if (me) {
      const userName = me.name;
      let state = store.getState();
      const players = state.players;
      const playerIndex = players.findIndex((player) => (player.name === userName));
      const generals = state.generalDeck.playerPool[playerIndex].filter((general) => generalNames.indexOf(general) !== -1);
      let readyPlayer = [];
      store.dispatch({
        type: Actions.ChooseGenerals,
        playerIndex,
        generals
      });
      state = store.getState()
      readyPlayer = state.generalDeck.playerPool.filter((pool) => pool.length <= state.gameSetting.maxGeneral);
      socket.emit('generalUpdate', true);
      if (state.gameState === GameState.Prepare &&  readyPlayer.length === players.length) {
        store.dispatch({
          type: Actions.InitPlayer,
          playerPool: state.generalDeck.playerPool
        });
      }
    }
    else {
      socket.emit('generalUpdate', false);
    }
  }
  socketDisconnect (socket) {
    const socketMap = this.socketMap;
    const me = socketMap.find((user) => (user.socket === socket));
    if (me) {
      me.socket = null;
    }
  }

}
