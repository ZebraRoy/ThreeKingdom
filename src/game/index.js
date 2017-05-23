import reducer from './reducers/index';
import {
  Actions
} from './actions';
import {
  createStore
} from 'redux';

export class Game {

  constructor (hostName, userCount) {
    const store = createStore(reducer);
    store.dispatch({
      type: Actions.CreateGame,
      playerName: hostName,
      userCount
    });
    this.store = store;
  }

  joinRoom (playerName) {
    this.store.dispatch({
      type: Actions.AddPlayer,
      playerName
    });
  }

  clientAction (playerName, actionName, param) {
    console.log(playerName, actionName, param); // eslint-disable-line
  }
}
